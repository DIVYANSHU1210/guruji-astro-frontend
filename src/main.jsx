import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import InfoContextProvider from "./infoContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <InfoContextProvider>
    <BrowserRouter>
    <ToastContainer
    position="bottom-right"
    autoClose={3000}
    />      
    <App />
    </BrowserRouter>
  </InfoContextProvider>
);
