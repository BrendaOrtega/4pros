import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "./Courses";
import { useTranslation } from "../hooks/useTranslation";

export const Teachers = () => {
  const { t, updateLang } = useTranslation();

  return (
    <section className=" bg-[#F7F9FA] w-full py-[64px] lg:py-[120px] mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl lg:text-5xl text-black font-semibold mb-8 lg:mb-20">
            {t("teachers_title")}
          </h2>
        </ScrollReveal>

        <ExpandableCard />
      </div>
    </section>
  );
};

export function ExpandableCard() {
  const { t, updateLang } = useTranslation();
  const cards = [
    {
      src: "/katherine.webp",
      title: "Katherine Manson",
      content: () => {
        return (
          <div>
            <p>
              {t("kath_one")}
              <span className="text-plant font-semibold">
                {" "}
                {t("kath_two")}
              </span>{" "}
              {t("kath_three")}
            </p>
            <p className="mt-4">
              {t("kath_four")}{" "}
              <span className="text-plant font-semibold">{t("kath_five")}</span>{" "}
              {t("kath_six")}
            </p>
            <p className="mt-4">
              {t("kath_seven")}{" "}
              <span className="text-plant font-semibold">
                {" "}
                {t("kath_eight")}
              </span>
              {t("kath_nine")}
              <span className="text-plant font-semibold"> {t("kath_ten")}</span>
            </p>
          </div>
        );
      },
    },
    {
      title: "DALIA VÁSQUEZ,",
      src: "/dalia.webp",

      content: () => {
        return (
          <div>
            <p>
              {t("dalia_one")}
              <span className="text-plant font-semibold">
                {" "}
                {t("dalia_two")}{" "}
              </span>
              {t("dalia_three")}{" "}
              <span className="text-plant font-semibold">
                {t("dalia_four")}{" "}
              </span>{" "}
              {t("dalia_five")}{" "}
              <span className="text-plant font-semibold">
                {" "}
                {t("dalia_six")}{" "}
              </span>{" "}
            </p>
            <p className="mt-4">
              {t("dalia_seven")}{" "}
              <span className="text-plant font-semibold">
                {t("dalia_eight")}
              </span>{" "}
              {t("dalia_nine")}
              <span className="text-plant font-semibold">
                {" "}
                {t("dalia_ten")}
              </span>
            </p>
            <p className="mt-4">{t("dalia_eleven")}</p>
          </div>
        );
      },
    },

    {
      title: "GINA GONZÁLEZ",
      src: "/gina.webp",

      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <div className="text-lg">
            <p>
              {t("gina_one")}{" "}
              <span className="text-plant font-semibold">{t("gina_two")} </span>{" "}
              {t("gina_three")}{" "}
              <span className="text-plant font-semibold">
                {t("gina_four")}{" "}
              </span>{" "}
              {t("gina_five")}{" "}
              <span className="text-plant font-semibold">
                {" "}
                {t("gina_six")}{" "}
              </span>
            </p>
            <p className="mt-4">
              {t("gina_seven")}{" "}
              <span className="text-plant font-semibold">
                {" "}
                {t("gina_eight")}{" "}
              </span>
            </p>
            <p className="mt-4">{t("gina_nine")} </p>
          </div>
        );
      },
    },
  ];

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
            className="fixed inset-0 bg-black/20 h-full w-full z-50"
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
                className="-mt-[0%] lg:mt-0"
                layoutId={`image-${active.title}-${id}`}
              >
                <img
                  src={active.src}
                  alt={active.title}
                  className="min-w-[100vw] md:min-w-[420px] mx-auto   h-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-bottom"
                />
              </motion.div>

              <div>
                <div className="pt-4 relative px-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-left font-light text-iron text-lg md:text-sm lg:text-base h-[360px] md:h-fit pb-0 flex flex-col items-start gap-4 overflow-auto  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                    <span className="text-white">hidden text</span>
                    <span className="text-white">hidden text</span>
                    <span className="text-white">hidden text</span>
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
                  className="h-auto lg:h-[480px] w-full  rounded-lg object-cover object-top"
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
