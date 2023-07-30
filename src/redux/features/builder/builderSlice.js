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
      console.log(12, state.products);
      console.log(13, action.payload);

      state.products = [...state.products, action.payload];
    },
    // setLoading: (state, action: PayloadAction<boolean>) => {
    //   state.isLoading = action.payload;
    // },
  },
  extraReducers: () => {},
});

export const { setBuildProducts } = builderSlice.actions;

export default builderSlice.reducer;
