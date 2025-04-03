import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSwitcher/themeSwitcherSlice"; // Import the action creator

export default function ThemeBtn() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeSwitcherReducer.theme); //get the current theme from the store

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"} // Check if the current theme is dark
        onChange={() => dispatch(toggleTheme())} // Dispatch the action to toggle the theme
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-warmBeige border border-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-charcoalBlack rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-charcoalBlack dark:peer-checked:bg-charcoalBlack transition-colors duration-300"></div>
      <span className="ml-3 text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}
