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
      return response.result;
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
  "product/delete",
  async (data, thunkAPI) => {
    const response = await productApi.delete(data);
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
    product: null,
    products: [],
    productVersions: [],
    totalProducts: 0,
    currentPage: 1,
    isLoading: false,
    error: false,
  },
  reducers: {
    getProductVersions: (state, action) => {
      state.productVersions = action.payload;
    },
    addProductVersion: (state, action) => {
      state.productVersions.push(action.payload);
    },
    updateProductVersion: (state, action) => {
      state.productVersions = state.productVersions?.map((item) =>
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
      state.totalProducts = action.payload.totalProducts;
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
      state.error = false;
      state.product = action.payload;
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
      state.error = false;
      state.product = action.payload;
      state.productVersions = action.payload.productVersions;
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
      state.product = action.payload;
    },

    [deleteProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload.id),
        1
      );
    },
  },
});

export const {
  getProductVersions,
  addProductVersion,
  updateProductVersion,
  removeProductVersion,
  resetProductVersion,
} = productSlice.actions;
export default productSlice.reducer;