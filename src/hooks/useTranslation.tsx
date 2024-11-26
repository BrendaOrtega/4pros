import { useEffect, useState } from "react";

export const useTranslation = () => {
  const [diccionario] = useState(dic);
  const [lang, setLang] = useState("es");

  const t = (key: string) => {
    const lang = localStorage.getItem("lang") || "es"; // default!
    return diccionario[key][lang];
  };

  // @todo update lang

  const updateLang = (lang: string = "es") => {
    localStorage.setItem("lang", lang);
    setLang(lang);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (!lang) return;
    setLang(lang);
  }, []);

  return {
    t,
    updateLang,
    lang,
  };
};

const dic = {
  hero_title_one: {
    es: "¡Únete a",
    en: "Join",
  },
  hero_title_two: {
    es: "y da tu primer paso hacia",
    en: "and take your first step ",
  },
  hero_title_three: {
    es: "el dominio del inglés!",
    en: "towards English fluency!",
  },
  cta_one: {
    es: "Contactar",
    en: "Contact us",
  },
  cta_two: {
    es: "Hacer el examen de nivel",
    en: "Take the placement test",
  },
  cta_three: {
    es: "Solicitar información",
    en: "More information",
  },
  cta_four: {
    es: "Me interesan las clases corporativas",
    en: "I’d like to know more about your corporate classes",
  },
  cta_five: {
    es: "Me interesa la promoción",
    en: "I’d like more information",
  },
  cta_six: {
    es: "Me interesa inscribirme al curso",
    en: "I'd like to enroll in the course",
  },
  tab_one: {
    es: "Cursos abiertos",
    en: "Classes currently available",
  },
  tab_two: {
    es: "Preguntas frecuentes",
    en: "Frequently asked questions",
  },
  tab_three: {
    es: "Contacto",
    en: "Contact information",
  },
  whats: {
    es: "Contactar",
    en: "Contact us",
  },
  caption: {
    es: "Todos los derechos reservados english4pros 2024",
    en: "All rights reserved English4pros 2024",
  },

  courses_title: {
    es: "Conoce nuestro cursos",
    en: "About our courses",
  },
  course_one_title: {
    es: "Cursos de inglés de negocios",
    en: "Business English Courses",
  },
  courses_one_point_one: {
    es: "Cursos completos 100% online, niveles principiantes a avanzado",
    en: "Fully online courses available for all levels, from beginner to advanced",
  },
  courses_one_point_two: {
    es: "Temas incluidos, entrevistas de trabajo, presentaciones, juntas y negociaciones",
    en: "Topics covered include: job interviews, presentations, meetings, and negotiations",
  },
  courses_one_point_three: {
    es: "Examen final alineado con estándares internacionales (CEFR)",
    en: "Final exams aligned with international standards (CEFR)",
  },
  courses_one_point_four: {
    es: "Certificado digital de cumplimiento del nivel",
    en: "Receive a digital certificate upon completion of your course",
  },
  course_two_title: {
    es: "Cursos de inglés general",
    en: "General English courses",
  },
  courses_two_point_one: {
    es: "Cursos completos 100% online, niveles principiantes a avanzado",
    en: "Online courses for every level, from beginner to advanced",
  },
  courses_two_point_two: {
    es: "Examen final alineado con estándares internacionales (CEFR)",
    en: "Final exams that meet international standards (CEFR)",
  },
  courses_two_point_three: {
    es: "Preparación para exámenes de certificación como TOEFL, IELTS y TOEIC",
    en: "Prepare for certification exams like TOEFL, IELTS, and TOEIC",
  },
  courses_two_point_four: {
    es: "Certificado digital de cumplimiento del nivel",
    en: "Receive a digital certificate upon completion of your course.",
  },
  about_title: {
    es: "Quienes somos",
    en: "About us",
  },
  about_text_one: {
    es: "English4pros fue fundada hace casi 10 años por tres profesoras de inglés, dedicadas a enseñar ingles general y de negocios con un enfoque innovador y personalizado. Nos une nuestra pasión por el inglés y el firme compromiso de ayudar a nuestros alumnos a comunicarse eficazmente. ",
    en: "English4Pros was founded nearly 10 years ago by three English teachers dedicated to teaching general and business English with an innovative and personalized approach. We share a passion for English and a strong commitment to helping our students communicate effectively.",
  },
  about_text_two: {
    es: "Nuestra misión es clara: transformar el aprendizaje del inglés en una experiencia positiva y enriquecedora. Todos nuestros maestros son hablantes nativos de inglés o 100% bilingües certificados, con formación en la docencia del idioma y muchos años de experiencia.  ",
    en: "Our mission is clear: to transform English learning into a positive and enriching experience. Our teachers are native English speakers or certified 100% bilingual, trained, certified, and experienced English instructors. ",
  },
  about_text_three: {
    es: "Nos caracteriza una pasión en la enseñanza de inglés para asegurar que las clases apoyen a nuestros estudiantes a alcanzar sus metas, asegurándonos de que el inglés sea una herramienta útil, no un obstáculo. Con nuestra guía, les ayudamos a expresarse rápidamente y con confianza, desbloqueando nuevas oportunidades profesionales.  ",
    en: "Our passion for teaching English in a way that helps students meet their goals sets us apart. We strive to help make English a useful tool rather than an obstacle. Our goal is to provide the support needed to help students express themselves quickly and confidently, unlocking new professional opportunities.",
  },
  teachers_title: {
    es: "Conoce al equipo directivo",
    en: "Meet the Management Team",
  },
  kath_one: {
    es: "Formada y certificada en Vancouver, Canadá, Katherine Manson",
    en: "Trained and certified in Vancouver, Canada,  Katherine Manson",
  },
  kath_two: {
    es: " ha creado cursos, capacitado a profesores y enseñado inglés para negocios y general durante más de 20 años.",
    en: "has created courses, trained teachers, and taught business and general English for over 20 years. ",
  },
  kath_three: {
    es: "Ella admira a todos sus alumnos, pero siente una especial admiración por aquellos que a pesar de haber estudiado ingles durante años, aún carecen de la confianza o las habilidades necesarias para comunicarse de manera efectiva en el idioma.",
    en: "She admires all her students but has a special admiration for those who, despite studying English for years, still lack the confidence or skills needed to communicate effectively.",
  },
  kath_four: {
    es: "El objetivo de Katherine con cada estudiante en English4professionals es",
    en: "Katherine’s goal with each student at English4Pros is",
  },
  kath_five: {
    es: "transformar el inglés en un activo valioso en lugar de una barrera en sus vidas profesionales.",
    en: "to transform English into a valuable asset instead of a barrier in their professional lives.",
  },
  kath_six: {
    es: "Su enfoque se centra en ofrecer a los estudiantes las herramientas necesarias para alcanzar sus metas individuales.",
    en: "Her focus is on providing students with the tools needed to achieve their individual goals.",
  },
  kath_seven: {
    es: "Katherine enseña ",
    en: "Katherine teaches ",
  },
  kath_eight: {
    es: "ingles de negocios, así como preparación para los exámenes TOEFL, IELTS y Cambridge.",
    en: "Business English, as well as preparation for TOEFL, IELTS, and Cambridge exams.",
  },
  kath_nine: {
    es: "Además, ofrece una variedad de ",
    en: "She also offers a variety of ",
  },
  kath_ten: {
    es: "talleres, incluyendo la creación de presentaciones atractivas, la preparación para entrevistas de trabajo y la conducción de reuniones de negocios efectivas.",
    en: "workshops, including creating engaging presentations, job interview preparation, and conducting effective business meetings. ",
  },
  dalia_one: {
    es: "Dalia Vásquez tiene",
    en: "Dalia Vásquez has",
  },
  dalia_two: {
    es: "siete años de experiencia",
    en: "seven years of experience",
  },
  dalia_three: {
    es: "como maestra de inglés. Originaria de Veracruz, se graduó en Diseño Industrial por el Tecnológico de Monterrey en 2011. Su pasión por la enseñanza comenzó después de pasar un año como au pair en el extranjero. En 2015, obtuvo la ",
    en: "as an English teacher. Originally from Veracruz, she graduated with a degree in Industrial Design from Tecnológico de Monterrey in 2011. Her passion for teaching sparked after she spent a year as an au pair abroad. In 2015, she earned her ",
  },
  dalia_four: {
    es: "certificación CELTA para enseñar inglés como segundo idioma ",
    en: " CELTA certification to teach English as a second language ",
  },
  dalia_five: {
    es: "en la Ciudad de México. A lo largo de su carrera, ha tenido el privilegio de trabajar con niños, adolescentes y adultos, impartiendo clases tanto de ingles general como de negocios, desde nivel básico hasta avanzado. En la actualidad,",
    en: "in Mexico City. Throughout her career, she has had the privilege of working with children, teenagers, and adults, teaching both general and business English at all levels, from basic to advanced. Currently,",
  },
  dalia_six: {
    es: " se especializa en niveles básico, principiante y pre-intermedio.",
    en: " she specializes in teaching basic, beginner, and pre-intermediate levels.",
  },
  dalia_seven: {
    es: "Para Dalia, enseñar ingles en línea ha sido una experiencia sumamente enriquecedora, ya que le ha permitido conectar con estudiantes de toda la república y ",
    en: "For Dalia, teaching English online has been a rewarding experience, allowing her to connect with students from all over the country and",
  },
  dalia_eight: {
    es: "adaptarse a sus horarios y necesidades.",
    en: "adapt to their schedules and needs. ",
  },
  dalia_nine: {
    es: "Le apasiona el reto de ayudar a sus alumnos a comprender y utilizar el inglés mediante diversas actividades en diferentes contextos,",
    en: " She loves the challenge of helping her students understand and use English through a variety of engaging activities in different contexts,",
  },
  dalia_ten: {
    es: "mejorando su fluidez, vocabulario y estructura. ",
    en: "improving their fluency, vocabulary, and grammar.",
  },
  dalia_eleven: {
    es: "Actualmente, Dalia reside en Córdoba, Veracruz, donde disfruta de caminatas, la lectura, el cine y pasar tiempo con su familia. ",
    en: "Dalia currently lives in Córdoba, Veracruz, where she enjoys walking, reading, watching movies, and spending time with her family.",
  },
  gina_one: {
    es: "Gina González tiene más de",
    en: "Gina González has",
  },
  gina_two: {
    es: "más de 20 años de experiencia ",
    en: "over 20 years of experience ",
  },
  gina_three: {
    es: "en la enseñanza del inglés. Estudio el diploma de enseñanza del inglés desde antes de la carrera y jamás ha dejado aquella primera pasión. ",
    en: "teaching English. She earned her English teaching diploma before completing her degree and has never looked back from that first passion. ",
  },
  gina_four: {
    es: "Es psicóloga de profesión ",
    en: "Although she is a trained psychologist,",
  },
  gina_five: {
    es: "y cuando no se encuentra clases en línea, la veras diseñando",
    en: " she spends her time outside of online classes designing",
  },
  gina_six: {
    es: "cursos y material educativo relacionado con la actualización de habilidades de negocios para profesionistas. ",
    en: "courses and educational materials focused on business skills training for professionals.",
  },
  gina_seven: {
    es: "Lo que más disfruta como maestra es el desafío de recibir estudiantes desanimados y frustrados porque no han logrado aprender inglés a pesar de muchos esfuerzos y trabajar en conjunto con ellos para ayudarles a",
    en: "What Gina enjoys most about teaching is the challenge of working with discouraged and frustrated students who have struggled to learn English despite their efforts. She loves collaborating with them to ",
  },
  gina_eight: {
    es: " lograr sus objetivos y demostrarles que si podían. ",
    en: "help them achieve their goals and show them that they can succeed.",
  },
  gina_nine: {
    es: "Actualmente vive en Metepec, Estado de México, con su esposo su hijo pequeño y sus dos perros. ",
    en: "Gina currently lives in Metepec, State of Mexico, with her husband, young son, and their two dogs.",
  },

  // BENEFITS
  benefits_title: {
    es: "Que nos hace diferentes",
    en: "What Makes Us Different",
  },
  benefit_one_title: {
    es: "Experiencia",
    en: "Experience",
  },
  benefit_one_text: {
    es: "Profesores 100% bilingües o que son hablantes nativos, capacitados y certificados. ",
    en: "100% bilingual or native-speaking teachers, trained and certified",
  },
  benefit_two_title: {
    es: "Personalización",
    en: "Personalization",
  },
  benefit_two_text: {
    es: "Clases personalizadas y dinámicas, diseñadas según tus necesidades individuales. ",
    en: "Customized and dynamic classes designed to match your individual needs",
  },
  benefit_three_title: {
    es: "Seguimiento",
    en: "Follow-Up",
  },
  benefit_three_text: {
    es: "Evaluaciones mensuales para seguir de cerca tu progreso.",
    en: "Monthly evaluations to closely monitor your progress",
  },
  benefit_four_title: {
    es: "Metodología comunicativa ",
    en: "Communicative Methodology",
  },
  benefit_four_text: {
    es: "Nuestras clases se enfocan en hablar y escuchar. ",
    en: "Our classes focus on speaking and listening",
  },
  benefit_five_title: {
    es: "Grupos reducidos",
    en: "Small Groups",
  },
  benefit_five_text: {
    es: "Máximo 6 personas por grupo. ",
    en: "Maximum of 6 people per group",
  },
  benefit_six_title: {
    es: "Clases en vivo 100% en línea",
    en: "Live Classes 100% Online",
  },
  benefit_six_text: {
    es: "Para que aproveches al máximo tu tiempo. Puedes tomarlas desde cualquier lugar con una computadora y conexión a internet. ",
    en: "Make the most of your time by attending classes from anywhere with just a computer and an internet connection.",
  },
  benefit_seven_title: {
    es: "Enfoque práctico",
    en: "Practical Focus",
  },
  benefit_seven_text: {
    es: "Aprende el idioma que necesitas AHORA para situaciones reales, sin memorizar listas",
    en: "Learn the language you need NOW for real situations, without memorizing lists.",
  },
  benefit_eight_title: {
    es: "¿Te perdiste una clase?",
    en: "Missed a Class?",
  },
  benefit_eight_text: {
    es: "No te preocupes. Ofrecemos clases de recuperación sin costo para que siempre estes al día con el material de la clase. ",
    en: "Don’t worry. We offer free makeup classes to ensure you stay up to date with the material",
  },
  benefit_nine_title: {
    es: "Dos clases sin costo",
    en: "Two Free Classes",
  },
  benefit_nine_text: {
    es: "Para asegurarnos de que el nivel, horario, material y metodología se adaptan a tus necesidades. ",
    en: "To ensure the level, schedule, materials, and methodology fit your needs",
  },

  students_title: {
    es: "Qué opinan nuestros estudiantes",
    en: "What our students say",
  },
  contact_title: {
    es: "¿Quieres saber más sobre nuestros cursos? Escríbenos.",
    en: "Want to learn more about our courses? Contact us.",
  },
  brenda: {
    es: "Empecé a estudiar en English4professionals hace poco más de 4 años, justo poco antes de conseguir mi primer empleo donde todo el equipo era internacional y el hablar inglés, indispensable. Mi rol implicaba compartir estatus de proyectos, tareas, presentar propuestas, etc, y creo que no lo hubiera logrado sin Katherine. Lo que más me gusta es que las clases son prácticas desde el día uno, son planeadas en función de tus objetivos de aprendizaje, y que tú puedes elegir entre clases grupales o personales.",
    en: "I started studying at English4professionals just over four years ago, right before I got my first job where the whole team was international and speaking English was a must. My role involved sharing project updates, tasks, presenting proposals, and more, and I don’t think I could have succeeded without Katherine. What I love most is that the classes are practical from day one, tailored to your learning goals, and you can choose between group or individual lessons",
  },
  hector: {
    es: "En el pasado, las clases individuales con una instructor(a) eran un lujo al que solo aristócratas podían acceder. Hoy, gracias a internet y a English4profesionals, tengo la oportunidad de tomar clases excelentes y diseñadas específicamente para mi, que me han permitido no solo comunicarme mejor en mi trabajo, ahora también puedo viajar mucho más confiado.¡Lo recomiendo a todo mundo!",
    en: "In the past, having one-on-one classes with an instructor was a luxury only available to aristocrats. Today, thanks to the internet and English4profesionals, I can take fantastic classes tailored specifically for me. These classes have helped me communicate better at work and travel with much more confidence. I highly recommend it to everyone!",
  },
  carlos: {
    es: "¡Me gusta estudiar inglés en @English4professionals! 🎉 En solo 1 año, me ayudaron a mejorar mi inglés como nunca antes. Ahora tengo más confianza y estoy listo para hablar inglés 🌍💪.",
    en: "I love studying English at @English4professionals! 🎉 In just a year, they've helped me improve my English like never before. I feel more confident now and I'm ready to speak English! 🌍💪",
  },
  mariana: {
    es: "Las clases de English4professionals son excepcionales. Katherine es muy amable y siempre se esfuerza por hacer las sesiones dinámicas y entretenidas. Nunca pensé que podría aprender inglés tan eficazmente hasta que comencé aquí. En el tiempo que llevo estudiando, he progresado más de lo que jamás imaginé. Recomiendo esta experiencia al 100%.",
    en: "The classes at English4professionals are outstanding. Katherine is really friendly and always works hard to make the sessions engaging and fun. I never thought I could learn English so effectively until I started here. In the time I've been studying, I've made more progress than I ever imagined. I wholeheartedly recommend this experience!",
  },
  gloria: {
    es: "Tomo clases con desde hace 4 años. Los profesores tiene herramientas muy elocuentes para enseñarte y también para aplicar las enseñanzas. Gracias a ellos me he podido mejorar mucho a la hora de desarrollar mi trabajo. Antes no me podia comunciar con soltura y ahora lo puedo hacer. Además de que se adaptan a tus necesidades, el vocabulario y las estructuras gramaticales son muy específicas... Son un éxito las clases, también se adaptan a tus horarios. Puedes tener clases tanto individual como en grupo y siempre es muy efectivo y formal. Yo agradezco mucho haber comenzado a tener clases. Gracias.",
    en: "I’ve been taking classes for four years. The teachers use effective tools to help you learn and apply what you’ve learned. Thanks to them, I’ve improved a lot in my work. I used to struggle to communicate fluently, but now I can do it with confidence. They adapt to your needs, and the vocabulary and grammar structures are very specific. The classes are a huge success; they also fit your schedule. You can choose between individual or group classes, and it’s always effective and professional. I’m really grateful to have started these classes. Thank you!",
  },
  oscar: {
    es: "Me encanta, la profesora es muy paciente, ayuda mucho y hace que la pronunciación sea más fácil",
    en: "I love it! The teacher is very patient, super helpful, and makes pronunciation a lot easier.",
  },
  jorge: {
    es: "Excelentes profesores, capaces y actualizados con las mejores herramientas para la imparticion de sus clases.",
    en: "The teachers are excellent—skilled and up-to-date with the best tools for teaching their classes.",
  },
  arzola: {
    es: "Estuve tomando clases con English4professionals por 2 años y mi inglés mejoró mucho, mis compañeros de trabajo y clientes lo empezaron a notar después de las primeras clases.",
    en: "I took classes with English4professionals for two years, and my English improved significantly. My coworkers and clients began to notice the difference after just a few classes.",
  },

  // OPEN COURSES
  text_one: {
    es: "Explora nuestros cursos en línea grupales con cupo disponible. Cada grupo está limitado a",
    en: "Check out our group courses with space available. Each group is limited to",
  },
  text_two: {
    es: "6 estudiantes, con un costo desde 200 MXN por hora.",
    en: "6 students, with prices starting from 200 MXN per hour.",
  },
  text_three: {
    es: "Si no ves el curso que necesitas, por favor escríbenos. Ofrecemos cursos personalizados con horarios flexibles. ",
    en: "If you don't see the course you need, please contact us. We offer personalized courses with flexible schedules.",
  },
  group_one_title: {
    es: "Inglés de negocios - Nivel B2 (Intermedio – avanzado)",
    en: "Business English - Level B2 (Intermediate - Advanced)",
  },
  group_one_date: {
    es: "Martes, jueves y viernes, 7 – 8 am ",
    en: "Tuesday, Thursday, and Friday, 7 - 8 AM",
  },
  group_two_title: {
    es: "Inglés de negocios - Nivel C1 (Avanzado)",
    en: "Business English - Level C1 (Advanced)",
  },
  group_two_date: {
    es: "Martes y jueves, 8 - 9 PM",
    en: "Tuesday and Thursday, 8 - 9 PM",
  },
  group_three_title: {
    es: "Inglés de negocios - Nivel A2 (Pre-intermedio)",
    en: "Business English - Level A2 (Pre-Intermediate):",
  },
  group_three_date: {
    es: "Lunes y miércoles, 8:30 - 9:30 PM",
    en: "Monday and Wednesday, 8:30 – 9:30 PM",
  },

  // FAQ
  faq_one_title: {
    es: "¿Para quien es english4professionals?",
    en: "Who is English4Professionals for?",
  },
  faq_one_answer: {
    es: "English4Professionals está diseñado para adultos que desean mejorar sus habilidades en inglés en línea y aumentar su empleabilidad. También ofrecemos clases generales de inglés para niños, adolescentes y adultos, así como clases corporativas para empresas que desean proporcionar formación en ingles a sus empleados. Parea más información sobre estas opciones, contáctenos en ",
    en: "English4Professionals is designed for adults who want to improve their English skills online and boost their employability. We also offer general English classes for children, teenagers, and adults, as well as corporate training for companies looking to provide English lessons to their employees. For more information about these options, feel free to contact us at",
  },
  faq_two_title: {
    es: "¿Con que frecuencia y duración son las clases?",
    en: "How often and how long are the classes?",
  },
  faq_two_answer: {
    es: "Nuestras clases tienen una duración de una hora y recomendamos asistir de 2 a 3 veces por semana, con actividades en casa diarias para practicar.",
    en: "Our classes are one hour, and we recommend taking classes 2 to 3 times a week, with daily homework activities to practice what you learned in the class.",
  },
  faq_three_title: {
    es: "¿Cuánto dura un nivel?",
    en: "How long does it take to complete a level?",
  },
  faq_three_answer: {
    es: "En English4Professionals seguimos los niveles estandarizados internacionalmente descritos por el Marco Común Europeo (MCER). Cada uno de estos niveles suele requerir entre 140 y 200 horas de estudio. ",
    en: "At English4Professionals, we follow the internationally recognized levels set by the Common European Framework (CEFR). Each level typically requires between 140 and 200 hours of study.",
  },
  faq_four_title: {
    es: "¿Cuál es el costo de las clases? ",
    en: "How much do the classes cost?",
  },
  faq_four_answer: {
    es: "Las clases comienzan a 200 pesos por hora, pero los costos individuales varían según el número de personas en el grupo. Por favor, contáctenos directamente para obtener más información sobre situaciones específicas.",
    en: "Classes start at 200 pesos per hour, but Individual costs vary depending on the number of people in the group. Please contact us directly for more information about specific situations. ",
  },
  faq_five_title: {
    es: "¿Como se realiza el pago? ",
    en: "How is payment made?",
  },
  faq_five_answer: {
    es: "El pago se realiza mensualmente por transferencia bancaria. ",
    en: "Payment is made monthly via bank transfer.",
  },
  faq_six_title: {
    es: "¿Que pasa si no puedo asistir a una clase? ",
    en: "What if I can’t attend a class?",
  },
  faq_six_answer: {
    es: "Ofrecemos clases de repaso breve sin costo para ayudarte a ponerte al dia con el material de clase. Estas clases duran de 20 a 30 minutos y se programan según tu conveniencia y la del profesor. ",
    en: "We offer brief review classes at no extra cost to help you catch up on class material. These sessions last 20 to 30 minutes and can be scheduled at your convenience, along with the teacher’s.",
  },
  faq_seven_title: {
    es: "¿Ofrecen clases especializadas para ciertas profesiones o habilidades? ",
    en: "Do you offer classes for specific professions or skills?",
  },
  faq_seven_answer: {
    es: "Llevamos a cabo un análisis de necesidades al inicio del curso para garantizar que nuestras clases de inglés para negocios se adapten específicamente a las necesidades del grupo. ",
    en: "We conduct a needs analysis at the start of the course to ensure our Business English classes are tailored to the specific needs of the group.",
  },
  faq_eight_title: {
    es: "¿Están incluidos los materiales en el costo? ",
    en: "Are materials included in the cost?",
  },
  faq_eight_answer: {
    es: "Si. Todos los materiales, incluyendo una versión digital del libro del curso y cualquier material suplementario, están incluidos en el costo. ",
    en: "Absolutely! All materials, including a digital version of the course book and any additional resources, are included in the price.",
  },
  faq_nine_title: {
    es: "¿Puedo tener una clase de prueba gratuita? ",
    en: "Can I take a free trial class?",
  },
  faq_nine_answer: {
    es: "Ofrecemos dos clases de prueba gratuitas para aseguramos de que el nivel, el horario y la metodología se ajusten a tus necesidades. ",
    en: "Yes! We offer two free trial classes to help you determine if the level, schedule, and teaching methods fit your needs.",
  },
  faq_ten_title: {
    es: "¿Puedo cambiar mi horario de clases después de inscribirme? ",
    en: "Can I change my class schedule after enrolling?",
  },
  faq_ten_answer: {
    es: "Si. Te ofreceremos opciones de grupo alternativas en el mismo nivel si están disponibles, o puedes considerar cambiar a clases individuales si es necesario. ",
    en: "Yes! We can offer alternative group options at the same level if they’re available, or you may consider switching to individual classes if necessary.",
  },
  faq_eleven_title: {
    es: "¿Cuánto tiempo tardaré en hablar inglés con fluidez en mi trabajo? ",
    en: "How long will it take me to speak English fluently at work?",
  },
  faq_eleven_answer: {
    es: "Esto dependerá de tu nivel actual y del tiempo que puedas dedicar al inglés tanto dentro como fuera de las clases. Por lo general, pasar de un nivel principiante a un nivel altamente competente toma alrededor de 4 años o unas 800 horas de clases.",
    en: "This will depend on your current level and how much time you can dedicate to English both inside and outside of class. Generally, moving from a beginner level to a highly proficient level takes about 4 years or around 800 hours of classes.",
  },
  faq_twelve_title: {
    es: "¿Recibiré un certificado al finalizar el curso? ",
    en: "Will I receive a certificate when I complete the course?",
  },
  faq_twelve_answer: {
    es: "Si. Recibirás un certificado al final de cada nivel. ",
    en: "Yes, you will receive a certificate at the end of each level.",
  },
  faq_thirteen_title: {
    es: "¿Dan clases presenciales? ",
    en: "Do you offer in-person classes?",
  },
  faq_thirteen_answer: {
    es: "Todas nuestras clases son en línea diseñadas para optimizar tu tiempo, simular el uso del inglés en entornos profesionales reales y garantizar que asignamos al mejor profesor a cada grupo, sin importar la ubicación. ",
    en: "All our classes are online, designed to optimize your time, simulate the use of English in real professional environments, and ensure we assign the best teacher to each group, no matter where you are.",
  },
  faq_fourteen_title: {
    es: "¿Ofrecen descuentos para inscripciones grupales de la misma empresa? ",
    en: "Do you offer discounts for group enrollments?",
  },
  faq_fourteen_answer: {
    es: "Sí. Si alguien que recomiendas se inscribe en una de nuestras clases, recibirás 4 clases gratis y también tu amigo. No es necesario que ambos estén en el mismo grupo.",
    en: "Yes! For every person you refer who becomes a student at English4Professionals, you can earn 8 free classes (about 1 month free). They don’t have to be in the same group.",
  },
  faq_fifteen_title: {
    es: "¿Como puedo saber mi nivel de inglés?",
    en: "How can I find out my level of English?",
  },
  faq_fifteen_answer: {
    es: "Puedes realizar una prueba de nivel de inglés gratuita ",
    en: "You can take a free English level test ",
  },
  faq_fifteen_answer_button: {
    es: " haciendo clic aquí ",
    en: " by clicking here.",
  },
  faq_fifteen_answer_second: {
    es: "Una vez recibamos los resultados, nos pondremos en contacto contigo para informarte sobre tu nivel y las clases disponibles. ",
    en: " Once we receive your results, we’ll reach out to let you know your level and the available classes.",
  },
  faq_sixteen_title: {
    es: "¿Qué plataformas utilizan para las clases en línea? ",
    en: "What platforms do you use for online classes?",
  },
  faq_sixteen_answer: {
    es: "Podemos adaptarnos a la plataforma de tu preferencia. Actualmente utilizamos Teams, Zoom y Google Meet. ",
    en: "We can adapt to the platform you prefer. Currently, we use Teams, Zoom, and Google Meet.",
  },
  faq_seventeen_title: {
    es: "¿Qué necesito para la clase? ",
    en: "What do I need for the class?",
  },
  faq_seventeen_answer: {
    es: "Te recomendamos tener una computadora o tableta, una conexión a Internet confiable, audiófonos y micrófono y, con en todas las clases, ¡un cuaderno y una pluma para tomar notas!",
    en: "We recommend having a computer or tablet, a reliable internet connection, headphones, and a microphone. And, of course, don’t forget a notebook and a pen for taking notes!.",
  },
  faq_eighteen_title: {
    es: "¿Como puedo mantenerme en contacto con English4Professionals? ",
    en: "How can I stay in touch with English4Professionals?",
  },
  faq_eighteen_answer: {
    es: "Puedes contactarnos directamente a través de WhatsApp y correo electrónico. Además, te invitamos a seguirnos en ",
    en: "You can reach out to us directly via WhatsApp and email. Plus, we invite you to follow us on ",
  },
  faq_eighteen_answer_second: {
    es: " (haz clic en cada icono de redes sociales para visitar nuestro perfil). ",
    en: "(click on each social media icon to visit our profile).",
  },
};
