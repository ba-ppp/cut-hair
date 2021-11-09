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
    setPhoneCustomer: (state, { payload }: PayloadAction<string>) => {
      state.phone = payload;
    },
    setInfoCustomer: (
      state,
      { payload }: PayloadAction<{ id: string; name: string; date: Date }>
    ) => {
      const { id, name, date } = payload;
      state.id = id;
      state.name = name;
      state.date = date;
    },
  },
});

export const { setPhoneCustomer, setInfoCustomer } = CustomerSlice.actions;

export const CustomerReducers = CustomerSlice.reducer;
