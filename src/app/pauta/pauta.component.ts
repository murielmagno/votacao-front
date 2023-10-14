import {Component, OnInit} from '@angular/core';
import {PautaService} from "../utils/pauta.service";
import {Pauta} from "../utils/Pauta";
import {ModalErrorComponent} from "../modal-error/modal-error.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pauta',
  templateUrl: './pauta.component.html',
  styleUrls: ['./pauta.component.css']
})
export class PautaComponent implements OnInit {
  pautas: Pauta[] = [];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalElements: number = 0;
  mostrarFormularioNovaPauta = false;
  descricao: string = '';

  constructor(private pautaService: PautaService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadPautas();
  }

  loadPautas() {
    this.pautaService.getPautas().subscribe((data) => {
      this.pautas = data.content; // Lista de pautas
      this.pageNumber = data.pageable.pageNumber;
      this.pageSize = data.pageable.pageSize;
      this.totalElements = data.totalElements; // Total de elementos para paginação
    });
  }

  onPageChange(event: any) {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPautas();
  }

  adicionarPauta(descricao: string) {
    if (descricao) {
      try {
        console.log(descricao)
        const response = this.pautaService.setPauta(descricao).toPromise()
        if (response.body === 'Pauta criada com sucesso.') {
          this.openErrorDialog(response);
          this.router.navigate(['/pauta']).then(() => console.log('Reload'));
        } else {
          this.openErrorDialog(response);
        }
      } catch (error) {
        console.log('estranho');
      }
    }
  }

  toggleFormularioNovaPauta() {
    this.mostrarFormularioNovaPauta = !this.mostrarFormularioNovaPauta;
  }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ModalErrorComponent, {
      data: errorMessage,
    });
  }

}