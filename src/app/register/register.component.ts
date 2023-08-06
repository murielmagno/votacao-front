import {Component} from '@angular/core';
import {CadastroService} from "../utils/cadastro.service";
import {Router} from "@angular/router";
import {ModalErrorComponent} from "../modal-error/modal-error.component";
import {MatDialog} from "@angular/material/dialog";

interface CadastroForm {
  nomeDoUsuario: string;
  cpf: string;
  senha: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  cadastroForm: CadastroForm = {nomeDoUsuario: '', cpf: '', senha: ''};
  hidePassword: boolean = true;

  constructor(private cadastroService: CadastroService, private router: Router, private dialog: MatDialog) {
  }

  async onRegister(form: CadastroForm): Promise<void> {
    try {
      const response = await this.cadastroService.cadastrar(form.nomeDoUsuario, form.cpf, form.senha).toPromise()
      if (response.mensagem === 'Usuário cadastrado com sucesso.') {
        this.router.navigate(['/login']).then(() => console.log('Redirecionado para a tela de login'));
      } else {
        this.openErrorDialog(response.mensagem);
      }
    } catch (error) {
      console.log('estranho');
    }
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onCpfKeydown(event: KeyboardEvent): void {
    const allowedKeys = new Set(['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Home', 'End']);
    if (!allowedKeys.has(event.key) && isNaN(Number(event.key))) {
      event.preventDefault();
    }
  }

  isFormValid(): boolean {
    return this.cadastroForm.cpf.length === 11;
  }

  isSenhaValid(): boolean {
    return this.cadastroForm.senha.length >= 8;
  }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(ModalErrorComponent, {
      data: errorMessage,
    });
  }
}
