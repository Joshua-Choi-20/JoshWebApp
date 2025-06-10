import "../src/App.css";
import MainPage from "./components/MainPage.jsx";
import Modeling from "./components/Modeling.jsx";

export default function App() {
  return (
    <div> 
      <div className="h-screen w-screen bg-young-josh bg-cover">
        <div className="h-full w-full bg-gradient-to-r from-black  bg-cover ">
          <MainPage/>
        </div>
      </div>
      
      <div className="h-screen w-screen bg-young-josh bg-cover">
        <div className ="h-full w-full bg-gradient-to-r from-black">
          <Modeling/>
        </div>
       
      </div>

    </div>
  );
}
