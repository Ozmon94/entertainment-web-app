import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import GlobalStyles from "styles/globalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "contex/AuthProvider";
import VideoProvider from "contex/VideoProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
