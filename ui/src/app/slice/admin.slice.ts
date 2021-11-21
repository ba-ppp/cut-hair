import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {
    isAdmin: false as boolean,
  },
  reducers: {
    toggleAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { toggleAdmin } = AdminSlice.actions;

export const AdminReducers = AdminSlice.reducer;
