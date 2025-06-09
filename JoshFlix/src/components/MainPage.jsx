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
        <p class="text-3x1 md:text-3xl ">{textTop}</p>
        <h1 class="text-5x1 md:text-7xl font-extrabold">{heading}</h1>
        <h2 className="text-xl md:text-2xl font-bold ">{subheading}</h2>
        <h3 className="text-sm md:text-xl text-white">
        {bio.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}</h3>
    </>)

}


export function Content({ textTop, heading, subheading, bio, display }) {
    return (
        <div className="flex flex-col items-start">
                <ContentText textTop={textTop} heading={heading} subheading={subheading} bio={bio} />
                <ResumeLinkedIn display={display} /> 
        </div>
    );
}



export default function MainPage() {
    return (
        <div className="bg-cover bg-young-josh h-full outline outline-red ">
            <div className="pt-[12.5vh] h-full w-5/12 bg-gradient-to-r from-black ">
                <Content
                className="outline outline-red"
                textTop={'A 선용 Original'}
                heading={'Josh\'s Website'}
                subheading={'#1 in Websites You Need to Visit'}
                bio={'I love nature 🎲, malatang spice 🌶️, and live music 🎶 \n Check out some of my favorite \"shows\" below!'}
                />
            </div>
        </div>
    )
}