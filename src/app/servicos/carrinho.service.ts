import { Injectable } from '@angular/core';

// Um item do carrinho = os dados do produto + a quantidade escolhida
export interface ItemCarrinho {
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
  quantidade: number;
}

// =============================================
// SERVIÇO DO CARRINHO DE COMPRAS
// Controla a lista de produtos que o usuário adicionou.
// Qualquer tela pode usar: o catálogo adiciona itens,
// a navbar mostra o contador e a tela do carrinho lista tudo.
// Os itens ficam salvos no navegador (localStorage), então
// o carrinho não se perde se a página for recarregada.
// =============================================
@Injectable({ providedIn: 'root' })
export class CarrinhoService {

  // a lista de itens que estão no carrinho
  itens: ItemCarrinho[] = [];

  constructor() {
    // ao abrir o site, recupero o carrinho salvo da última visita
    if (typeof window !== 'undefined') {
      const salvo = localStorage.getItem('carrinho');
      if (salvo) {
        // o localStorage só guarda texto, então uso JSON.parse
        // pra transformar o texto de volta numa lista de itens.
        // O try/catch protege caso o texto salvo esteja corrompido —
        // se der erro, o site continua funcionando com o carrinho vazio.
        try {
          this.itens = JSON.parse(salvo);
        } catch (e) {
          this.itens = [];
        }
      }
    }
  }

  // Adiciona um produto no carrinho.
  // Procuro pelo NOME porque cada peça tem nome único:
  // se já estiver no carrinho, só aumento a quantidade.
  adicionar(produto: { nome: string; categoria: string; preco: number; imagem: string }) {
    const existente = this.itens.find(item => item.nome === produto.nome);

    if (existente) {
      existente.quantidade++;
    } else {
      // uso os "..." (spread) pra copiar os dados do produto
      // e acrescentar o campo quantidade começando em 1
      this.itens.push({ ...produto, quantidade: 1 });
    }

    this.salvar();
  }

  // botão "+" do carrinho
  aumentar(nome: string) {
    const item = this.itens.find(i => i.nome === nome);
    if (item) {
      item.quantidade++;
      this.salvar();
    }
  }

  // botão "−" do carrinho (não deixa ficar menor que 1)
  diminuir(nome: string) {
    const item = this.itens.find(i => i.nome === nome);
    if (item && item.quantidade > 1) {
      item.quantidade--;
      this.salvar();
    }
  }

  // botão de remover (o "×" do carrinho)
  // o filter cria uma lista nova sem o item removido
  remover(nome: string) {
    this.itens = this.itens.filter(i => i.nome !== nome);
    this.salvar();
  }

  // esvazia tudo (usado depois de finalizar a compra)
  limpar() {
    this.itens = [];
    this.salvar();
  }

  // soma as quantidades — é o numerozinho que aparece na navbar
  totalItens(): number {
    let total = 0;
    for (const item of this.itens) {
      total += item.quantidade;
    }
    return total;
  }

  // soma preço × quantidade de cada item = subtotal dos produtos
  valorProdutos(): number {
    let total = 0;
    for (const item of this.itens) {
      total += item.preco * item.quantidade;
    }
    return total;
  }

  // grava a lista atual no navegador (JSON.stringify vira texto)
  private salvar() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('carrinho', JSON.stringify(this.itens));
    }
  }
}
