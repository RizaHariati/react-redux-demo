import React, { useState } from "react";

import { buyCake, buyIceCream } from "../redux";
import { connect } from "react-redux";

const CafeContainer = (props) => {
  const [iceCreamAmount, setIceCreamAmount] = useState(0);
  const [cakeAmount, setCakeAmount] = useState(0);
  const { buyCakes, buyIceCream, cakes, iceCream } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cakeAmount === 0 && iceCreamAmount === 0) return;
    if (cakeAmount > cakes || iceCreamAmount > iceCream) {
      alert("Sorry we're out of stock");
      setIceCreamAmount(0);
      setCakeAmount(0);
      return;
    } else {
      buyCakes(cakeAmount);
      buyIceCream(iceCreamAmount);
      alert(
        `You have purchased ${cakeAmount} cakes and ${iceCreamAmount} ice cream. Thank you!`
      );
      setIceCreamAmount(0);
      setCakeAmount(0);
      return;
    }
  };
  return (
    <div>
      <h2>Welcome to our Cafe</h2>
      <h3>Ice Cream in stock : {iceCream}</h3>
      <h3>Cake in stock : {cakes}</h3>
      <h3>---------------------------------------------------</h3>
      <div className="cake container">
        <form noValidate onSubmit={handleSubmit}>
          <div>
            <label htmlFor="icecream" style={{ marginRight: "1rem" }}>
              Number of Ice cream to buy
            </label>
            <input
              id="icecream"
              type="number"
              min="0"
              value={iceCreamAmount}
              onChange={(e) => setIceCreamAmount(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cake" style={{ marginRight: "1rem" }}>
              Number of Cake to buy
            </label>
            <input
              id="cake"
              type="number"
              min="0"
              value={cakeAmount}
              onChange={(e) => setCakeAmount(e.target.value)}
            />
          </div>

          <button type="submit"> Buy</button>
        </form>
        <h3>---------------------------------------------------</h3>
      </div>
      <div className="ice-cream container"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cakes: state.cake.cakes, iceCream: state.icecream.iceCreams };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: (amount) => dispatch(buyCake(amount)),
    buyIceCream: (amount) => dispatch(buyIceCream(amount)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CafeContainer);
