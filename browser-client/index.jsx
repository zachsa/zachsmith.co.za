import React from "react"
import { render } from 'react-dom'

;(async () => {
  const result = await new Promise((resolve, reject) => {
      fetch('http://localhost:3000')
          .then(result => result.text())
          .then(text => resolve(text))
          .catch(err => reject(err))
  })

  console.log(result)
})()
.catch(err => console.log('error', err))

const App = () =>
  <div>
    <p>Hi, I'm Zach!</p>
    <p><a target="_blank" href="https://github.com/zachsa">Github</a></p>
    <p><a target="_blank" href="https://www.linkedin.com/in/zachsmithsouthafrica/">LinkedIn</a></p>
    <p><a target="_blank" href="https://stackoverflow.com/users/3114742">StackOverflow</a></p>
    <p><a target="_blank" href="https://open.spotify.com/album/0HCL1uiaVM9tSyJzhpZIq7">Album</a></p>    
  </div>

render(<App />, document.getElementById('root'))