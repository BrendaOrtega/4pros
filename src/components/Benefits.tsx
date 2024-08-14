import React from "react";

export const Benefits = () => {
  return (
    <section className="max-w-7xl w-[90%] xl:w-full py-[80px] lg:py-[120px] text-center mx-auto">
      {" "}
      <h2 className="text-3xl lg:text-5xl	 font-bold text-center">
        Qué nos hace diferentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-20  gap-10 md:gap-20">
        <Benefit
          img="/benefits/img1.svg"
          title="Experiencia"
          description=" Profesores 100% bilingües o que son hablantes nativos, capacitados y
        certificados."
        />
        <Benefit
          img="/benefits/img2.svg"
          title="Metodología comunicativa"
          description=" Nuestras clases se enfocan en hablar y escuchar."
        />
        <Benefit
          img="/benefits/img3.svg"
          title="Enfoque práctico"
          description=" Aprende el idioma que necesitas AHORA para situaciones reales, sin memorizar listas."
        />{" "}
        <Benefit
          img="/benefits/img4.svg"
          title="Personalización"
          description=" Clases personalizadas y dinámicas, diseñadas según tus necesidades individuales."
        />{" "}
        <Benefit
          img="/benefits/img5.svg"
          title="Grupos reducidos"
          description=" Máximo 6 personas por grupo."
        />{" "}
        <Benefit
          img="/benefits/img6.svg"
          title="¿Te perdiste una clase?"
          description=" ¡No te preocupes! Ofrecemos clases de recuperación sin costo para que siempre estés al día con el material de la clase."
        />{" "}
        <Benefit
          img="/benefits/img7.svg"
          title="Seguimiento"
          description=" Evaluaciones mensuales para seguir de cerca tu progreso."
        />{" "}
        <Benefit
          img="/benefits/img8.svg"
          title="Clases en vivo 100% en línea"
          description=" Para que aproveches al máximo tu tiempo. Puedes tomarlas desde cualquier lugar con una computadora y conexión a Internet."
        />{" "}
        <Benefit
          img="/benefits/img9.svg"
          title="Dos clases sin costo"
          description="Para asegurarnos de que el nivel, horario, material y metodología se adaptan a tus necesidades. "
        />
      </div>
    </section>
  );
};

export const Benefit = ({ img, title, description }) => {
  return (
    <section className="flex flex-col items-center md:items-start text-center md:text-left">
      <img className="mb-6" src={img} />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-base text-iron font-light">{description}</p>
    </section>
  );
};
