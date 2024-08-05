import React from "react";

export const Contact = () => {
  return (
    <main id="contacto">
      <section className="max-w-7xl w-[90%] xl:w-full mx-auto mt-20 lg:mt-[160px] flex flex-wrap lg:flex-nowrap  h-auto">
        <div className="lg:w-[60%] w-full h-auto">
          <h2 className="text-3xl lg:text-5xl	 font-bold text-lef leading-tight ">
            ¿Quieres saber más sobre nuestros cursos? Escríbenos.
          </h2>
          <div className="items-end gap-6 mt-28 hidden lg:flex">
            <img
              className="w-[280px] h-[400px] object-cover rounded-3xl"
              src="https://i.imgur.com/QAUuVhn.jpg"
            />
            <div className="flex flex-col gap-6">
              <img
                className="w-[180px] h-[120px] object-cover rounded-3xl"
                src="https://i.imgur.com/KeJQu39.jpg"
              />
              <img
                className="w-[280px] h-[120px] object-cover rounded-3xl"
                src="https://i.imgur.com/RmY6Q7F.jpg"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] w-full mt-12 lg:mt-0">
          <iframe
            frameBorder="0"
            id="formmy-iframe"
            title="formmy"
            width="100%"
            height="700px"
            src="https://formmy.app/embed/669d774fdcf860e0aa48b033"
          ></iframe>
        </div>
      </section>
    </main>
  );
};
