import React from "react";
import { ScrollReveal } from "./Courses";
import { useTranslation } from "../hooks/useTranslation";

export const Contact = () => {
  const { t, updateLang } = useTranslation();

  return (
    <ScrollReveal>
      <main id="contacto">
        <section className="max-w-7xl w-[90%] xl:w-full mx-auto pt-28 lg:py-[120px] flex flex-wrap lg:flex-nowrap  h-auto">
          <div className="lg:w-[60%] w-full h-auto pr-12">
            <h2 className="text-3xl lg:text-5xl	 font-bold text-lef leading-tight ">
              {t("contact_title")}
            </h2>
            <div className="items-end gap-6 mt-28 hidden lg:flex">
              <img
                className="w-[280px] h-[400px] object-cover rounded-3xl"
                src="https://i.imgur.com/QAUuVhnm.jpg"
              />
              <div className="flex flex-col gap-6">
                <img
                  className="w-[180px] h-[120px] object-cover rounded-3xl"
                  src="https://i.imgur.com/KeJQu39m.jpg"
                />
                <img
                  className="w-[280px] h-[120px] object-cover rounded-3xl"
                  src="https://i.imgur.com/RmY6Q7Fm.jpg"
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
    </ScrollReveal>
  );
};
