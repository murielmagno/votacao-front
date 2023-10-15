import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Votation} from "../votations-list/votations-list.component";
// @ts-ignore
import {Page} from "../utils/page";

@Injectable({
  providedIn: 'root'
})
export class VotationsService {

  private apiUrl = 'http://localhost:8089';

  constructor(private http: HttpClient) { }

  getVotations(): Observable<Page<Votation>> {
    return this.http.get<Page<Votation>>(`${this.apiUrl}/votacao/lista`);
  }

  getVotation(id: number): Observable<Votation> {
    return this.http.get<Votation>(`${this.apiUrl}/votacao/getVotacao/${id}`);
  }

  setVoto(votacao: number, cpf: string, voto: string): Observable<any> {
    const requestBody = {
      votacao,
      cpf,
      voto
    };
    console.log('Request', requestBody);
    return this.http.post<any>(`${this.apiUrl}/votacao/votar`, requestBody).pipe(
      tap(response => {
        console.log(response);
      }),
      catchError(error => {
        return error.error;
      })
    );
  }
}
