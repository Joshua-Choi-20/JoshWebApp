export function Photos() {
  return (
    <div className="w-1/2 h-full outline-dashed outline-blue-900 p-4 flex flex-col items-center">
      <div className="w-full h-2/3 outline-dashed outline-yellow-600">
      video </div>
      <div className="flex w-full h-1/3 m-4 gap-4">
        <div className="w-1/3 h-full outline-dashed outline-yellow-600">
        image
        </div>
        <div className="w-1/3 h-full outline-dashed flex outline-yellow-600 gap-2">
          <div className="w-1/2 h-full outline-dashed outline-purple-700 bg-white"> lli image</div>
          <div className="w-1/2 h-full outline-dashed outline-purple-700 flex gap-2 flex-col">
            <div className="h-1/2 w-full outline-dashed outline-purple-400 bg-blue-500">tiny</div>
            <div className="h-1/2 w-full outline-dashed outline-purple-400 bg-red-400">tiny</div>
          </div>
        </div>
        <div className="w-1/3 h-full outline-dashed outline-yellow-600">image</div>
      </div>
    </div>
  );
}

export default function Modeling() {
  return (
    <div className="w-full h-3/4 flex bg-gradient-to-r from-black">
      <div className="w-1/2 h-full flex flex-col outline-dashed outline-orange-800 p-12">
        <h1 className="text-3x1 md:text-6xl font-extrabold">
          KIMCHI X SUNDAE SCHOOL
        </h1>
        <br/>
        <p className="text-5x1 md:text-2xl">
          I was one of four models in a commercial for Korean-smokewear brand
          “Sundae School”. I had the amazing opportunity to work directly with
          Korean-American drag queen Kim Chi, producer Ellie Rha and creative
          directors Corrine Ang and Hee Eun Chung
        </p>
        <br/>
        <p className="text-5xl md:text-2xl">
          I am incredibly thankful to Sundae School with connecting me with so
          many talented people
        </p>
        <br/>
        <div className="flex h-[4vh] w-1/3 items-start justify-between gap-10">
            <div className="outline-dashed outline-yellow-300 w-1/2 h-full">
            </div>
             <div className="outline-dashed outline-yellow-300 w-1/2 h-full"></div>
        </div>
      </div>
      <Photos />
    </div>
  );
}
