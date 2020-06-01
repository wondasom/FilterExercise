import React from "react";
import "./styles.css";

import restaurants from "./restaurants.json";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>I am practicing with small json file to try filter feature!</h2>
      {JSON.stringify(restaurants)}
    </div>
  );
}
