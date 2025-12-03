import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/toggleMenuSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
