import './index.scss'
import React from 'react'
import { render } from "react-dom"
import HomePage from './pages/home.jsx'
import WebFontLoader from 'webfontloader'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

// Load the fonts
WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
})

const client = new ApolloClient({ uri: "http://localhost:4000" })

const App = () => (
  <ApolloProvider client={client}>
    <HomePage />
  </ApolloProvider>
)

render(
  <App />,
  document.getElementById('root')
)