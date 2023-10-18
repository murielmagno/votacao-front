import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StartVotationService {

  private apiUrl = 'http://localhost:8089';

  constructor(private http: HttpClient) {
  }

  setVotacao(form: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/votacao/iniciar`, form).pipe(
      tap(response => {

      }),
      catchError(error => {
        return error.error;
      })
    );
  }
}
