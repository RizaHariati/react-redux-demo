import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./component/CakeContainer";
import HooksCakeContainer from "./component/HooksCakeContainer";
import IceCreamContainer from "./component/IceCreamContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="main-container">
        <CakeContainer />
        {/* <HooksCakeContainer /> */}
        <IceCreamContainer />
      </div>
    </Provider>
  );
};

export default App;
