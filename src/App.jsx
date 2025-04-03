import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.themeSwitcherReducer.theme);

  useEffect(() => {
    document.body.classList.remove("dark", "light"); // Remove both classes first
    document.body.classList.add(theme); // Add the current theme class
  }, [theme]); // Update the body class when the theme changes

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-warmBeige dark:bg-charcoalBlack">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <ThemeBtn />
          </div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
