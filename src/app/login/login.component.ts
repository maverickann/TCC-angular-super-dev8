import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TemaService } from '../servicos/tema.service';
import { UsuarioService } from '../servicos/usuario.service';

@Component({
  selector: 'app-login',
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
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    public tema: TemaService
  ) {}

  fazerLogin(): void {
    const usuario = this.usuario.trim();
    const senha = this.senha.trim();

    if (usuario === 'Admin' && senha === '123456') {
      this.concluirLogin(usuario, 'home');
      return;
    }

    if (usuario === 'Fabrica' && senha === '123456') {
      this.concluirLogin(usuario, 'inicio');
      return;
    }

    this.mensagemErro = 'Usuário ou senha incorretos.';
    this.senha = '';
  }

  alternarSenha(): void {
    this.mostrarSenha = !this.mostrarSenha;
  }

  private concluirLogin(usuario: string, paginaPadrao: string): void {
    this.usuarioService.entrar(usuario);
    this.mensagemErro = '';

    const retorno = this.route.snapshot.queryParamMap.get('retorno');
    const destino = retorno === 'carrinho' ? 'carrinho' : paginaPadrao;
    void this.router.navigateByUrl(`/${destino}`);
  }
}
