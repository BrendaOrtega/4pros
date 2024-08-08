import { Link } from "react-router-dom";
import PrimaryButton from "../common/PrimaryButton";
import { About } from "../components/About";
import { Benefits } from "../components/Benefits";
import { Contact } from "../components/Contact";
import { Banner, Courses } from "../components/Courses";
import { Teachers } from "../components/ExpandableCard";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { SimpleAnimatedGallery } from "../components/SimpleAnimatedGallery";
import { reviwes } from "../lib/utils";

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
        <button className="fixed right-4 md:right-8 bottom-4 md:bottom-8 hover:translate-y-[-8px] transition-all bg-[#4AC959] rounded-full h-14  z-50 flex gap-2 items-center text-white px-4">
          <img src="/whats.svg" />
          Contactar
        </button>
      </a>
    </main>
  );
}

export const Navbar = () => {
  const handleClick = () => {
    console.log("pollo");
    const node = document.querySelector("#contacto");
    node.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className=" fixed flex justify-center w-full z-50  items-center bg-white ">
      <div className="w-[90%] xl:w-full max-w-7xl mx-auto flex items-center justify-between h-[112px]">
        <Link to="/">
          <img className="h-24 md:h-32" src="/logo-black.png" />
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/cursos">
            <p>Cursos grupales</p>
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
      <h2 className="text-3xl lg:text-5xl text-center mb-12 md:mb-20 text-black font-semibold ">
        Qué opinan nuestros estudiantes
      </h2>
      <SimpleAnimatedGallery pics={reviwes} />
    </section>
  );
};
