import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import Pages from "./Pages";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <Pages /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
