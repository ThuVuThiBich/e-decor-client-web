import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "api/cartApi";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (data, thunkAPI) => {
    const response = await cartApi.get();
    return response.result;
  }
);

export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async (data, thunkAPI) => {
    const response = await cartApi.add(data);
    if (response.result) {
      return response.result;
    }
    return null;
  }
);

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async (data, thunkAPI) => {
    const response = await cartApi.update(data);
    if (response.result.success) {
      // const actionResult = await thunkAPI.dispatch(getAll());
      // const res = unwrapResult(actionResult);
      // return res.result;
    }
    return null;
  }
);
export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (data, thunkAPI) => {
    const response = await cartApi.delete(data);
    if (response.result.success) {
      // const actionResult = await thunkAPI.dispatch(getAll());
      // const res = unwrapResult(actionResult);
      // return res.result;
    }
    return null;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    isNew: false,
    quantity: 0,
    isLoading: false,
    error: false,
  },
  reducers: {
    // addProduct: (state, action) => {
    //   console.log(action.payload);
    //   state.quantity += 1;
    //   state.products.push(action.payload);
    // },
  },
  extraReducers: {
    [addCartItem.pending]: (state) => {
      state.isLoading = true;
    },
    [addCartItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [addCartItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      console.log(action.payload);
      state.isNew = action.payload.new;
      state.quantity += 1;
    },
  },
});

// export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
