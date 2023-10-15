import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ModalErrorComponent} from '../modal-error/modal-error.component';
import {Votation} from "../votations-list/votations-list.component";
import {ReportService} from "../utils/report.service";
import {VotationsService} from "../utils/votations.service";

@Component({
  selector: 'app-generate-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  votations: Votation[] = [];
  reportForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private dialog: MatDialog,
    private votationsService: VotationsService,
  ) {
    this.reportForm = this.formBuilder.group({
      votationId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getVotations();
  }

  getVotations(): void {
    this.votationsService.getVotations().subscribe(
      (data: Page<Votation>) => {
        this.votations = data.content;
      },
      (error) => {
        console.log('Erro ao obter as votações:', error);
      }
    );
  }

  generateReport() {
    const votationIdControl = this.reportForm.get('votationId');
    if (votationIdControl) {
      const votationId = votationIdControl.value;
      this.reportService.generatePDFReport(votationId).subscribe(
        (response: Blob) => {
          const blob = new Blob([response], {type: 'application/pdf'});
          const url = window.URL.createObjectURL(blob);
          window.open(url);
          window.URL.revokeObjectURL(url);
        },
        (error) => {
          this.openErrorDialog('Erro ao gerar relatório PDF: ' + error.message);
        });
    }
  }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ModalErrorComponent, {
      data: errorMessage,
    });
  }
}
