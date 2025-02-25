import React from "react";
import PrimaryButton from "../common/PrimaryButton";
import { InfiniteMovingCards } from "./infinite";
import SecondaryButton from "../common/SecondaryButton";
import { ScrollReveal } from "./Courses";
import { useTranslation } from "../hooks/useTranslation";

const companies = [
  {
    company: "/companies/img1.png",
  },
  {
    company: "/companies/img2.png",
  },
  {
    company: "/companies/img3.png",
  },
  {
    company: "/companies/img4.png",
  },
  {
    company: "/companies/img5.png",
  },
  {
    company: "/companies/img6.png",
  },
  {
    company: "/companies/img7.png",
  },
  {
    company: "/companies/img8.png",
  },
  {
    company: "/companies/img1.png",
  },
  {
    company: "/companies/img2.png",
  },
  {
    company: "/companies/img3.png",
  },
  {
    company: "/companies/img4.png",
  },
  {
    company: "/companies/img5.png",
  },
  {
    company: "/companies/img6.png",
  },
  {
    company: "/companies/img7.png",
  },
  {
    company: "/companies/img8.png",
  },
];

export const About = () => {
  const { t, updateLang } = useTranslation();
  return (
    <ScrollReveal>
      <section className="max-w-7xl  w-[90%] xl:w-full mx-auto mt-28 lg:mt-[160px]">
        <div className="flex items-stretch mt-[120px] flex-wrap-reverse lg:flex-nowrap">
          <img
            className="w-full lg:w-[50%] rounded-[40px]  object-cover object-bottom  mt-10 lg:mt-0 lg:h-auto h-[380px]"
            src="/about-img.webp"
            alt="english meeting"
          />
          <div className="pl-0 lg:pl-16 text-iron font-light text-lg lg:text-xl w-full lg:w-[50%]">
            <h3 className="text-3xl lg:text-5xl text-black font-semibold mb-8">
              {t("about_title")}
            </h3>
            <p className="mb-6">{t("about_text_one")}</p>
            <p className="mb-6">{t("about_text_two")}</p>
            <p className="mb-8">{t("about_text_three")}</p>
            <div>
              {/* <a href="#contacto">
              <SecondaryButton
                className="-ml-4 text-base"
                title="Me interesan las clases coorporativas"
              />
            </a> */}
              <a
                href="mailto:english4professionals@hotmail.com"
                rel="noreferrer"
              >
                <PrimaryButton className=" mt-4 text-base">
                  <p> {t("cta_four")}</p>
                </PrimaryButton>
              </a>
            </div>
          </div>
        </div>
        <InfiniteMovingCards items={companies} direction="right" speed="slow" />
      </section>
    </ScrollReveal>
  );
};
