import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import authApi from "api/authApi";
import { setAuth, setToken } from "utils/helpers";

// async action
// await async action tren component
// unwrapResult => get payload and catch error
export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  // thunkAPI.dispatch(...)
  console.log("data to login", data);
  const response = await authApi.login(data);
  console.log("response - await authApi.login(data)", response);
  if (response.success) {
    setToken(response.token);
    const actionResult = await thunkAPI.dispatch(getInfo());
    console.log(" await thunkAPI.dispatch(getInfo())", actionResult);
    const res = unwrapResult(actionResult);
    console.log("res - unwrapResult", res);
    setAuth(res);
  }
  return response;
});

export const signUp = createAsyncThunk(
  "user/signUp",
  async (data, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const response = await authApi.signUp(data);
    return response;
  }
);

export const getInfo = createAsyncThunk(
  "user/getInfo",
  async (data, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const response = await authApi.getInfo();
    console.log("response - await authApi.getInfo()", response);
    return response;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: "",
  },
  reducers: {
    setInfo: (state, action) => {
      console.log("action - setInfo", action);
      state.currentUser = action.payload;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.currentUser = action.payload;
    },

    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
    },

    [getInfo.fulfilled]: (state, action) => {
      console.log("action - getInfo", action);

      state.isLoading = false;
      state.currentUser = action.payload.result;
    },
  },
});

export const { setInfo } = userSlice.actions;
export default userSlice.reducer;
