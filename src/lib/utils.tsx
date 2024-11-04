import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { faker } from "@faker-js/faker";

export const generatePics = () => {
  return [...Array(8).keys()].map(() => ({
    src: faker.image.url(),
    name: faker.person.fullName(),
    text: faker.lorem.paragraph(),
    title: faker.person.jobTitle(),
    alt: faker.person.bio(),
    link: faker.image.url(),
  }));
};
