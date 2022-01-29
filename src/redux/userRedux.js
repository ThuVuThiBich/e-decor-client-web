import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "api/authApi";
import { setAuth, setToken } from "utils/helpers";
import { reset } from "./cartRedux";

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
export const updateInfo = createAsyncThunk(
  "user/updateInfo",
  async (data, thunkAPI) => {
    const response = await authApi.updateInfo(data);
    if (response.result.success) return data;
  }
);

export const logOut = createAsyncThunk(
  "user/logOut",
  async (data, thunkAPI) => {
    thunkAPI.dispatch(reset());
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isLoading: false,
    error: "",
  },
  reducers: {},
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
    [getInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [getInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getInfo.fulfilled]: (state, action) => {
      setAuth(action.payload);
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    [updateInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [updateInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [updateInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currentUser = {
        ...state.currentUser,
        name: action.payload.name,
        email: action.payload.email,
        avatar: action.payload.avatar,
        phone: action.payload.phone,
        gender: action.payload.gender,
      };
    },

    [logOut.pending]: (state) => {
      state.isLoading = true;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [logOut.fulfilled]: (state, action) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = false;
    },
  },
});

// export const {  } = userSlice.actions;
export default userSlice.reducer;
