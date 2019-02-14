
const createApp = require('ringcentral-chatbot/dist/apps').default
const handle = require('./handler')

const app = createApp(handle)

app.get('/', (req, res) => {
  res.end('server running')
})
app.get('/favicon.ico', (req, res) => {
  res.end('')
})
app.get('/test', (req, res) => res.send('server running'))
