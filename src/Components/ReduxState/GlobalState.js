import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const Global = createSlice({
  name: "Covid",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { addData } = Global.actions;
export default Global.reducer;
