import { Link } from "react-router-dom";
import "../App.css";
import { ReactNode, useEffect, useState } from "react";
import React from "react";
import { Navbar } from "./home";
import { Banner, ScrollReveal } from "../components/Courses";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";

export default function Faq() {
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
        <section className=" max-w-7xl mx-auto   pt-[160px] md:pt-[180px] ">
          <h2 className="text-3xl lg:text-5xl	 font-bold text-center">
            {t("tab_two")}
          </h2>
        </section>
        <List />
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

export const List = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[90%] xl:max-w-7xl mx-auto pt-[0px] ">
      <div className="mt-10 lg:mt-20">
        <Question
          question={t("faq_one_title")}
          answer={
            <p>
              {t("faq_one_answer")}
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
        <Question question={t("faq_two_title")} answer={t("faq_two_answer")} />
        <Question
          question={t("faq_three_title")}
          answer={t("faq_three_answer")}
        />
        <Question
          question={t("faq_four_title")}
          answer={t("faq_four_answer")}
        />
        <Question
          question={t("faq_five_title")}
          answer={t("faq_five_answer")}
        />
        <Question question={t("faq_six_title")} answer={t("faq_six_answer")} />
        <Question
          question={t("faq_seven_title")}
          answer={t("faq_seven_answer")}
        />
        <Question
          question={t("faq_eight_title")}
          answer={t("faq_eight_answer")}
        />
        <Question
          question={t("faq_nine_title")}
          answer={t("faq_nine_answer")}
        />
        <Question question={t("faq_ten_title")} answer={t("faq_ten_answer")} />
        <Question
          question={t("faq_eleven_title")}
          answer={t("faq_eleven_answer")}
        />
        <Question
          question={t("faq_twelve_title")}
          answer={t("faq_twelve_answer")}
        />
        <Question
          question={t("faq_thirteen_title")}
          answer={t("faq_thirteen_answer")}
        />
        <Question
          question={t("faq_fourteen_title")}
          answer={t("faq_fourteen_answer")}
        />
        <Question
          question={t("faq_fifteen_title")}
          answer={t("faq_fifteen_answer")}
        />
        <Question
          question={t("faq_sixteen_title")}
          answer={t("faq_sixteen_answer")}
        />
        <Question
          question={t("faq_seventeen_title")}
          answer={t("faq_seventeen_answer")}
        />
        <Question
          question={t("faq_eighteen_title")}
          answer={t("faq_eighteen_answer")}
        />
      </div>
    </section>
  );
};

export const Question = ({
  question,
  answer,
}: {
  question: ReactNode;
  answer: ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-brand_pale border-b-[1px]">
      <button
        className="w-full px-2 md:px-6 py-6 md:py-8 text-xl md:text-2xl font-medium text-left flex justify-between"
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
            <p className="text-lg text-iron font-light px-2 md:px-6 pb-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
