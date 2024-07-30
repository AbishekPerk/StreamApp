import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './index.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode basename='/StreamApp/'>
    <App />
  </React.StrictMode>,
  
)
