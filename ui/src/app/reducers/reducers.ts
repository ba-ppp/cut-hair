import { combineReducers } from "@reduxjs/toolkit";
import { AdminReducers } from 'app/slice/admin.slice';
import { BaberReducers } from "app/slice/babers.slice";
import { CustomerReducers } from 'app/slice/customers.slice';
import { ProductReducers } from 'app/slice/products.slice';
import { ServiceReducers } from 'app/slice/service.slice';

export const rootReducer = combineReducers({
  barbers: BaberReducers,
  customers: CustomerReducers,
  services: ServiceReducers,
  products: ProductReducers,
  admin: AdminReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
