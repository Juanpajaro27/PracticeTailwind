import React from "react";
import CountUp from "react-countup";
import HeroImage from "../assets/My project-1(1).png";

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-gray-500 py-4 max-w-md"
          >
            Dando Esperanza a quienes viven de la pesca
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-3xl sm:text-5xl font-bold"
          >
            Fundacion Mares
          </h2>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="/"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
