import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { InfiniteMovingCards } from "./infinite";
import { ImagesSlider } from "./ImagesSlider";
import { motion } from "framer-motion";

export const Courses = () => {
  return (
    <section className="max-w-7xl w-[90%] lg:w-full mx-auto mt-[120px] lg:mt-[160px]">
      <h2 className="text-3xl md:text-5xl	 font-bold text-center">
        Conoce nuestros cursos
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap items-center mt-[64px] lg:mt-[120px]">
        <div className="w-full lg:w-[50%]">
          <h3 className="text-2xl lg:text-4xl text-black font-semibold mb-8">
            Business English courses
          </h3>
          <div className="flex flex-col gap-4 mb-12 pr-0 lg:pr-16 ">
            <Item text="Clases a todas las edades: niños, adolescentes, universitarios y adultos" />
            <Item text="Clases de regularización, apoyo con tareas y proyectos, club de conversación" />
            <Item text="Preparación para exámenes de certificación como TOEFL, IELTS y Cambridge A1 – C1" />
          </div>
          <a href="https://wa.me/525539599400?text=¡Hola!%Quiero%20solicitar%20información%20de%20los%20Business%20English%20Courses%20para%20mi%20empresa">
            <PrimaryButton title="Solicitar información" />
          </a>
        </div>
        <img
          className="w-full lg:w-[50%] rounded-[40px] min-h-auto mt-10 lg:mt-0 lg:min-h-[480px]"
          src="/business.svg"
        />
      </div>
      <div className="flex flex-wrap-reverse lg:flex-nowrap items-center mt-[64px] lg:mt-[200px]">
        <img
          className="w-full lg:w-[50%] rounded-[40px] min-h-auto mt-10 lg:mt-0 lg:min-h-[480px]"
          src="/general.svg"
        />
        <div className="pl-0 lg:pl-16 w-full lg:w-[50%]">
          <h3 className="text-2xl lg:text-4xl text-black font-semibold mb-8">
            General English courses
          </h3>
          <div className="flex flex-col gap-4 mb-12 ">
            <Item text="Examen de nivel y análisis de necesidades" />
            <Item text="Evaluaciones mensuales" />
            <Item text="Examen final alineado con estándares internacionales – Marco Común Europeo de Referencia para las lenguas (CEFR en inglés)" />
            <Item text="Preparación para exámenes de certificación como TOEFL, IELTS y TOEIC" />
            <Item text="Certificado de cumplimiento del nivel digital e impreso" />
          </div>
          <a href="https://wa.me/525539599400?text=¡Hola!%Quiero%20solicitar%20información%20de%20los%20curos.">
            <PrimaryButton title="Solicitar información" />
          </a>
        </div>
      </div>
    </section>
  );
};

export const Banner = () => {
  const images = ["/banner1.svg", "/banner2.svg"];
  const photos = ["/banner-md1.png", "/banner-md2.svg"];
  return (
    <section className="my-28 lg:my-[160px] max-w-7xl mx-auto  w-[90%] lg:w-full h-[304px] overflow-hidden rounded-[40px]">
      <ImagesSlider className="h-full lg:hidden" images={photos}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-end mb-4 "
        >
          <a href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción.">
            <PrimaryButton title="Me interesa la promoción" />
          </a>
        </motion.div>
      </ImagesSlider>
      <ImagesSlider className="h-full hidden lg:flex " images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-end mb-4 "
        >
          <a href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción.">
            <PrimaryButton title="Me interesa la promoción" />
          </a>
        </motion.div>
      </ImagesSlider>
    </section>
  );
};

export const Item = ({ text }) => {
  return (
    <section className="flex items-center gap-3 text-lg lg:text-xl	 text-iron font-light">
      <img src="/check.svg" />
      <p>{text}</p>
    </section>
  );
};
