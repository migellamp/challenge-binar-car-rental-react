import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SearchedCarProvider from "./components/context/searchedCar";
import SelectPaymentProvider from "./components/context/paymentMethod";
import AuthProvider from "./components/context/auth";
import AuthProviderRegister from "./components/context/authRegister";
import { CookiesProvider } from "react-cookie";
import MessageProvider from "./components/context/mesage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AuthProviderRegister>
        <SearchedCarProvider>
          <SelectPaymentProvider>
            <CookiesProvider>
              <MessageProvider>
                <App />
              </MessageProvider>
            </CookiesProvider>
          </SelectPaymentProvider>
        </SearchedCarProvider>
      </AuthProviderRegister>
    </AuthProvider>
  </React.StrictMode>
);
