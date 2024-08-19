import { Link } from "react-router-dom";
import "../App.css";
import { ReactNode, useEffect, useState } from "react";
import React from "react";
import { Navbar } from "./home";
import { Banner } from "../components/Courses";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { AnimatePresence, easeOut, motion } from "framer-motion";

export default function Faq() {
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
      <section className=" max-w-7xl mx-auto   pt-[180px] ">
        <h2 className="text-3xl lg:text-5xl	 font-bold text-center">
          Preguntas frecuentes
        </h2>
      </section>
      <List />
      <Banner />
      <div className="mt-4 lg:mt-[40px]"></div>
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

export const List = () => (
  <section className="max-w-[90%] xl:max-w-7xl mx-auto pt-[0px] ">
    <div className="mt-10 lg:mt-20">
      <Question
        question="¿Para quién es English4Professionals?"
        answer={
          <p>
            English4Professionals está diseñado para adultos que desean mejorar
            sus habilidades en inglés en línea y aumentar su empleabilidad.
            También ofrecemos clases generales de inglés para niños,
            adolescentes y adultos, así como clases corporativas para empresas
            que desean proporcionar formación en inglés a sus empleados. Para
            más información sobre estas opciones, contáctenos en
            <a
              className="underline text-plant ml-1"
              href="mailto:english4professionals@hotmail.com"
              rel="noreferrer"
            >
              english4professionals@hotmail.com.
            </a>
          </p>
        }
      />
      <Question
        question="¿Con qué frecuencia y duración son las clases?"
        answer="Nuestras clases tienen una duración de una hora y recomendamos asistir de 2 a 3 veces por semana, con actividades adicionales en casa diarias para practicar. "
      />
      <Question
        question="¿Cuánto dura un nivel?"
        answer="En English4professionals seguimos los niveles estandarizados internacionalmente descritos por el Marco Común Europeo (MCER). Cada uno de estos niveles suele requerir entre 140 y 200 horas de estudio. "
      />
      <Question
        question="¿Cuál es el costo de las clases?"
        answer="El costo individual varía según el número de personas en el grupo. La siguiente tabla muestra el costo por persona en diferentes tamaños de grupo, así como el precio con descuento al adquirir un paquete de 20 clases con un 10% de descuento."
      />
      <Question
        question="¿Cómo se realiza el pago?"
        answer="El pago se realiza mensualmente por transferencia bancaria."
      />
      <Question
        question="¿Qué pasa si no puedo asistir a una clase?"
        answer="Ofrecemos clases de repaso breves sin costo para ayudarte a ponerte al día con el material de clase. Estas clases duran de 20 a 30 minutos y se programan según tu conveniencia y la del profesor. "
      />
      <Question
        question="¿Ofrecen clases especializadas para ciertas profesiones o habilidades?"
        answer="Llevamos a cabo un análisis de necesidades al inicio del curso para garantizar que nuestras clases de inglés para negocios se adapten específicamente a las necesidades del grupo."
      />
      <Question
        question="¿Están incluidos los materiales en el costo?"
        answer="Sí. Todos los materiales, incluyendo una versión digital del libro del curso y cualquier material suplementario, están incluidos en el costo."
      />
      <Question
        question="¿Puedo tener una clase de prueba gratuita?"
        answer="Ofrecemos dos clases de prueba gratuitas para asegurarnos de que el nivel, el horario y la metodología se ajusten a tus necesidades."
      />
      <Question
        question="¿Puedo cambiar mi horario de clases después de inscribirme?"
        answer="Sí. Te ofreceremos opciones de grupo alternativas en el mismo nivel si están disponibles, o puedes considerar cambiar a clases individuales si es necesario."
      />
      <Question
        question="¿Cuánto tiempo tardaré en hablar inglés con fluidez en mi trabajo?"
        answer="Esto dependerá de tu nivel actual y del tiempo que puedas dedicar al inglés tanto dentro como fuera de las clases. Por lo general, pasar de un nivel principiante a un nivel altamente competente toma alrededor de 4 años o unas 800 horas de clases."
      />
      <Question
        question="¿Recibiré un certificado al finalizar el curso?"
        answer="Sí. Recibirás un certificado al final de cada nivel."
      />
      <Question
        question="¿Dan clases presenciales?"
        answer="Todas nuestras clases son en línea, diseñadas para optimizar tu tiempo, simular el uso del inglés en entornos profesionales reales y garantizar que asignamos al mejor profesor a cada grupo, sin importar la ubicación."
      />
      <Question
        question="¿Ofrecen descuentos para inscripciones grupales de la misma empresa?"
        answer="Sí. Puedes tomar 8 clases gratuitas (¡aproximadamente 1 mes gratis!) por cada persona que recomiendes y que se convierta en estudiante de English4Professionals. No es necesario que todos estén en el mismo grupo."
      />
      <Question
        question="¿Cómo puedo saber mi nivel de inglés?"
        answer="Puedes realizar una prueba de nivel de inglés gratuita haciendo clic en el botón ubicado en la parte superior de esta página. Una vez recibamos los resultados, nos pondremos en contacto contigo para informarte sobre tu nivel y las clases disponibles."
      />
      <Question
        question="¿Qué plataformas utilizan para las clases en línea?"
        answer="Podemos adaptarnos a la plataforma de tu preferencia. Actualmente utilizamos Teams, Zoom y Google Meet."
      />
      <Question
        question="¿Qué necesito para la clase?"
        answer="Te recomendamos tener una computadora o tableta, una conexión a Internet confiable, audífonos y micrófono y, como en todas las clases, ¡un cuaderno y una pluma para tomar notas!"
      />
      <Question
        question="¿Cómo puedo mantenerme en contacto con English4professionals?"
        answer="Puedes contactarnos directamente a través de WhatsApp y correo electrónico. Además, te invitamos a seguirnos en Facebook, LinkedIn e Instagram (haz clic en cada ícono de redes sociales para visitar nuestro perfil)."
      />
    </div>
  </section>
);

export const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-brand_pale border-b-[1px]">
      <button
        className="w-full px-6 py-8 text-xl md:text-2xl font-medium text-left flex justify-between"
        onClick={() => {
          setOpen((o) => !o);
        }}
      >
        <p className="w-[90%]">{question}</p>
        {open ? (
          <div className="bg-black rounded-full h-10 w-10 flex justify-center items-center  transition-all rotate-90">
            <img src="/arrow-right.svg" />
          </div>
        ) : (
          <div className="bg-black rounded-full h-10 w-10 flex justify-center items-center  transition-all">
            <img src="/arrow-right.svg" />
          </div>
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <p className="text-lg text-iron font-light px-6 pb-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
