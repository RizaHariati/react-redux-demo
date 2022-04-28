import React from "react";
import { Provider } from "react-redux";
import CafeContainer from "./component/CafeContainer";
import UserContainer from "./component/UserContainer";
// import ItemContainer from "./component/ItemContainer";
import store from "./redux/store";
// import CakeContainer from "./component/CakeContainer";
// import HooksCakeContainer from "./component/HooksCakeContainer";
// import IceCreamContainer from "./component/IceCreamContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="main-container">
        <CafeContainer />
        {/* <CakeContainer /> */}
        {/* <HooksCakeContainer /> */}
        {/* <IceCreamContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
};

export default App;
