import React from "react";
import "./styles.css";
import styled from "styled-components";

import restaurants from "./restaurants.json";

import RestaurantCard from "./RestaurantCard";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>I am practicing with small json file to try filter feature!</h2>
      {restaurants.map(rest => (
        <RestaurantCard key={rest.name} restaurant={rest} />
      ))}
    </div>
  );
}
