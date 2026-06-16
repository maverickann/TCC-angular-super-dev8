import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nomeUsuario = 'Admin';

  colecoes = [
    { id: 1, estacao: 'OUTONO',    descricao: 'Colecao Outono 2026',    cor: '#1a1a1a' },
    { id: 2, estacao: 'INVERNO',   descricao: 'Colecao Inverno 2026',   cor: '#2d2d2d' },
    { id: 3, estacao: 'PRIMAVERA', descricao: 'Colecao Primavera 2026', cor: '#3f3f3f' },
    { id: 4, estacao: 'VERAO',     descricao: 'Colecao Verao 2026',     cor: '#111'    }
  ];

  cardAtivo: number | null = null;

  constructor(private router: Router) {}

  sair() {
    this.router.navigate(['login']);
  }

  ativarCard(id: number) { this.cardAtivo = id; }
  desativarCard() { this.cardAtivo = null; }

  // Rola suavemente até a seção clicada no menu
scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
}