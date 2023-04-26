import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reservered: {},
};

const bookingSlice = createSlice({
  name: "reserver",
  initialState,
  reducers: {
    saveReserved: (state, action) => {
      state.reservered = action.payload;
    },
  },
});

export const selectBookOrder = (state) => state.reserver.reservered;
export const { saveReserved } = bookingSlice.actions;
export default bookingSlice.reducer;
