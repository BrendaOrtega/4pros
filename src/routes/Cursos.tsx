import { Link } from "react-router-dom";
import "../App.css";

import { useEffect } from "react";
import React from "react";
import { Navbar } from "./home";
import PrimaryButton from "../common/PrimaryButton";
import { twMerge } from "tailwind-merge";
import { Banner, ScrollReveal } from "../components/Courses";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import SecondaryButton from "../common/SecondaryButton";
import { useTranslation } from "../hooks/useTranslation";

export default function Cursos() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { t } = useTranslation();

  return (
    <main className="relative">
      <Navbar />
      <ScrollReveal>
        <section className=" max-w-7xl w-[90%] xl:w-full mx-auto  overflow-hidden pt-[160px] lg:pt-[80px] xl:pb-20 ">
          <div className="flex items-stretch mt-0 md:mt-[120px] flex-wrap lg:flex-nowrap">
            <div className="pr-0 lg:pr-16 text-iron font-light text-lg lg:text-xl w-full lg:w-[50%]">
              <h3 className="text-3xl lg:text-5xl text-black font-bold mb-8">
                {t("tab_one")}
              </h3>
              <p>
                {t("text_one")}
                <span className="text-plant font-medium"> {t("text_two")}</span>
              </p>
              <p className="my-6">{t("text_three")}</p>
              <CardCollapse
                level="B2"
                img="/card1.png"
                title={t("group_one_title")}
                description={t("group_one_date")}
              />
              <CardCollapse
                level="C2"
                img="/card2.png"
                title={t("group_two_title")}
                description={t("group_two_date")}
              />
              <CardCollapse
                level="A2"
                img="/card3.png"
                title={t("group_three_title")}
                description={t("group_three_date")}
              />

              <div className="mt-12 xl:mt-[100px] mb-10">
                <a
                  href="https://buff.ly/39rX3FX"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SecondaryButton className="text-base">
                    <p> {t("cta_two")}</p>
                  </SecondaryButton>
                </a>

                <a
                  href="https://wa.me/525539599400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PrimaryButton className=" mt-4 text-base">
                    <p> {t("cta_six")}</p>
                  </PrimaryButton>
                </a>
              </div>
            </div>
            <img
              className="w-full lg:w-[50%] hidden md:block rounded-[40px]  object-cover object-left  mt-10 lg:mt-0 lg:h-auto h-[240px] mb-10 lg:mb-0"
              src="/cursos.png"
              alt="english meeting"
            />
          </div>
        </section>
      </ScrollReveal>
      <Banner />
      <div className="mt-4 lg:mt-[40px]"></div>
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

const Card = ({
  image,
  title,
  description,
  className,
}: {
  image?: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <section>
      <img
        className={twMerge(
          "h-[280px] xl:h-[400px] w-full object-cover object-top rounded-[40px]",
          className
        )}
        src={image ? image : "/photo.webp"}
      />
      <h3 className="text-dark text-3xl font-semibold mt-6">{title}</h3>
      <p className="text-iron mt-4 font-light">{description}</p>
    </section>
  );
};

const CardCollapse = ({
  title,
  description,
  img,
  level,
}: {
  title: string;
  description: string;
  img?: string;
  level: string;
}) => {
  return (
    <section className="border-[1px] border-[#EFEFEF] flex gap-3 p-2 rounded-2xl items-center mb-6">
      <img className="rounded-lg w-16 h-16 object-cover" src={img} />
      {/* <div className="rounded-2xl w-16 h-16 bg-plant flex justify-center  text-white text-2xl font-semibold items-center">
        {level}
      </div> */}
      <div>
        <h3 className="text-base font-bold text-dark">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </section>
  );
};

const EmptyCard = ({
  image,
  title,
  description,
}: {
  image?: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="mt-0 md:mt-20 bg-dark flex flex-col justify-center items-center rounded-[40px] text-center px-10 py-10 md:py-0">
      <h3 className="text-white text-2xl md:text-3xl font-semibold ">
        Si el curso que buscas no está aquí, escríbenos
      </h3>
      <p className="text-[#C4C4C4] mt-4 text-xl md:text-2xl font-extralight">
        Trabajamos con cursos personalizados a horarios flexibles.
      </p>
      <button className="flex group mt-6 md:mt-12">
        <div className="bg-white h-10 text-dark px-4 rounded-full flex justify-center items-center text-center">
          Contactar
        </div>
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-[45deg] transition-all">
          <img src="/arrow-black.svg" alt="arrow" />
        </div>
      </button>
    </section>
  );
};
