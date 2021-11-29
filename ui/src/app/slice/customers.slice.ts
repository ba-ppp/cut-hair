import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "model/util.model";

const CustomerSlice = createSlice({
  name: "customer",
  initialState: {
    id: "",
    name: "",
    date: new Date(),
    phone: "",
  } as Customer,
  reducers: {
    setInfoCustomer: (
      state,
      { payload }: PayloadAction<{ id: string; name: string; date: Date, phone: string }>
    ) => {
      const { id, name, date, phone } = payload;
      state.id = id;
      state.name = name;
      state.date = date;
      state.phone = phone
    },
  },
});

export const { setInfoCustomer } = CustomerSlice.actions;

export const CustomerReducers = CustomerSlice.reducer;
