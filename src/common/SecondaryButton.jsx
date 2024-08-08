import { twMerge } from "tailwind-merge";

export default function SecondaryButton({ title, className }) {
  return (
    <button className={twMerge("flex group", className)}>
      <div className="bg-white h-10 text-dark px-4 rounded-full flex justify-center items-center text-center">
        {title}
      </div>
      <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-[45deg] transition-all">
        <img src="/back-black.svg" alt="arrow" />
      </div>
    </button>
  );
}
