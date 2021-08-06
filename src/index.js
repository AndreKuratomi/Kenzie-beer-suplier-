import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { FormaturaProvider } from "./Providers/formatura";
import { ConfraternizacaoProvider } from "./Providers/confraternizacao";
import { CasamentoProvider } from "./Providers/casamento";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfraternizacaoProvider>
        <CasamentoProvider>
          <FormaturaProvider>
            <App />
          </FormaturaProvider>
        </CasamentoProvider>
      </ConfraternizacaoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
