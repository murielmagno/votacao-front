import {Component, OnInit} from '@angular/core';
import {PautaService} from "../utils/pauta.service";

@Component({
  selector: 'app-pauta',
  templateUrl: './pauta.component.html',
  styleUrls: ['./pauta.component.css']
})
export class PautaComponent implements OnInit {
  pautas: string[] = [];
  descricao: string = '';

  constructor(private pautaService: PautaService) {}

  ngOnInit() {
    this.pautaService.getPautas().subscribe(pautas => {
      this.pautas = pautas;
    });
  }

  adicionarPauta() {
    if (this.descricao) {
      this.pautas.push(this.descricao);
      this.descricao = '';
    }
  }
}
