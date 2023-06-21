import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { readFileSync } from 'fs'
import gql from 'graphql-tag'
import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }))

const startApolloServer = async (): Promise<void> => {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs })
    })
  })

  const port = 4000

  try {
    const { url } = await startStandaloneServer(server, { listen: { port } })

    console.log(`🚀 Server ready at ${url}`)
  } catch (err) {
    console.error(err)
  }
}

void startApolloServer()
