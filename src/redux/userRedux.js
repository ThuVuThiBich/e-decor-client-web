import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "api/authApi";
import { setAuth, setToken } from "utils/helpers";

// async action
// await async action tren component
// unwrapResult => get payload and catch error
export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
  // thunkAPI.dispatch(...)
  const response = await authApi.login(data);
  if (response.data.success) {
    setToken(response.data.token);
    await thunkAPI.dispatch(getInfo());
  }
});

export const signUp = createAsyncThunk(
  "user/signUp",
  async (data, thunkAPI) => {
    const response = await authApi.signUp(data);
    return response;
  }
);

export const getInfo = createAsyncThunk(
  "user/getInfo",
  async (data, thunkAPI) => {
    const response = await authApi.getInfo();
    return response.result;
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
    logOut: (state) => {
      state.currentUser = null;
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
      state.error = false;
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
      setAuth(action.payload);
      state.isLoading = false;
      state.currentUser = action.payload;
    },
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
