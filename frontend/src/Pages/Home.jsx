import React from "react";

function Home() {
  return (
    <div>
      <div className=" flex justify-between">
        <h1 className=" ml-11 sm:ml-5 lg:ml-10 xl:ml-16">Home</h1>
        <nav className=" flex justify-end ">
          <ul className="flex mr-11 sm:ml-5 lg:ml-10 xl:ml-16 ">
            <li>Home</li>
            <li>Achivements</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
