import './index.scss'
import React from 'react'
import { render } from "react-dom"
import HomePage from './pages/home.jsx'
import WebFontLoader from 'webfontloader'

// Load the fonts
WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
})

render(
  <HomePage />,
  document.getElementById('root')
)

// TODO: For testing purposes
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