import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h3>
        {props.cake === true ? "cake : " : "ice cream : "}
        {props.data}
      </h3>
      <button onClick={props.buyItem}>buy items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemProps = ownProps.cake ? state.cake.cakes : state.icecream.iceCreams;
  return { data: itemProps, ownProps };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchItem = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchItem,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
