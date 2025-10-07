export interface TeamMember {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  photoUrl?: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Osvaldo Sepúlveda Moreno", role: "Director/a", email: "director@lbcevh.cl" },
  { name: "Josefa Olmedo Salinas", role: "Jefe/a UTP Básica", email: "utp@lbcevh.cl" },
  { name: "Rayen Pérez", role: "Jefe/a UTP Media", email: "utp@lbcevh.cl" },
  { name: "Arnaldo Pacheco", role: "Inspector/a General Básica", email: "inspectoria@lbcevh.cl" },
  { name: "Mónica Calderón Díaz", role: "Inspector/a General Media", email: "inspectoria@lbcevh.cl" },
  { name: "Carmen Luz Martínez Gavilán", role: "Orientación Escolar Básica", email: "orientacion@lbcevh.cl" },
  { name: "María Loreto Salinas Cid", role: "Orientación Escolar Media", email: "orientacion@lbcevh.cl" },
  { name: "Nombre Apellido", role: "Coordinación PIE", email: "pie@lbcevh.cl" },
];

