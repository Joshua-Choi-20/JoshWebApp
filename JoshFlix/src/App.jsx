import "../src/App.css";
import MainPage from "./components/MainPage.jsx";
import Carousel from "./components/Carousel.jsx";

export default function App() {
  return (
    <div className="flex flex-col p-4 bg-black h-screen w-screen">
        {/* Sidebar */}
        <MainPage/>
        <Carousel/>
        {/* Main Page */}
    </div>
  );
}
