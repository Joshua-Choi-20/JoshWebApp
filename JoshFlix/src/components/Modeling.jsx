export function Photos() {
    return (
        <div className="w-1/2 h-full px-8 py-4 outline-dashed outline-blue-900 flex flex-col items-center">
            <div className="w-full h-1/2 outline-dashed outline-yellow-600"></div>
            <div className="flex w-full h-1/6">
                   <div className="w-1/3 h-full outline-dashed outline-yellow-600"></div>
                    <div className="w-1/3 h-full outline-dashed flex outline-yellow-600">
                        <div className="w-1/2 h-full outline-dashed outline-purple-700 bg-white"></div>
                        <div className="w-1/2 h-full outline-dashed outline-purple-700 flex flex-col">
                            <div className="h-1/2 outline-double outline-purple-400 bg-blue-500"></div>
                             <div className="h-1/2 outline-double outline-purple-400 bg-red-400"></div>
                        </div>
                    </div>
                    <div className="w-1/3 h-full outline-dashed outline-yellow-600"></div>
            </div>
        </div>
    )
}

export default function Modeling() {
    return (
        <div className="w-full h-full flex bg-gradient-to-r from-black">
            <div className="w-1/2 h-full flex flex-col outline-dashed outline-orange-800 py-4 px-8">
                <h1 className = 'text-3x1 md:text-6xl font-extrabold'>KIMCHI X SUNDAE SCHOOL</h1>
                <br/>
                <p className="text-5x1 md:text-2xl">I was one of four models in a commercial for Korean-smokewear brand “Sundae School”. I had the amazing opportunity to work directly with Korean-American drag queen Kim Chi, producer Ellie Rha and creative directors Corrine Ang and Hee Eun Chung</p>
                <br/>
                <p className="text-5xl md:text-2xl">I am incredibly thankful to Sundae School with connecting me with so many talented people</p>
            </div>
            <Photos/>
            {/* <div className="w-1/2 h-full outline-dotted outline-green-700 bg-white">
                <Photos/>
            </div> */}
            
        </div>
    )
}