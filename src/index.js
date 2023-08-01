import { createContext } from "react";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./Redux/store.js";
import "./Styles/App.scss";

export const serverBackend = "https://socketstorebackend.onrender.com/API/V1";

export const Context = createContext({ Authenticated: false });

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [presentUser, setPresentUser] = useState({});
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        presentUser,
        setPresentUser,
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Context.Provider>
  );
};

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
