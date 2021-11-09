import { combineReducers } from "@reduxjs/toolkit";
import { BaberReducers } from "app/slice/babers.slice";
import { CustomerReducers } from 'app/slice/customers.slice';

export const rootReducer = combineReducers({
  barbers: BaberReducers,
  customers: CustomerReducers
});

export type RootState = ReturnType<typeof rootReducer>;
