import logo from "./logo.svg";
import "./App.css";
import profile from "./code.webp";
import { BsFillMoonStarsFill, BsTwitter, BsLinkedin } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaPython, FaHtml5 } from "react-icons/fa";
import { DiDjango, DiRuby } from "react-icons/di";
import { SiRubyonrails, SiCss3 } from "react-icons/si";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-900 dark:bg-slate-800 text-white">
      <nav className="py-10 mb-12 flex justify-between bg-indigo-900 text-white">
        <ul className="flex items-center ml-10">
          <li className="pr-5">
            <a href="">Home</a>
          </li>
          <li className="pr-5 over:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            <a href="#about">About</a>
          </li>
          <li className="pr-5 over:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="pr-5 over:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            <a href="#contact">Contact Me</a>
          </li>
          <li className="pr-0 over:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            <a href="#">Resume</a>
          </li>
        </ul>

      </nav>
      <section className="px-10 rounded-lg" id="home">
        <div className="text-center p-10 pt-2">
          <h2 className="text-5xl py-2 text-indigo-500 font-medium">
            {`Dev {Chibukasia}`}
          </h2>
          <h3 className="text-3xl py-2 text-center text-indigo-500 font-sans">
            Hi, I'm Nelson Chibukasia
          </h3>
          <h3 className="text-3xl py-2 font-sans">
            FullStack Software Developers
          </h3>
        </div>

        <div className="relative mx-auto bg-indigo-900 rounded-full w-80 h-80 mb-20 overflow-hidden hover:animate-spin ">
          <img
            className="object-cover"
            src={profile}
            layout="fill"
          />
        </div>

        <hr />
        
        <div className="bg-slate-900 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div className="text-center pt-10  text-indigo-500 font-medium">
            <h3 className="text-3xl py-2 underline">Stacks</h3>
          </div>
          <div className="text-5xl flex flex-wrap justify-center gap-16 py-3">
            <a className=" text-orange-600">
              <SiCss3 />
            </a>
            <a className=" text-orange-600">
              <FaHtml5 />
            </a>
            <a className=" text-amber-500">
              <TbBrandJavascript />
            </a>
            <a className=" text-sky-400">
              <FaReact />
            </a>
            <a className=" text-amber-500">
              <FaPython />
            </a>
            <a className=" text-green-600">
              <DiDjango />
            </a>
            <a className=" text-red-600">
              <DiRuby />
            </a>
            <a className=" text-red-600">
              <SiRubyonrails />
            </a>
          </div>
        </div>
      </section>
      
      <section className="px-10">
        <hr />
        <div id="about">
          <About />
        </div>
        <hr />
        <div id="projects">
          <Projects />
        </div>
        <hr />
        <div id="contact">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;
