import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Baber } from 'model/util.model';

const BaberSlice = createSlice({
  name: "babers",
  initialState: {
    barberItems: [] as Baber[],
    idBarberSelected: '' as string,
  },
  reducers: {
    setBaberItems: (state, { payload }: PayloadAction<Baber[]>) => {
      state.barberItems = payload;
    },
    setIdBarberSelected: (state, { payload }: PayloadAction<string>) => {
      state.idBarberSelected = payload;
    }
  },
});

export const { setBaberItems, setIdBarberSelected } = BaberSlice.actions;

export const BaberReducers = BaberSlice.reducer;
