import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./layout/Header.tsx";
import Footer from "./layout/Footer.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
