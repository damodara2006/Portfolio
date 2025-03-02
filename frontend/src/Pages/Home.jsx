
        import { Link } from "react-router-dom";
        import profile from "../assets/profile.jpeg";
        import nptel from "../assets/1734502519880.jpeg";
        import MKCE from "../assets/MKCE.png";
        import Learnathon from "../assets/Learnathon.png"
        import kongu from "../assets/Kongu.png";
        function Home() {
          return (
            <body className="bg-black flex flex-col">
              <div className="mb-3.5 relative">
                <div className=" flex justify-between items-center h-14 bg-[linear-gradient(140deg,_#B7B1F2,_#F8BDEB)] rounded-[4px]">
                  <h1 className=" ml-11 sm:ml-4 lg:ml-10 xl:ml-16 font-extrabold">
                    PORTFOLIO
                  </h1>
                  <nav className=" flex justify-end  w-4/6  ">
                    <ul className="flex w-[100%] xl:ml-16 justify-evenly">
                      <li className=" relative after:absolute after:content-[''] after:w-0 after:bottom-0 after:left-0 after:bg-black after:h-0.5 rounded-3xl hover:after:w-full after:transition-all peer-hover:right-0 hover:text-gray-">
                        Home
                      </li>
                      <li className="relative after:content-['']  after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all in-hover:right-0">
                        Achivements
                      </li>
                      <li className="relative after:content-['']  after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all in-hover:right-0">
                        Contact
                      </li>
                      <li className="relative after:content-['']  after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all in-hover:right-0">
                      <Link to="/about">
                        About
                      </Link>
                      </li>
                      
                    </ul>
                  </nav>
                </div>
              </div>

              <h1 className=" lg:text-4xl xl:text-4xl sm:text-3xl md:text-4xl text-3xl text-center font-mono font-extrabold text-white ">
                <span>HELLO!</span> <br></br> IAM{" "}
                <span className=" relative text-green-500 after:content-[''] after:absolute after:w-0 after:bottom-0 after:bg-black after:h-full after:right-0 hover:after:w-full after:transition-all after:duration-200 ">
                  DAMODARA PRAKASH P
                </span>{" "}
              </h1>

            <div className="flex justify-center items-center w-full">
          <div className="relative sm:w-64 mt-5 rounded-t-full rounded-b-full flex justify-center border w-72 h-72 border-white text-white overflow-hidden">
            <img className="w-full" src={profile} alt="Profile" />
          </div>
        </div>

              
    <p className=" text-center text-3xl text-rose-500 [text-shadow:_0_8px_8px_rgb(99_102_241_/_0.8)] backdrop:text-2xl font-extrabold font-mono mt-9">Achivements</p>
        <div className=" flex justify-items-center gap-8 px-5 justify-evenly mt-7 flex-wrap ">
          <div className="border border-white max-w-80 max-h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out overflow-hidden">{ <img className="w-fit h-full " src={nptel} alt="" /> }</div>
          <div className="border border-white max-w-80 max-h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out overflow-hidden">{<img src={MKCE} alt="MKCE" />}  </div>
          <div className="border border-white max-w-80 max-h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out overflow-hidden">
            {<img  src={Learnathon} />}
          </div>
          <div className="border border-white max-w-80 max-h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out overflow-hidden">
            {<img src={kongu}/>}
          </div>
          {/* <div className="border border-white max-w-80 max-h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out"></div>
          <div className="border border-white max-w-80 max-h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out"></div> */}
        </div>

        <div className="mt-10 text-white text-center text-3xl flex flex-col mb-4 " >
          Contact
          <form >
            <input type="text" className="border rounde mb-1 rounded-sm text-sm py-1.5 w-80  pl-5" placeholder="Enter your email" /><br />
            <input type="text" className="border rounde mb-1 rounded-sm text-sm py-1.5 w-80  pl-5 " placeholder="Message me"  /><br />
            <button type="submit" className="text-sm border px-3 rounded-sm hover:bg-gray-800  transition-all "  >Submit</button>
          </form>
        </div>
        <footer className="text-white text-center">
         All rights reserved &copy; 2025
        </footer>

            </body>
          );
        }

        export default Home;
    