import { twMerge } from "tailwind-merge";
import { FaArrowRight, FaArrowLeft, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import React from "react";
import { useTranslation } from "../hooks/useTranslation";

export type Pic = {
  src: string;
  name: string;
  text: ReactNode;
  title: string;
  link: string;
  key: string;
};
export type SimpeAnimatedGalleryProps = {
  pics?: Pic[]; // Should be 8 minimum
  delay?: number;
};

export const SimpleAnimatedGallery = ({
  delay = 5,
}: SimpeAnimatedGalleryProps) => {
  const { t } = useTranslation();
  const pics = [
    {
      key: "brenda",
      src: "/testimonials/img1.webp",
      name: "Brenda González",
      text: <p> {t("brenda")}</p>,
      title: "Product Designer",
      alt: "Brenda González",
      link: "https://www.linkedin.com/in/brendago/",
    },
    {
      key: "hector",
      src: "/testimonials/img2.webp",
      name: "Héctor Campos",
      text: <p> {t("hector")}</p>,
      title: "Software Engineer",
      alt: "Héctor Campos",
      link: "https://www.linkedin.com/in/hectorbliss/",
    },
    {
      key: "arzola",
      src: "/testimonials/img3.webp",
      name: "Oscar Arzola",
      text: <p> {t("arzola")}</p>,
      title: "Release Manager, Pressbooks",
      alt: "Oscar Arzola",
      link: "www.linkedin.com/in/oscararzola",
    },
    {
      key: "mariana",
      src: "/testimonials/img4.webp",
      name: "Mariana López",
      text: <p> {t("mariana")}</p>,
      title: "Frontend Manager at Natoure, CoFounder of Pitahaya",
      alt: "Mariana López",
      link: "https://www.linkedin.com/in/marianalz/",
    },
    {
      key: "oscar",
      src: "/testimonials/img6.webp",
      name: "Oscar de Jesús Montiel",
      text: <p> {t("oscar")}</p>,
      title: "Business owner",
      alt: "Oscar de Jesús Montiel",
    },
    {
      key: "jorge",
      src: "/testimonials/img5.webp",
      name: "Jorge Luis Andrade Vega",
      text: <p> {t("jorge")}</p>,
      title: "Sales representative at UPL Agro",
      alt: "Jorge Luis Andrade Vega",
      link: "https://www.linkedin.com/in/jorge-luis-andrade-26452b123",
    },
    {
      key: "gloria",
      src: "/testimonials/img7.webp",
      name: "Gloria Moya Paniagua",
      text: <p> {t("gloria")}</p>,
      title: "Manager interior design team at AGO Projects",
      alt: "Gloria Moya Paniagua",
      link: "www.linkedin.com/in/gloria-moya-paniagua-6886ab32/",
    },
    {
      key: "carlos",
      src: "/testimonials/img8.webp",
      name: "Carlos Mendoza",
      text: <p> {t("carlos")}</p>,
      title: "Frontend Developer",
      alt: "Carlos Mendoza",
      link: "https://www.linkedin.com/in/reloadercf",
    },
  ];
  const [gallery, setGallery] = useState<Pic[]>(pics);
  const saved = useRef<Pic | null | undefined>(null);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const placeInterval = () => {
    interval.current && clearInterval(interval.current);
    interval.current = setInterval(() => {
      handleNext();
    }, delay * 1000);
    return removeInterval;
  };

  const removeInterval = () => {
    (interval.current && clearInterval(interval.current)) ?? undefined;
  };

  useEffect(placeInterval, [gallery]);

  const handleNext = () => {
    const cloned = [...gallery];
    saved.current && cloned.unshift(saved.current);
    saved.current = cloned.pop();
    setGallery(cloned);
  };

  const handlePrev = () => {
    const cloned = [...gallery];
    saved.current && cloned.push(saved.current);
    saved.current = cloned.shift();
    setGallery(cloned);
  };

  const handlePicClick = (index: number) => {
    const cloned = [...gallery];
    saved.current = cloned.splice(index, 1)[0];
    cloned.splice(gallery.length - 2, 0, saved.current);
    setGallery(cloned);
  };

  const active = useMemo(() => gallery[gallery.length - 2], [gallery]);

  return (
    <main
      className=" block box-content w-full overflow-visible md:overflow-hidden rounded-2xl"
      onMouseLeave={placeInterval}
      onFocus={removeInterval}
      onMouseOver={removeInterval}
    >
      <article className="flex justify-center items-center h-[540px]">
        <section className="lg:flex gap-2 justify-end w-[50%] items-end hidden h-full translate-x-[224px] z-10 relative">
          {gallery.map((pic, i) => {
            const isActive = i === gallery.length - 2;
            return (
              <Image
                id={pic.key}
                link={pic.link}
                src={pic.src}
                key={pic.key}
                isActive={isActive}
                // onClick={() => handlePicClick(i)}
              />
            );
          })}
        </section>

        <section className="lg:w-[50%] w-full px-[5%] lg:px-28 pr-4 h-full relative z-20 bg-[#F7F9FA]">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            key={active.key}
            className="absolute inset-0 flex flex-col px-[5%] lg:px-28 justify-center box-border"
          >
            <h2 className="font-bold text-2xl text-black"> {active.name}</h2>
            <p className="font-thin text-md mt-2 mb-2 md:mb-10 lg:mb-20 text-iron">
              {" "}
              {active.title}
            </p>
            <img className="w-10 mb-4" src="/quote.svg" />
            <p className="text-base md:text-lg pr-8 text-center">
              {active.text}
            </p>
            <br />
            <div className="w-full flex justify-end">
              <img className="w-10 " src="/quoteb.svg" />
            </div>
          </motion.div>
        </section>
      </article>

      <section className="flex justify-center items-center gap-8 mt-0 md:mt-8 relative z-10">
        <NavigationButton onClick={handlePrev}>
          <img src="/right-arrow.svg" />
        </NavigationButton>
        <NavigationButton onClick={handleNext}>
          <img src="/left-arrow.svg" />
        </NavigationButton>
      </section>
    </main>
  );
};

const NavigationButton = ({
  onClick,
  className,
  ...props
}: {
  className?: string;
  onClick: () => void;
  [x: string]: unknown;
}) => (
  <button
    {...props}
    onClick={onClick}
    className={twMerge(
      "hover:scale-105 active:scale-100 rounded-full h-12 w-12 box-border hover:bg-gray-200/0 grid place-content-center text-gray-800 transition-all",
      className
    )}
  />
);

const Image = ({
  onClick,
  isActive,
  link,
  src,
  className,
  id,
}: {
  id?: string;
  index?: string | number;
  onClick?: () => void;
  isActive?: boolean;
  link?: string;
  className?: string;
  src: string;
}) => {
  return (
    <motion.button
      key={id}
      layout
      transition={{ type: "spring", bounce: 0.3 }}
      onClick={onClick}
      className={twMerge(
        "relative h-[320px] min-w-[220px] rounded-lg",
        isActive && "h-[95%] min-w-[300px]",
        className
      )}
      whileHover={{ scaleY: 1.03, top: -2 }}
    >
      <img
        className={twMerge("w-full h-full object-cover rounded-xl")}
        src={src}
        alt="gallery pic"
      />
      {isActive &&
        (link ? (
          <a
            rel="noreferrer"
            target="_blank"
            href={link}
            className="absolute bottom-0 right-2 text-4xl bg-white pt-4 px-2 hover:scale-105 transition-all active:scale-100 text-dark/80"
            style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}
          >
            <FaLinkedin />
          </a>
        ) : null)}
    </motion.button>
  );
};
