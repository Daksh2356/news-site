import "./App.css";
import { Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ.jsx";
import Home from "./pages/Home";

function App() {
  let x = true;

  // bool x is used to separate two pages

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default App;
