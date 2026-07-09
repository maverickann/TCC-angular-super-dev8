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

// Catalogo completo das 4 estacoes com os produtos
// Usei fotos do Unsplash pra simular imagens de produtos reais
export const CATALOGO_LOJA: { [chave: string]: DadosEstacao } = {

  'verao': {
    titulo: 'VERÃO',
    subtitulo: 'Coleção Verão 2026',
    descricao: 'Peças leves e sofisticadas para os dias mais quentes do ano',
    imagemHero: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80&fit=crop',
    produtos: [
      { id: 1, nome: 'Vestido Midi Linho',      categoria: 'Vestidos',   preco: 349.90, imagem: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80&fit=crop' },
      { id: 2, nome: 'Blusa Transparente',       categoria: 'Blusas',     preco: 189.90, imagem: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&q=80&fit=crop' },
      { id: 3, nome: 'Short Alfaiataria',        categoria: 'Shorts',     preco: 229.90, imagem: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80&fit=crop' },
      { id: 4, nome: 'Conjunto Praia Luxo',      categoria: 'Conjuntos',  preco: 479.90, imagem: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80&fit=crop' },
      { id: 5, nome: 'Vestido Midi Floral',      categoria: 'Vestidos',   preco: 389.90, imagem: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4de3?w=500&q=80&fit=crop' },
      { id: 6, nome: 'Camisa Linho Masculina',   categoria: 'Camisas',    preco: 259.90, imagem: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&fit=crop' },
    ]
  },

  'outono': {
    titulo: 'OUTONO',
    subtitulo: 'Coleção Outono 2026',
    descricao: 'Tons terrosos e texturas que acompanham a mudança das estações',
    imagemHero: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80&fit=crop',
    produtos: [
      { id: 1, nome: 'Blazer Caramelo',          categoria: 'Blazers',    preco: 589.90, imagem: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&q=80&fit=crop' },
      { id: 2, nome: 'Calça Wide Leg Camel',     categoria: 'Calças',     preco: 329.90, imagem: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop' },
      { id: 3, nome: 'Cardigan Tricot Terra',    categoria: 'Malhas',     preco: 289.90, imagem: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80&fit=crop' },
      { id: 4, nome: 'Trench Coat Bege',         categoria: 'Casacos',    preco: 749.90, imagem: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80&fit=crop' },
      { id: 5, nome: 'Blusa Veludo Marrom',      categoria: 'Blusas',     preco: 219.90, imagem: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&fit=crop' },
      { id: 6, nome: 'Saia Midi Ferrugem',       categoria: 'Saias',      preco: 279.90, imagem: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=500&q=80&fit=crop' },
    ]
  },

  'inverno': {
    titulo: 'INVERNO',
    subtitulo: 'Coleção Inverno 2026',
    descricao: 'Elegância e conforto para enfrentar o frio com sofisticação',
    imagemHero: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1920&q=80&fit=crop',
    produtos: [
      { id: 1, nome: 'Casaco Wool Premium',      categoria: 'Casacos',    preco: 899.90,  imagem: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80&fit=crop' },
      { id: 2, nome: 'Suéter Tricot Grosso',     categoria: 'Malhas',     preco: 349.90,  imagem: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80&fit=crop' },
      { id: 3, nome: 'Calça Alfaiataria Preta',  categoria: 'Calças',     preco: 399.90,  imagem: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80&fit=crop' },
      { id: 4, nome: 'Sobretudo Cinza',          categoria: 'Casacos',    preco: 1099.90, imagem: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80&fit=crop' },
      { id: 5, nome: 'Blusa Gola Alta Seda',     categoria: 'Blusas',     preco: 279.90,  imagem: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80&fit=crop' },
      { id: 6, nome: 'Conjunto Veludo Preto',    categoria: 'Conjuntos',  preco: 679.90,  imagem: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&q=80&fit=crop' },
    ]
  },

  'primavera': {
    titulo: 'PRIMAVERA',
    subtitulo: 'Coleção Primavera 2026',
    descricao: 'Cores vibrantes e leveza para celebrar o renascer da natureza',
    imagemHero: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80&fit=crop',
    produtos: [
      { id: 1, nome: 'Vestido Floral Midi',      categoria: 'Vestidos',   preco: 319.90, imagem: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80&fit=crop' },
      { id: 2, nome: 'Blazer Lilás Pastel',      categoria: 'Blazers',    preco: 519.90, imagem: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&q=80&fit=crop' },
      { id: 3, nome: 'Camisa Estampada',         categoria: 'Camisas',    preco: 199.90, imagem: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80&fit=crop' },
      { id: 4, nome: 'Saia Plissada Rosa',       categoria: 'Saias',      preco: 259.90, imagem: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=500&q=80&fit=crop' },
      { id: 5, nome: 'Conjunto Tricot Suave',    categoria: 'Conjuntos',  preco: 449.90, imagem: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80&fit=crop' },
      { id: 6, nome: 'Vestido Ombro a Ombro',   categoria: 'Vestidos',   preco: 369.90, imagem: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4de3?w=500&q=80&fit=crop' },
    ]
  }

};
