import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderApi from "api/orderApi";
import { getPriceTotal } from "utils/helpers";
import { toast } from "react-toastify";

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async (params, thunkAPI) => {
    const response = await orderApi.getAll(params);
    return response.result;
  }
);

export const createOrder = createAsyncThunk(
  "order/create",
  async (data, thunkAPI) => {
    const response = await orderApi.create(data);
    if (response.result) {
      toast.success("SUCCESS");
      return response.result;
    } else toast.error("ERROR");
  }
);

export const getOrder = createAsyncThunk(
  "order/getOrder",
  async (id, thunkAPI) => {
    const response = await orderApi.get(id);
    return response.result;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    addressId: null,
    shopId: null,
    promotionId: null,
    shippingId: null,
    amount: 0,
    isPurchased: false,
    orderItems: [],
    isLoading: false,
    error: false,
    //
    shopName: "",
    voucherPrice: 0,
    address: {},
    //
    orders: [],
    totalOrders: 0,
    currentPage: 1,
    order: {},
  },
  reducers: {
    setOrder: (state, action) => {
      state.address = action.payload;
      state.addressId = action.payload?.id;
    },
    storeShopInfo: (state, action) => {
      state.shopId = action.payload.id;
      state.shopName = action.payload.name;
    },
    storeAddressId: (state, action) => {
      state.addressId = action.payload;
    },
    storePromotionId: (state, action) => {
      state.promotionId = action.payload;
    },
    storeVoucherPrice: (state, action) => {
      state.voucherPrice = action.payload;
    },
    storeAmount: (state, action) => {
      state.amount = action.payload;
    },
    storeItem: (state, action) => {
      state.orderItems.push(action.payload);
    },
    storeAddress: (state, action) => {
      state.address = action.payload;
    },
    storeOrderItems: (state, action) => {
      state.orderItems = action.payload;
      state.amount = getPriceTotal(action.payload);
    },
  },
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.orders;
      state.totalOrders = action.payload.totalOrders;
      state.currentPage = action.payload.currentPage;
    },
    //
    [getOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.order = action.payload;
    },
  },
});

export const {
  storeShopInfo,
  storeItem,
  storeOrderItems,
  storeAddressId,
  storeAmount,
  storeVoucherPrice,
  setOrder,
  storePromotionId,
} = orderSlice.actions;
export default orderSlice.reducer;
