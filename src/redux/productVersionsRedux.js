import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productVersionsSlice = createSlice({
  name: "productVersion",
  initialState: {
    productVersions: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    addProductVersion: (state, action) => {
      state.productVersions.push(action.payload);
    },
    updateProductVersion: (state, action) => {
      state.productVersions = state.productVersions.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    removeProductVersion: (state, action) => {
      state.productVersions = state.productVersions.filter(
        (item) => item.id !== action.payload
      );
    },
    resetProductVersion: (state, action) => {
      state.productVersions = [];
    },
  },
});

export const {
  addProductVersion,
  updateProductVersion,
  removeProductVersion,
  resetProductVersion,
} = productVersionsSlice.actions;
export default productVersionsSlice.reducer;
