import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RestaurantCard = ({ restaurant }) => {
  return (
    <RestaurantWrapper key={restaurant.name}>
      <div>{restaurant.name}</div>
      <div>{restaurant.type}</div>
      <div>{restaurant.price}</div>
      <div>{restaurant.isOpen ? "Open" : "Closed"}</div>
    </RestaurantWrapper>
  );
};

RestaurantCard.PropTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.string,
    isOpen: PropTypes.bool
  }).isRequired
};
export default RestaurantCard;

const RestaurantWrapper = styled.div`
  margin-bottom: 30px;
`;
