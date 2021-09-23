import React from "react";
import "./App.css";
import { AppProvider } from "./store";

import DataTransform from "./components/DataTransform";

function App() {
  const targetColumns: Array<TargetDataSet> = [];
  return (
    <div className="App">
      <AppProvider>
        <DataTransform targetDataSet={targetColumns} />
      </AppProvider>
    </div>
  );
}

export default App;
