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

export const reviwes = [
  {
    src: "/testimonials/img1.png",
    name: "Brenda González",
    text: "Empecé a estudiar en English4professionals hace poco más de 4 años, justo poco antes de conseguir mi primer empleo donde todo el equipo era internacional y el hablar inglés, indispensable. Mi rol implicaba compartir estatus de proyectos, tareas, presentar propuestas, etc, y creo que no lo hubiera logrado sin Katherine. Lo que más me gusta es que las clases son prácticas desde el día uno, son planeadas en función de tus objetivos de aprendizaje, y que tú puedes elegir entre clases grupales o personales.",
    title: "Product Designer",
    alt: "Brenda González",
    link: "https://www.linkedin.com/in/brendago/",
  },
  {
    src: "/testimonials/img2.png",
    name: "Héctor Campos",
    text: "En el pasado, las clases individuales con una instructor(a) eran un lujo al que solo aristócratas podían acceder. Hoy, gracias a internet y a English4profesionals, tengo la oportunidad de tomar clases excelentes y diseñadas específicamente para mi, que me han permitido no solo comunicarme mejor en mi trabajo, ahora también puedo viajar mucho más confiado.¡Lo recomiendo a todo mundo!",
    title: "Software Engineer",
    alt: "Héctor Campos",
    link: "https://www.linkedin.com/in/hectorbliss/",
  },
  {
    src: "/testimonials/img3.png",
    name: "Oscar Arzola",
    text: "Estuve tomando clases con English4professionals por 2 años y mi inglés mejoró mucho, mis compañeros de trabajo y clientes lo empezaron a notar después de las primeras clases.",
    title: "Release Manager, Pressbooks",
    alt: "Oscar Arzola",
    link: "www.linkedin.com/in/oscararzola",
  },
  {
    src: "/testimonials/img4.png",
    name: "Mariana López",
    text: "Las clases de English4professionals son excepcionales. Katherine es muy amable y siempre se esfuerza por hacer las sesiones dinámicas y entretenidas. Nunca pensé que podría aprender inglés tan eficazmente hasta que comencé aquí. En el tiempo que llevo estudiando, he progresado más de lo que jamás imaginé. Recomiendo esta experiencia al 100%.",
    title: "Frontend Manager at Natoure, CoFounder of Pitahaya",
    alt: "Mariana López",
    link: "https://www.linkedin.com/in/marianalz/",
  },
  {
    src: "/testimonials/img5.png",
    name: "Oscar de Jesús Montiel",
    text: "Me encanta, la profesora es muy paciente, ayuda mucho y hace que la pronunciación sea más fácil",
    title: "Business owner",
    alt: "Oscar de Jesús Montiel",
    link: "https://www.linkedin.com/in/brendago/",
  },
  {
    src: "/testimonials/img6.png",
    name: "Jorge Luis Andrade Vega",
    text: "Excelentes profesores, capaces y actualizados con las mejores herramientas para la imparticion de sus clases.",
    title: "Sales representative at UPL Agro",
    alt: "Jorge Luis Andrade Vega",
    link: "https://www.linkedin.com/in/jorge-luis-andrade-26452b123",
  },
  {
    src: "/testimonials/img7.jpg",
    name: "Gloria Moya Paniagua",
    text: "Tomo clases con English4professionals desde hace 4 años. Los profesores tiene herramientas muy elocuentes para enseñarte y también para aplicar las enseñanzas. Gracias a ellos me he podido mejorar mucho a la hora de desarrollar mi trabajo. Antes no me podia comunciar con soltura y ahora lo puedo hacer. Además de que se adaptan a tus necesidades, el vocabulario y las estructuras gramaticales es muy específico y enfocado también a los negocios lo cual, ayuda mucho. Son un éxito las clases, también se adapatan a tus horarios. Puedes tener calses tanto individual como en grupo y siempre es muy efectivo y formal. Yo agradezco mucho haber comenzando a tener clases. Gracias.",
    title: "Manager interior design team at AGO Projects",
    alt: "Gloria Moya Paniagua",
    link: "www.linkedin.com/in/gloria-moya-paniagua-6886ab32/",
  },
  {
    src: "/photo.webp",
    name: "Carlos Mendoza",
    text: "Empecé a estudiar en English4professionals hace poco más de 4 años, justo poco antes de conseguir mi primero empleo donde todo el equipo era internacional y el hablar inglés, indispensable. Mi rol implicaba compartir estatus de proyectos, tareas, presentar propuestas, etc, y creo que no lo hubiera logrado sin Katherine. Lo que más me gusta es que las clases son prácticas desde el día uno, son planeadas en función de tus objetivos de aprendizaje, y que tú puedes elegir entre clases grupales o personales.",
    title: "Frontend Developer",
    alt: "Carlos Mendoza",
    link: "https://www.linkedin.com/in/brendago/",
  },
];
