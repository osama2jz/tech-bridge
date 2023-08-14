import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{
          colors: {
            purple: "#0D1B39",
            cyan: "#099DCC",
          },
          primaryColor: "purple",
          globalStyles: (theme) => ({
            '.mantine-1gp3704':{
              width:'90% !important'
            }
          }),
        }}
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
