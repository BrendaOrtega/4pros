import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { InfiniteMovingCards } from "./infinite";
import { ImagesSlider } from "./ImagesSlider";
import { motion } from "framer-motion";

export const Courses = () => {
  return (
    <section className="max-w-7xl w-[90%] xl:w-full mx-auto mt-[120px] lg:mt-[160px]">
      <h2 className="text-3xl md:text-5xl	 font-bold text-center">
        Conoce nuestros cursos
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap items-center mt-[64px] lg:mt-[120px]">
        <div className="w-full lg:w-[50%]">
          <h3 className="text-2xl lg:text-4xl text-black font-semibold mb-8">
            Cursos de inglés de negocios
          </h3>
          <div className="flex flex-col gap-4 mb-12 pr-0 lg:pr-16 ">
            <Item text="Cursos completos 100% online, niveles principiante a avanzado" />
            <Item text="Temas incluidos: entrevistas de trabajo, presentaciones, juntas y negociaciones" />
            <Item text="Examen final alineado con estándares internacionales (CEFR)" />
            <Item text="Certificado digital de cumplimiento del nivel" />
          </div>
          <a
            href="https://wa.me/525539599400?text=¡Hola!%20Quiero%20solicitar%20información%20de%20los%20Cursos%20de%20Inglés%20de%20negocios%20para%20mi%20empresa"
            target="_blank"
            rel="noreferrer"
          >
            <PrimaryButton title="Solicitar información" />
          </a>
        </div>
        <img
          className="w-full lg:w-[50%] rounded-[40px] min-h-auto mt-10 lg:mt-0 lg:min-h-[480px] hover:scale-95 transition-all"
          src="/business.png"
        />
      </div>
      <div className="flex flex-wrap-reverse lg:flex-nowrap items-center mt-[64px] lg:mt-[200px]">
        <img
          className="w-full lg:w-[50%] rounded-[40px] min-h-auto mt-10 lg:mt-0 lg:min-h-[480px] hover:scale-95 transition-all"
          src="/general.png"
        />
        <div className="pl-0 lg:pl-16 w-full lg:w-[50%]">
          <h3 className="text-2xl lg:text-4xl text-black font-semibold mb-8">
            Cursos de inglés general
          </h3>
          <div className="flex flex-col gap-4 mb-12 ">
            <Item text="Cursos completos 100% online de inglés general, niveles básico a avanzado " />
            <Item text="Examen final alineado con estándares internacionales (CEFR)" />
            <Item text="Preparación para exámenes de certificación como TOEFL, IELTS y TOEIC" />
            <Item text="Certificado digital de cumplimiento del nivel " />
          </div>
          <a
            href="https://wa.me/525539599400?text=¡Hola!%20Quiero%20solicitar%20información%20de%20los%20cursos%20de%20inglés%20general."
            target="_blank"
            rel="noreferrer"
          >
            <PrimaryButton title="Solicitar información" />
          </a>
        </div>
      </div>
    </section>
  );
};

export const Banner = () => {
  const images = ["/banner1.svg", "/banner2.png", "/banner3.png"];
  const photos = ["/banner-md1.png", "/banner2-md.png", "/banner3-md.png"];
  const small = ["/banner-s.svg", "/banner2-md.png", "/banner3-s.png"];
  return (
    <section className="my-28 lg:my-[160px] max-w-7xl mx-auto  w-[90%] xl:w-full h-[304px] overflow-hidden rounded-[40px]">
      <ImagesSlider className="h-full md:hidden" images={small}>
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
          <a
            href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción."
            target="_blank"
            rel="noreferrer"
          >
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
          <a
            href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción."
            target="_blank"
            rel="noreferrer"
          >
            <PrimaryButton title="Me interesa la promoción" />
          </a>
        </motion.div>
      </ImagesSlider>
      <ImagesSlider className="h-full hidden md:flex " images={photos}>
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
          <a
            href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción."
            target="_blank"
            rel="noreferrer"
          >
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
