import React from "react";
import { AiOutlineRead, AiOutlineRise, AiOutlineDollarCircle } from "react-icons/ai";

const About = () => {
  return (
    <div className="container lg:pt-5">
      <div className="text-center">
        <h2 className="text-headingColor font-[500] text-[25px] leading-7">
          ¿Quienes Somos?
        </h2>
        <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[400] text-[18px] leading-7">
          Somos una fundacion dedicada a la busqueda de prosperidad para las
          familias de los pescadores artesanales en cienaga y buenaventura.
        </p>
      </div>

      <div className="flex flex-col justify-center sm:py-12">
        <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/*Vertival Line */}
            <div className="hidden absolute w-1 sm:block h-full bg-indigo-300 left-1/2 transform-translate-x-1/2"></div>
            {/*Tarjeta Izquierda */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-ponter ease-in duration-150"
                    >
                      <h3 className="text-primaryColor font-[500] mb-3 group-hover:text-white group-hover:font-[400] text-2xl">
                        Educacion para las oportunidades
                      </h3>
                      <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                        Buscamos generar mejores oportunidades para los hijos de
                        los pescadores artesanales a traves de la educacion
                      </p>
                    </div>
                  </div>
                </div>

                {/*Logo en medio de la linea */}
                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                  <figure>
                    <AiOutlineRead />
                  </figure>
                </div>
              </div>
            </div>

            {/*Tarjeta Derecha */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-end w-full items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-ponter ease-in duration-150"
                    >
                      <h3 className="text-primaryColor font-[500] mb-3 group-hover:text-white group-hover:font-[400] text-2xl">
                        Crecimiento Integral
                      </h3>
                      <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                        Buscamos promover oportunidades de
                        aprendizaje, fortalecer el cumplimiento de los derechos
                        fundamentales de los niños y jovenes beneficiarios de
                        nuestra fundacion y contrbuir su bienestar de salud
                        mental
                      </p>
                    </div>
                  </div>
                </div>

                {/*Logo en medio de la linea */}
                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                  <figure>
                    <AiOutlineRise />
                  </figure>
                </div>
              </div>
            </div>

            {/*Tarjeta Izquierda 2 */}

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex items-center flex-col sm:flex-row">
                <div className="flex justify-start w-full items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-ponter ease-in duration-150"
                    >
                      <h3 className="text-primaryColor font-[500] mb-3 group-hover:text-white group-hover:font-[400] text-2xl">
                        Emprendimiento y desarrollo productivo sostenible
                      </h3>
                      <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                        Empoderar a los pescadores y pescadoras gracias a la consecución de los elementos basicos necesarios para llevar a cabo la labor de pesca artesanal
                      </p>
                    </div>
                  </div>
                </div>

                {/*Logo en medio de la linea */}
                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                  <figure>
                    <AiOutlineDollarCircle />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
