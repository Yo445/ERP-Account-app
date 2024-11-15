import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string; // Ensuring that children is a string, so we can safely use the split() method
}
const FlipLink: React.FC<FlipLinkProps> = ({ children }) => {
    return (
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative overflow-hidden whitespace-nowrap text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-8xl"
        style={{
          lineHeight: 0.75,
        }}
      >
        {/* First part of the animation (visible letters moving up) */}
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l === " " ? "\u00A0" : l} {/* Preserve spaces with a non-breaking space */}
            </motion.span>
          ))}
        </div>
  
        {/* Second part of the animation (hidden letters moving into view) */}
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l === " " ? "\u00A0" : l} {/* Preserve spaces with a non-breaking space */}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };

  export default FlipLink;