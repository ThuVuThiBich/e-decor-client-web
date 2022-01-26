import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import shopReducer from "./shopRedux";
import productReducer from "./productRedux";
import categoryReducer from "./categoryRedux";
import addressReducer from "./addressRedux";
import wishlistReducer from "./wishlistRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  address: addressReducer,
  product: productReducer,
  category: categoryReducer,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
