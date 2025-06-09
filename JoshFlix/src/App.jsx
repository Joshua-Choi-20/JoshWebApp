import "../src/App.css";
import MainPage from "./components/MainPage.jsx";
import Carousel from "./components/Carousel.jsx";

export default function App() {
  return (
    <div className="flex flex-col px-4 bg-black h-screen w-screen ">
     <div className="h-[62.5vh] pt-4 pb-2">
        <MainPage/>
    </div>
    <div className="h-[37.5vh] pb-4 pt-2">
        <Carousel/>
    </div>
    </div>
  );
}
