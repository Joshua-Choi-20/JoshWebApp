
import { useState } from 'react';



function Child({ onBackgroundChange }) {
    return (
      <div class = "outline outline-2 outline-blue-500 outline-dashed">
        <h3> Child Component</h3>
        <button className = 'bg-cover bg-beach-josh' onClick={() => onBackgroundChange('/src/assets/beach_josh.PNG')}>Blue</button>
        <button className = 'bg-cover bg-birthday-josh' onClick={() => onBackgroundChange('/src/assets/birthday_josh.PNG')}>Green</button>
        <button className = 'bg-cover bg-young-josh' onClick={() => onBackgroundChange('/src/assets/young_josh.PNG')}>Red</button>
      </div>
    );
  }

  export default function Carousel() {
    const [bgImage, setbgImage] = useState('/src/assets/college_josh.PNG');
    const updateBgImage = (color) => {
        setbgImage(color);
    };
    return (
    <div className = 'h-full bg-cover' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2>Parent Component</h2>
      <Child onBackgroundChange={updateBgImage} />
    </div>
  );
}