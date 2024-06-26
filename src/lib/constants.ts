export const NAVBAR_ITEMS = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Sobre mi",
    path: "about",
  },
  {
    name: "Experiencia",
    path: "#experience",
  },
  {
    name: "Templates",
    path: "templates",
  },
  {
    name: "Contacto",
    path: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Github",
    link: "https://github.com/felibatista",
    copy: false,
    icon: "/icons/github.svg",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/felibatista/",
    copy: false,
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Discord",
    link: "felibatista_",
    copy: true,
    icon: "/icons/discord.svg",
  },
  {
    name: "Whatsapp",
    link: "+54 9 341 310 7794",
    copy: true,
    icon: "/icons/whatsapp.svg",
  },
  {
    name: "Email",
    link: "hellojavaa@gmail.com",
    copy: true,
    icon: "/icons/email.svg",
  },
];

export const SKILLS = [
  {
    name: "SPRING BOOT",
    icon: "/skills/spring.svg",
    description: "+4 años de experiencia",
  },
  {
    name: ".NET",
    icon: "/skills/net.svg",
    description: "+4 años de experiencia",
  },
  {
    name: "MySQL",
    icon: "/skills/mysql.svg",
    description: "+4 años de experiencia",
  },
  {
    name: "REACT",
    icon: "/skills/react.svg",
    description: "+3 años de experiencia",
  },
  {
    name: "NEXT.JS",
    icon: "/skills/next.svg",
    description: "+3 años de experiencia",
  },
  {
    name: "RUBY ON RAILS",
    icon: "/skills/ruby.svg",
    description: "+2 años de experiencia",
  },
  {
    name: "Postgres SQL",
    icon: "/skills/postgres.svg",
    description: "+2 años de experiencia",
  },
  {
    name: "NODE.JS",
    icon: "/skills/node.svg",
    description: "+2 años de experiencia",
  },
  {
    name: "EXPRESS.JS",
    icon: "/skills/express.svg",
    description: "+2 años de experiencia",
  },
  {
    name: "ANGULAR",
    icon: "/skills/angular.svg",
    description: "+2 años de experiencia",
  },
  {
    name: "DJANGO",
    icon: "/skills/django.svg",
    description: "+1 años de experiencia",
  },
  {
    name: "LARAVEL",
    icon: "/skills/laravel.svg",
    description: "+1 años de experiencia",
  },
];

export const PROJECTS = [
  {
    name: "Conversor de monedas",
    description:
      "CRUD completo con sistema de suscripción y gestión de todos sus micro-servicios. Cuenta con experiencia de usuario y un panel de administración para gestionar las monedas, conversiones, usuarios, suscripciones y las tasas de cambio.",
    image: "/projects/conversor.png",
    techs: [".NET", "Angular", "SQLite"],
    link: "/projects/conversor.png",
  },
  {
    name: "URL Shortener",
    description:
      "Sistema de acortamiento de URL con gestión de autenticación y de usuarios. Cuenta con un panel de administración para gestionar las URL, usuarios y suscripciones.",
    image: "/projects/url.png",
    techs: [".NET", "React", "Next.js", "SQLite"],
    link: "/projects/url.png",
  },
  {
    name: "Conversor de monedas",
    description:
      "CRUD completo con sistema de suscripción y gestión de todos sus micro-servicios. Cuenta con experiencia de usuario y un panel de administración para gestionar las monedas, conversiones, usuarios, suscripciones y las tasas de cambio.",
    image: "/projects/project1.png",
    techs: [".NET", "Angular", "SQLite"],
    link: "https://assets-global.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template-p-500.png",
  },
];

export const DOCUMENTATIONS = [
  {
    URL: {
      name: "URL Shortener",
      description: "Sistema de acortamiento de URL con sistema de autenticación y gestión de usuarios. Cuenta con un panel de administración para gestionar las URL, usuarios y suscripciones.",
      image: "/projects/project1.png",
      techs: [".NET", "React", "Next.js", "Postgres SQL"],
      link: "https://assets-global.website-files.com/622fbc5a718ac357e4cd3da3/623227a7644f41349873cd60_defi-thumbnail-image-developer-webflow-ecommerce-template-p-500.png",
      API: {
        XYZ: {
          GET: {
            description: "Obtener todas las URL",
            type: "GET",
            params: [],
            response: {
              code: 200,
              body: [
                {
                  id: "string",
                  url: "string",
                  shortUrl: "string",
                  userId: "string",
                  createdAt: "string",
                  updatedAt: "string",
                },
              ],
            },
          },
        },
      },
    }
  },
];
