import React from "react";
import { motion } from "framer-motion";
import bg from './../../assets/black-noise.png';
interface NontFoundProps {
}

/**
 * 
 */
const NontFound = ({}: NontFoundProps): JSX.Element => {
    return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
    <ExampleContent />
    <FuzzyOverlay />
  </div>
    );
}
// #endregion

export default NontFound;



const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: `url(${bg})`,
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
        <h1 className="text-9xl md:text-[300px] w-full select-none  text-center font-black  text-gray-400">
        404
      </h1>
      <p className="text-center text-neutral-400">
        This Page Not Found 📺
      </p>
    </div>
  );
};

