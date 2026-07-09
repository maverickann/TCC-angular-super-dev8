import { Injectable } from '@angular/core';

// =============================================
// SERVIÇO DE TEMA (modo claro / modo escuro)
// Um "serviço" no Angular é uma classe compartilhada
// entre as telas. Assim, se o usuário ativar o modo
// escuro na home, o catálogo também fica escuro.
// =============================================
@Injectable({ providedIn: 'root' }) // root = existe uma única cópia pro site todo
export class TemaService {

  // guarda se o modo escuro está ligado ou não
  escuro = false;

  constructor() {
    // Quando o site abre, verifico se o usuário já tinha
    // escolhido o modo escuro numa visita anterior.
    // O "typeof window" é uma proteção: quando o Angular
    // renderiza no servidor (SSR), não existe janela nem localStorage.
    if (typeof window !== 'undefined') {
      this.escuro = localStorage.getItem('tema') === 'escuro';
      this.aplicar();
    }
  }

  // Chamado pelo botão de lua/sol na navbar
  alternarTema() {
    this.escuro = !this.escuro;

    // salvo a escolha no navegador pra lembrar na próxima visita
    if (typeof window !== 'undefined') {
      localStorage.setItem('tema', this.escuro ? 'escuro' : 'claro');
    }

    this.aplicar();
  }

  // Coloca (ou tira) a classe "tema-escuro" no <body>.
  // O CSS global (styles.scss) usa essa classe pra trocar as cores.
  private aplicar() {
    if (typeof document !== 'undefined') {
      if (this.escuro) {
        document.body.classList.add('tema-escuro');
      } else {
        document.body.classList.remove('tema-escuro');
      }
    }
  }
}
