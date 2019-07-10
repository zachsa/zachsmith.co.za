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