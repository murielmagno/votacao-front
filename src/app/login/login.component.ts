import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {ModalErrorComponent} from "../modal-error/modal-error.component";
import {MatDialog} from "@angular/material/dialog";

interface LoginForm {
  nomeDoUsuario: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: LoginForm = { nomeDoUsuario: '', senha: '' };

  constructor(private authService: AuthService, private dialog: MatDialog) {}

  onLogin(form: LoginForm): void {
    this.authService.login(form.nomeDoUsuario, form.senha).subscribe(
      (response) => {
        // Lógica para manipular a resposta da API em caso de sucesso
        console.log('Login bem-sucedido!', response);
      },
      (error) => {
        console.log(error)
        this.openErrorDialog(error.error);
      }
    );
  }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ModalErrorComponent, {
      data: errorMessage,
    });
  }
}
