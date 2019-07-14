import { default as apollo } from 'apollo-server'
import { readFileSync } from 'fs'
import resolvers from './resolvers/index.js'

const { ApolloServer, gql } = apollo
const typeDefs = readFileSync('./schema.graphql').toString()
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})