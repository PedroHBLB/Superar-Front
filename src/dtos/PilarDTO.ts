interface Colaborador {
  id: string;
  nome: string;
  email: string;
  setor: string;
  pontuacao: number;
  peso: number;
  avatar: string;
}

export interface Pilar {
  id: string;
  pontuacao: number;
  status: "aprovado" | "recusado" | "pendente";
  data_inclusao: string;
  data_alteracao: string;
  colaborador?: Colaborador;
}
