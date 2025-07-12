import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'leaflet/dist/leaflet.css'
//import {Router} from "wouter";
//import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/*<Router base="/mittweida-project/">*/}
          <App />
      {/*</Router>*/}
  </StrictMode>,
)
