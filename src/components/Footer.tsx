import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="bg-black rounded-t-[40px] w-full relative md:pl-6 xl:pl-0">
      <div className="bg-footer bg-cover bg-left-top absolute right-0 flex h-12 px-10 gap-2 pt-2">
        {" "}
        <a
          href="https://www.facebook.com/English4Pros"
          target="_blank"
          title="facebook"
        >
          <img className="w-8 h-8" src="/fb.svg" />
        </a>
        <a
          href="https://www.linkedin.com/company/english-4-professionals/posts/?feedView=all"
          target="_blank"
          title="linkedin"
        >
          <img src="/in.svg" />
        </a>
        <a
          href="https://www.instagram.com/e4pros/"
          target="_blank"
          title="instagram"
        >
          <img src="/insta.svg" />
        </a>
      </div>
      <div className="max-w-7xl  mx-auto pt-12 pl-[5%] md:pl-0 pr-[12%] flex justify-between flex-wrap md:flex-nowrap gap-10 md:gap-0">
        <div className="w-full md:w-auto">
          <img className="w-20" src="./logo.svg" />
        </div>
        <div className="text-white font-light flex flex-col gap-3">
          <h3 className="text-[#B4B4B4] ">English4pros</h3>
          <Link to="/cursos">
            <p>Cursos abiertos</p>
          </Link>
          <Link to="/preguntas-frecuentes">
            <p>Preguntas frecuentes</p>
          </Link>
        </div>
        <div className="text-white font-light flex flex-col gap-3">
          <h3 className="text-[#B4B4B4]">Contacto</h3>
          <a href="mailto:english4professionals@hotmail.com" rel="noreferrer">
            <p>english4professionals@hotmail.com</p>
          </a>
          <a href="tel:+5239599400" rel="noreferrer">
            <p>+52 39 59 94 00</p>
          </a>
        </div>
      </div>
      <hr className="bg-white/10 border-none mt-12 h-[1px]" />
      <p className="text-sm text-center font-light text-[#A19E9E] opacity-50 py-4">
        Todos los derechos reservados english4pros® 2024
      </p>
    </section>
  );
};
