import { CATALOGO_LOJA } from './produtos-loja';

describe('CATALOGO_LOJA', () => {
  const produtos = Object.values(CATALOGO_LOJA).flatMap(estacao => estacao.produtos);

  it('deve manter exatamente seis produtos em cada estação', () => {
    for (const estacao of Object.values(CATALOGO_LOJA)) {
      expect(estacao.produtos.length).toBe(6);
    }
  });

  it('não deve repetir IDs, nomes ou imagens entre as estações', () => {
    const ids = produtos.map(produto => produto.id);
    const nomes = produtos.map(produto => produto.nome.toLocaleLowerCase('pt-BR'));
    const imagens = produtos.map(produto => produto.imagem);

    expect(new Set(ids).size).toBe(produtos.length);
    expect(new Set(nomes).size).toBe(produtos.length);
    expect(new Set(imagens).size).toBe(produtos.length);
  });

  it('deve usar somente imagens locais dos produtos', () => {
    for (const produto of produtos) {
      expect(produto.imagem).toMatch(/^\/assets\/produtos\/(verao|outono|inverno|primavera)\/.+\.webp$/);
    }
  });
});
