import React from "react";
import { motion } from "framer-motion";

const Insights = (): JSX.Element => {
  const insightsData = [
    {
      title: "Productivity Enhancer",
      date: "July 2023",
      description: "ProductivityEnhancer"
    },
    {
      title: "Mobile App",
      date: "July 2023",
      description: "Mobile App"
    }
  ];

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transtion: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-2">
      <div className="md:w-1/3 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Our Insights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          sdfsdfsdfsdfs
        </motion.p>
        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="icon"
            className="w-12 h-12 rounded-full border-4"
          />
          <div>
            <h1 className="text-lg font-bold">michel runner</h1>
            <p className="text-sm text">ceo</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
        {insightsData.map((insight, index) =>
          <motion.div
            className="w-full p-4 border-4 border-white/50 rounded-xl space-y-4"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={cardVariant}
          >
            <div className="flex justify-between ">
              <div className="space-y-2">
                {/* <button>{insight.icon()}</button> */}
                <h1 className="text-xl font-bold">
                  {insight.title}
                </h1>
              </div>
              <p className="text-lg leading-loose">
                {insight.date}
              </p>
            </div>
            <p>
              {insight.description}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
// #endregion

export default Insights;
