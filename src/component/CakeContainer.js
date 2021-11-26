import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  const { cakes, buyCake } = props;

  return (
    <div>
      <h2>Cake in stock : {cakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { cakes: state.cake.cakes };
};

const mapDispatchToProps = (dispatch) => {
  return { buyCake: () => dispatch(buyCake()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
