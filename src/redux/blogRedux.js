import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogApi from "api/blogApi";
import { toast } from "react-toastify";

export const getPosts = createAsyncThunk(
  "blog/getPosts",
  async (data, thunkAPI) => {
    const response = await blogApi.getPosts(data);
    return response.result;
  }
);
export const getMyPosts = createAsyncThunk(
  "blog/getMyPosts",
  async (data, thunkAPI) => {
    const response = await blogApi.getMyPosts(data.id, data.params);
    return response.result;
  }
);

export const createPost = createAsyncThunk(
  "blog/create",
  async (data, thunkAPI) => {
    const response = await blogApi.create(data);
    if (response.result) {
      toast.success("SUCCESS");
      return response.result;
    } else toast.error("ERROR");
  }
);

export const updatePost = createAsyncThunk(
  "blog/update",
  async (data, thunkAPI) => {
    const response = await blogApi.update(data.id, data.body);
    if (response.result.success) {
      toast.success("SUCCESS");
      return data.id;
    } else toast.error("ERROR");
  }
);
export const deletePost = createAsyncThunk(
  "blog/delete",
  async (data, thunkAPI) => {
    const response = await blogApi.delete(data);
    if (response.result.success) {
      toast.success("SUCCESS");
      return data;
    } else toast.error("ERROR");
  }
);

export const getPost = createAsyncThunk(
  "blog/getPost",
  async (id, thunkAPI) => {
    const response = await blogApi.get(id);
    return response.result;
  }
);

const blogSlide = createSlice({
  name: "blog",
  initialState: {
    post: null,
    posts: [],
    totalPosts: 0,
    currentPage: 1,
    isLoading: false,
    isUpdating: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.posts;
      state.totalPosts = action.payload.totalPosts;
      state.currentPage = action.payload.currentPage;
    },

    [getMyPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getMyPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.posts;
      state.totalPosts = action.payload.totalPosts;
      state.currentPage = action.payload.currentPage;
    },
    [createPost.pending]: (state) => {
      state.isLoading = true;
    },
    [createPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [createPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      console.log(action);
    },

    [getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      console.log(action);
    },

    [updatePost.pending]: (state) => {
      state.isLoading = true;
      state.isUpdating = true;
    },
    [updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.isUpdating = false;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isUpdating = false;
    },

    [deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);

      // state.posts.splice(
      //   state.posts.findIndex((item) => +item.id === +action.payload),
      //   1
      // );
    },
  },
});

// export const {} = blogSlide.actions;
export default blogSlide.reducer;
