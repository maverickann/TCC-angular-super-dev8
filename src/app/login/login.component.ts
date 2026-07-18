import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../servicos/usuario.service';
import { TemaService } from '../servicos/tema.service';

// =============================================
// TELA DE LOGIN
// O login agora é OPCIONAL: o site abre direto na home
// e o usuário só entra aqui se quiser (ou quando o
// carrinho exigir, na hora de finalizar a compra).
// =============================================
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = '';
  senha = '';
  mensagemErro = '';
  mostrarSenha = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,          // pra ler o "?retorno=..." da URL
    private usuarioService: UsuarioService, // serviço que guarda quem está logado
    public tema: TemaService                // modo claro/escuro (public pro HTML usar)
  ) {}

  // Confere usuário e senha (por enquanto são fixos,
  // já que o TCC ainda não tem banco de dados)
  fazerLogin() {
    const u = this.usuario.trim();
    const s = this.senha.trim();

  //pq que "u e S " como variaveis??????????
  if (u === 'Admin' && s === '123456') {
    alert('OK! Redirecionando...');
    this.router.navigate(['home']);
  } else  if (u === 'Fabrica' && s === '123456') {
    alert('OK! Redirecionando...');
    this.router.navigate(['inicio']);

   }else {
    alert('FALHOU | usuario: [' + u + '] | senha: [' + s + ']');
    this.mensagemErro = 'Usuario ou senha incorretos.';
    this.senha = '';
  }
}

  // Decide pra onde ir depois do login.
  // Se a pessoa veio do carrinho, a URL chega como /login?retorno=carrinho
  // — nesse caso volto pro carrinho pra ela terminar a compra.
  private redirecionar(paginaPadrao: string) {
    const retorno = this.route.snapshot.queryParams['retorno'];
    this.router.navigate([retorno || paginaPadrao]);
  }

  // botão do "olhinho": mostra ou esconde a senha digitada
  alternarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }
}
