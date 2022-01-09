import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import authApi from "api/authApi";
import { setAuth, setToken } from "utils/helpers";
import { getMyShop, setMyShop } from "./shopRedux";

// async action
// await async action tren component
// unwrapResult => get payload and catch error
export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  // thunkAPI.dispatch(...)
  const response = await authApi.login(data);
  if (response.success) {
    setToken(response.token);
    const actionResult = await thunkAPI.dispatch(getInfo());
    const res = unwrapResult(actionResult);
    setAuth(res);

    const actionResult1 = await thunkAPI.dispatch(getMyShop());
    const res1 = unwrapResult(actionResult1);
    thunkAPI.dispatch(setMyShop(res1.result));
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
      state.isLoading = false;
      state.currentUser = action.payload.result;
    },
  },
});

export const { setInfo } = userSlice.actions;
export default userSlice.reducer;
