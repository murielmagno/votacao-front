import { Component } from '@angular/core';
import {AuthService} from "../utils/auth.service";
import {ModalErrorComponent} from "../modal-error/modal-error.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

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

  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router) {}

  async onLogin(form: LoginForm): Promise<void> {
    try {
      const response = await this.authService.login(form.nomeDoUsuario, form.senha).toPromise();
      if (response.autenticado) {
        this.router.navigate(['/home']).then(() => console.log('Redirecionado para a tela de home'));
        console.log(response)
      } else if (!response.autenticado) {
        this.openErrorDialog(response.mensagem);
      }
    } catch (error) {
      this.openErrorDialog('Ocorreu um erro durante o login.');
    }
  }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ModalErrorComponent, {
      data: errorMessage,
    });
  }
}
