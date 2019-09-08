import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSearch from "./components/FileSearch";
import { arrowFunctionExpression } from "@babel/types";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-3 left-panel px-0">
          <FileSearch
            title="我的云文档"
            onFileSearch={value => {
              console.log(value);
            }}
          />
        </div>
        <div className="col-9 bg-primary right-panel">right</div>
      </div>
    </div>
  );
}

export default App;
