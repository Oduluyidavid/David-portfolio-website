/* eslint-disable no-unused-vars */
import React from "react";
import Linkedin from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Youtube from "../assets/socials/youtube.svg";
import Github from "../assets/socials/github.svg";
import Books from "../assets/socials/book.svg";

import { TypeAnimation } from "react-type-animation";
// motion animation
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className=" hero h-screen flex items-center justify-center" id="home">
      <motion.div className="text-center md:w-1/2"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
      <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
        HEY, DAVID ODULUYI
      </h1>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "We produce Quality Web Animations",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Designing for the pixel Perfect Experiences",
          1000,
          "We produce Quality Web Animations",
          1000,
          "We produce Quality Web Animations",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
        className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600"
      />
      <p className="text-light text-xl my-8">
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product
      </p>
      
    </motion.div>

      {/*hero social*/}
      <div className="bg-white w-20 rounded py-1 px-1 absolute left-0 top-48 hidden md:block">
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Linkedin} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Twitter} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Youtube} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Github} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Books} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
