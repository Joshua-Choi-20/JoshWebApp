import { useState } from "react";
import "../src/App.css";
import MainPage from "./components/MainPage.jsx";

export default function App() {
  // State to track the background class
  const [bgClass, setBgClass] = useState("bg-young-josh-mobile");

  // Function to update the background class
  const changeBackground = (newBgClass) => {
    setBgClass(newBgClass);
  };

  return (
    <div className={`w-full h-full bg-cover transition-all duration-500 ${bgClass} md:bg-young-josh`}>
      {/* Horizontal Flex */}
      <div className="flex items-center">
        {/* Sidebar */}
        <MainPage changeBackground={changeBackground} />
        {/* Main Page */}
      </div>
    </div>
  );
}
