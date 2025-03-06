import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './To-Do-List/index.css'
import App from './To-Do-List/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
