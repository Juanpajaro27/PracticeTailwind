import React from "react";
import Program1 from "../img/1. sin fondo.png"
import Program2 from "../img/2. Sin fondo.png"
import Program3 from "../img/3. Sin fondo.png"
import Program4 from "../img/4. Sin fondo.png"
import Program5 from "../img/5. SIN FONDO.png"

const Contact = () => {
  return (

    <div className="container">
      <div className="flex items-center justify-center flex-wrap">
        <div className="mb-7 sm:mb-0">
          <h3 className="text-headingColor text-[2rem] font-[500]">
            Programas
          </h3>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-[#19dae6]">
            <img src={Program1} alt="/" className="w-22 mx-auto"/>
            <p className="text-xl font-[500] mt-4">Programa 1</p>
        </div>
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-[#54e619]">
            <img src={Program2} alt="/" className="w-22 mx-auto"/>
            <p className="text-xl font-[500] mt-4">Programa 2</p>
        </div>
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-[#fffd13]">
            <img src={Program3} alt="/" className="w-22 mx-auto"/>
            <p className="text-xl font-[500] mt-4">Programa 3</p>
        </div>
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-[#ff3292]">
            <img src={Program4} alt="/" className="w-22 mx-auto"/>
            <p className="text-xl font-[500] mt-4">Programa 4</p>
        </div>
        <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-[#ff1616]">
            <img src={Program5} alt="/" className="w-22 mx-auto"/>
            <p className="text-xl font-[500] mt-4">Programa 5</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
