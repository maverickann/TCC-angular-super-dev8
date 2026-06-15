import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = '';
  senha = '';
  mensagemErro = '';
  mostrarSenha = false;

  constructor(private router: Router) {}



  fazerLogin() {
  const u = this.usuario.trim();
  const s = this.senha.trim();

  if (u === 'Admin' && s === '123456') {
    alert('OK! Redirecionando...');
    this.router.navigate(['home']);
  } else {
    alert('FALHOU | usuario: [' + u + '] | senha: [' + s + ']');
    this.mensagemErro = 'Usuario ou senha incorretos.';
    this.senha = '';
  }
}

  alternarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }
}