
import Carousel  from "./Carousel.jsx";

export function ContentText({ textTop, heading, subheading, bio }) {
    return (<>
        <p class="text-3x1 md:text-6xl ">{textTop}</p>
        <h1 class="text-5x1 md:text-9xl font-extrabold">{heading}</h1>
        <h2 className="text-xl md:text-4xl font-bold ">{subheading}</h2>
        <h3 className="text-sm md:text-4xl text-white">
        {bio.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}</h3>
    </>)

}


export function Content({ textTop, heading, subheading, bio, display }) {
    return (
        <div className="flex flex-col items-center space-y-4 text-center">
                <ContentText textTop={textTop} heading={heading} subheading={subheading} bio={bio} />
        </div>
    );
}



export default function MainPage() {
    return (
        <div className="bg-cover w-full h-full flex flex-col bg-gradient-to-r from-black 
        space-y-12">
            <div className="pt-[12.5vh] h-5/8 flex flex-col">
                <Content
                textTop={'A 선용 Original'}
                heading={'Josh\'s Website'}
                subheading={'Design Engineer'}
                bio={'I love nature 🎲, malatang spice 🌶️, and live music 🎶'}
                />
            </div>

            <div className = "h-1/8 flex justify-center">
            <Carousel/>
            </div>
            
        </div>
    )
}