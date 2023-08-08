import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
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
    return this.http.get<Page<Votation>>(`${this.apiUrl}/votacao`);
  }
}
