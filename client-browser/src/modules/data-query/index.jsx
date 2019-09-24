import React, { PureComponent } from 'react'

export class HttpDataQuery extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: false,
      data: null
    }
  }

  async componentDidMount() {
    try {
      const data = await new Promise((resolve, reject) => {
        fetch(this.props.url)
          .then(result => result.text())
          .then(text => resolve(text))
          .catch(err => reject(err))
      })
      this.setState({data, loading: false})
    } catch (error) {
      this.setState({error: true})
    }
  }

  render() {
    const {data, loading, error} = this.state
    return <>{this.props.children({data, loading, error})}</>
  }
}