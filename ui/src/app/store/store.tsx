import React from "react";
import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "app/reducers/reducers";
import { Provider } from "react-redux";

export const Store: React.FC = ({ children }) => {
  const store = createStore(rootReducer);
  return <Provider store={store}>{children}</Provider>;
};
