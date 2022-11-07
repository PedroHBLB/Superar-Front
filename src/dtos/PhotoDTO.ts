import { Pilar } from "./PilarDTO";

export interface Photo {
  id: string;
  uri: string;
}

export interface Post {
  id: string;
  categoria: string;
  legenda: string;
  pilar: Pilar;
  photos: Photo[];
}
