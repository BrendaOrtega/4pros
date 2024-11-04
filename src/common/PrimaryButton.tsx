import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

export default function PrimaryButton({
  title,
  children,
  className,
}: {
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button className="flex group">
      <div
        className={twMerge(
          "bg-dark h-10 text-white px-4 rounded-full flex justify-center items-center text-center",
          className
        )}
      >
        {children}
      </div>
      <div
        className={twMerge(
          "bg-dark rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-[45deg] transition-all",
          className
        )}
      >
        <img src="/back.svg" alt="arrow" />
      </div>
    </button>
  );
}
