import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "slice",
  initialState: {
    collection: [],
  },
  reducers: {
    setCollection: (state, { collection }) => ({
      ...state,
      collection: collection,
    }),
  },
});
export const { setCollection } = slice.actions;
export default slice.reducer;
