
const createApp = require('ringcentral-chatbot/dist/apps').default
const initDb = require('./init-db')
const handle = require('./handler')

const app = createApp(handle)
let port = process.env.RINGCENTRAL_CHATBOT_EXPRESS_PORT

app.get('/', (req, res) => {
  res.end('server running')
})
app.get('/favicon.ico', (req, res) => {
  res.end('')
})
app.get('/test', (req, res) => res.send('server running'))
app.listen(port, () => {
  console.log('bot server running on', `http://localhost:${port}`)
  initDb()
})
