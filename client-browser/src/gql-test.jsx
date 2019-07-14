import { Query } from "react-apollo"
import { gql } from "apollo-boost"

const Greeter = () => (
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
      return <p>data.message</p>
    }
  }
  </Query>
)