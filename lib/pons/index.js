const { createServer } = require('http')

const middleware = []
const handleRequest = async (request, response) => {
  try {
    for (const func of middleware) {
      await func(request, response)
    }
  } catch (error) {
    // TODO
  }
  response.end()
}

module.exports = {
  listen: PORT => createServer(handleRequest).listen(PORT),
  use: cb => middleware.push(cb),
  getMiddleware: () => middleware
}