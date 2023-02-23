import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const persistSlice = createSlice({
  name: "persist",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = persistSlice.actions;
export default persistSlice.reducer;
