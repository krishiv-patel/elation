import React from 'react'
import ReactDOM from 'react-dom/client'
import { init } from '@emailjs/browser'
import App from './App.jsx'
import './index.css'
import './components.css'

// Initialize EmailJS with public key
init('_EA1AvreLfzDXlE_h')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
