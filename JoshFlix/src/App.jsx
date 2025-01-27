import "../src/App.css"

export default function App() {
  return (
    <>
      <div className="w-full h-full bg-young-josh-mobile bg-cover md:bg-young-josh">
        {/* Horizontal Flex */}
        <div className="flex items-center">
          {/* Sidebar */}
          <div class="w-1/12 h-screen ">
         
           
          </div>

          {/* Main Page */}

          <div class="flex flex-col w-full h-screen justify-evenly items-start">
            <div class="flex flex-col w-10/12 h-5/6 justify-center mx-10 gap-3" >

              <p class="text-sm md:text-2xl ">A 선용 Original</p>

              <h1 class="text-4x1 md:text-6xl w-1/2 font-extrabold">
                Joshua's Website
              </h1>

              <h2 className="text-xl md:text-2xl font-bold ">
                #1 in Websites You Need to Visit
              </h2>

              <h3 className="text-sm md:text-2x1 w-3/5 text-white">
                <p>Software Engineer - First Generation Korean - Youngest of 4</p>
                <div></div>
                <p>I love games 🎲, calisthenics 🤸, malatang spice 🌶️, and live music 🎶</p>
                <div></div>
                <p>Check out some of my favorite "shows" below!</p>
              </h3>

              <div class="text-sm flex w-1/2 h-8 md:justify-start">
                <button class="w-min-fit w-1/2 h-full bg-yellow-400" >
                  <a href='https://www.linkedin.com/in/joshua--choi/'>Resume</a>
                </button>
                <button class="w-min-fit w-1/2 h-full bg-yellow-700">
                <a href='https://www.linkedin.com/in/joshua--choi/'>LinkedIn</a>
                </button>
              </div>
            </div>

            <div class="text-sm md:text-2xl mx-10">
              Trending Now
            </div>

            <div class="text-sm grid w-10/12 mx-10 container h-1/6 gap-3 grid-cols-3  md:grid-cols-6 mb-10 sm:grid-cols-6">
              <div class="col-span-1 item flex justify-center items-center bg-store-josh bg-cover ">
                <p>Kim's Convenience</p>
              </div>
              <div class="col-span-1  flex justify-center items-center item bg-sunglass-josh bg-cover">
                <a href="https://www.op.gg/summoners/na/heaven-679">Arcane</a>
              </div>
              <div class="col-span-1  flex justify-center items-center item bg-college-josh bg-cover">
                <p>
                  <a href="https://www.instagram.com/sunnoshirt/">Physical 100</a> 
                </p>
              </div>
              <div class="col-span-1  flex justify-center items-center item bg-beach-josh bg-cover">
                <a href="https://www.chess.com/member/sunyongc">Queen's Gambit</a>
              </div>
              <div class="col-span-1  flex justify-center items-center item bg-birthday-josh bg-cover">
                <a href="https://open.spotify.com/playlist/37i9dQZF1FoAVPBJ8rfR3B?si=a2dbd71bafa841d6">moosic</a>
                <p>

                </p>
              </div>
              <div class="col-span-1  flex justify-center items-center item bg-birthday-josh bg-cover">
                <a href="https://beliapp.co/app/heaven679">Korea No.1</a>
              </div>
            </div>
           

          </div>



        </div>
      </div>



    </>
  )
}
