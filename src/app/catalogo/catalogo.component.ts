import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router'; // pros links de navegação no HTML
import { CarrinhoService } from '../servicos/carrinho.service';
import { TemaService } from '../servicos/tema.service';
import { RodapeComponent } from '../rodape/rodape.component';
// os produtos vêm do mesmo arquivo que a página de coleção usa
import { CATALOGO_LOJA } from '../servicos/produtos-loja';

// Produto do catálogo = produto da loja + o nome da estação dele
// (a estação aparece no cantinho de cada card)
interface ProdutoCatalogo {
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
  estacao: string;
}

// =============================================
// PÁGINA DE CATÁLOGO COMPLETO
// Mostra todas as peças da loja com ROLAGEM INFINITA:
// em vez de botões de "próxima página", novos produtos
// vão aparecendo sozinhos conforme o usuário desce a tela
// (igual funciona em rede social e em loja tipo Kabum).
// =============================================
@Component({
  selector: 'app-catalogo',
  imports: [RodapeComponent, RouterLink], // rodapé compartilhado + links de rota
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
  // Aqui eu peço pro Angular escutar o evento de rolagem da janela.
  // Toda vez que a página rolar, o método aoRolarPagina() é chamado.
  host: {
    '(window:scroll)': 'aoRolarPagina()'
  }
})
export class CatalogoComponent implements OnInit {

  // catálogo completo (montado no ngOnInit a partir da loja)
  private catalogoCompleto: ProdutoCatalogo[] = [];

  // total de peças da loja — aparece no cabeçalho ("X DE Y PEÇAS")
  totalPecas = 0;

  // Sobre o "signal": é o jeito novo do Angular de guardar um valor
  // que atualiza a tela SOZINHO quando muda. Precisei usar porque os
  // produtos chegam dentro de um setTimeout, e sem o signal a tela
  // não ficava sabendo da mudança. Pra ler o valor uso parênteses,
  // ex: produtosVisiveis(), e pra trocar uso .set(valorNovo).
  produtosVisiveis = signal<ProdutoCatalogo[]>([]);

  // controles da rolagem infinita
  itensPorPagina = 8;               // quantos produtos entram por "leva"
  carregando = signal(false);       // true enquanto o spinner aparece
  chegouAoFim = signal(false);      // true quando não tem mais produto pra mostrar

  // guarda o nome do produto que acabou de ser adicionado ao carrinho
  // (serve só pra trocar o texto do botão por "✓ ADICIONADO" por 1 segundo)
  produtoAdicionado = signal<string | null>(null);

  constructor(
    public carrinho: CarrinhoService, // public pra poder usar direto no HTML
    public tema: TemaService
  ) {}

  ngOnInit(): void {
    // Monto o catálogo juntando os produtos das 4 estações
    // (TODOS os itens disponíveis da loja aparecem aqui).
    // O Object.keys me dá as chaves: 'verao', 'outono', etc.
    for (const chave of Object.keys(CATALOGO_LOJA)) {
      const dadosDaEstacao = CATALOGO_LOJA[chave];

      for (const produto of dadosDaEstacao.produtos) {
        this.catalogoCompleto.push({
          nome: produto.nome,
          categoria: produto.categoria,
          preco: produto.preco,
          imagem: produto.imagem,
          estacao: dadosDaEstacao.titulo // ex: 'VERÃO' — aparece no card
        });
      }
    }

    this.totalPecas = this.catalogoCompleto.length;

    // A primeira leva entra NA HORA, sem esperar o setTimeout —
    // assim a página já abre com produtos na tela.
    this.produtosVisiveis.set(this.catalogoCompleto.slice(0, this.itensPorPagina));

    // Caso raro: se o monitor for muito alto e os primeiros produtos
    // não criarem barra de rolagem, ninguém consegue rolar pra carregar
    // mais. Então, depois da tela montar, confiro e completo se precisar.
    if (typeof window !== 'undefined') {
      setTimeout(() => this.preencherTelaSePrecisar(), 300);
    }
  }

  // Se a página ainda não tem rolagem (conteúdo menor que a janela),
  // carrega mais uma leva pra rolagem infinita poder funcionar
  preencherTelaSePrecisar() {
    if (!this.carregando() && !this.chegouAoFim() && document.body.offsetHeight <= window.innerHeight) {
      this.carregarMaisProdutos();
    }
  }

  // Chamado a cada rolagem da página (ver o "host" lá em cima).
  // Quando o usuário chega perto do fim da página (faltando uns
  // 300 pixels), dispara o carregamento da próxima leva.
  aoRolarPagina() {
    // se já está carregando ou já acabou, não faz nada
    if (this.carregando() || this.chegouAoFim()) {
      return;
    }

    const alturaVisivel = window.innerHeight;          // altura da janela
    const quantoJaRolou = window.scrollY;              // quanto o usuário desceu
    const alturaTotal = document.body.offsetHeight;    // altura da página inteira

    if (alturaVisivel + quantoJaRolou >= alturaTotal - 300) {
      this.carregarMaisProdutos();
    }
  }

  // Pega a próxima "fatia" do catálogo e coloca na tela
  carregarMaisProdutos() {
    this.carregando.set(true);

    // O setTimeout segura meio segundo antes de mostrar os produtos.
    // É só pra simular o tempinho de resposta de um servidor de
    // verdade — assim dá pra ver o "CARREGANDO..." funcionando.
    setTimeout(() => {
      const inicio = this.produtosVisiveis().length;
      const fim = inicio + this.itensPorPagina;

      // slice recorta um pedaço da lista (do índice inicio até o fim)
      const novaLeva = this.catalogoCompleto.slice(inicio, fim);
      this.produtosVisiveis.set(this.produtosVisiveis().concat(novaLeva));

      // se já mostrei tudo, aviso que o catálogo acabou
      if (this.produtosVisiveis().length >= this.catalogoCompleto.length) {
        this.chegouAoFim.set(true);
      }

      this.carregando.set(false);

      // confere de novo se a tela encheu (ver comentário no ngOnInit)
      this.preencherTelaSePrecisar();
    }, 500);
  }

  // Botão "ADICIONAR AO CARRINHO" de cada card
  adicionarAoCarrinho(produto: ProdutoCatalogo) {
    this.carrinho.adicionar(produto);

    // feedback visual: o botão vira "✓ ADICIONADO" por 1 segundo
    this.produtoAdicionado.set(produto.nome);
    setTimeout(() => {
      // só apago se o aviso ainda for DESTE produto — se o usuário
      // clicou em outro logo em seguida, deixo o aviso novo no lugar
      if (this.produtoAdicionado() === produto.nome) {
        this.produtoAdicionado.set(null);
      }
    }, 1000);
  }

  // Formata o número como moeda brasileira: 349.9 → R$ 349,90
  formatarPreco(preco: number): string {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}
