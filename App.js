import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AppNavigator from "./Navigator/AppNavigator";

const initialState = {
  action: ""
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
