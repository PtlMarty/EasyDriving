import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
