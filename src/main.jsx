import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { ShoppingProvider } from './context/ShoppingContext.jsx';
import { MenuProvider } from './context/MenuFilterContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ShoppingProvider>
        <MenuProvider>
          <Router>
            <App />
          </Router>
        </MenuProvider>
      </ShoppingProvider>
    </ThemeProvider>
  </React.StrictMode>
);
