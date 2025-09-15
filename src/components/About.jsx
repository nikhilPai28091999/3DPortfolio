import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const About = () => {
  const ServiceCard = ({ service }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * service.index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {service.title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[19px] max-w-3xl leading-[30px]"
      >
        A technology enthusiast with a keen interest in{" "}
        <span className="text-[#915eff]">Full Stack Development </span>
        and <span className="text-[#915eff]">Machine Learning </span>. I enjoy
        exploring how technology can solve real-world problems, whether it’s
        building dynamic web applications or experimenting with intelligent
        data-driven solutions. I am comfortable working with the below
        technologies/frameworks:
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
