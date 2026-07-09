import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // RouterLink pra funcionar o [routerLink] no html
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../servicos/carrinho.service';
import { UsuarioService } from '../servicos/usuario.service';
import { TemaService } from '../servicos/tema.service';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RodapeComponent], // RodapeComponent = rodapé compartilhado
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Array com as 4 estacoes
  // Cada uma tem um campo "rota" sem acento pra usar na URL
  colecoes = [
    {
      id: 1, estacao: 'OUTONO', descricao: 'Colecao Outono 2026', cor: '#1a1a1a', rota: 'outono',
      imagem: '/assets/outono.jpg'
    },
    {
      id: 2, estacao: 'INVERNO', descricao: 'Colecao Inverno 2026', cor: '#2d2d2d', rota: 'inverno',
      imagem: '/assets/inverno.jpg'
    },
    {
      id: 3, estacao: 'PRIMAVERA', descricao: 'Colecao Primavera 2026', cor: '#3f3f3f', rota: 'primavera',
      imagem: '/assets/primavera.jpg'
    },
    {
      id: 4, estacao: 'VERAO', descricao: 'Colecao Verao 2026', cor: '#111', rota: 'verao',
      imagem: '/assets/verao.jpg'
    }
  ];

  // guarda qual card esta com o mouse em cima (null = nenhum)
  cardAtivo: number | null = null;

  constructor(
    private router: Router,
    public carrinho: CarrinhoService, // public pra usar direto no HTML (contador da navbar)
    public usuario: UsuarioService,   // controla quem está logado (login é opcional)
    public tema: TemaService          // controla o modo claro/escuro
  ) { }

  // botão SAIR: desloga mas continua na home (o site é aberto pra todos)
  sair() {
    this.usuario.sair();
  }

  // botão ENTRAR: leva pra tela de login (só pra quem quiser)
  irParaLogin() {
    this.router.navigate(['/login']);
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

  // navega pra pagina de detalhes da colecao
  irParaColecao(rota: string) {
    this.router.navigate(['/colecao', rota]);
  }
}
