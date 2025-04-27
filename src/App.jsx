import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AgGrid } from "./components/AgGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="top-container">
        <div className="title">
          <h1>Proof Of Concept: Excel Paste</h1>
        </div>
        <div className="card">
        </div>
      </div>
    </>
  );
}

export default App;
