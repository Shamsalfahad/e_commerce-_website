import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,BrowserRouter
} from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <ProSidebarProvider>
  <App />
  </ProSidebarProvider>;
    </BrowserRouter>
  </React.StrictMode>
);


