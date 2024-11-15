import React from "react";
import { motion } from "framer-motion";

const Hero = (): JSX.Element => {

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
    <section className="bg-c1">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <motion.h1 initial="hidden" whileInView="visible" viewport={{amount:0.5}} variants={textVariant} className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-black  sm:text-7xl">
                Explore Your Financial <br className="hidden lg:block" />
                Solutions
              </motion.h1>
     
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};
// #endregion

export default Hero;
















// import React from "react";
// import { motion } from "framer-motion";

// export const Hero: React.FC = () => {
//   return (
//     <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
//       <FlipLink href="#">Twitter</FlipLink>
//       <FlipLink href="#">LinkedIn</FlipLink>
//       <FlipLink href="#">Facebook</FlipLink>
//       <FlipLink href="#">Instagram</FlipLink>
//     </section>
//   );
// };

// const DURATION = 0.25;
// const STAGGER = 0.025;

// interface FlipLinkProps {
//   children: string; // Ensuring that children is a string, so we can safely use the split() method
//   href: string; // Defining href as a required prop
// }

// const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
//   return (
//     <motion.a
//       initial="initial"
//       whileHover="hovered"
//       href={href}
//       className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
//       style={{
//         lineHeight: 0.75,
//       }}
//     >
//       {/* First part of the animation (visible letters moving up) */}
//       <div>
//         {children.split("").map((l, i) => (
//           <motion.span
//             key={i}
//             variants={{
//               initial: {
//                 y: 0,
//               },
//               hovered: {
//                 y: "-100%",
//               },
//             }}
//             transition={{
//               duration: DURATION,
//               ease: "easeInOut",
//               delay: STAGGER * i,
//             }}
//             className="inline-block"
//           >
//             {l}
//           </motion.span>
//         ))}
//       </div>

//       {/* Second part of the animation (hidden letters moving into view) */}
//       <div className="absolute inset-0">
//         {children.split("").map((l, i) => (
//           <motion.span
//             key={i}
//             variants={{
//               initial: {
//                 y: "100%",
//               },
//               hovered: {
//                 y: 0,
//               },
//             }}
//             transition={{
//               duration: DURATION,
//               ease: "easeInOut",
//               delay: STAGGER * i,
//             }}
//             className="inline-block"
//           >
//             {l}
//           </motion.span>
//         ))}
//       </div>
//     </motion.a>
//   );
// };
