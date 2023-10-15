import {Component, OnInit} from '@angular/core';
import {StartVotationService} from "../utils/start-votation.service";
import {DateAdapter} from '@angular/material/core';
import {PautaService} from "../utils/pauta.service";
import {Pauta} from "../utils/Pauta";
import {MatDialog} from "@angular/material/dialog";
import {ModalErrorComponent} from "../modal-error/modal-error.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-start-votation',
  templateUrl: './start-votation.component.html',
  styleUrls: ['./start-votation.component.css']
})
export class StartVotationComponent implements OnInit {
  pautas: Pauta[] = [];
  votacaoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private pautaService: PautaService, private inicioVotacaoService: StartVotationService, private dateAdapter: DateAdapter<Date>, private dialog: MatDialog) {
    this.dateAdapter.setLocale('pt-BR');
    this.votacaoForm = this.formBuilder.group({
      idPauta: [null, Validators.required], // Você pode definir as regras de validação aqui, se necessário
      fimVotacao: [null, Validators.required] // Aqui também
    });
  }

  ngOnInit() {
    this.loadPautas();
  }

  async iniciarVotacao() {
    if (this.votacaoForm) {
      const request = {
        idPauta: this.votacaoForm.value.idPauta,
        fimVotacao: this.votacaoForm.value.fimVotacao
      }
      try {
        console.log('3333')
        const response = await this.inicioVotacaoService.setVotacao(request).toPromise()
        this.openErrorDialog(response.mensagem);

      } catch (error) {
        console.log('estranho');
      }
    }
  }

  loadPautas() {
    this.pautaService.getPautas().subscribe((data) => {
      this.pautas = data.content;
    });
  }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ModalErrorComponent, {
      data: errorMessage,
    });
  }

}
