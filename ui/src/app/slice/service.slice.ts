import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Service } from "model/util.model";

const ServiceSlice = createSlice({
  name: "service",
  initialState: {
    items: [] as Service[],
    idSelectedItems: [] as string[],
  },
  reducers: {
    setSelectedItems: (state, { payload }: PayloadAction<string[]>) => {
      state.idSelectedItems = payload;
    },
    setServiceItems: (state, { payload }: PayloadAction<Service[]>) => {
      state.items = payload;
    },
  },
});

export const { setSelectedItems, setServiceItems } = ServiceSlice.actions;

export const ServiceReducers = ServiceSlice.reducer;
