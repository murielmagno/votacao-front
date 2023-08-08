import {Component, OnInit} from '@angular/core';
import {VotationsService} from "../utils/votations.service";
// @ts-ignore
import {Page} from "../utils/page";

export interface Votation {
  id: number;
  pauta: Pauta;
  inicioVotacao: string;
  fimVotacao: string;
  statusVotacao: string;
  // Outras propriedades da votação
}

export interface Pauta {
  id: number;
  descricao: string;
  statusPauta: string;
}

@Component({
  selector: 'app-votations-list',
  templateUrl: './votations-list.component.html',
  styleUrls: ['./votations-list.component.css']
})
export class VotationsListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'descricao', 'inicioVotacao', 'fimVotacao', 'statusVotacao'];
  votationsPage: Page<Votation> = {
    content: [],
    pageable: {
      sort: { empty: true, sorted: false, unsorted: true },
      offset: 0,
      pageNumber: 0,
      pageSize: 10,
      unpaged: false,
      paged: true
    },
    last: true,
    totalElements: 0,
    totalPages: 0,
    size: 10,
    number: 0,
    sort: { empty: true, sorted: false, unsorted: true },
    first: true,
    numberOfElements: 0,
    empty: true
  };

  constructor(private votationsService: VotationsService) {
  }

  ngOnInit(): void {
    this.getVotations();
  }

  getVotations(): void {
    this.votationsService.getVotations().subscribe(
      (data: Page<Votation>) => {
        this.votationsPage  = data;
        console.log(data)
      },
      (error) => {
        console.log('Erro ao obter as votações:', error);
      }
    );
  }
}
