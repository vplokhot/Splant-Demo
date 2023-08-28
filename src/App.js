import "./App.css";
import React from "react";
import { Splant } from "./splant/Splant";
import Web3StorageClient from "./web3.storage/client";

function App() {
  // const client = new Web3StorageClient(process.env.REACT_APP_ACCESS_TOKEN);

  // const item = await client.retrieve(
  //   "bafybeibcri7oja7pffv4orhqr6a6wqac2ekg2muip4cvyws7jp2ir7vrfu"
  // );

  // console.log(item, " teim");

  return (
    <div className="App">
      <h1 className="text-3xl font-bold">Splant Demo</h1>
      <Splant />
    </div>
  );
}

export default App;
