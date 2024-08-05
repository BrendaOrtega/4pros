import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { InfiniteMovingCards } from "./infinite";

const companies = [
  {
    company: "/companies/img1.png",
  },
  {
    company: "/companies/img2.png",
  },
  {
    company: "/companies/img3.png",
  },
  {
    company: "/companies/img4.png",
  },
  {
    company: "/companies/img5.png",
  },
  {
    company: "/companies/img6.png",
  },
  {
    company: "/companies/img7.png",
  },
  {
    company: "/companies/img1.png",
  },
  {
    company: "/companies/img2.png",
  },
  {
    company: "/companies/img3.png",
  },
  {
    company: "/companies/img4.png",
  },
  {
    company: "/companies/img5.png",
  },
  {
    company: "/companies/img6.png",
  },
  {
    company: "/companies/img7.png",
  },
];

export const About = () => {
  return (
    <section className="max-w-7xl  w-[90%] xl:w-full mx-auto">
      <div className="flex items-stretch mt-[120px] flex-wrap-reverse lg:flex-nowrap">
        <img
          className="w-full lg:w-[50%] rounded-[40px]  object-cover object-bottom  mt-10 lg:mt-0 lg:h-auto h-[380px]"
          src="/about.png"
        />
        <div className="pl-0 lg:pl-16 text-iron font-light text-lg lg:text-xl w-full lg:w-[50%]">
          <h3 className="text-3xl lg:text-5xl text-black font-semibold mb-8">
            Quienes somos
          </h3>
          <p className="mb-6">
            English4pros fue fundada hace casi 10 años por tres profesoras de
            inglés, dedicadas a enseñar inglés general y de negocios con un
            enfoque innovador y personalizado. Nos une nuestra pasión por el
            inglés y el firme compromiso de ayudar a nuestros alumnos a
            comunicarse eficazmente.
          </p>
          <p className="mb-6">
            Nuestra misión es clara: transformar el aprendizaje del inglés en
            una experiencia positiva y enriquecedora. Todos nuestros maestros
            son hablantes nativos de inglés o 100% bilingües certificados, con
            formación en la docencia del idioma y muchos años de experiencia.
          </p>
          <p className="mb-12">
            Nos caracteriza una pasión en la enseñanza de inglés para asegurar
            que las clases apoyen a nuestros estudiantes a alcanzar sus metas,
            asegurándonos de que el inglés sea una herramienta útil, no un
            obstáculo. Con nuestra guía, les ayudamos a expresarse rápidamente y
            con confianza, desbloqueando nuevas oportunidades profesionales.
          </p>
          <a href="#contacto">
            <PrimaryButton title="Contáctanos" />
          </a>
        </div>
      </div>
      <InfiniteMovingCards items={companies} direction="right" speed="slow" />
    </section>
  );
};
