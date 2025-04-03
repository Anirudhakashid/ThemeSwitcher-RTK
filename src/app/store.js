import { configureStore } from "@reduxjs/toolkit";
import themeSwitcherReducer from "../features/themeSwitcher/themeSwitcherSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    themeSwitcherReducer, // This is the reducer for the theme switcher
  },
});
