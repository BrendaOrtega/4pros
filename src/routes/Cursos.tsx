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
import SecondaryButton from "../common/SecondaryButton";

export default function Cursos() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="relative">
      <Navbar />
      <section className=" max-w-7xl w-[90%] xl:w-full mx-auto  overflow-hidden pt-[120px] lg:pt-[80px] xl:pb-20 ">
        {/* <h2 className="text-3xl md:text-5xl	 font-bold text-center">
          Cursos grupales
        </h2> */}
        <div className="flex items-stretch mt-10 md:mt-[120px] flex-wrap lg:flex-nowrap">
          <div className="pr-0 lg:pr-16 text-iron font-light text-lg lg:text-xl w-full lg:w-[50%]">
            <h3 className="text-3xl lg:text-5xl text-black font-semibold mb-8">
              Cursos abiertos
            </h3>
            <p>
              Explora nuestros cursos en línea grupales con cupo disponible.
              Cada grupo está limitado a{" "}
              <span className="text-plant font-medium">
                {" "}
                6 estudiantes, con un costo desde $125 MXN por hora.
              </span>
            </p>
            <p className="my-6">
              Si no ves el curso que necesitas, por favor escríbenos. Ofrecemos
              cursos personalizados con horarios flexibles.
            </p>
            <CardCollapse
              level="B2"
              img="/card1.png"
              title="Inglés de negocios - Nivel B2 (Intermedio - avanzado)"
              description="Martes, jueves y viernes, 7 - 8 AM"
            />
            <CardCollapse
              level="C2"
              img="/card2.png"
              title="Inglés de negocios - Nivel C1 (Avanzado)"
              description="Martes y jueves, 8 - 9 PM"
            />
            <CardCollapse
              level="A2"
              img="/card3.png"
              title="Inglés general - Nivel A2 (Pre-intermedio)"
              description="Lunes y miércoles, 8:30 - 9:30 PM"
            />

            <div className="mt-12 xl:mt-[100px] mb-10">
              <a
                href="https://buff.ly/39rX3FX"
                target="_blank"
                rel="noreferrer"
              >
                <SecondaryButton
                  className="text-base mb-6 "
                  title="Hacer examen de nivel"
                />
              </a>

              <a
                href="https://wa.me/525539599400"
                target="_blank"
                rel="noreferrer"
              >
                <PrimaryButton
                  title="Me interesa inscribirme a un curso"
                  className=" mt-4 text-base"
                />
              </a>
            </div>
          </div>
          <img
            className="w-full lg:w-[50%] hidden md:block rounded-[40px]  object-cover object-left  mt-10 lg:mt-0 lg:h-auto h-[240px] mb-10 lg:mb-0"
            src="/cursos.png"
            alt="english meeting"
          />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-20 mt-10 md:mt-20">
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
        </div> */}
      </section>
      <Banner />
      <Contact />
      <Footer />
      <a href="https://wa.me/525539599400" target="_blank" rel="noreferrer">
        <button className="fixed right-4 md:right-8 bottom-4 md:bottom-8 hover:translate-y-[-8px] transition-all bg-[#4AC959] rounded-full h-14  z-50 flex gap-2 items-center text-white px-4">
          <img src="/whats.svg" />
          Contactar
        </button>
      </a>
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

const CardCollapse = ({
  title,
  description,
  img,
  level,
}: {
  title: string;
  description: string;
  img?: string;
  level: string;
}) => {
  return (
    <section className="border-[1px] border-[#EFEFEF] flex gap-3 p-2 rounded-2xl items-center mb-6">
      <img className="rounded-lg w-16 h-16 object-cover" src={img} />
      {/* <div className="rounded-2xl w-16 h-16 bg-plant flex justify-center  text-white text-2xl font-semibold items-center">
        {level}
      </div> */}
      <div>
        <h3 className="text-base font-bold text-dark">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
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
