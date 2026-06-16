import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // RouterLink pra funcionar o [routerLink] no html
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], // adicionei RouterLink aqui
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nomeUsuario = 'Admin';

  // Array com as 4 estacoes
  // Cada uma tem um campo "rota" sem acento pra usar na URL
  colecoes = [
    { id: 1, estacao: 'OUTONO',    descricao: 'Colecao Outono 2026',    cor: '#1a1a1a' },
    { id: 2, estacao: 'INVERNO',   descricao: 'Colecao Inverno 2026',   cor: '#2d2d2d' },
    { id: 3, estacao: 'PRIMAVERA', descricao: 'Colecao Primavera 2026', cor: '#3f3f3f' },
    { id: 4, estacao: 'VERAO',     descricao: 'Colecao Verao 2026',     cor: '#111'    }
  ];

  // guarda qual card esta com o mouse em cima (null = nenhum)
  cardAtivo: number | null = null;

  constructor(private router: Router) {}

  sair() {
    this.router.navigate(['login']);
  }

  ativarCard(id: number) {
    this.cardAtivo = id;
  }

  desativarCard() {
    this.cardAtivo = null;
  }

  // rola suavemente ate o card da estacao clicada no nav
  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  irPara(rota: string) {
    this.router.navigate([rota]);
  }

  // navega pra pagina de detalhes da colecao
  irParaColecao(rota: string) {
    this.router.navigate(['/colecao', rota]);
  }
}