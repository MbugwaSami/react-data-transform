import React from "react";
import "./App.css";

import DataTransform from "./components/DataTransform";

function App() {
  const targetColumns: Array<TargetDataSet> =[

  ]
  return (
    <div className="App">
      <DataTransform  targetDataSet={targetColumns} />
    </div>
  );
}

export default App;
