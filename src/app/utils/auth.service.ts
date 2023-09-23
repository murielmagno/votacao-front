import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8089';
  private loggedInUser: any;
  private _isAuthenticated = false;

  constructor(private http: HttpClient) {
  }

  login(email: string, senha: string): Observable<any> {
    const requestBody = {
      email,
      senha
    };
    return this.http.post<any>(`${this.apiUrl}/autenticacao/login`, requestBody).pipe(
      tap(response => {
        this._isAuthenticated = true;
        localStorage.setItem('cpf', response.cpf);
        localStorage.setItem('nome', response.nomeDoUsuario);
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
