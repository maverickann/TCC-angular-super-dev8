import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Componente da tela principal do sistema.
// Por enquanto é mais visual, a lógica de negócio
// vai entrar nas próximas sprints do TCC.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Nome do usuário logado - por enquanto tá fixo também
  // TODO: pegar isso de uma variável de sessão quando tiver o backend
  nomeUsuario: string = 'Admin';

  // Lista de coleções pra montar os cards
  // Lembrar de componentizar esses cards depois, ficou grande
  colecoes = [
    {
      id: 1,
      estacao: 'OUTONO',
      descricao: 'Coleção Outono 2025',
      cor: '#1a1a1a'
    },
    {
      id: 2,
      estacao: 'INVERNO',
      descricao: 'Coleção Inverno 2025',
      cor: '#2d2d2d'
    },
    {
      id: 3,
      estacao: 'PRIMAVERA',
      descricao: 'Coleção Primavera 2025',
      cor: '#3f3f3f'
    },
    {
      id: 4,
      estacao: 'VERÃO',
      descricao: 'Coleção Verão 2025',
      cor: '#111'
    }
  ];

  // Guarda qual coleção tá com o mouse em cima (pra o hover)
  cardAtivo: number | null = null;

  constructor(private router: Router) {}

  // Função pra sair do sistema e voltar pro login
  sair(): void {
    // TODO: quando tiver autenticação real, limpar o token aqui antes
    this.router.navigate(['/login']);
  }

  // Ativa o efeito de hover no card
  ativarCard(id: number): void {
    this.cardAtivo = id;
  }

  // Desativa o efeito de hover
  desativarCard(): void {
    this.cardAtivo = null;
  }
}
