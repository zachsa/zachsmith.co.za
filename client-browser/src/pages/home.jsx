import React from 'react'
import { Grid, Cell, FontIcon, ExpansionList, ExpansionPanel } from 'react-md'
import { HttpDataQuery } from '../modules/data-query/index.jsx'

export default () => (
  <HttpDataQuery url='https://api.github.com/users/zachsa/gists'>
  {({data, error, loading}) =>
    error ? <p>ERROR</p> :
    loading ? <p>Loading...</p> :
    (
      <Grid>
        <Cell phoneSize={6} tabletSize={2} size={2}>
          <div style={{textAlign: "left"}}>
            <p>Hi, I'm Zach!</p>
            <p><a target="_blank" href="https://github.com/zachsa">Github</a></p>
            <p><a target="_blank" href="https://www.linkedin.com/in/zachsmithsouthafrica/">LinkedIn</a></p>
            <p><a target="_blank" href="https://stackoverflow.com/users/3114742">StackOverflow</a></p>
            <p><a target="_blank" href="https://open.spotify.com/album/0HCL1uiaVM9tSyJzhpZIq7">Album</a> ← Click this!!</p>
          </div>
        </Cell>
        <Cell phoneSize={6} tabletSize={6} size={10}>
          <ExpansionList>{
            JSON.parse(data).map((snippet, i) => (
              <ExpansionPanel key={i} label={Object.keys(snippet.files)[0]} footer={false}>
                <p style={{fontSize: '18px', textAlign: 'left', margin: '15px 0 30px'}}>{snippet.description}</p>
                <HttpDataQuery url={snippet.files[Object.keys(snippet.files)[0]].raw_url}>
                  {({data, loading, error}) =>
                    error ? <p>ERROR</p> :
                    loading ? <p>Loading</p> :
                    <pre>{data}</pre>
                  }
                </HttpDataQuery>
              </ExpansionPanel>
            ))
          }
          </ExpansionList>
        </Cell>
      </Grid>
    )
  }
  </HttpDataQuery>
)