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
import { twMerge } from "tailwind-merge";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function Home() {
  const { t, updateLang } = useTranslation();

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
          <span className="hidden md:block">{t("whats")}</span>
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
  const { t, updateLang, lang } = useTranslation();

  const onChange = (event) => {
    updateLang(event.target.value);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    console.log("idioma");
  };

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
            <p> {t("tab_one")}</p>
          </Link>
          <Link to="/preguntas-frecuentes" className="hidden md:block">
            <p> {t("tab_two")}</p>
          </Link>
          <div>
            <select
              onChange={onChange}
              className="custom-select bg-white focus:outline-none"
              name="select"
              value={lang}
            >
              <option value="es">🇲🇽 ES</option>
              <option value="en">🇺🇸 EN</option>
            </select>
          </div>
          <div onClick={handleClick}>
            <PrimaryButton>
              <p> {t("cta_one")}</p>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F7F9FA] w-full py-16 lg:py-[120px] overflow-hidden">
      <ScrollReveal>
        <h2 className="text-3xl lg:text-5xl text-center mb-12 md:mb-20 text-black font-semibold ">
          {t("students_title")}
        </h2>{" "}
      </ScrollReveal>
      <ScrollReveal>
        <SimpleAnimatedGallery />
      </ScrollReveal>
    </section>
  );
};
