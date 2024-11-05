import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation.tsx";

export const Hero = () => {
  const handleClick = () => {
    const node = document.querySelector("#contacto");
    node.scrollIntoView({ behavior: "smooth" });
  };

  const { t } = useTranslation();

  return (
    <section className="pt-[148px] md:pt-[180px]">
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        className=" max-w-[90%] mx-auto xl:max-w-7xl backHero bg-[#F2F2F2] bg-center min-h-[75vh] bg-cover rounded-[40px] relative"
      >
        <div className="pt-6 bg-cover h-[248px]  md:h-[280px] bg-left md:bg-bottom	 bg-no-repeat  figure w-full lg:w-[70%] xl:w-[50%] flex flex-col  justify-start items-start absolute left-0 md:left-6 lg:left-[70px] -top-16">
          <div className="hidden xl:block">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight 	rounded-r-2xl pl-6 pr-0 md:px-6">
              {t("hero_title_one")}{" "}
              <span className="text-plant">English4pros</span>
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight inline-block	rounded-r-2xl px-6">
              {t("hero_title_two")}
            </h1>
            <h1 className="mb-12 text-3xl md:text-5xl font-bold  leading-tight inline-block	rounded-r-2xl px-6">
              {t("hero_title_three")}
            </h1>
          </div>
          <div className="block xl:hidden">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight 	rounded-r-2xl pl-0 md:pl-6 pr-0 md:px-6 mb-10">
              {t("hero_title_one")}{" "}
              <span className="text-plant">English4pros</span>{" "}
              {t("hero_title_two")} {t("hero_title_three")}
            </h1>
          </div>
          <div className="flex gap-4 pl-0 md:pl-6">
            <div onClick={handleClick}>
              <PrimaryButton>
                <p> {t("cta_one")}</p>
              </PrimaryButton>
            </div>
            <a href="https://buff.ly/39rX3FX" target="_blank" rel="noreferrer">
              <SecondaryButton>
                <p> {t("cta_two")}</p>
              </SecondaryButton>
            </a>
          </div>
        </div>
      </motion.section>
    </section>
  );
};
