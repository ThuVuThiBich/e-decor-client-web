import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categories: [],
    max: "",
    min: "",
    limit: 9,
    page: 1,
    ratings: "",
    keyword: "",
    isLoading: false,
    error: false,
  },
  reducers: {
    storeKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    storeCategories: (state, action) => {
      state.categories = action.payload;
    },
    storeRatings: (state, action) => {
      state.ratings = action.payload;
    },
    storeMin: (state, action) => {
      state.min = action.payload;
    },
    storeMax: (state, action) => {
      state.max = action.payload;
    },
    resetFilter: (state, action) => {
      state.max = "";
      state.min = "";
      state.keyword = "";
      state.categories = [];
      state.ratings = "";
    },
  },
  extraReducers: {},
});

export const {
  storeKeyword,
  storeCategories,
  storeMin,
  storeMax,
  storeRatings,
  resetFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
