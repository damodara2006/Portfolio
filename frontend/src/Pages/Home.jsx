import nptel from "../assets/1734502519880.jpeg";
import KIOT2024 from "../assets/KIOT-Achivementen-2024.jpeg";
import kongu from "../assets/Kongu.png";
import Learnathon from "../assets/Learnathon.png";
import MKCE from "../assets/MKCE.png";
import Train from "../assets/Train.jpeg";
import Wificar from "../assets/WIFI-car.jpeg";
import profile from "../assets/Profile.jpeg"
import cloudhut from "../assets/cloudhut.png"
import chattingapp from "../assets/real-time-chatting-app.png"
import alameenconference from "../assets/Al-Ameen-conference.jpeg";
import kiotpic from "../assets/Kiot.png"
import sengunthar from "../assets/sengunthar.webp"
import Genai from "../assets/GenAi.jpeg"
import Feedbackform from "../assets/feedback.png"
import HousePrediction from "../assets/houseprediction.png"

import axios from "axios";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import { BsTwitterX } from "react-icons/bs";
import AOS from  "aos"
import 'aos/dist/aos.css';

function Home() {
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [navbar, setnavbar] = useState(true);
  const [navbarcontent, setnavbarcontent] = useState(false);
  let nav = ["Home", "About", "Achievements", "Contact"];
  const [call, setcall] = useState(false);
  let [width, setwidth] = useState();
  const [name, setname] = useState();

  useEffect(()=>{
    AOS.init({duration:600})
  })

  useEffect(() => {
   axios
      .get("https://portfolio-mee6.onrender.com", { withCredentials: true })
      .then((res) => {
        setname(res.data.name);
        name.toLowerCase();
      })
      .catch((res) => console.log(res));
  });

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
    AOS.refresh();
  }, []);

  // window.addEventListener("resize", () => {
  //   width = window.innerWidth + " X " + window.innerHeight;
  //   setwidth(width);
  // });
  function handleClick(e) {
    toast.info("Please wait");
  }
  return (
    <div id="home" className="bg-black flex flex-col !scroll-smooth overflow-hidden " >
      {" "}
      <div
        className={`fixed top-0 left-0 w-full bg-[linear-gradient(140deg,_#B7B1F2,_#F8BDEB)] shadow-md z-50 sm:${() => {
          setnavbar(false);
        }}`} data-aos="slide-down" data-aos-duration="600"
      >
        <div className="flex justify-between items-center h-14 px-5 lg:px-10 rounded-[4px]" >
          <h1 className="font-extrabold">DAMODARA PRAKASH P</h1>
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
          ) : !navbarcontent ? (
            <FiAlignJustify
              className="cursor-grab mr-3"
              onClick={() => setnavbarcontent(!navbarcontent)}
            />
          ) : (
            <h1
              className={"cursor-grab"}
              onClick={() => setnavbarcontent(!navbarcontent)}
            >
              X
            </h1>
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
      <ToastContainer
              position="top-center"
              autoClose={20000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
      <div className="mt-16 flex flex-col items-center">
        <h1 className="lg:text-4xl xl:text-4xl sm:text-3xl md:text-4xl text-2xl text-center font-mono font-extrabold text-white">
          <p className="text-white text-sm absolute right-0 mr-3">{width}</p>
          <span>HELLO!</span> <br />I AM{" "}
          <span className="relative text-green-500 after:content-[''] after:absolute after:w-0 after:bottom-0 after:bg-black after:h-full after:right-0  after:transition-all after:duration-200">
            <>DAMODARA PRAKASH P</>
          <div id="about" ></div>

          </span>
        </h1>
        <div className="flex justify-center items-center w-full">
          <div className="relative mt-5 rounded-full lg:rounded-full flex justify-center  w-64 text-white overflow-hidden" data-aos="flip-down" data-aos-duration="900">
            <img className="w-full" src={profile} alt="Profile z-10" />
          </div>
        </div>

        <div className="flex px-10 lg:px-20 xl:px-20 mt-5" data-aos="fade-up" data-aos-duration="600" >
          <p className=" text-center text-2xl font-Roboto text-gray-400" >Computer Science and Engineering student with experience in full-stack and backend development through projects like FinQuest, Cloudhut, and Think Green Live Green.
Currently exploring artificial intelligence using Jupyter Notebook, Google Colab, and PySpark.
Eager to contribute to an innovative team and build scalable, impactful tech solutions.</p>
        </div>
        {/* <div  id="achievements" ></div> */}
        <hr />
        <hr className="border-2 w-[90%] mt-5 border-gray-600 rounded-4xl "/>
        <p
          className="text-center text-3xl text-green-500 font-extrabold font-mono mt-9"
        >
          EDUCATION
        </p >
        <div className="px-10 flex gap-10 flex-wrap justify-center mb-12">
        <div className="flex relative mt-10 ">
        <img src={kiotpic} className="w-15 mr-10 h-16  left-0 rounded-2xl" alt="" data-aos="flip-left" data-aos-duration="500" data-aos-once="false" data-aos-easing="ease-in-out" />
       <div className="" >
       <b className="text-white text-2xl mt-5"><a href="https://kiot.ac.in/">Bachelor of Engineering (B.E), Computer Science & Engineering </a><span className="font-thin text-[16px]">2023 - 2027</span></b>
       <p className="text-gray-400 text-2xl"><a href="https://kiot.ac.in/">Knowledge Institute Of Technology (KIOT) - Engineering College, Kakapalayam.</a></p>
       <p className=" absolute right-0 text-xl text-red-500 font-Roboto">CGPA : <span className="text-green-500">7.6</span></p>
       </div>
        </div>
        <div className="flex relative mt-10 ">
        <img src={sengunthar} className="w-15 mr-10 h-16 left-0 rounded-2xl" alt="" data-aos="flip-right" data-aos-duration="500" data-aos-once="false" data-aos-easing="ease-in-out" />

       <div className="relative" >
       <b className="text-white text-2xl mt-5"><a href="#">Senior Secondary (XII), Tamil Nadu State Board</a><span className="font-thin text-[16px]">  2021 - 2023</span></b>
       <p className="text-gray-400 text-2xl"><a href="#">Sengunthar Matriculation Higher Secondary School, Tharamangalam.</a></p>
       <p className=" absolute right-0 text-xl text-red-500 font-Roboto">Percentage : <span className="text-green-500">84</span></p>
       </div>
        </div>
        <div className="flex relative mt-10 ">
       <div className="" >
       <b className="text-white text-2xl mt-5"><a href="https://svmmss.com/">Secondary (X), Tamil Nadu State Board </a><span className="font-thin text-[16px]"> 2010 - 2021</span></b>
       <p className="text-gray-400 text-2xl"><a href="https://svmmss.com/">Sri Vidya Mandir Matriculation School, Selavadai.</a></p>
       </div>
        </div>
        </div>
        <hr className="border-2 w-[90%] mt-5 border-gray-600 rounded-4xl "/>
      
        <p
          className="text-center text-3xl text-rose-500 font-extrabold font-mono mt-9"
        >
          TRAINING / PROGRAM
        </p>

        <div className="mt-5 ">
          <div className="px-20 flex flex-col text-center justify-center items-center">
            <p className="text-white text-2xl font-bold mb-5">
            GENAI APEX PROGRAM
              </p> 
              <p className="text-gray-400 text-xl mb-5">i18n Solutions, Salem
Completed a 5-day GenAI Apex Program, building chatbots with Gemini API and OpenAI, exploring Hugging Face
models, and learning data analysis in Jupyter Notebook. Demonstrated strong dedication and punctuality throughout
the course.</p>
<img src={Genai} className="max-w-80 max-h-80 rounded-2xl" alt="" data-aos="zoom-in" data-aos-duration="500" data-aos-once="false" data-aos-easing="ease-in-out" />

<br />

                    </div>

        </div>


        <p
          className="text-center text-3xl text-sky-600 font-extrabold font-mono mt-9" 
        >
          SKILLS
        </p>
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 mt-5">
  <div className="text-white flex flex-wrap gap-5 items-center justify-center w-full">

    <p className="flex flex-col sm:flex-row w-full sm:w-[48%] gap-2 sm:gap-3 justify-between items-center">
      <span className="font-bold">JAVA</span>
      <div className="w-[90%] border border-white h-3 rounded-2xl overflow-hidden">
        <div className="w-[60%] bg-amber-400 h-2.5 rounded-2xl"
          data-aos="slide-right" data-aos-duration="600" data-aos-once="false" data-aos-easing="ease-out">
        </div>
      </div>
    </p>

    <p className="flex flex-col sm:flex-row w-full sm:w-[48%] gap-2 sm:gap-3 justify-between items-center">
    <span className="font-bold">C</span>

      <div className="w-[90%] border border-white h-3 rounded-2xl overflow-hidden">
        <div className="w-[60%] bg-orange-400 h-2.5 rounded-2xl"
          data-aos="slide-right" data-aos-duration="600" data-aos-once="false" data-aos-easing="ease-out">
        </div>
      </div>
    </p>

    <p className="flex flex-col sm:flex-row w-full sm:w-[48%] gap-2 sm:gap-3 justify-between items-center">
    <span className="font-bold">C++</span>

      <div className="w-[90%] border border-white h-3 rounded-2xl overflow-hidden">
        <div className="w-[70%] bg-rose-400 h-2.5 rounded-2xl"
          data-aos="slide-right" data-aos-duration="600" data-aos-once="false" data-aos-easing="ease-out">
        </div>
      </div>
    </p>

    <p className="flex flex-col sm:flex-row w-full sm:w-[48%] gap-2 sm:gap-3 justify-between items-center">
    <span className="font-bold">PYTHON</span>

      <div className="w-[90%] border border-white h-3 rounded-2xl overflow-hidden">
        <div className="w-[60%] bg-red-600 h-2.5 rounded-2xl"
          data-aos="slide-right" data-aos-duration="600" data-aos-once="false" data-aos-easing="ease-out">
        </div>
      </div>
    </p>

    <p className="flex flex-col sm:flex-row w-full sm:w-[48%] gap-2 sm:gap-3 justify-between items-center">
    <span className="font-bold">JAVASCRIPT</span>

      <div className="w-[90%] border border-white h-3 rounded-2xl overflow-hidden">
        <div className="w-[75%] bg-emerald-600 h-2.5 rounded-2xl"
          data-aos="slide-right" data-aos-duration="900" data-aos-once="false" data-aos-easing="ease-out">
        </div>
      </div>
    </p>

    <p className="flex flex-col sm:flex-row w-full sm:w-[48%] gap-2 sm:gap-3 justify-between items-center">
    <span className="font-bold">MERN STACK</span>

      <div className="w-[90%] border border-white h-3 rounded-2xl overflow-hidden">
        <div className="w-[70%] bg-blue-700 h-2.5 rounded-2xl"
          data-aos="slide-right" data-aos-duration="600" data-aos-once="false" data-aos-easing="ease-out">
        </div>
      </div>
    </p>

    <p className="flex flex-col sm:flex-row w-full sm:w-[48%] gap-2 sm:gap-3 justify-between items-center">
    <span className="font-bold">GITHUB</span>

      <div className="w-[90%] border border-white h-3 rounded-2xl overflow-hidden">
        <div className="w-[60%] bg-fuchsia-600 h-2.5 rounded-2xl"
          data-aos="slide-right" data-aos-duration="600" data-aos-once="false" data-aos-easing="ease-out">
        </div>
      </div>
    </p>

    <p className="flex flex-col sm:flex-row w-full sm:w-[48%] gap-2 sm:gap-3 justify-between items-center">
    <span className="font-bold">JUPYTER LAB</span>

      <div className="w-[90%] border border-white h-3 rounded-2xl overflow-hidden">
        <div className="w-[60%] bg-amber-800 h-2.5 rounded-2xl"
          data-aos="slide-right" data-aos-duration="600" data-aos-once="false" data-aos-easing="ease-out">
        </div>
      </div>
    </p>

  </div>
</div>





<div id="achievements" ></div>
        <hr className="border-2 w-[90%] mt-5 border-gray-600 rounded-4xl "/>
        <p
          className="text-center text-3xl text-rose-500 font-extrabold font-mono mt-9" 
        >
          ACHIVEMENTS
        </p>
        <div className="flex justify-items-center gap-8 px-12 justify-evenly mt-7 flex-wrap transition-all" >
          {[nptel, alameenconference ,KIOT2024  , MKCE, Learnathon, kongu].map((img, index) => (
            <div
              key={index}
              className="border border-white max-w-80 max-h-80 rounded-xl shadow-xl shadow-gray-600 transition-transform duration-500 ease-in-out overflow-hidden"  data-aos="slide-right" data-aos-duration="600" data-aos-once = "false"
            >
              <img
                className="w-full h-full transition-all "
                src={img}
                alt="Achievement"
              />
            </div>
          ))}
        </div>
        <hr className="border-2 w-[90%] mt-10 border-gray-600 rounded-4xl"/>
        <h1 className=" mt-7 text-pink-500 text-3xl font-bold">PROJECTS</h1>
        <p className="text-gray-500 flex flex-wrap px-20 text-center">You can check out my project my hovering the project pic and click on the text</p>
        <div
          className="w-[100%] flex justify-center
        "
        >
          <ul className=" mt-7 flex flex-wrap justify-evenly items-center gap-x-16 gap-y-8">
            {[Train, Wificar ,cloudhut ,chattingapp, Feedbackform, HousePrediction].map((list, key) => {
              return (
                <li
                className="relative group  p-6 border rounded-2xl shadow-lg shadow-gray-300 border-white h-64 
                           after:content-[''] after:w-full after:h-full after:opacity-0 
                           group-hover:after:opacity-100 group-active:after:opacity-100  after:transition-all after:duration-200 
                           after:ease-in-out after:bg-black after:top-0 after:left-0 
                           after:rounded-2xl after:z-0 after:absolute" data-aos="slide-left" data-aos-duration = "600"
                key={key}
              >
                <img
                  className="rounded-md transition-all duration-200 ease-in-out w-72 h-52 group-hover:opacity-0 group-active:opacity-0 "
                  src={list}
                  alt="Image"
                />
                <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 group-active:opacity-100 ">
                {key === 1 ? <p  className="flex flex-wrap text-center font-mono w-40" >WI-FI CONTROLLED CAR USING AURDINO</p> : ""}
                  
                  {key === 0 ? <p className="flex flex-wrap text-center font-mono w-40 ">TRAIN ACCIDENT PREVENTION</p>  : ""}
                  {key === 2 ?         <a className="text-white z-50" href="https://e-commerce-jjp0.onrender.com"><p  className="flex flex-wrap text-center font-mono w-40 ">CLOUDHUT A E_COMMERCE WEBSITE </p></a>
                    : ""}
                {key === 3 ?         <a className="text-white z-50" href="https://chatting-app-pm8f.onrender.com/"><p  className="flex flex-wrap text-center font-mono w-40 ">REAL-TIME CHATTING-APP</p>
                <p>damo@gmail.com || 12345</p></a>
                    : ""}
                    {key === 4 ?         <a className="text-white z-50" href="https://idyllic-gelato-6f272a.netlify.app/"><p  className="flex flex-wrap text-center font-mono w-40 items-center justify-center ">FEEDBACK-FORM</p></a>
                    : ""}
                    {key === 5 ?         <a className="text-white z-50" href="https://houseprediction-california-gab2djb2uzfgqozcamutxt.streamlit.app/"><p  className="flex flex-wrap text-center font-mono w-40 items-center justify-center ">HOUSE-PREDICTION-CALIFORNIA</p></a>
                    : ""}
                </p>
              </li>
              
              );
            })}
          </ul>
        </div>
        
        <div className="mt-12" data-aos="fade-up" data-aos-duration="800">
          <a 
           href="/Damodara_Prakash_P_Resume1.pdf"
            download="Damodara_Prakash_P_Resume1.pdf"
            className="text-white bg-green-600 px-4 py-2 rounded-md active:bg-green-700 hover:bg-green-700  transition-all"
          >
            Download Resume
          </a>
        </div>

        <div
          id="contact"
          className="mt-10 text-white text-center text-3xl flex flex-col mb-3"
          data-aos="flip-up"
        >
          <p className="mb-3">Contact</p>
          <form
            action={"https://formsubmit.co/damodara2006@gmail.com"}
            method="POST"
          >
            <input
              type="email"
              name="email"
              className="border rounded-sm mb-1 text-sm py-1.5 w-80 pl-5"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              name="name"
              className="border rounded-sm mb-1 text-sm py-1.5 w-80 pl-5"
              placeholder="Message me"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              required
            />
            <br />
            <button
              onClick={(e) => handleClick(e)}
              className="text-sm border px-3 rounded-sm hover:bg-gray-800 transition-all"
              type="submit"
            >
              Submit
            </button>
            
          </form>
        </div>

        <footer className="text-white text-center mt-5  w-full">
          <h1 className="font-extrabold felx flex-wrap justify-center text-center" data-aos="fade" data-aos-duration="1500">
            Get Me On
          </h1>{" "}
          <br />
          <div className=" transition-all relative flex justify-evenly w-full  sm:pr-[30%] sm:pl-[30%] pr-[20%] pl-[20%] md:pr-[35%] md:pl-[35%] lg:pr-[40%] lg:pl-[40%] xl:pr-[43%] xl:pl-[43%]" >
            <a
              className="flex items-center drop-shadow-md hover:text-blue-600 active:text-blue-600 text-2xl transition-all hover:text-3xl "
              href="https://www.linkedin.com/in/damodara-prakash-p-b056a2291/"data-aos="fade-right" 
            >
              {" "}
              <FaLinkedinIn />
            </a>
            <a
              className="flex items-center drop-shadow-md hover:text-pink-600 active:text-red-600 text-2xl transition-all hover:text-3xl "
              href="https://www.instagram.com/its_me_pdp28/"data-aos="fade-up-right"
            >
              {" "}
              <FaInstagram />
            </a>
            <a
              className="flex items-center drop-shadow-md hover:text-green-600 active:text-green-600 text-2xl transition-all hover:text-3xl "
              href="https://github.com/damodara2006"data-aos="fade" 
            >
              {" "}
              <SiGithub />
            </a>
           
            <div className="relative flex items-center drop-shadow-md text-2xl transition-all active:text-purple-600  hover:text-3xl hover:text-purple-600 " data-aos="fade-up-left" >
              <IoIosCall onClick={() => setcall(!call)} data-aos="ffade-up-left" />
            </div>
            <a
              className="flex items-center drop-shadow-md hover:text-gray-600 active:text-gray-600 text-2xl transition-all hover:text-3xl "
              href="https://x.com/DPrakash96227" data-aos="fade-left"
            >
              {" "}
              <BsTwitterX />
            </a>
          </div>
          <br />
          {call ? (
            <p
              onClick={() => setcall(!call)}
              className="text-sm transition-all"
            >
              {" "}
              9043402788
            </p>
          ) : (
            <div className="w-full h-2"> </div>
          )}
        </footer>

        <div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
