import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "api/productApi";

export const getProducts = createAsyncThunk(
  "product/getAll",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await productApi.getAll(data.id, data.params);
    console.log(response.result);
    return response.result;
  }
);

export const createProduct = createAsyncThunk(
  "product/create",
  async (data, thunkAPI) => {
    const response = await productApi.create(data);
    if (response.result) {
      // const actionResult = await thunkAPI.dispatch(getAll());
      // const res = unwrapResult(actionResult);
      // return res.result;
    }
    return null;
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async (data, thunkAPI) => {
    const response = await productApi.update(data);
    if (response.result.success) {
      // const actionResult = await thunkAPI.dispatch(getAll());
      // const res = unwrapResult(actionResult);
      // return res.result;
    }
    return null;
  }
);
export const deleteProduct = createAsyncThunk(
  "product/update",
  async (data, thunkAPI) => {
    const response = await productApi.update(data);
    if (response.result.success) {
      // const actionResult = await thunkAPI.dispatch(getAll());
      // const res = unwrapResult(actionResult);
      // return res.result;
    }
    return null;
  }
);

export const getProduct = createAsyncThunk(
  "product/get",
  async (params, thunkAPI) => {
    const response = await productApi.get(params);
    return response.result;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: null,
    products: [],
    totalproducts: 0,
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
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
      state.totalproducts = action.payload.totalproducts;
      state.currentPage = action.payload.currentPage;
    },
    [createProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [createProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currentShop = action.payload;
    },
    [getProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [getProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.shops = action.payload.shops;
      state.totalShops = action.payload.totalShops;
      state.currentPage = action.payload.currentPage;
    },

    [updateProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currentShop = action.payload;
    },
  },
});

export const { setMyShop } = productSlice.actions;
export default productSlice.reducer;
