import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router'; // pros links de navegação no HTML
import { CarrinhoService } from '../servicos/carrinho.service';
import { TemaService } from '../servicos/tema.service';
import { RodapeComponent } from '../rodape/rodape.component';

// Tipagem simples de um produto do catálogo
interface ProdutoCatalogo {
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
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

  // Peças base do catálogo (reaproveitei as fotos das coleções).
  // Como o TCC ainda não tem banco de dados, essa lista serve
  // de "estoque" pra gerar o catálogo completo logo abaixo.
  private pecasBase: ProdutoCatalogo[] = [
    { nome: 'Vestido Midi Linho',     categoria: 'Vestidos',  preco: 349.90,  imagem: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80&fit=crop' },
    { nome: 'Blusa Transparente',     categoria: 'Blusas',    preco: 189.90,  imagem: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&q=80&fit=crop' },
    { nome: 'Short Alfaiataria',      categoria: 'Shorts',    preco: 229.90,  imagem: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80&fit=crop' },
    { nome: 'Conjunto Praia Luxo',    categoria: 'Conjuntos', preco: 479.90,  imagem: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80&fit=crop' },
    { nome: 'Vestido Midi Floral',    categoria: 'Vestidos',  preco: 389.90,  imagem: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4de3?w=500&q=80&fit=crop' },
    { nome: 'Camisa Linho',           categoria: 'Camisas',   preco: 259.90,  imagem: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&fit=crop' },
    { nome: 'Blazer Caramelo',        categoria: 'Blazers',   preco: 589.90,  imagem: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&q=80&fit=crop' },
    { nome: 'Calça Wide Leg',         categoria: 'Calças',    preco: 329.90,  imagem: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop' },
    { nome: 'Cardigan Tricot',        categoria: 'Malhas',    preco: 289.90,  imagem: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80&fit=crop' },
    { nome: 'Trench Coat',            categoria: 'Casacos',   preco: 749.90,  imagem: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80&fit=crop' },
    { nome: 'Blusa Veludo',           categoria: 'Blusas',    preco: 219.90,  imagem: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&fit=crop' },
    { nome: 'Saia Midi',              categoria: 'Saias',     preco: 279.90,  imagem: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=500&q=80&fit=crop' },
    { nome: 'Casaco Wool Premium',    categoria: 'Casacos',   preco: 899.90,  imagem: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80&fit=crop' },
    { nome: 'Sobretudo Clássico',     categoria: 'Casacos',   preco: 1099.90, imagem: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80&fit=crop' },
    { nome: 'Blusa Gola Alta Seda',   categoria: 'Blusas',    preco: 279.90,  imagem: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80&fit=crop' },
    { nome: 'Saia Plissada',          categoria: 'Saias',     preco: 259.90,  imagem: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=500&q=80&fit=crop' }
  ];

  // catálogo completo (gerado no ngOnInit)
  private catalogoCompleto: ProdutoCatalogo[] = [];

  // Sobre o "signal": é o jeito novo do Angular de guardar um valor
  // que atualiza a tela SOZINHO quando muda. Precisei usar porque os
  // produtos chegam dentro de um setTimeout, e sem o signal a tela
  // não ficava sabendo da mudança. Pra ler o valor uso parênteses,
  // ex: produtosVisiveis(), e pra trocar uso .set(valorNovo).
  produtosVisiveis = signal<ProdutoCatalogo[]>([]);

  // controles da rolagem infinita
  itensPorPagina = 12;              // quantos produtos entram por "leva"
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
    // Monto o catálogo completo: cada peça base ganha 4 variações
    // de cor (as cores da paleta do TCC), então 16 peças viram 64.
    // Assim a rolagem infinita tem bastante conteúdo pra carregar.
    const cores = ['Preto', 'Branco', 'Azul', 'Verde'];

    for (const cor of cores) {
      for (const peca of this.pecasBase) {
        this.catalogoCompleto.push({
          nome: peca.nome + ' — ' + cor, // ex: "Vestido Midi Linho — Azul"
          categoria: peca.categoria,
          preco: peca.preco,
          imagem: peca.imagem
        });
      }
    }

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
