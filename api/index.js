import {
  createServer
} from "http"
const PORT = 9000

createServer((request, response) => {
  const headers = {
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
  }
  const allowedOrigins = [
    'http://localhost:8081',
    'http://localhost:8082'
  ]
  const origin = request.headers.origin
  if (allowedOrigins.indexOf(origin) > -1) headers['Access-Control-Allow-Origin'] = origin

  if (request.method === 'OPTIONS') {
    response.writeHead(204, headers)
    response.end()
    return
  }

  if (['GET', 'POST'].indexOf(request.method) > -1) {
    response.writeHead(200, headers)
    response.end('Hello World')
    return
  }

  response.writeHead(405, headers)
  response.end(`${req.method} is not allowed for the request.`)

}).listen(PORT)