// const { exec, cp, echo } = require('shelljs')

// echo('deploying...')
// cp([
//   'package.json'
// ], 'dist/')

// exec('cd dist && npm i --production && ../node_modules/.bin/sls deploy')
// echo('deploying done')

/**
 * auto deploy process
 * first build once, confirm api endpoint url
 * edit dist/serverless.yml to update bot server url
 */
const {copyFileSync, readFileSync} = require('fs')
const {exec} = require('child_process')
const yaml = require('js-yaml')
const {resolve} = require('path')
const cwd = resolve(__dirname, '../dist')
const execAsync = (cmd, options = {
  cwd
}) => {
  return new Promise((resolve, reject) => {
    exec(cmd, options, (code, stdout, stderr) => {
      if (stderr) {
        return reject(stderr)
      }
      resolve(stdout)
    })
  })
}

function readYml(path) {
  // Get document, or throw exception on error
  return yaml.safeLoad(
    readFileSync(path, 'utf8')
  )
}
const {log} = console

async function run() {
  log('start deploy')
  copyFileSync(
    resolve(__dirname, '../package.json'),
    resolve(__dirname, '../dist/package.json'),
  )
  let file = resolve(__dirname, '../dist/.env.yml')
  let yml = readYml(file)
  let url = yml.RINGCENTRAL_CHATBOT_SERVER
  if (!url || !/^https:\/\/.+\.amazonaws\.com.+/.test(url)) {
    console.log('please set correct RINGCENTRAL_CHATBOT_SERVER in dist/.env.yml')
    process.exit(1)
  }
  let res = await execAsync('npm i --production')
  console.log(res).catch(log)
  let res1 = await execAsync('../node_modules/.bin/sls deploy').catch(log)
  console.log(res1)
}

run()
