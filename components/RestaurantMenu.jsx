import React from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const {resId} = useParams(); 

  return <div>{resId}</div>;
};

export default RestaurantMenu;
