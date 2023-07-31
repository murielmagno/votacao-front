import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8089';
  private loggedInUser: any;
  private _isAuthenticated = false;

  constructor(private http: HttpClient) {
  }

  login(nomeDoUsuario: string, senha: string): Observable<any> {
    const requestBody = {
      nomeDoUsuario,
      senha
    };
    return this.http.post<any>(`${this.apiUrl}/autenticacao/login`, requestBody).pipe(
      tap(response => {
        this._isAuthenticated = true;
        this.loggedInUser = {
          username: response.nomeDoUsuario,
        };
      }),
      catchError(error => {
        this._isAuthenticated = false;
        return error.error;
      })
    );
  }

  getUsername(): string {
    // Recupere o nome de usuário do usuário logado
    return this.loggedInUser ? this.loggedInUser.username : '';
  }

  getUserInfo(): any {
    return this.loggedInUser;
  }

  logout(): void {
    this._isAuthenticated = false;
    this.loggedInUser = null;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

}
