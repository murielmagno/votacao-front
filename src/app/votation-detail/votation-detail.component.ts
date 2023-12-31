import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Votation} from "../votations-list/votations-list.component";
import {VotationsService} from "../utils/votations.service";
import {ModalErrorComponent} from "../modal-error/modal-error.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-votation-detail',
  templateUrl: './votation-detail.component.html',
  styleUrls: ['./votation-detail.component.css']
})
export class VotationDetailComponent implements OnInit {
  votationId: string = localStorage.getItem('votationId') ?? '0';
  cpf: string = localStorage.getItem('cpf') ?? '00000000000';
  votacaoDetalhe: Votation | undefined;

  constructor(
    private votationsService: VotationsService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    console.log(this.votationId,'111');
    this.route.params.subscribe(() => {
      this.getVotationDetails();
    });
  }

  getVotationDetails(): void {
    console.log(this.votationId,'asdas');
    this.votationsService.getVotation(Number(this.votationId)).subscribe(
      (data: Votation) => {
        this.votacaoDetalhe = data;
        console.log(data);
      },
      (error) => {
        console.log('Erro ao obter os detalhes da votação:', error);
      }
    );
  }

  vote(action: 'SIM' | 'NÃO'): void {
    console.log(`Votou ${action} na votação com ID ${this.votationId} e CPF ${this.cpf}`);
    this.votationsService.setVoto(Number(this.votationId), this.cpf, action).subscribe(
      (response: any) => {
        this.openErrorDialog(response.mensagem);
      },
      (error) => {
        console.log('Erro ao votar:', error);
      }
    );
  }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ModalErrorComponent, {
      data: errorMessage,
    });
  }
}
