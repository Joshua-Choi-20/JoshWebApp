import "../src/App.css";
import MainPage from "./components/MainPage.jsx";

export default function App() {
  return (
    <div className={`w-full h-full bg-cover transition-all duration-500 sm:bg-young-josh-mobile md:bg-young-josh`}>
      {/* Horizontal Flex */}
      <div className="flex items-center">
        {/* Sidebar */}
        <MainPage/>
        {/* Main Page */}
      </div>
    </div>
  );
}
