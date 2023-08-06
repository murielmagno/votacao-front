import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = 'http://localhost:8089';

  constructor(private http: HttpClient) {
  }

  cadastrar(nomeDoUsuario: string, cpf: string, senha: string): Observable<any> {
    const requestBody = {
      nomeDoUsuario,
      cpf,
      senha
    };
    return this.http.post<any>(`${this.apiUrl}/usuario/cadastrar`, requestBody).pipe(
      tap(response => {

      }),
      catchError(error => {
        return error.error;
      })
    );
  }

}
