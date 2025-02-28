import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LocomotiveScroll from 'locomotive-scroll';

import Cursor from "./components/customCursor/Cursor.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cursor />
    <App />
  </StrictMode>,
)
