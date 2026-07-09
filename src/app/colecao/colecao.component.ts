import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../servicos/carrinho.service';
import { TemaService } from '../servicos/tema.service';
import { RodapeComponent } from '../rodape/rodape.component';
// os produtos agora vêm do arquivo compartilhado da loja
// (o catálogo usa o mesmo arquivo, então não tem dado duplicado)
import { CATALOGO_LOJA, DadosEstacao, Produto } from '../servicos/produtos-loja';

@Component({
  selector: 'app-colecao',
  standalone: true,
  // RouterLinkActive marca sozinho qual link do filtro está ativo
  imports: [CommonModule, RodapeComponent, RouterLink, RouterLinkActive],
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.scss']
})
export class ColecaoComponent implements OnInit {

  // dados da estacao que vai ser exibida
  estacaoAtual: DadosEstacao | null = null;
  produtoHover: number | null = null; // controla o efeito de hover nos cards

  // guarda o id do produto que acabou de ir pro carrinho
  // (só pra trocar o texto do botão por "✓ ADICIONADO" por 1 segundo).
  // Usei "signal" porque o valor volta pra null dentro de um setTimeout,
  // e o signal avisa a tela sozinho quando o valor muda.
  produtoAdicionado = signal<number | null>(null);

  // Catalogo completo das 4 estacoes — vem do arquivo
  // compartilhado da loja (src/app/servicos/produtos-loja.ts)
  private catalogo = CATALOGO_LOJA;

  constructor(
    private route: ActivatedRoute, // pega o parametro da URL (:estacao)
    private router: Router,
    public carrinho: CarrinhoService, // public pra usar direto no HTML
    public tema: TemaService
  ) {}

  ngOnInit(): void {
    // Pego o parametro :estacao da URL ex: /colecao/verao → estacao = 'verao'
    this.route.params.subscribe(params => {
      const estacao = params['estacao'];

      // Busco os dados usando o nome da estacao como chave do objeto
      if (this.catalogo[estacao]) {
        this.estacaoAtual = this.catalogo[estacao];
      } else {
        // Se nao encontrar a estacao volta pra home
        this.router.navigate(['/home']);
      }
    });
  }

  // Formata o numero como moeda brasileira: 349.9 → R$ 349,90
  formatarPreco(preco: number): string {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  // Botão do card: coloca a peça no carrinho de compras
  adicionarAoCarrinho(produto: Produto) {
    this.carrinho.adicionar(produto);

    // feedback visual: o botão vira "✓ ADICIONADO" por 1 segundo
    this.produtoAdicionado.set(produto.id);
    setTimeout(() => {
      // só apago se o aviso ainda for DESTE produto — se o usuário
      // clicou em outro logo em seguida, deixo o aviso novo no lugar
      if (this.produtoAdicionado() === produto.id) {
        this.produtoAdicionado.set(null);
      }
    }, 1000);
  }

  ativarProduto(id: number)  { this.produtoHover = id; }
  desativarProduto()         { this.produtoHover = null; }
}
