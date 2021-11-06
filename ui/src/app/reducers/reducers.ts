import { combineReducers } from "@reduxjs/toolkit";
import { BaberReducers } from "app/slice/babers.slice";

export const rootReducer = combineReducers({
  barbers: BaberReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
