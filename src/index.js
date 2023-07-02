import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SearchedCarProvider from "./components/context/searchedCar";
import SelectPaymentProvider from "./components/context/paymentMethod";
import AuthProvider from "./components/context/auth";
import AuthProviderRegister from "./components/context/authRegister";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SearchedCarProvider>
        <SelectPaymentProvider>
          <App />
        </SelectPaymentProvider>
      </SearchedCarProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
