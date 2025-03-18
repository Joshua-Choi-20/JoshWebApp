import { useState } from 'react';

function PhotoCard({ text, image, carouselButton }) {
    return (
        <>
            <button onClick={carouselButton} className="col-span-1 item flex justify-center items-center bg-cover"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {text}   
            </button>
        </>
    )
}

export default function Gallery() {

    function expandKim({}) {
        
        
      }
    const photoData = [
        { text: "Kim's Convenience", image: '/src/assets/college_josh.PNG', fun: expandKim},
        { text: "Arcane", image: '/src/assets/store_josh.PNG', backgroundIndex: 1 },
        { text: "Physical 100", image: '/src/assets/sunglass_josh.PNG', backgroundIndex: 2 },
        { text: "Queen's Gambit", image: '/src/assets/birthday_josh.PNG', backgroundIndex: 3 },
        { text: "Korea No.1", image: '/src/assets/beach_josh.PNG', backgroundIndex: 4 },
        { text: "Music", image: '/src/assets/beach_josh.PNG', backgroundIndex: 5 }
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

