import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx"; // Adjust the path as necessary
import App from "./pages/App.tsx"; // Adjust the path as necessary
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
);
