import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { createContext } from "react";

import "./Styles/App.scss";
export const serverBackend = "https://socketstorebackend.onrender.com/API/V1";
export const Context = createContext({ Authenticated: false });
const root = ReactDOM.createRoot(document.getElementById("root"));
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
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
