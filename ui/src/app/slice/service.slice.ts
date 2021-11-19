import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Goods } from "model/util.model";

const ServiceSlice = createSlice({
  name: "service",
  initialState: {
    items: [] as Goods[],
    idSelectedItems: [] as string[],
  },
  reducers: {
    setSelectedServiceItems: (state, { payload }: PayloadAction<string[]>) => {
      state.idSelectedItems = payload;
    },
    setServiceItems: (state, { payload }: PayloadAction<Goods[]>) => {
      state.items = payload;
    },
  },
});

export const { setSelectedServiceItems, setServiceItems } = ServiceSlice.actions;

export const ServiceReducers = ServiceSlice.reducer;
