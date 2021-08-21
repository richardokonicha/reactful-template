import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";
import { slice } from "./slice";

export const store = configureStore({
  reducer: {
    collection: slice,
    [api.reducerPath]: api.reducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(api.middleware),
});
setupListeners(store.dispatch);
