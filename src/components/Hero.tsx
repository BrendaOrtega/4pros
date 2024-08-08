import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import { Link } from "react-router-dom";

export const Hero = () => {
  const handleClick = () => {
    console.log("pollo");
    const node = document.querySelector("#contacto");
    node.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="pt-[180px]">
      <section className=" max-w-[90%] mx-auto xl:max-w-7xl backHero bg-center min-h-[75vh] bg-cover rounded-[40px] relative">
        <div className="pt-6 bg-cover h-[280px]  md:h-[280px] bg-left md:bg-bottom	 bg-no-repeat  figure w-full lg:w-[70%] xl:w-[50%] flex flex-col  justify-start items-start absolute left-0 md:left-6 lg:left-[70px] -top-16">
          <div className="hidden xl:block">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight 	rounded-r-2xl pl-6 pr-0 md:px-6">
              ¡Únete a <span className="text-plant">English4pros</span>
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight inline-block	rounded-r-2xl px-6">
              y da tu primer paso hacia
            </h1>
            <h1 className="mb-12 text-3xl md:text-5xl font-bold  leading-tight inline-block	rounded-r-2xl px-6">
              el dominio del inglés!
            </h1>
          </div>
          <div className="block xl:hidden">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight 	rounded-r-2xl pl-6 pr-0 md:px-6 mb-10">
              ¡Únete a <span className="text-plant">English4pros</span> y da tu
              primer paso hacia el dominio del inglés!
            </h1>
          </div>
          <div className="flex gap-4 pl-6">
            <div onClick={handleClick}>
              <PrimaryButton title="Contactar" />
            </div>
            <a href="https://buff.ly/39rX3FX" target="_blank" rel="noreferrer">
              <SecondaryButton title="Hacer examen de nivel" />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};
