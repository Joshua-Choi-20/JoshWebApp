// import Gallery from "../components/PhotoCard.jsx"
import { useState } from 'react';



export function Gallery() {
    const [bgColor, setBgColor] = useState('/src/assets/college_josh.PNG');
    const handleColorChange = (color) => {
        setBgColor('/src/assets/store_josh.PNG');
    };

    return (
    <div className = 'bg-cover'  style={{ backgroundImage: `url(${bgColor})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2>Parent Component</h2>
      {/* <Child onChangeColor={handleColorChange} /> */}
    </div>
  );
}


// function Child({ onChangeColor }) {
//     return (
//       <div>
//         <h3>Child Component</h3>
//         <button onClick={() => onChangeColor('lightblue')}>Blue</button>
//         <button onClick={() => onChangeColor('lightgreen')}>Green</button>
//         <button onClick={() => onChangeColor('lightcoral')}>Red</button>
//       </div>
//     );
//   }



export function ResumeLinkedIn() {
    return (
        <div className="text-sm flex w-1/2 h-8 md:justify-start">
            <button className="w-1/2 h-full bg-yellow-400">
                <a href='https://www.linkedin.com/in/joshua--choi/'>Resume</a>
            </button>
            <button className="w-1/2 h-full bg-yellow-700">
                <a href='https://www.linkedin.com/in/joshua--choi/'>LinkedIn</a>
            </button>
        </div>
    );
}

export function ContentText({ textTop, heading, subheading, bio }) {
    return (<>
        <p class="text-sm md:text-2xl ">{textTop}</p>
        <h1 class="text-4x1 md:text-6xl w-1/2 font-extrabold">{heading}</h1>
        <h2 className="text-xl md:text-2xl font-bold ">{subheading}</h2>
        <h3 className="text-sm md:text-2x1 w-3/5 text-white">
        {bio.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}</h3>
    </>)

}


export function Content({ textTop, heading, subheading, bio, display }) {
    return (
        <div className="flex flex-col w-full h-screen justify-evenly items-start">
            <div className="flex flex-col w-10/12 h-5/6 justify-center mx-10 gap-3">
                <ContentText textTop={textTop} heading={heading} subheading={subheading} bio={bio} />
                <ResumeLinkedIn display={display} /> 
            </div>
            <Gallery/>
        </div>
    );
}

export function SideBar() {
    return (<div class="w-1/12 h-screen "></div>)
}





export default function MainPage() {
    return (
        <div class="flex items-center ">
            <SideBar />
            <Content
                textTop={'A 선용 Original'}
                heading={'Joshua\'s Website'}
                subheading={'#1 in Websites You Need to Visit'}
                bio={'First Generation Korean\n I love nature 🎲, malatang spice 🌶️, and live music 🎶 \nCheck out some of my favorite \"shows\" below!'}
            />
        </div>
    )
}