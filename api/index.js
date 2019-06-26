import { createServer } from "http"
const PORT = 9000

createServer((request, response) => {
  response.write('hello world')
  response.end()
}).listen(PORT)