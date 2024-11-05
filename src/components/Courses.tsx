import React, { ReactNode, useEffect, useRef } from "react";
import PrimaryButton from "../common/PrimaryButton";
import { ImagesSlider } from "./ImagesSlider";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";

export const Courses = () => {
  const { t, updateLang } = useTranslation();

  return (
    <section className="max-w-7xl w-[90%] xl:w-full mx-auto mt-[120px] lg:mt-[160px]">
      <h2 className="text-3xl md:text-5xl	 font-bold text-center">
        {t("courses_title")}
      </h2>
      <ScrollReveal>
        <div className="flex flex-wrap lg:flex-nowrap items-center mt-[64px] lg:mt-[120px]">
          <div className="w-full lg:w-[50%]">
            <h3 className="text-2xl lg:text-4xl text-black font-semibold mb-8">
              {t("course_one_title")}
            </h3>
            <div className="flex flex-col gap-4 mb-12 pr-0 lg:pr-16 ">
              <Item text={t("courses_one_point_one")} />
              <Item text={t("courses_one_point_two")} />
              <Item text={t("courses_one_point_three")} />
              <Item text={t("courses_one_point_four")} />
            </div>
            <a
              href="https://wa.me/525539599400?text=¡Hola!%20Quiero%20solicitar%20información%20de%20los%20Cursos%20de%20inglés%20de%20negocios%20para%20mi%20empresa."
              target="_blank"
              rel="noreferrer"
            >
              <PrimaryButton>
                <p> {t("cta_three")}</p>
              </PrimaryButton>
            </a>
          </div>
          <img
            className="w-full lg:w-[50%] rounded-[40px] min-h-auto mt-10 lg:mt-0 lg:min-h-[480px] hover:scale-95 transition-all"
            src="/business.png"
          />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="flex flex-wrap-reverse lg:flex-nowrap items-center mt-[64px] lg:mt-[200px]">
          <img
            className="w-full lg:w-[50%] rounded-[40px] min-h-auto mt-10 lg:mt-0 lg:min-h-[480px] hover:scale-95 transition-all"
            src="/general.png"
          />
          <div className="pl-0 lg:pl-16 w-full lg:w-[50%]">
            <h3 className="text-2xl lg:text-4xl text-black font-semibold mb-8">
              {t("course_two_title")}
            </h3>
            <div className="flex flex-col gap-4 mb-12 ">
              <Item text={t("courses_two_point_one")} />
              <Item text={t("courses_two_point_two")} />
              <Item text={t("courses_two_point_three")} />
              <Item text={t("courses_two_point_four")} />
            </div>
            <a
              href="https://wa.me/525539599400?text=¡Hola!%20Quiero%20solicitar%20información%20de%20los%20Cursos%20de%20inglés%20general."
              target="_blank"
              rel="noreferrer"
            >
              <PrimaryButton>
                <p> {t("cta_three")}</p>
              </PrimaryButton>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export const ScrollReveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        transform: isInView ? "translateY(0)" : "translateY(100px)",
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export const Banner = () => {
  const { t, lang } = useTranslation();

  const large = [
    "/banner1.svg",
    "/banner4-xl.svg",
    "/banner2.png",
    "/banner5-xl.svg",
  ];
  const largeEn = [
    "/banner1-xl-en.svg",
    "/banner4-xl-en.svg",
    "/banner2-xl-en.svg",
    "/banner5-xl-en.svg",
  ];

  const small = [
    "/banner-s.svg",
    "/banner4-xs.svg",
    "/banner2-md.png",
    "/banner5-xs.svg",
  ];
  const smallEn = [
    "/banner1-xs-en.svg",
    "/banner4-xs-en.svg",
    "/banner2-xs-en.svg",
    "/banner5-xs-en.svg",
  ];
  const mediumEn = [
    "/banner1-xs-en.svg",
    "/banner4-md-en.svg",
    "/banner2-xs-en.svg",
    "/banner5-md-en.svg",
  ];
  const medium = [
    "/banner-md1.png",
    "/banner4-md.svg",
    "/banner2-md.png",
    "/banner5-md.svg",
  ];
  return (
    <>
      <ScrollReveal>
        {lang === "es" && (
          <section className="mt-28 lg:mt-[160px] max-w-7xl mx-auto  w-[90%] xl:w-full h-[304px] overflow-hidden rounded-[40px]">
            <ImagesSlider className="h-full md:hidden" images={small}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-end mb-4 "
              >
                <a
                  href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción."
                  target="_blank"
                  rel="noreferrer"
                >
                  <PrimaryButton>
                    <p> {t("cta_five")}</p>
                  </PrimaryButton>
                </a>
              </motion.div>
            </ImagesSlider>
            <ImagesSlider className="h-full hidden lg:flex " images={large}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-end mb-4 "
              >
                <a
                  href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción."
                  target="_blank"
                  rel="noreferrer"
                >
                  <PrimaryButton>
                    <p> {t("cta_five")}</p>
                  </PrimaryButton>
                </a>
              </motion.div>
            </ImagesSlider>
            <ImagesSlider className="h-full hidden md:flex " images={medium}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-end mb-4 "
              >
                <a
                  href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción."
                  target="_blank"
                  rel="noreferrer"
                >
                  <PrimaryButton>
                    <p> {t("cta_five")}</p>
                  </PrimaryButton>
                </a>
              </motion.div>
            </ImagesSlider>
          </section>
        )}

        {lang === "en" && (
          <section className="mt-28 lg:mt-[160px] max-w-7xl mx-auto  w-[90%] xl:w-full h-[304px] overflow-hidden rounded-[40px]">
            <ImagesSlider className="h-full md:hidden" images={smallEn}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-end mb-4 "
              >
                <a
                  href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción."
                  target="_blank"
                  rel="noreferrer"
                >
                  <PrimaryButton>
                    <p> {t("cta_five")}</p>
                  </PrimaryButton>
                </a>
              </motion.div>
            </ImagesSlider>
            <ImagesSlider className="h-full hidden lg:flex " images={largeEn}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-end mb-4 "
              >
                <a
                  href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción."
                  target="_blank"
                  rel="noreferrer"
                >
                  <PrimaryButton>
                    <p> {t("cta_five")}</p>
                  </PrimaryButton>
                </a>
              </motion.div>
            </ImagesSlider>
            <ImagesSlider
              className="h-full hidden md:flex lg:hidden  "
              images={mediumEn}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: -80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-end mb-4 "
              >
                <a
                  href="https://wa.me/525539599400?text=¡Hola!%20Me%20interesa%20la%20promoción."
                  target="_blank"
                  rel="noreferrer"
                >
                  <PrimaryButton>
                    <p> {t("cta_five")}</p>
                  </PrimaryButton>
                </a>
              </motion.div>
            </ImagesSlider>
          </section>
        )}
      </ScrollReveal>
    </>
  );
};

export const Item = ({ text }: { text: ReactNode }) => {
  return (
    <section className="flex items-start gap-3 text-lg lg:text-xl	 text-iron font-light">
      <img src="/check.svg" />
      <p>{text}</p>
    </section>
  );
};
