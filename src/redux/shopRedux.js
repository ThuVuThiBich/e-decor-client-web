import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import shopApi from "api/shopApi";
import { setAuth, setToken } from "utils/helpers";

export const getMyShop = createAsyncThunk(
  "shop/getMyShop",
  async (data, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const response = await shopApi.getMyShop();
    console.log("shop/getMyShop", response);
    return response;
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    currentShop: null,
    isLoading: false,
    error: "",
  },
  reducers: {
    setMyShop: (state, action) => {
      console.log(action)
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
  },
});

export const { setMyShop } = shopSlice.actions;
export default shopSlice.reducer;
