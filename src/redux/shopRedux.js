import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import shopApi from "api/shopApi";

export const getMyShop = createAsyncThunk(
  "shop/getMyShop",
  async (data, thunkAPI) => {
    const response = await shopApi.getMyShop();
    return response.result;
  }
);

export const createShop = createAsyncThunk(
  "shop/createShop",
  async (data, thunkAPI) => {
    const response = await shopApi.createShop(data);
    if (response.result) {
      const actionResult = await thunkAPI.dispatch(getMyShop());
      const res = unwrapResult(actionResult);
      return res.result;
    }
    return null;
  }
);

export const updateShop = createAsyncThunk(
  "shop/updateShop",
  async (data, thunkAPI) => {
    const response = await shopApi.updateShop(data);
    if (response.result.success) {
      const actionResult = await thunkAPI.dispatch(getMyShop());
      const res = unwrapResult(actionResult);
      return res.result;
    }
    return null;
  }
);

export const getShops = createAsyncThunk(
  "shop/getShops",
  async (params, thunkAPI) => {
    const response = await shopApi.getShops(params);
    return response.result;
  }
);

export const getShop = createAsyncThunk(
  "shop/getShop",
  async (id, thunkAPI) => {
    const response = await shopApi.getShop(id);
    return response.result;
  }
);
const shopSlice = createSlice({
  name: "shop",
  initialState: {
    currentShop: null,
    shop: null,
    shops: [],
    totalShops: 0,
    currentPage: 1,
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getMyShop.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyShop.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getMyShop.fulfilled]: (state, action) => {
      state.currentShop = action.payload;
      state.error = false;
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

    [updateShop.pending]: (state) => {
      state.isLoading = true;
    },
    [updateShop.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [updateShop.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currentShop = action.payload;
    },

    [getShop.pending]: (state) => {
      state.isLoading = true;
    },
    [getShop.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getShop.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.shop = action.payload;
    },
  },
});

// export const {} = shopSlice.actions;
export default shopSlice.reducer;