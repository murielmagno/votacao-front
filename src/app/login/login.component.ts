import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
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

  onLogin(form: LoginForm): void {
    this.authService.login(form.nomeDoUsuario, form.senha).subscribe(
      (response) => {
        this.router.navigate(['/home']).then(r => console.log(r));
      },
      (error) => {
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
