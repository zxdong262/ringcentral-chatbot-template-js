const { exec, cp, echo } = require('shelljs')

echo('deploying...')
cp([
  'package.json'
], 'dist/')

exec(`cd dist && npm i --production && ../node_modules/.bin/sls deploy`)
echo('deploying done')
