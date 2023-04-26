import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/bookingSlice";

export const store = configureStore({
  reducer: {
    reserver: bookReducer,
  },
});
