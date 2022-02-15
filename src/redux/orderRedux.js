import { createSlice } from "@reduxjs/toolkit";
import { getPriceTotal } from "utils/helpers";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    addressId: null,
    shopId: null,
    promotionId: null,
    shippingId: null,
    amount: 0,
    isPurchased: true,
    orderItems: [],
    isLoading: false,
    error: false,
    //
    shopName: "",
    voucherPrice: 0,
    address: {},
  },
  reducers: {
    setOrder: (state, action) => {
      state.address = action.payload;
    },
    storeShopInfo: (state, action) => {
      state.shopId = action.payload.id;
      state.shopName = action.payload.name;
    },
    storeAddressId: (state, action) => {
      state.addressId = action.payload;
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
});

export const {
  storeShopInfo,
  storeItem,
  storeOrderItems,
  storeAddressId,
  storeAmount,
  storeVoucherPrice,
  setOrder,
} = orderSlice.actions;
export default orderSlice.reducer;
