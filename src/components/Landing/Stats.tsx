import React from "react";
import { motion } from "framer-motion";
import FlipLink from "../custom/FlipLink";

 const Stats: React.FC = () => {

    const textVariant ={
        hidden:{opacity: 0, x: -100},
        visible:{
          opacity:1,
          x:0,
          transition:{
            duration:0.5,
            ease:"easeInOut",
          }
        }
      }
    const btnVariant ={
        hidden:{opacity: 0},
        visible:{
          opacity:1,
          x:0,
          transition:{
            delay:0.6,
            duration:0.2,
          }
        }
      }

  return (
    <div className="bg-c1 py-10">
    <section className="grid place-content-center gap-3 px-8 py-24 text-black text-center">
      <motion.h1 initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={textVariant} ><FlipLink >Explore Your Financial</FlipLink></motion.h1>
      <motion.h1 initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={textVariant} ><FlipLink>Solutions</FlipLink>
      </motion.h1>

    </section>
    <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-4 mb-5">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <motion.button
                  initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={btnVariant}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-8 py-5 bg-black text-2xl text-white font-semibold rounded-full duration-300"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
              </div>
  );
};
export default Stats;
