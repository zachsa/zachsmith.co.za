import { createServer } from "http"
import server from 'pons'

server.use(async (request, response) => {
  response.write('hello world\n')
})

server.use(async (request, response) => {
  response.write('hello world\n')
})

server.listen(9000)