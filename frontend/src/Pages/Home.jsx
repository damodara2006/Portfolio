import React from "react";

function Home() {
  return (
    <div>
      <div className=" flex justify-between items-center h-14 bg-[linear-gradient(140deg,_#ff0000,_#0000ff)] rounded-[6px]">
        <h1 className=" ml-11 sm:ml-5 lg:ml-10 xl:ml-16 font-extrabold">Home</h1>
        <nav className=" flex justify-end  w-4/6  ">
          <ul className="flex w-[100%] xl:ml-16 justify-evenly">
            <li className=" relative after:absolute after:content-[''] after:w-0 after:bottom-0 after:left-0 after:bg-black after:h-0.5 rounded-3xl hover:after:w-full after:transition-all peer-hover:right-0 hover:">Home</li>
            <li className="relative after:content-['']  after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all in-hover:right-0">Achivements</li>
            <li className="relative after:content-['']  after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all in-hover:right-0">Contact</li>
            <li className="relative after:content-['']  after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all in-hover:right-0"> About</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
