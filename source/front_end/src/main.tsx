import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Route, Routes, RouterProvider, BrowserRouter } from "react-router-dom";
import VideoProcessing from "./pages/videoProcessing";
import Navbar from "./assets/components/navbar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} index element={<App />} />
        <Route path={"/process"} index element={<VideoProcessing />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
