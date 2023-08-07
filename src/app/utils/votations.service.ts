import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VotationsService {

  private apiUrl = 'http://localhost:8089';

  constructor(private http: HttpClient) { }

  getVotations(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/votacao`);
  }
}
