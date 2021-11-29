import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Goods } from 'model/util.model';

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    items: [] as Goods[],
    idSelectedItems: [] as string[],
  },
  reducers: {
    setSelectedProductItems: (state, { payload }: PayloadAction<string[]>) => {
      state.idSelectedItems = payload;
    },
    setProductItems: (state, { payload }: PayloadAction<Goods[]>) => {
      state.items = payload;
    },
  },
});

export const { setSelectedProductItems, setProductItems } = ProductSlice.actions;

export const ProductReducers = ProductSlice.reducer;
