import "../src/App.css"

export default function App() {
  return (
    <>
      <div className="bg-young-josh-mobile bg-cover md:bg-young-josh h-screen w-full ">
        {/* Horizontal Flex */}
        <div className="flex items-center">
          {/* Sidebar */}
          <div class="flex flex-col justify-evenly items-center w-1/12 h-screen bg-gray-800">
            <button>
              linkedin
            </button>
            <button>
              sad
            </button>
          </div>

          {/* Main Page */}

          <div class="flex flex-col w-full h-screen justify-evenly items-start">
            <div class="flex flex-col w-10/12 h-5/6 justify-center mx-10 gap-3" >

              <p class="text-sm md:text-2xl ">A 선용 Original</p>

              <h1 class="text-4x1 md:text-6xl w-1/2 font-extrabold">
                Joshua's Website
              </h1>

              <h2 className="text-xl md:text-2xl font-bold ">
                #1 in Websites You Need to Visit!
              </h2>

              <h3 className="text-sm md:text-2x1 w-3/5 text-white">
                <p>Software Engineer - First Generation Korean - Youngest of 4</p>
                <p>Loves Chess, Calisthenics, Malatang Spice, and Live Music!</p>
                <p>Currently New York City</p>
                <p>Previously Honolulu, Hawaii - College Park, MD - Severna Park, MD</p>
              </h3>

              <div class="flex w-1/6 h-8 justify-between">
                <button class="w-min-fit w-1/2 h-full bg-yellow-400">
                  Resume
                </button>
                <button class="w-min-fit w-1/2 h-full bg-yellow-700">
                  More Info
                </button>
              </div>
            </div>

            <div class="text-sm md:text-2xl mx-10">
              Trending Now
            </div>

            <div class="grid w-10/12 mx-10 container h-1/6 gap-3 grid-cols-2 md:grid-cols-4 mb-10">
              <div class="w-full h-full item bg-store-josh"></div>
              <div class="w-full  h-full item bg-sunglass-josh"></div>
              <div class="w-full  h-full item bg-college-josh"></div>
              <div class="w-full  h-full item bg-beach-josh"></div>
              {/* <div class="item bg-birthday-josh"></div> */}
            </div>
            {/* <div class="w-full h-1/6 bg-yellow-950 text-center group" >
              <div class="flex p-5 justify-evenly items-center h-full item transform group-hover:-translate-x-1/4 group">
                <div class="bg-green-200 flex-auto h-full item transform group-hover:translate-x-1/4">1</div>
                <div class="bg-red-100 flex-auto h-full">2</div>
                <div class="bg-yellow-300 flex-auto h-full">3</div>
                <div class="bg-slate-500 flex-auto h-full">4</div>
                <div class="bg-white flex-auto h-full">5</div>
                
                <div class="bg-green-200 flex-auto h-full">6</div>
    
                <div class="bg-red-100 flex-auto h-full">7</div>
              </div>
            </div> */}

          </div>



        </div>
      </div>



    </>
  )
}
