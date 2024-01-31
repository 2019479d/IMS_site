import { fjalla } from "@/app/font";
import React from "react";

const About = () => {
  return (
    <section
      className="py-10 px-10 md:px-40 flex flex-col items-center justify-center gap-10 bg-[#355fc18f] text-black dark:text-white scroll-mt-20"
      id="about"
    >
      <h2 className={`${fjalla.className} text-3xl md:text-5xl font-semibold`}>
        About Us
      </h2>
      <p className="text-center">
        We are a premier high-tech solutions and service provider established in
        2014 and we have since expanded with branches and affiliate offices in
        the Southeast Asia region. Our core capabilities are in delivering
        world-class and cutting-edge technology products and solutions across
        test measurement markets.
      </p>
      <div className="text-center flex flex-col md:flex-row content-start justify-stretch pb-10 pt-10 md:px-[15rem] gap-[2.5rem] md:gap-[5rem]">

          <p><span className="text-center font-semibold text-2xl">Our Expertise<br/><br/></span>Over decades of experience in test measurement industry and innovative solutions for delivering ioT & Industry 4.0 applications,  structural monitoring,  Noise and Vibration monitoring applications across the SEA region.</p>

          <p><span className="text-center font-semibold text-2xl">Services<br/><br/></span>Mechanical Drawings, Short term and Long term hardware rental for Vibration monitoring applications, Customized Data Loggers and Applications.</p>

      </div>
      </section>
  );
};

export default About;
