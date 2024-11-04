import React from "react";
import { ScrollReveal } from "./Courses";
import { useTranslation } from "../hooks/useTranslation";

export const Benefits = () => {
  const { t, updateLang } = useTranslation();

  return (
    <ScrollReveal>
      <section className="max-w-7xl w-[90%] xl:w-full py-[80px] lg:py-[120px] text-center mx-auto">
        {" "}
        <h2 className="text-3xl lg:text-5xl	 font-bold text-center">
          {t("benefits_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-20  gap-10 md:gap-20">
          <Benefit
            img="/benefits/img1.svg"
            title={t("benefit_one_title")}
            description={t("benefit_one_text")}
          />
          <Benefit
            img="/benefits/img2.svg"
            title={t("benefit_two_title")}
            description={t("benefit_two_text")}
          />
          <Benefit
            img="/benefits/img3.svg"
            title={t("benefit_three_title")}
            description={t("benefit_three_text")}
          />{" "}
          <Benefit
            img="/benefits/img4.svg"
            title={t("benefit_four_title")}
            description={t("benefit_four_text")}
          />{" "}
          <Benefit
            img="/benefits/img5.svg"
            title={t("benefit_five_title")}
            description={t("benefit_five_text")}
          />{" "}
          <Benefit
            img="/benefits/img6.svg"
            title={t("benefit_six_title")}
            description={t("benefit_six_text")}
          />{" "}
          <Benefit
            img="/benefits/img7.svg"
            title={t("benefit_seven_title")}
            description={t("benefit_seven_text")}
          />{" "}
          <Benefit
            img="/benefits/img8.svg"
            title={t("benefit_eight_title")}
            description={t("benefit_eight_text")}
          />{" "}
          <Benefit
            img="/benefits/img9.svg"
            title={t("benefit_nine_title")}
            description={t("benefit_nine_text")}
          />
        </div>
      </section>
    </ScrollReveal>
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
