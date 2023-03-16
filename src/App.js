import "./App.css";
import { Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ.jsx";
import Home from "./pages/Home";
import Page1 from "./pages/page1";

function App() {
  let x = true;

  // bool x is used to separate two pages

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/page1" element={<Page1 />} />
    </Routes>
  );
}

export default App;
