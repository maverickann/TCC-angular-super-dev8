import { Injectable } from '@angular/core';

// =============================================
// SERVIÇO DE USUÁRIO
// Guarda quem está logado no site. Como o TCC não tem
// um servidor de verdade, o login fica salvo no próprio
// navegador (localStorage). O login é OPCIONAL: dá pra
// navegar pelo site inteiro sem entrar — ele só é exigido
// na hora de finalizar a compra no carrinho.
// =============================================
@Injectable({ providedIn: 'root' })
export class UsuarioService {

  // nome do usuário logado ('' = ninguém logado)
  nomeUsuario = '';

  constructor() {
    // recupera o usuário salvo caso ele já tenha feito login antes
    // (a proteção do typeof é por causa da renderização no servidor)
    if (typeof window !== 'undefined') {
      this.nomeUsuario = localStorage.getItem('usuarioLogado') || '';
    }
  }

  // chamado pela tela de login quando usuário e senha batem
  entrar(nome: string) {
    this.nomeUsuario = nome;
    if (typeof window !== 'undefined') {
      localStorage.setItem('usuarioLogado', nome);
    }
  }

  // desloga e apaga o registro do navegador
  sair() {
    this.nomeUsuario = '';
    if (typeof window !== 'undefined') {
      localStorage.removeItem('usuarioLogado');
    }
  }

  // resposta rápida de sim/não pra saber se tem alguém logado
  estaLogado(): boolean {
    return this.nomeUsuario !== '';
  }
}
