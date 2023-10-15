import {Pauta} from "./Pauta";

export interface StartVotation {
  pautas: Pauta[];
  pautaSelecionada: Pauta | null;
  dataEncerramento: Date | null;
}
