

import { StrictMode } from 'react'; 
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import App from './App'; 
import ReactDOM from 'react-dom/client';
import "./index.css"
import AppContextProvider from './context/AppContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  <AppContextProvider>
    <App/>
  </AppContextProvider>
    
  </BrowserRouter>
);