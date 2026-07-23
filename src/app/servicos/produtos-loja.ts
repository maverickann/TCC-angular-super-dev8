// =============================================
// "BANCO DE DADOS" DA LOJA
// Como o TCC ainda não tem servidor de verdade, todos os
// produtos ficam aqui num arquivo só. A página de coleção
// e o catálogo leem deste mesmo lugar — assim não existe
// produto duplicado no código e qualquer peça nova que a
// gente cadastrar aqui aparece nas duas telas.
// =============================================

// Tipagem simples de um produto da loja
export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
}

// Tipagem dos dados de cada estacao
export interface DadosEstacao {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagemHero: string;
  produtos: Produto[];
}

// Catálogo completo das 4 estações com produtos e imagens exclusivos.
// Os IDs, nomes e caminhos de imagem são únicos em toda a loja para impedir
// que uma peça seja confundida ou reaproveitada em outra coleção.
export const CATALOGO_LOJA: { [chave: string]: DadosEstacao } = {

  'verao': {
    titulo: 'VERÃO',
    subtitulo: 'Coleção Verão 2026',
    descricao: 'Peças leves e sofisticadas para os dias mais quentes do ano',
    imagemHero: '/assets/verao.jpg',
    produtos: [
      { id: 1, nome: 'Vestido Midi de Linho',            categoria: 'Vestidos',  preco: 349.90, imagem: '/assets/produtos/verao/vestido-midi-linho.webp' },
      { id: 2, nome: 'Blusa Leve de Organza',            categoria: 'Blusas',    preco: 189.90, imagem: '/assets/produtos/verao/blusa-organza.webp' },
      { id: 3, nome: 'Short de Alfaiataria em Linho',    categoria: 'Shorts',    preco: 229.90, imagem: '/assets/produtos/verao/short-alfaiataria-linho.webp' },
      { id: 4, nome: 'Conjunto Resort de Linho',         categoria: 'Conjuntos', preco: 479.90, imagem: '/assets/produtos/verao/conjunto-resort-linho.webp' },
      { id: 5, nome: 'Vestido Solar Estampado',          categoria: 'Vestidos',  preco: 389.90, imagem: '/assets/produtos/verao/vestido-solar-estampado.webp' },
      { id: 6, nome: 'Camisa Masculina de Linho',        categoria: 'Camisas',   preco: 259.90, imagem: '/assets/produtos/verao/camisa-masculina-linho.webp' },
    ]
  },

  'outono': {
    titulo: 'OUTONO',
    subtitulo: 'Coleção Outono 2026',
    descricao: 'Tons terrosos e texturas que acompanham a mudança das estações',
    imagemHero: '/assets/outono.jpg',
    produtos: [
      { id: 7, nome: 'Blazer Caramelo Estruturado',      categoria: 'Blazers', preco: 589.90, imagem: '/assets/produtos/outono/blazer-caramelo.webp' },
      { id: 8, nome: 'Calça Wide Leg Camel',             categoria: 'Calças',  preco: 329.90, imagem: '/assets/produtos/outono/calca-wide-leg-camel.webp' },
      { id: 9, nome: 'Cardigan Terra de Tricô Médio',    categoria: 'Malhas',  preco: 289.90, imagem: '/assets/produtos/outono/cardigan-terra.webp' },
      { id: 10, nome: 'Trench Coat Bege',                 categoria: 'Casacos', preco: 749.90, imagem: '/assets/produtos/outono/trench-coat-bege.webp' },
      { id: 11, nome: 'Blusa de Veludo Marrom',           categoria: 'Blusas',  preco: 219.90, imagem: '/assets/produtos/outono/blusa-veludo-marrom.webp' },
      { id: 12, nome: 'Saia Midi Ferrugem',               categoria: 'Saias',   preco: 279.90, imagem: '/assets/produtos/outono/saia-midi-ferrugem.webp' },
    ]
  },

  'inverno': {
    titulo: 'INVERNO',
    subtitulo: 'Coleção Inverno 2026',
    descricao: 'Elegância e conforto para enfrentar o frio com sofisticação',
    imagemHero: '/assets/inverno.jpg',
    produtos: [
      { id: 13, nome: 'Casaco de Lã Premium',            categoria: 'Casacos',   preco: 899.90,  imagem: '/assets/produtos/inverno/casaco-la-premium.webp' },
      { id: 14, nome: 'Suéter de Tricô Pesado',          categoria: 'Malhas',    preco: 349.90,  imagem: '/assets/produtos/inverno/sueter-trico-pesado.webp' },
      { id: 15, nome: 'Calça Térmica de Alfaiataria',    categoria: 'Calças',    preco: 399.90,  imagem: '/assets/produtos/inverno/calca-termica-alfaiataria.webp' },
      { id: 16, nome: 'Sobretudo Cinza de Lã',           categoria: 'Casacos',   preco: 1099.90, imagem: '/assets/produtos/inverno/sobretudo-cinza.webp' },
      { id: 17, nome: 'Blusa Térmica Gola Alta',         categoria: 'Blusas',    preco: 279.90,  imagem: '/assets/produtos/inverno/blusa-termica-gola-alta.webp' },
      { id: 18, nome: 'Conjunto de Veludo Invernal',     categoria: 'Conjuntos', preco: 679.90,  imagem: '/assets/produtos/inverno/conjunto-veludo.webp' },
    ]
  },

  'primavera': {
    titulo: 'PRIMAVERA',
    subtitulo: 'Coleção Primavera 2026',
    descricao: 'Cores vibrantes e leveza para celebrar o renascer da natureza',
    imagemHero: '/assets/primavera.jpg',
    produtos: [
      { id: 19, nome: 'Vestido Floral de Primavera',     categoria: 'Vestidos',  preco: 319.90, imagem: '/assets/produtos/primavera/vestido-floral.webp' },
      { id: 20, nome: 'Blazer Lilás Pastel',             categoria: 'Blazers',   preco: 519.90, imagem: '/assets/produtos/primavera/blazer-lilas.webp' },
      { id: 21, nome: 'Camisa Botânica Leve',            categoria: 'Camisas',   preco: 199.90, imagem: '/assets/produtos/primavera/camisa-botanica.webp' },
      { id: 22, nome: 'Saia Plissada Rosa',              categoria: 'Saias',     preco: 259.90, imagem: '/assets/produtos/primavera/saia-plissada-rosa.webp' },
      { id: 23, nome: 'Conjunto de Tricô Leve',          categoria: 'Conjuntos', preco: 449.90, imagem: '/assets/produtos/primavera/conjunto-trico-leve.webp' },
      { id: 24, nome: 'Vestido Ombro a Ombro Floral',    categoria: 'Vestidos',  preco: 369.90, imagem: '/assets/produtos/primavera/vestido-ombro-a-ombro.webp' },
    ]
  }

};
