import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderApi from "api/orderApi";
import { getPriceTotal } from "utils/helpers";
import { toast } from "react-toastify";

export const getOrders = createAsyncThunk("order/getOrders", async (params) => {
  const response = await orderApi.getAll(params);
  return response.result;
});

export const createOrder = createAsyncThunk("order/create", async (data) => {
  const response = await orderApi.create(data);
  if (response.result) {
    toast.success("SUCCESS");
    return response.result;
  } else toast.error("ERROR");
});

export const getOrder = createAsyncThunk("order/getOrder", async (id) => {
  const response = await orderApi.get(id);
  return response.result;
});

// shop
export const getShopOrders = createAsyncThunk(
  "order/getShopOrders",
  async (params) => {
    const response = await orderApi.getShopOrders(params);
    return response.result;
  }
);

// update
export const updateOrderStatus = createAsyncThunk(
  "order/updateOrderStatus",
  async (data) => {
    const response = await orderApi.updateOrderStatus(data.id, data.status);
    return response.result;
  }
);
// confirm

export const confirmOrder = createAsyncThunk(
  "order/confirmOrder",
  async (data) => {
    const response = await orderApi.confirmReceiveOrder(data);
    return response.result;
  }
);

// cancel

export const cancelOrder = createAsyncThunk(
  "order/confirmOrder",
  async (data) => {
    const response = await orderApi.cancelOrder(data);
    return response.result;
  }
);
const orderSlice = createSlice({
  name: "order",
  initialState: {
    addressId: null,
    shopId: null,
    promotionId: null,
    shippingUnitId: null,
    amount: 0,
    isPurchased: false,
    orderItems: [],
    isLoading: false,
    isUpdating: false,
    error: false,
    //
    shopName: "",
    voucherPrice: 0,
    address: {},
    shipping: {},
    //
    orders: [],
    totalOrders: 0,
    currentPage: 1,
    order: {},
    //
    orderId: null,
  },
  reducers: {
    setOrderAddress: (state, action) => {
      state.address = action.payload;
      state.addressId = action.payload?.id;
    },
    setOrderShipping: (state, action) => {
      state.shipping = action.payload;
      state.shippingUnitId = action.payload?.id;
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
    storeShippingId: (state, action) => {
      state.shippingUnitId = action.payload;
    },
    storeIsPurchased: (state, action) => {
      state.isPurchased = action.payload;
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
    storeShipping: (state, action) => {
      state.shipping = action.payload;
    },
    storeOrderItems: (state, action) => {
      state.orderItems = action.payload;
      state.amount = getPriceTotal(action.payload);
    },

    //
    resetOrder: (state, action) => {
      state.isPurchased = false;
      state.voucherPrice = 0;
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
    //
    [createOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [createOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.voucherPrice = 0;
      state.orderId = action.payload.id;
    },
    // shop
    [getShopOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getShopOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getShopOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.orders;
      state.totalOrders = action.payload.totalOrders;
      state.currentPage = action.payload.currentPage;
    },

    // update
    [updateOrderStatus.pending]: (state) => {
      state.isLoading = true;
      state.isUpdating = true;
    },
    [updateOrderStatus.rejected]: (state, action) => {
      state.isLoading = false;
      state.isUpdating = false;

      state.error = action.error;
    },
    [updateOrderStatus.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isUpdating = false;

      state.error = false;
      state.order = action.payload;
    },
    // confirm
    [confirmOrder.pending]: (state) => {
      state.isLoading = true;
      state.isUpdating = true;
    },
    [confirmOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.isUpdating = false;

      state.error = action.error;
    },
    [confirmOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isUpdating = false;

      state.error = false;
    },
    // cancel
    [cancelOrder.pending]: (state) => {
      state.isLoading = true;
      state.isUpdating = true;
    },
    [cancelOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.isUpdating = false;

      state.error = action.error;
    },
    [cancelOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isUpdating = false;

      state.error = false;
    },
  },
});

export const {
  storeShopInfo,
  storeItem,
  storeOrderItems,
  storeIsPurchased,
  storeAddressId,
  storeAmount,
  storeVoucherPrice,
  setOrderAddress,
  storePromotionId,
  storeShippingId,
  setOrderShipping,
  resetOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
