export interface Category {
  id: string;
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  brand?: string;
  category: string;
  image: string;
  /** Fotos extras exibidas na página do produto. */
  gallery?: string[];
  /** Preço em reais. null = placeholder: a página exibe "preço sob consulta". */
  price: number | null;
  sizes: string[];
}

export const categories: Category[] = [
  { id: 'camisetas', label: 'Camisetas' },
  { id: 'camisas', label: 'Camisas' },
  { id: 'trico-moletom', label: 'Tricô & Moletom' },
  { id: 'feminino', label: 'Feminino' },
  { id: 'calcados', label: 'Calçados' },
  { id: 'acessorios', label: 'Acessórios' },
];

const ROUPA = ['P', 'M', 'G', 'GG'];
const CALCADO = ['38', '39', '40', '41', '42', '43'];
const UNICO = ['Único'];

export const products: Product[] = [
  // Camisetas
  {
    slug: 'camiseta-estampada-bege',
    name: 'Camiseta Estampada Bege',
    category: 'camisetas',
    image: '/images/products/camiseta-bege.jpg',
    price: null,
    sizes: ROUPA,
  },
  {
    slug: 'camiseta-basica-azul',
    name: 'Camiseta Básica Azul',
    category: 'camisetas',
    image: '/images/products/camiseta-azul.jpg',
    price: null,
    sizes: ROUPA,
  },
  {
    slug: 'camiseta-verde-militar',
    name: 'Camiseta Verde Militar',
    category: 'camisetas',
    image: '/images/products/camiseta-verde-militar.jpg',
    price: null,
    sizes: ROUPA,
  },
  {
    slug: 'camiseta-off-the-wall',
    name: 'Camiseta Off The Wall',
    brand: 'Vans',
    category: 'camisetas',
    image: '/images/products/camiseta-vans.jpg',
    price: null,
    sizes: ROUPA,
  },

  // Camisas
  {
    slug: 'camisa-flanela-xadrez-verde',
    name: 'Camisa Flanela Xadrez Verde',
    category: 'camisas',
    image: '/images/products/camisa-flanela-verde.jpg',
    price: null,
    sizes: ROUPA,
  },
  {
    slug: 'camisa-flanela-escura',
    name: 'Camisa Flanela Escura',
    category: 'camisas',
    image: '/images/products/camisa-flanela-escura.jpg',
    price: null,
    sizes: ROUPA,
  },
  {
    slug: 'camisa-bege-bordada',
    name: 'Camisa Bege Bordada',
    category: 'camisas',
    image: '/images/products/camisa-bege-bordada.jpg',
    price: null,
    sizes: ROUPA,
  },

  // Tricô & Moletom
  {
    slug: 'trico-mescla-bordo',
    name: 'Tricô Mescla Bordô',
    category: 'trico-moletom',
    image: '/images/products/trico-bordo.jpg',
    gallery: ['/images/products/trico-bordo-detalhe.jpg'],
    price: null,
    sizes: ROUPA,
  },

  // Feminino
  {
    slug: 'vestido-cetim-off-white',
    name: 'Vestido Cetim Off-White',
    category: 'feminino',
    image: '/images/products/vestido-cetim.jpg',
    price: null,
    sizes: ROUPA,
  },
  {
    slug: 'vestido-longo-estampado',
    name: 'Vestido Longo Estampado',
    category: 'feminino',
    image: '/images/products/vestido-estampado.jpg',
    price: null,
    sizes: ROUPA,
  },
  {
    slug: 'conjunto-croche-pb',
    name: 'Conjunto Crochê P&B',
    category: 'feminino',
    image: '/images/products/conjunto-croche.jpg',
    price: null,
    sizes: ROUPA,
  },
  {
    slug: 'conjunto-laranja-estampado',
    name: 'Conjunto Laranja Estampado',
    category: 'feminino',
    image: '/images/products/conjunto-laranja.jpg',
    price: null,
    sizes: ROUPA,
  },
  {
    slug: 'conjunto-alfaiataria-roxo',
    name: 'Conjunto Alfaiataria Roxo',
    category: 'feminino',
    image: '/images/products/conjunto-roxo.jpg',
    price: null,
    sizes: ROUPA,
  },

  // Calçados
  {
    slug: 'tenis-fresh-foam',
    name: 'Tênis Fresh Foam',
    brand: 'New Balance',
    category: 'calcados',
    image: '/images/products/tenis-nb-par.jpg',
    gallery: ['/images/products/tenis-nb-roxo.jpg'],
    price: null,
    sizes: CALCADO,
  },
  {
    slug: 'tenis-skate-bege',
    name: 'Tênis Skate Bege',
    brand: 'Vans',
    category: 'calcados',
    image: '/images/products/tenis-vans-bege.jpg',
    price: null,
    sizes: CALCADO,
  },

  // Acessórios
  {
    slug: 'bones-clean-up',
    name: 'Bonés Clean Up',
    brand: "'47 · New Balance",
    category: 'acessorios',
    image: '/images/products/bones-nb.jpg',
    price: null,
    sizes: UNICO,
  },
  {
    slug: 'bone-marrom',
    name: 'Boné Marrom',
    brand: 'Cantão',
    category: 'acessorios',
    image: '/images/products/bone-cantao.jpg',
    price: null,
    sizes: UNICO,
  },
  {
    slug: 'relogio-digital',
    name: 'Relógio Digital',
    brand: 'Casio',
    category: 'acessorios',
    image: '/images/products/relogio-casio.jpg',
    price: null,
    sizes: UNICO,
  },
  {
    slug: 'oculos-de-sol',
    name: 'Óculos de Sol',
    brand: 'Oakley',
    category: 'acessorios',
    image: '/images/oculos-oakley.png',
    price: null,
    sizes: UNICO,
  },
];
