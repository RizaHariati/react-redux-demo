import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const cakes = useSelector((state) => state.cakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cakes in stock :10</h2>
      <button>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
