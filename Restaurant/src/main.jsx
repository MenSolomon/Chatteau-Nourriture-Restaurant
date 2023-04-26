import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/home";
import Menu from "./components/menu";
import OurStory from "./components/ourStory";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

    {/* <Menu /> */}
    {/* <Home /> */}
    {/* <App /> */}
    {/* <OurStory /> */}
  </React.StrictMode>
);
