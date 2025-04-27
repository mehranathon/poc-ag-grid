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
          <div className='tooltip' title="copy an entire table from a valid excel template table and paste in the first cell">?</div>
        </div>
        <div className="card">
          <AgGrid />
        </div>
      </div>
    </>
  );
}

export default App;
