import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";

import restaurants from "./restaurants.json";

import RestaurantCard from "./RestaurantCard";

export default function App() {
  const [selectedType, setSelectedType] = useState();
  const [selectedPrice, setSelectedPrice] = useState();

  const handleTypeChange = event => {
    setSelectedType(event.target.value);
  };

  const handlePriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  const filterRestaurantsByType = rest => {
    if (selectedType !== "") {
      return rest.type === selectedType;
    }

    return rest;
  };

  const filterRestaurantsByPrice = rest => {
    if (selectedPrice !== "") {
      return rest.price === selectedPrice;
    }

    return rest;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>I am practicing with small json file to try filter feature!</h2>
      <select name="type" id="type" onChange={handleTypeChange}>
        <option value="">Show All</option>
        <option value="take-away">Take Away</option>
        <option value="eat-in">Eat In</option>
        <option value="delivery">Delivery</option>
      </select>
      <select name="price" id="price" onChange={handlePriceChange}>
        <option value="">Show All</option>
        <option value="$">Cheap</option>
        <option value="$$">Normal</option>
        <option value="$$$">Expensive</option>
      </select>

      <RestaurantWrapper>
        {restaurants
          .filter(filterRestaurantsByType)
          .filter(filterRestaurantsByPrice)
          .map(rest => (
            <RestaurantCard key={rest.name} restaurant={rest} />
          ))}
      </RestaurantWrapper>
    </div>
  );
}

const RestaurantWrapper = styled.div`
  display: flex;
`;
