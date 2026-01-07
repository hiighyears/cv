import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './components/test.jsx'
import Panel from './components/panel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test />
    <Panel />
  </StrictMode>,
)
