import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Main1 from './Main1.jsx';


createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
    <Main1 />
  </BrowserRouter>  
)
