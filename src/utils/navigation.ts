// Una serie de enlaces para la barra de navegación.
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Quienes Somos", url: "/services" },
  { name: "Proyecto Académico", url: "/products" },
  { name: "Noticias", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// Una serie de enlaces para el pie de página
const footerLinks = [
  {
    section: "Enlaces de Interés",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Ministerio de Educación", url: "https://www.mineduc.cl/" },
      { name: "Admisión Escolar", url: "https://www.sistemadeadmisionescolar.cl/index.html" },
      { name: "Municipalidad de Peñalolen", url: "https://www.penalolen.cl/" },
      { name: "REDUCA", url: "http://www.reduca.cl/" },
    ],
  },
  {
    section: "Institución",
    links: [
      { name: "Quienes Somos", url: "/services" },
      { name: "Noticias", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// Enlaces para íconos redes sociales.
const socialLinks = {
  facebook: "https://www.facebook.com/LBCEVH/?locale=es_LA",
  instagram: "https://www.instagram.com/liceobicentenariovallehermoso/",
  youtube: "https://www.youtube.com/watch?v=rCqzvKLb75Q",
  google: "https://www.google.com/",
  whatsapp: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};