import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PautaService {
  private apiUrl = 'http://localhost:8089'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {
  }

  getPautas(): Observable<any> {
    const params = {
    };
    return this.http.get<any>(`${this.apiUrl}/pauta`, { params });
  }

  setPauta(descricao: string): Observable<any> {
    const requestBody = {
      descricao,
    };
    return this.http.post<any>(`${this.apiUrl}/pauta/cadastrar`, requestBody).pipe(
      tap(response => {

      }),
      catchError(error => {
        return error.error;
      })
    );
  }
}
