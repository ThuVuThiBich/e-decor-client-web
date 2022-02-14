import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import promotionApi from "api/promotionApi";
import { toast } from "react-toastify";

export const getPromotions = createAsyncThunk(
  "promotion/getAll",
  async (data, thunkAPI) => {
    if (data) {
      const response = await promotionApi.getAll(data);
      return response.result;
    }
  }
);

export const addPromotion = createAsyncThunk(
  "promotion/create",
  async (data, thunkAPI) => {
    const response = await promotionApi.create(data.id, data.body);
    if (response.result) {
      toast.success("SUCCESS");
      return response.result;
    } else toast.error("ERROR");
  }
);

export const deletePromotion = createAsyncThunk(
  "promotion/delete",
  async (data, thunkAPI) => {
    const response = await promotionApi.delete(data.id, data.body);
    if (response.result.success) {
      toast.success("SUCCESS");
      return data.body;
    } else toast.error("ERROR");
  }
);

const promotionSlice = createSlice({
  name: "promotion",
  initialState: {
    promotions: [],
    totalPromotions: 0,
    currentPage: 1,
    isLoading: false,
    isUpdating: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getPromotions.pending]: (state) => {
      state.isLoading = true;
    },
    [getPromotions.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getPromotions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.promotions = action.payload;
    },
    [addPromotion.pending]: (state) => {
      state.isLoading = true;
      state.isUpdating = true;
    },
    [addPromotion.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.isUpdating = false;
    },
    [addPromotion.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.isUpdating = false;
    },

    [deletePromotion.pending]: (state) => {
      state.isLoading = true;
    },
    [deletePromotion.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [deletePromotion.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      console.log(action.payload);
      state.promotions.splice(
        state.promotions.findIndex((item) => +item.id === +action.payload),
        1
      );
    },
  },
});

// export const {} = promotionSlice.actions;
export default promotionSlice.reducer;
