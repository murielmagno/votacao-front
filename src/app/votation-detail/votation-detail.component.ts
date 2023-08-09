import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Votation} from "../votations-list/votations-list.component";
import {VotationsService} from "../utils/votations.service";

@Component({
  selector: 'app-votation-detail',
  templateUrl: './votation-detail.component.html',
  styleUrls: ['./votation-detail.component.css']
})
export class VotationDetailComponent implements OnInit {
  votationId: number = 0;

  constructor(private votationsService: VotationsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.votationId = +params['id'];
      this.votationsService.getVotation(this.votationId).subscribe(
        (data: Votation) => {
          console.log(data)
        },
        (error) => {
          console.log('Erro ao obter as votações:', error);
        }
      );
    });
  }
}
