import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Baber } from 'model/util.model';

const BaberSlice = createSlice({
  name: "babers",
  initialState: {
    barberItems: [] as Baber[]
  },
  reducers: {
    setBaberItems: (state, { payload }: PayloadAction<Baber[]>) => {
      state.barberItems = payload;
    }
  },
});

// export const { } = layersSlice.actions;

export const BaberReducers = BaberSlice.reducer;
