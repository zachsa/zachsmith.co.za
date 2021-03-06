import { createServer } from "http"
const PORT = 3000

createServer((request, response) => {
  console.log('The origin is', request.headers.origin)
  const headers = {
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
  }
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001'
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