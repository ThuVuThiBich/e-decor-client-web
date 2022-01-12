import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "api/productApi";

export const getProducts = createAsyncThunk(
  "product/getAll",
  async (data, thunkAPI) => {
    const response = await productApi.getAll(data.id, data.params);
    return response.result;
  }
);

export const createProduct = createAsyncThunk(
  "product/create",
  async (data, thunkAPI) => {
    const response = await productApi.create(data);
    if (response.result) {
      console.log(response.result);
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
  "product/getProduct",
  async (id, thunkAPI) => {
    const response = await productApi.get(id);
    return response.result;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: null,
    products: [],
    product: null,
    totalproducts: 0,
    currentPage: 1,
    isLoading: false,
    error: "",
  },
  reducers: {},
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
      // state.currentProduct = action.payload;
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
      state.product = action.payload;
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
      state.currentProduct = action.payload;
    },
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
