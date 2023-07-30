import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8089';
  private loggedInUser: any;

  constructor(private http: HttpClient) {}

  login(nomeDoUsuario: string, senha: string): Observable<any> {
    const requestBody = {
      nomeDoUsuario,
      senha
    };
    this.loggedInUser = {
      username: nomeDoUsuario,
    };

    return this.http.post<any>(`${this.apiUrl}/autenticacao/login`, requestBody);
  }

  getUsername(): string {
    // Recupere o nome de usuário do usuário logado
    return this.loggedInUser ? this.loggedInUser.username : '';
  }

  getUserInfo(): any {
    // Recupere todas as informações do usuário logado
    return this.loggedInUser;
  }

  logout(): void {
    // Lógica para fazer o logout do usuário
    // Por exemplo, limpar o token de autenticação e as informações do usuário
    this.loggedInUser = null;
  }

}
