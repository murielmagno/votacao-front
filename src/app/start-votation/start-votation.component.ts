import {Component, OnInit} from '@angular/core';
import {StartVotation} from "../utils/StartVotation";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StartVotationService} from "../utils/start-votation.service";
import { DateAdapter } from '@angular/material/core';
import {PautaService} from "../utils/pauta.service";
import {Pauta} from "../utils/Pauta";

@Component({
  selector: 'app-start-votation',
  templateUrl: './start-votation.component.html',
  styleUrls: ['./start-votation.component.css']
})
export class StartVotationComponent implements OnInit {
  pautas: Pauta[] = [];
  inicioVotacao: StartVotation;
  votacaoForm: FormGroup;

  constructor(private pautaService: PautaService, private inicioVotacaoService: StartVotationService, private fb: FormBuilder, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('pt-BR');
    this.inicioVotacao = { pautas: [], pautaSelecionada: null, dataEncerramento: null };
    this.votacaoForm = this.fb.group({
      pautaSelecionada: [null, Validators.required],
      dataEncerramento: [null, Validators.required],
      horaEncerramento: [null, Validators.required],
      dataHoraEncerramento: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.loadPautas();
  }

  iniciarVotacao() {
    const dataControl = this.votacaoForm.get('dataEncerramento');
    const horaControl = this.votacaoForm.get('horaEncerramento');

    if (this.votacaoForm.valid && dataControl && horaControl) {
      const data = dataControl.value;
      const hora = horaControl.value;

      const dataHoraEncerramento = new Date(`${data} ${hora}`);
      this.votacaoForm.get('dataHoraEncerramento')?.setValue(dataHoraEncerramento);
    } else {
      // Lide com os casos em que algum controle ou o formulário não sejam válidos.
    }
  }


  loadPautas() {
    this.pautaService.getPautas().subscribe((data) => {
      this.pautas = data.content;
    });
  }

}
