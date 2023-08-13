import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Audio from "./AudioRecorder";
import { Recorder } from "./Recorder";
import { Splant } from "./Splant";
// require("dotenv").config();

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Splant</h1>
      <Splant />
    </div>
  );
}

export default App;
