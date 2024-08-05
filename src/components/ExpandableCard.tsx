import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Teachers = () => {
  return (
    <section className=" bg-[#F7F9FA] w-full py-[64px] lg:py-[120px] mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl text-black font-semibold mb-8 lg:mb-20">
          Conoce al equipo directivo
        </h2>
        <ExpandableCard />
      </div>
    </section>
  );
};

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[1100px]  h-full md:h-fit md:max-h-[90%]  flex flex-wrap lg:flex-nowrap  bg-white  sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                className="-mt-[10%] lg:mt-0"
                layoutId={`image-${active.title}-${id}`}
              >
                <img
                  src={active.src}
                  alt={active.title}
                  className="min-w-[100vw] md:min-w-[420px] mx-auto   h-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-bottom"
                />
              </motion.div>

              <div>
                <div className="pt-8 relative px-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-left font-light text-iron text-lg md:text-sm lg:text-base h-[360px] md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" w-full gap-4   grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 w-full flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50  rounded-xl cursor-pointer"
          >
            <div className=" group flex gap-4 flex-col md:flex-row relative ">
              <div className="group-hover:rotate-12 transition-all absolute w-10 h-10 bg-plant rounded-full flex items-center justify-center right-4 top-4">
                <img src="/plus.svg" />
              </div>
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-[400px] lg:h-[480px] w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    src: "/katherine.svg",
    title: "Katherine Manson",
    content: () => {
      return (
        <div>
          <p>
            Formada y certificada en Vancouver, Canadá, Katherine Manson
            <span className="text-plant font-semibold">
              {" "}
              ha creado cursos, capacitado a profesores y enseñado inglés para
              negocios y general durante más de 20 años.
            </span>{" "}
            Ella admira a todos sus alumnos, pero siente una especial admiración
            por aquellos que, a pesar de haber estudiado inglés durante años,
            aún carecen de la confianza o las habilidades necesarias para
            comunicarse de manera efectiva en el idioma.
          </p>
          <p className="mt-4">
            El objetivo de Katherine con cada estudiante en
            English4professionals es{" "}
            <span className="text-plant font-semibold">
              transformar el inglés en un activo valioso en lugar de una barrera
              en sus vidas profesionales.
            </span>{" "}
            Su enfoque se centra en ofrecer a los estudiantes las herramientas
            necesarias para alcanzar sus metas individuales.
          </p>
          <p className="mt-4">
            Katherine enseña{" "}
            <span className="text-plant font-semibold">
              {" "}
              inglés de negocios
            </span>
            , así como preparación para los exámenes
            <span className="text-plant font-semibold">
              TOEFL, IELTS y Cambridge.
            </span>
            Además, ofrece una variedad de talleres, incluyendo
            <span className="text-plant font-semibold">
              {" "}
              la creación de presentaciones atractivas, la preparación para
              entrevistas de trabajo y la conducción de reuniones de negocios
              efectivas.
            </span>
          </p>
        </div>
      );
    },
  },
  {
    title: "DALIA VÁSQUEZ,",
    src: "/dalia.svg",

    content: () => {
      return (
        <div>
          <p>
            Dalia Vásquez tiene{" "}
            <span className="text-plant font-semibold">
              {" "}
              siete años de experiencia{" "}
            </span>
            como maestra de inglés y directora en English4professionals.
            Originaria de Veracruz, se graduó en Diseño Industrial por el
            Tecnológico de Monterrey en 2011. Su pasión por la enseñanza comenzó
            después de pasar un año como au pair en el extranjero. En 2015,
            obtuvo la{" "}
            <span className="text-plant font-semibold">
              certificación CELTA para enseñar inglés como segundo idioma{" "}
            </span>{" "}
            en la Ciudad de México. A lo largo de su carrera, ha tenido el
            privilegio de trabajar con niños, adolescentes y adultos,
            impartiendo clases tanto de inglés general como de negocios, desde
            nivel básico hasta avanzado. En la actualidad,{" "}
            <span className="text-plant font-semibold">
              {" "}
              se especializa en niveles básico, principiante y pre-intermedio.{" "}
            </span>{" "}
          </p>
          <p className="mt-4">
            Para Dalia, enseñar inglés en línea ha sido una experiencia
            sumamente enriquecedora, ya que le ha permitido conectar con
            estudiantes de toda la república y{" "}
            <span className="text-plant font-semibold">
              adaptarse a sus horarios y necesidades.
            </span>{" "}
            Le apasiona el reto de ayudar a sus alumnos a comprender y utilizar
            el inglés mediante diversas actividades en diferentes contextos,
            <span className="text-plant font-semibold">
              mejorando su fluidez, vocabulario y estructura.
            </span>
          </p>
          <p className="mt-4">
            Actualmente, Dalia reside en Córdoba, Veracruz, donde disfruta de
            caminatas, la lectura, el cine y pasar tiempo con su familia.
          </p>
        </div>
      );
    },
  },

  {
    title: "GINA GONZÁLEZ",
    src: "/gina.png",

    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="text-lg">
          <p>
            Gina González tiene{" "}
            <span className="text-plant font-semibold">
              más de 20 años de experiencia
            </span>{" "}
            en la enseñanza del inglés. Estudió el diploma de enseñanza del
            inglés desde antes de la carrera y jamás ha dejado aquella primera
            pasión.{" "}
            <span className="text-plant font-semibold">
              Es psicóloga de profesión
            </span>{" "}
            y cuando no se encuentra en clases en línea, la verás diseñando
            <span className="text-plant font-semibold">
              cursos y material educativo relacionado con actualización de
              habilidades de negocios para profesionistas.
            </span>
          </p>
          <p className="mt-4">
            Lo que más disfruta como maestra es el desafío de recibir
            estudiantes desanimados y frustrados porque no han logrado aprender
            inglés a pesar de muchos esfuerzos y trabajar en conjunto con ellos
            para, ayudarles a{" "}
            <span className="text-plant font-semibold">
              {" "}
              lograr sus objetivos y demostrarles que sí podían.
            </span>
          </p>
          <p className="mt-4">
            Actualmente vive en Metepec, Estado de México, con su esposo, su
            hijo pequeño y sus dos perros.
          </p>
        </div>
      );
    },
  },
];

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
