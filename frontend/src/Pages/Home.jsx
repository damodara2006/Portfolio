import profile from "../assets/flake-2.BnWSExPC.png"
function Home() {
  return (
    <body className="bg-black flex flex-col">
      <div className="mb-3.5 relative">
      <div className=" flex justify-between items-center h-14 bg-[linear-gradient(140deg,_#B7B1F2,_#F8BDEB)] rounded-[4px]">
        <h1 className=" ml-11 sm:ml-5 lg:ml-10 xl:ml-16 font-extrabold">HOME</h1>
        <nav className=" flex justify-end  w-4/6  ">
          <ul className="flex w-[100%] xl:ml-16 justify-evenly">
            <li className=" relative after:absolute after:content-[''] after:w-0 after:bottom-0 after:left-0 after:bg-black after:h-0.5 rounded-3xl hover:after:w-full after:transition-all peer-hover:right-0 hover:text-gray-">Home</li>
            <li className="relative after:content-['']  after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all in-hover:right-0">Achivements</li>
            <li className="relative after:content-['']  after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all in-hover:right-0">Contact</li>
            <li className="relative after:content-['']  after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all in-hover:right-0"> About</li>
          </ul>
        </nav>
      </div>
    </div>

    <h1 className=" text-center font-mono text-4xl font-extrabold text-white ml-6"><span>HELLO!</span> <br></br> IAM  <span className=" relative text-green-500 after:content-[''] after:absolute after:w-0 after:bottom-0 after:bg-black after:h-full after:right-0 hover:after:w-full after:transition-all after:duration-200">DAMODARA PRAKASH P</span> </h1>

    <div className="flex justify-center">
    <div  className=" mt-5 rounded-md relative flex justify-center items-center border w-72 h-72 border-white text-white" ><img src={profile} alt="Profile" /></div>
    </div>
    
    </body>
    
  );
}

export default Home;


