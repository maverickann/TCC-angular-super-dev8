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
    {
      id: 1,
      estacao: 'OUTONO',
      descricao: 'Tons terrosos e texturas aconchegantes',
      imagem: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80&fit=crop',
      rota: 'outono'
    },
    {
      id: 2,
      estacao: 'INVERNO',
      descricao: 'Peças estruturadas para os dias frios',
      imagem: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80&fit=crop',
      rota: 'inverno'
    },
    {
      id: 3,
      estacao: 'PRIMAVERA',
      descricao: 'Leveza e cor para a nova estação',
      imagem: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&fit=crop',
      rota: 'primavera'
    },
    {
      id: 4,
      estacao: 'VERÃO',
      descricao: 'Frescor e elegância sob o sol',
      imagem: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&fit=crop',
      rota: 'verao' // sem acento pra nao quebrar a URL
    }
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