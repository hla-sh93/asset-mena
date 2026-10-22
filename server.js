const { createServer } = require('http')
const next = require('next')

const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res)
  })

  // Listen on a dynamically assigned port
  server.listen(0, () => {
    const port = server.address().port
    console.log(`Server is running at http://localhost:${port}`)
  })
})
