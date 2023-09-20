// lib
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// store
import { store } from "./redux/store.ts";

// global styles
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <Router>
         <App />
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
