import { Component } from '@angular/core';
import {VotationsService} from "../utils/votations.service";

@Component({
  selector: 'app-votations-list',
  templateUrl: './votations-list.component.html',
  styleUrls: ['./votations-list.component.css']
})
export class VotationsListComponent {
  votations: any[] = [];

  constructor(private votationsService: VotationsService) { }

  ngOnInit(): void {
    this.getVotations();
  }

  getVotations(): void {
    this.votationsService.getVotations().subscribe(
      (data) => {
        this.votations = data.votations;
      },
      (error) => {
        console.log('Erro ao obter as votações:', error);
      }
    );
  }
}
