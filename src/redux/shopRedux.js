import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import shopApi from "api/shopApi";

export const getMyShop = createAsyncThunk(
  "shop/getMyShop",
  async (data, thunkAPI) => {
    const response = await shopApi.getMyShop();
    return response;
  }
);

export const createShop = createAsyncThunk(
  "shop/createShop",
  async (data, thunkAPI) => {
    const response = await shopApi.createShop(data);
    return data;
  }
);

export const getShops = createAsyncThunk(
  "shop/getShops",
  async (params, thunkAPI) => {
    const response = await shopApi.getShops(params);
    return response.result;
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    currentShop: null,
    shops: [],
    totalShops: 0,
    currentPage: 1,
    isLoading: false,
    error: "",
  },
  reducers: {
    setMyShop: (state, action) => {
      state.currentShop = action.payload;
    },
  },
  extraReducers: {
    [getMyShop.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyShop.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getMyShop.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [createShop.pending]: (state) => {
      state.isLoading = true;
    },
    [createShop.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [createShop.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currentShop = action.payload;
    },
    [getShops.pending]: (state) => {
      state.isLoading = true;
    },
    [getShops.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getShops.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.shops = action.payload.shops;
      state.totalShops = action.payload.totalShops;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setMyShop } = shopSlice.actions;
export default shopSlice.reducer;
