import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wishlistApi from "api/wishlistApi";

export const getWishlists = createAsyncThunk(
  "wishlist/getAll",
  async (data, thunkAPI) => {
    const response = await wishlistApi.getAll(data);
    return response.result;
  }
);

export const createWishlist = createAsyncThunk(
  "wishlist/create",
  async (data, thunkAPI) => {
    const response = await wishlistApi.create(data);
    if (response.result) {
      return response.result;
    }
    return null;
  }
);

export const removeWishlist = createAsyncThunk(
  "wishlist/remove",
  async (data, thunkAPI) => {
    const response = await wishlistApi.delete(data);
    if (response.result.success) {
      return data;
    }
    return null;
  }
);

export const deleteWishlist = createAsyncThunk(
  "wishlist/delete",
  async (data, thunkAPI) => {
    const response = await wishlistApi.delete(data);
    if (response.result.success) {
      return data;
    }
    return null;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlists: [],
    totalWishlists: 0,
    currentPage: 1,
    isLoading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getWishlists.pending]: (state) => {
      state.isLoading = true;
    },
    [getWishlists.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getWishlists.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.wishlists = action.payload;
      // state.totalWishlists = action.payload.totalWishlists;
      // state.currentPage = action.payload.currentPage;
    },
    [createWishlist.pending]: (state) => {
      state.isLoading = true;
    },
    [createWishlist.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [createWishlist.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
    },

    [removeWishlist.pending]: (state) => {
      state.isLoading = true;
    },
    [removeWishlist.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [removeWishlist.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
    },

    [deleteWishlist.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteWishlist.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [deleteWishlist.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.wishlists.splice(
        state.wishlists.findIndex((item) => item.id === action.payload),
        1
      );
    },
  },
});

// export const {} = wishlistSlice.actions;
export default wishlistSlice.reducer;
