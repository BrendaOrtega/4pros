import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="pt-[180px]">
      <section className=" max-w-[90%] mx-auto lg:max-w-7xl bg-image bg-center min-h-[75vh] bg-cover rounded-[40px] relative">
        <div className="pt-6 bg-cover h-[240px]  md:h-[280px] bg-bottom	 bg-no-repeat bg-figureMobile md:bg-figure w-full lg:w-[50%] flex flex-col  justify-start items-start absolute left-0 md:left-6 lg:left-[70px] -top-16">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight 	rounded-r-2xl px-6">
            ¡Únete a <span className="text-plant">English4pros</span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight inline-block	rounded-r-2xl px-6">
            y da tu primer paso hacia
          </h1>
          <h1 className="mb-12 text-3xl md:text-5xl font-bold  leading-tight inline-block	rounded-r-2xl px-6">
            el dominio del inglés!
          </h1>
          <div className="flex gap-4 pl-6">
            <a href="#contacto">
              <PrimaryButton title="Contáctanos" />
            </a>
            <SecondaryButton title="Hacer examen de nivel" />
          </div>
        </div>
      </section>
    </section>
  );
};
