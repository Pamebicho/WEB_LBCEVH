export interface TeamMember {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  photoUrl?: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Osvaldo Sepúlveda Moreno",
    role: "Director",
    email: "director@lbcevh.cl",
    bio: "Magíster en Geografía, mención Organización Urbano-Geográfica. Profesor de Historia, Geografía y Educación Cívica, Ciencias Sociales.",
  },
  {
    name: "Josefa Olmedo Salinas",
    role: "Jefa UTP Básica",
    email: "utp@lbcevh.cl",
    bio: "Magíster en Educación, mención Evaluación, Universidad Metropolitana de Ciencias de la Educación. Profesora de Química y Biología, Universidad de Santiago de Chile.",
  },
  {
    name: "Rayen Pérez",
    role: "Jefa UTP Media",
    email: "utp@lbcevh.cl",
    bio: "Magíster en Educación, mención Currículum y Evaluación, Universidad de Santiago de Chile. Profesora de Estado en Historia y Ciencias Sociales.",
  },
  {
    name: "Arnaldo Pacheco",
    role: "Inspector General Básica",
    email: "inspectoria@lbcevh.cl",
    bio:""
  },
  {
    name: "Mónica Calderón Díaz",
    role: "Inspectora General Media",
    email: "inspectoria@lbcevh.cl",
    bio: "Magíster en Educación, mención Currículum y Evaluación, Universidad del Mar. Profesora en Educación Básica, Universidad Mayor.",
  },
  {
    name: "Carmen Luz Martínez Gavilán",
    role: "Orientadora Escolar Básica",
    email: "orientacion@lbcevh.cl",
    bio: "Profesora General Básica, mención Lenguaje, Pontificia Universidad Católica de Chile.",
  },
  {
    name: "María Loreto Salinas Cid",
    role: "Orientadora Escolar Media",
    email: "orientacion@lbcevh.cl",
    bio: "Licenciada en Educación, Universidad Metropolitana de Ciencias de la Educación.",
  },
  {
    name: "Nombre Apellido",
    role: "Coordinador PIE",
    email: "pie@lbcevh.cl",
    bio:""
  },
];


