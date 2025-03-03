import nptel from "../assets/1734502519880.jpeg";
import KIOT2024 from "../assets/KIOT-Achivementen-2024.jpeg";
import kongu from "../assets/Kongu.png";
import Learnathon from "../assets/Learnathon.png";
import MKCE from "../assets/MKCE.png";
import profile from "../assets/profile.jpeg";
import { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

function Home() {
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [navbar, setnavbar] = useState(true);
  const [navbarcontent, setnavbarcontent] = useState(false);
  let nav = ["Home", "About", "Achievements", "Contact"];
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 470) {
        setnavbar(false);
      } else {
        setnavbar(true);
      }
    };
    ``;

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div id="home" className="bg-black flex flex-col !scroll-smooth">
      {" "}
      <div
        className={`fixed top-0 left-0 w-full bg-[linear-gradient(140deg,_#B7B1F2,_#F8BDEB)] shadow-md z-50 sm:${() => {
          setnavbar(false);
        }}`}
      >
        <div className="flex justify-between items-center h-14 px-5 lg:px-10 rounded-[4px]">
          <h1 className="font-extrabold">PORTFOLIO</h1>
          {navbar ? (
            <nav className="w-4/6 flex justify-end">
              <ul className="flex w-full justify-evenly">
                <a href="#home">
                  <li className="relative after:absolute after:content-[''] after:w-0 after:bottom-0 after:left-0 after:bg-black after:h-0.5 rounded-3xl hover:after:w-full after:transition-all peer-hover:right-0 hover:text-gray-">
                    Home
                  </li>
                </a>
                <li className="relative after:content-[''] after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all">
                  <a href="#achievements">Achievements</a>
                </li>
                <li className="relative after:content-[''] after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all">
                  <a href="#contact">Contact</a>
                </li>
                <li className="relative after:content-[''] after:absolute after:w-0 after:bg-black after:bottom-0 after:h-0.5 after:left-0 hover:after:w-full after:transition-all">
                  <a href="#about">About</a>
                </li>
              </ul>
            </nav>
          ) : (
            !navbarcontent ? 
            <FiAlignJustify className="cursor-grab " onClick={  () =>setnavbarcontent(!navbarcontent)} />
            : <h1 className={"cursor-grab"} onClick={()=>setnavbarcontent(!navbarcontent)} >X</h1>
          )} 
        </div>
      </div>
      {navbarcontent && !navbar && (
        <div className=" transition-all fixed text-white mt-14 right-0 w-32 h-40 z-50 bg-[linear-gradient(100deg,_#B7B1F2,_#F8BDEB)] flex justify-center ">
          <ul className="flex flex-col justify-items-center text-center justify-center ">
            {nav.map((list, key) => {
              return (
                <a key={key} href={`#${list.toLowerCase()}`}>
                  <li className="mb-1 text-black" key={key}>
                    {" "}
                    {list}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      )}
      <div className="mt-16 flex flex-col items-center">
        <h1 className="lg:text-4xl xl:text-4xl sm:text-3xl md:text-4xl text-3xl text-center font-mono font-extrabold text-white">
          <span>HELLO!</span> <br />I AM{" "}
          <span className="relative text-green-500 after:content-[''] after:absolute after:w-0 after:bottom-0 after:bg-black after:h-full after:right-0 hover:after:w-full after:transition-all after:duration-200">
            DAMODARA PRAKASH P
          </span>
        </h1>

        <div className="flex justify-center items-center w-full">
          <div className="relative sm:w-64 mt-5 rounded-full lg:rounded-full flex justify-center border w-72 h-72 border-white text-white overflow-hidden">
            <img className="w-full" src={profile} alt="Profile z-10" />
          </div>
        </div>

        <div className="flex px-16" id="about">
          <p className="text-gray-300 font-mono text-center mt-8">
            I’m <b className="text-rose-500">Damodara Prakash</b>, a{" "}
            <b className="text-blue-400">Computer Science and Engineering</b>{" "}
            student at{" "}
            <b className="text-indigo-400">Knowledge Institute of Technology</b>
            , passionate about <b className="text-green-400">programming</b>,{" "}
            <b className="text-yellow-400">web development</b>, and{" "}
            <b className="text-teal-400">IoT</b>. My journey started with{" "}
            <b className="text-purple-400">C</b>,{" "}
            <b className="text-purple-400">C++</b>, and{" "}
            <b className="text-purple-400">Java</b>, now expanding into{" "}
            <b className="text-cyan-400">full-stack development</b> with{" "}
            <b className="text-blue-300">React.js</b>,{" "}
            <b className="text-green-300">Express.js</b>, and databases like{" "}
            <b className="text-red-300">MySQL</b> &{" "}
            <b className="text-yellow-300">MongoDB</b>.
          </p>
        </div>

        <p
          id="achievements"
          className="text-center text-3xl text-rose-500 font-extrabold font-mono mt-9"
        >
          Achievements
        </p>
        <div className="flex justify-items-center gap-8 px-5 justify-evenly mt-7 flex-wrap transition-all">
          {[nptel, KIOT2024, MKCE, Learnathon, kongu].map((img, index) => (
            <div
              key={index}
              className="border border-white max-w-80 max-h-80 rounded-2xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out overflow-hidden"
            >
              <img className="w-full h-full transition-all" src={img} alt="Achievement" />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/Damodara prakash Resume.pdf"
            download="Damodara_prakash_Resume.pdf"
            className="text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-all"
          >
            Download Resume
          </a>
        </div>

        <div
          id="contact"
          className="mt-10 text-white text-center text-3xl flex flex-col mb-4"
        >
          Contact
          <form
            action={"https://formsubmit.co/damodara2006@gmail.com"}
            method="POST"
          >
            <input
              type="text"
              name="email"
              className="border rounded-sm mb-1 text-sm py-1.5 w-80 pl-5"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="name"
              className="border rounded-sm mb-1 text-sm py-1.5 w-80 pl-5"
              placeholder="Message me"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
            <br />
            <button
              className="text-sm border px-3 rounded-sm hover:bg-gray-800 transition-all"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        <footer className="text-white text-center mt-5  w-full">
          <h1 className="font-extrabold felx flex-wrap justify-center text-center" >Get Me On</h1><br />
          <div className=" transition-all relative flex justify-evenly w-full sm:pr-[30%] sm:pl-[30%] pr-[30%] pl-[30%] md:pr-[35%] md:pl-[35%] lg:pr-[40%] lg:pl-[40%] xl:pr-[43%] xl:pl-[43%]" > 
          <a className="flex items-center drop-shadow-md hover:text-blue-600 text-2xl transition-all hover:text-3xl " href="https://www.linkedin.com/in/damodara-prakash-p-b056a2291/"> <FaLinkedinIn /></a>
          <a className="flex items-center drop-shadow-md hover:text-green-600 text-2xl transition-all hover:text-3xl " href="https://github.com/damodara2006"> <SiGithub /></a>
          <a className="flex items-center drop-shadow-md hover:text-pink-600 text-2xl transition-all hover:text-3xl " href="https://www.instagram.com/its_me_pdp28/"> <FaInstagram /></a>
          <div
              className="relative flex items-center drop-shadow-md text-2xl transition-all hover:text-3xl "
              onMouseEnter={() => setShowPhone(true)}
              onMouseLeave={() => setShowPhone(false)}
            >
              <IoIosCall />
              {showPhone && (
                <p className="text-white absolute  hover:text-purple-600 z-40 bg-black text-2xl rounded font-mono">
                  9043402788
                </p>
              )}
            </div> 
  
     </div>
          
        </footer> 

        <div><br />
        <br /><br /></div>
      </div>
    </div>
  );
}

export default Home;
