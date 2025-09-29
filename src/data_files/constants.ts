import ogImageSrc from "@images/social.png";
import mineducLogo from "@images/gob/color_MinEducacion.jpg";
import logoSAE from "@images/gob/sistema_de_admision_escolar.png";
import logoCormup from "@images/gob/Logo CORMUP color.png";
import logoREDUCA from "@images/gob/Logo REDUCA morado.png";

export const SITE = {
  title: "Liceo Bicentenario Valle Hermoso",
  tagline: "Formación integral y excelencia académica",
  description: "El Liceo Bicentenario Valle Hermoso entrega educación de calidad desde Educación Parvularia y Básica hasta Enseñanza Media Técnico-Profesional, con especialidades de Administración (mención RRHH) y Construcción (menciones Terminaciones y Edificación).",
  description_short: "Educación Parvularia, Básica y Media Técnico-Profesional con foco en excelencia e inclusión.",
  url: "https://www.liceovallehermoso.cl",
  author: "Liceo Bicentenario Valle Hermoso",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-CL",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_CL",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};

export const partnersData = [
{
  icon: `<img src="${mineducLogo.src}" alt="Ministerio de Educación"
    class="mx-auto h-auto w-10 py-1 sm:mx-0 lg:w-20 lg:py-3" />`,
  name: "Ministerio de Educación",
  href: "https://www.mineduc.cl",
},
{
  icon: `<img src="${logoSAE.src}" alt="Ministerio de Educación"
    class="mx-auto h-auto w-10 py-1 sm:mx-0 lg:w-28 lg:py-3" />`,
  name: "Ministerio de Educación",
  href: "https://www.sistemadeadmisionescolar.cl/index.html",
},
{
  icon: `<img src="${logoCormup.src}" alt="Ministerio de Educación"
    class="mx-auto h-auto w-10 py-1 sm:mx-0 lg:w-28 lg:py-1" />`,
  name: "Ministerio de Educación",
  href: "https://www.penalolen.cl/",
},
{
  icon: `<img src="${logoREDUCA.src}" alt="Ministerio de Educación"
    class="mx-auto h-auto w-10 py-1 sm:mx-0 lg:w-28 lg:py-1" />`,
  name: "Ministerio de Educación",
  href: "http://www.reduca.cl/",
},
]