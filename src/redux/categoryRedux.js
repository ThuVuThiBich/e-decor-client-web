import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "api/categoryApi";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (data, thunkAPI) => {
    const response = await categoryApi.getCategories();
    return response;
  }
);

export const getShopCategories = createAsyncThunk(
  "category/getShopCategories",
  async (id, thunkAPI) => {
    const response = await categoryApi.getShopCategories(id);
    return response.result;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    shopCategories: [],
    categories: [],

    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
    },

    [getShopCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getShopCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getShopCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.shopCategories = action.payload;
    },
  },
});

// export const {  } = categorySlice.actions;
export default categorySlice.reducer;
