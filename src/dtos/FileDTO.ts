import { Pilar } from "./PilarDTO";

export interface File {
  id: string;
  categoria: string;
  titulo: string;
  descricao: string;
  pilar: Pilar;
}
