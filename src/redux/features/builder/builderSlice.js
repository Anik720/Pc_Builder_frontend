import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import axios from "axios";
const initialState = {
  products: [],
};
const builderSlice = createSlice({
  name: "buildProducts",
  initialState,
  reducers: {
    setBuildProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
  extraReducers: () => {},
});

export const { setBuildProducts } = builderSlice.actions;

export default builderSlice.reducer;
