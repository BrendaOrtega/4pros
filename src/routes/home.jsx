import { Link } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";
import { About } from "../components/About";
import { Benefits } from "../components/Benefits";
import { Contact } from "../components/Contact";
import { Banner, Courses, ScrollReveal } from "../components/Courses";
import { Teachers } from "../components/ExpandableCard";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { SimpleAnimatedGallery } from "../components/SimpleAnimatedGallery";
import { reviwes } from "../lib/utils";
import { twMerge } from "tailwind-merge";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Courses />
      <Banner />
      <About />
      <Teachers />
      <Benefits />
      <Testimonial />
      <Contact />
      <Footer />
      <a href="https://wa.me/525539599400" target="_blank" rel="noreferrer">
        <button className="fixed right-4 md:right-8 bottom-4 md:bottom-8 hover:translate-y-[-8px] transition-all bg-[#4AC959] rounded-full h-14  z-50 flex gap-2 items-center text-white px-2 md:px-4">
          <img src="/whats.svg" />
          <span className="hidden md:block">Contactar</span>
        </button>
      </a>
    </main>
  );
}

export const Navbar = () => {
  const handleClick = () => {
    const node = document.querySelector("#contacto");
    node.scrollIntoView({ behavior: "smooth" });
  };
  const { scrollYProgress } = useScroll();
  const [z, setZ] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (val) => {
    setZ(val > 0 ? true : false);
  });

  return (
    <section
      className={twMerge(
        " fixed flex justify-center w-full z-50  items-center bg-white transition-all ",
        z ? "border-b-[.5px] border-black/10" : "border-none"
      )}
    >
      <div className="w-[90%] xl:w-full max-w-7xl mx-auto flex items-center justify-between h-20 md:h-[112px]">
        <Link to="/">
          <img className="h-24 md:h-32" src="/logo-black.png" />
        </Link>
        <div className="flex text-right md:text-center items-center gap-8">
          <Link to="/cursos">
            <p>Cursos abiertos</p>
          </Link>
          <Link to="/preguntas-frecuentes" className="hidden md:block">
            <p>Preguntas frecuentes</p>
          </Link>
          <div onClick={handleClick}>
            <PrimaryButton title="Contactar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonial = () => {
  return (
    <section className="bg-[#F7F9FA] w-full py-16 lg:py-[120px] overflow-hidden">
      <ScrollReveal>
        <h2 className="text-3xl lg:text-5xl text-center mb-12 md:mb-20 text-black font-semibold ">
          Qué opinan nuestros estudiantes
        </h2>{" "}
      </ScrollReveal>
      <ScrollReveal>
        <SimpleAnimatedGallery pics={reviwes} />
      </ScrollReveal>
    </section>
  );
};
