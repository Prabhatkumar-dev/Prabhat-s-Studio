import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contextt from './utils/Contextt.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
<Contextt>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Contextt>
)
