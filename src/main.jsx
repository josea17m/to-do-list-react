import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-nt68iegee88iv418.us.auth0.com"
      clientId="OfgclGoxC9ZtVkIa98M6xCqDQ170bpbM"
      redirectUrl="http://localhost:5173"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
