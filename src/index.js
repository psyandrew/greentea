import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from './App.js'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
   
root.render(
  <StrictMode>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

    <App />
  </StrictMode>
);



