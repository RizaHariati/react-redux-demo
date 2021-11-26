import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div className="ice-cream">
      <h2>Ice Cream Stock : {props.iceCreams}</h2>
      <button className="ice-cream" onClick={props.buyIceCream}>
        buy ice cream
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { iceCreams: state.icecream.iceCreams };
};

const mapDispatchToProps = (dispatch) => {
  return { buyIceCream: () => dispatch(buyIceCream()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
