import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <section className="hero-wraper">
      <div className="paddings  innerWidth flexCenter hero-countainer">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y:"2rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={
              {
                duration:2,
                type:"spring"
              }
            }>
              Discover
              <br /> Most Suitable <br />
              property
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className="secondaryText">
              Find a very suitable property that easily suit you
            </span>
            <span className="secondaryText">
              Forget all dificulties in findong a residence for you
            </span>
          </div>
          <div className="flexCenter hero-serch-bar">
            <HiLocationMarker color="var(--blue) " size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <CountUp start={12000} end={20000} duration={4} />
              <span>+</span>
              <span className="secondaryText">Prenium Products</span>
            </div>
            <div className="flexColStart stat">
              <CountUp start={2000} end={5000} duration={4} />
              <span>+</span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColStart stat">
              <CountUp end={200} />
              <span>+</span>
              <span className="secondaryText">Award Winner</span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <motion.div
          initial={{x:"7rem",opacity:0}}
          animate={{x:"0",opacity:1}}
          transition={{
            duration:2,
            type:"spring"
          }}
           className="image-countainer">
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
