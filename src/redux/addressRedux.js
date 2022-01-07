import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import addressApi from "api/addressApi";

export const getCities = createAsyncThunk("address/getCities", async () => {
  const response = await addressApi.getCities();
  console.log("address/getCities", response);
  return response.result;
});

export const getDistricts = createAsyncThunk(
  "address/getDistricts",
  async (params, thunkAPI) => {
    const response = await addressApi.getDistricts({ cityId: params });
    console.log("address/getDistricts", response);
    return response.result;
  }
);

export const getWards = createAsyncThunk(
  "address/getWards",
  async (params, thunkAPI) => {
    const response = await addressApi.getWards({ districtId: params });
    console.log("address/getWards", response);
    return response.result;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState: {
    cities: [],
    districts: [],
    wards: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    reset: (state, action) => {
      state.districts = [];
      state.wards = [];
    },
  },
  extraReducers: {
    [getCities.pending]: (state) => {
      state.isLoading = true;
    },
    [getCities.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getCities.fulfilled]: (state, action) => {
      state.cities = action.payload;
      state.isLoading = false;
    },
    [getDistricts.pending]: (state) => {
      state.isLoading = true;
    },
    [getDistricts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getDistricts.fulfilled]: (state, action) => {
      state.districts = action.payload;
      state.isLoading = false;
    },
    [getWards.pending]: (state) => {
      state.isLoading = true;
    },
    [getWards.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getWards.fulfilled]: (state, action) => {
      state.wards = action.payload;
      state.isLoading = false;
    },
  },
});

export const { reset } = addressSlice.actions;
export default addressSlice.reducer;
