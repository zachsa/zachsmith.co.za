import React from 'react'
import { Query } from "react-apollo"
import { gql } from "apollo-boost"

export default () => (
  <Query query={gql`
  {
    greeting {
      message
    }
  }
`}>
  { ({loading, error, data}) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error occurred...</p>
      return <p>{JSON.stringify(data)}</p>
    }
  }
  </Query>
)