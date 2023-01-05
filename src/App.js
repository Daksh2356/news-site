import "./App.css";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";

function App() {
  let x = false;

  // bool x is used to separate two pages 

  return (
    <div class="flex justify-center">
      {x ? <Home /> : <FAQ />}

      <div>
        <strong className="text-orange-800">Andrew Alfred</strong>
        <span>Technical advisor</span>
      </div>
    </div>
  );
}

export default App;
