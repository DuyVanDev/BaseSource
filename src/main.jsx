import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="503660596949-prhip4r55g81bcgsreuu3qub7ds4s6l8.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    {/* <NotificationContainer /> */}
  </React.StrictMode>
);
