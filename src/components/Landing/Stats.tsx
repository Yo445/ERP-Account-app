import React from "react";
import { motion } from "framer-motion";
import FlipLink from "../custom/FlipLink";

 const Stats: React.FC = () => {
  return (
    <section className="grid place-content-center gap-3 bg-c1 px-8 py-24 text-black text-center">
      <FlipLink>Explore Your Financial</FlipLink>
      <FlipLink>Solutions</FlipLink>
    </section>
  );
};
export default Stats;
