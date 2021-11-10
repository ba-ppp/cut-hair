import { combineReducers } from "@reduxjs/toolkit";
import { BaberReducers } from "app/slice/babers.slice";
import { CustomerReducers } from 'app/slice/customers.slice';
import { ServiceReducers } from 'app/slice/service.slice';

export const rootReducer = combineReducers({
  barbers: BaberReducers,
  customers: CustomerReducers,
  services: ServiceReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
