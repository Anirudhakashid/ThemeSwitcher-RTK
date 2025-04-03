import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // Default theme is light
};

export const themeSwitcherSlice = createSlice({
  name: "themeSwitcher",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Toggle between light and dark themes
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSwitcherSlice.actions;
export default themeSwitcherSlice.reducer;
