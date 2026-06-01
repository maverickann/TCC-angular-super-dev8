import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Componente da tela de login.
// Por enquanto tá tudo aqui no componente mesmo,
// sem service. O professor disse que pra defesa do TCC tá bom assim.
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // Variáveis pra guardar o que o usuário digita nos campos
  usuario: string = '';
  senha: string = '';

  // Mensagem de erro - começa vazia, aparece só se errar o login
  mensagemErro: string = '';

  // Controla se a senha tá visível ou não (o olhinho)
  mostrarSenha: boolean = false;

  // Injetando o Router pra conseguir navegar pras outras telas
  constructor(private router: Router) {}

  // Aqui valida a senha que o professor pediu pra deixar fixa por enquanto
  // TODO: futuramente isso vai vir de uma API real com o backend
  fazerLogin(): void {
    if (this.usuario === 'Admin' && this.senha === '12346') {
      // Deu certo! Redireciona pra tela principal
      this.mensagemErro = '';
      this.router.navigate(['/home']);
    } else {
      // Limpa os campos se der erro e mostra a mensagem
      this.mensagemErro = 'Usuário ou senha incorretos.';
      this.senha = '';
    }
  }

  // Alterna a visibilidade da senha (mostrar/esconder)
  alternarSenha(): void {
    this.mostrarSenha = !this.mostrarSenha;
  }
}
