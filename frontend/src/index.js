import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './assets/styles/global.css'

// Renderizar os componentes na DOM do navegador
// Render the components in the browser's DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);