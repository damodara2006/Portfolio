
        import { Link } from "react-router-dom";
        import profile from "../assets/flake-2.BnWSExPC.png";
        import nptel from "../assets/1734502519880.jpeg";
        function Home() {
          return (
            <body className="bg-black flex flex-col">
              <div className="mb-3.5 relative">
                <div className=" flex justify-between items-center h-14 bg-[linear-gradient(140deg,_#B7B1F2,_#F8BDEB)] rounded-[4px]">
                  <h1 className=" ml-11 sm:ml-4 lg:ml-10 xl:ml-16 font-extrabold">
                    HOME
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
          <div className="relative sm:w-64 mt-5 rounded-md flex justify-center border w-72 h-72 border-white text-white">
            <img src={profile} alt="Profile" />
          </div>
        </div>

              
    
        <div className="certificates mt-7 grid grid-cols-1 gap-7 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 transition-transform duration-500 ease-in-out">
          <div className="border border-white w-80 h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out">{ <img className="w-fit h-full rounded-2xl" src={nptel} alt="" /> }</div>
          <div className="border border-white w-80 h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out"></div>
          <div className="border border-white w-80 h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out"></div>
          <div className="border border-white w-80 h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out"></div>
          <div className="border border-white w-80 h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out"></div>
          <div className="border border-white w-80 h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out"></div>
        </div>
    
            </body>
          );
        }

        export default Home;
    