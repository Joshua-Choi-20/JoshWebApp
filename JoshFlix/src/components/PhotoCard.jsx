import { useState } from 'react';


function PhotoCard({ text, image, carouselButton }) {
    const [background, setBackground] = useState('white')
    function changeBackground() {
        setBackground(background => 'black')
    }
    return (
        <>
            <button onClick={changeBackground} className="col-span-1 item flex justify-center items-center bg-cover"
                style={{backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {text}   
            </button>
        </>
    )
}

export default function Gallery() {

    function expandKim({}) {
    
      }
    const photoData = [
        { text: "Kim's Convenience", image: '/src/assets/college_josh.PNG', fun: expandKim}
    ];

    
    return (
        <>
            <div class="text-sm md:text-2xl mx-10">
                Trending Now
            </div>
            <div class="text-sm grid w-10/12 mx-10 container h-1/6 gap-3 grid-cols-3  md:grid-cols-6 mb-10 sm:grid-cols-6">
                {photoData.map((photo, index) => (
                    <PhotoCard key={index} text={photo.text} image={photo.image} backgroundIndex={photo.backgroundIndex} carouselButton={photo.fun} />
                ))}
            </div>
        </>
    )
}

