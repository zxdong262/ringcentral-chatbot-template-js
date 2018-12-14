const {exec, cp, echo, rm} = require('shelljs')
const {resolve} = require('path')
const fs = require('fs')
echo('building...')

cp('-rf', [
  'src/*.js'
], 'lambda/')
rm('-rf', 'lambda/app.js')

let pkg = require(
  resolve(__dirname, '../package.json')
)
delete pkg.scripts.postinstall
fs.writeFileSync(
  resolve(__dirname, '../lambda/package.json'),
  JSON.stringify(pkg, null, 2)
)
cp('-r', [
  'bin/.yarnclean'
], 'lambda/')
exec('cd lambda && rm -rf node_modules && npm i --production')
exec('cd lambda && yarn generate-lock-entry > yarn.lock && yarn autoclean --force && rm -rf package* && rm -rf .yarnclean && rm -rf yarn.lock')
exec('cd lambda && ../node_modules/.bin/serverless deploy -v')
echo('deploy done')

