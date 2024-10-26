// import lib
import { QueryClient, QueryClientProvider } from 'react-query';
import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

// import file
import './assets/index.css'
import App from './App.jsx'
import store from "./stores/store.jsx";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
