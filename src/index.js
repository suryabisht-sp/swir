import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

// SWRConfig that helps to configure SWR globally. It’s a wrapper component that allows child components to use the global configuration and therefore the fetcher function.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
