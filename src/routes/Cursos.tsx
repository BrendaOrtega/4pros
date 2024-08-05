import { Link } from "react-router-dom";
import "../App.css";

import { useEffect } from "react";
import React from "react";
import { Navbar } from "./home";
import PrimaryButton from "../common/PrimaryButton";
import { twMerge } from "tailwind-merge";
import { Banner } from "../components/Courses";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Cursos() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main>
      <Navbar />
      <section className=" max-w-7xl w-[90%] xl:w-full mx-auto  overflow-hidden pt-[180px] ">
        <h2 className="text-3xl md:text-5xl	 font-bold text-center">
          Cursos abiertos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-20 mt-10 md:mt-20">
          <Card
            image="/course1.svg"
            title="Inglés intermedio - avanzado B2"
            description="Se imparte los días Martes, Jueves y Viernes de 7 a 8 am en grupos máximos de 6 personas. Desde $125 mxn la hora."
          />
          <Card
            image="/course2.svg"
            className="mt-0 md:mt-20 object-bottom"
            title="Inglés Avanzado C1"
            description="Se imparte los días Martes y Jueves de 8 a 9pm en grupos máximos de 6 personas. Desde $125 mxn la hora."
          />
          <Card
            image="/course3.svg"
            className=" object-bottom"
            title="Inglés para profesionales"
            description="Para un nivel A2 básico, este curso se imparte los días Lunes y Miércoles a las 8pm en grupos máximos de 6 personas. Desde $125 mxn la hora."
          />
          <EmptyCard
            title="Inglés intermedio - avanzado"
            description="Se imparte los días Martes y Jueves de 7 a 8 am en grupos máximos de 6 personas. Desde $125 mxn la hora."
          />
        </div>
      </section>
      <Banner />
      <Contact />
      <Footer />
    </main>
  );
}

const Card = ({
  image,
  title,
  description,
  className,
}: {
  image?: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <section>
      <img
        className={twMerge(
          "h-[280px] xl:h-[400px] w-full object-cover object-top rounded-[40px]",
          className
        )}
        src={image ? image : "/photo.webp"}
      />
      <h3 className="text-dark text-3xl font-semibold mt-6">{title}</h3>
      <p className="text-iron mt-4 font-light">{description}</p>
    </section>
  );
};

const EmptyCard = ({
  image,
  title,
  description,
}: {
  image?: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="mt-0 md:mt-20 bg-dark flex flex-col justify-center items-center rounded-[40px] text-center px-10 py-10 md:py-0">
      <h3 className="text-white text-2xl md:text-3xl font-semibold ">
        Si el curso que buscas no está aquí, escríbenos
      </h3>
      <p className="text-[#C4C4C4] mt-4 text-xl md:text-2xl font-extralight">
        Trabajamos con cursos personalizados a horarios flexibles.
      </p>
      <button className="flex group mt-6 md:mt-12">
        <div className="bg-white h-10 text-dark px-4 rounded-full flex justify-center items-center text-center">
          Contactar
        </div>
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-[45deg] transition-all">
          <img src="/arrow-black.svg" alt="arrow" />
        </div>
      </button>
    </section>
  );
};
