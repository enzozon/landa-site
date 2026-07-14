export interface Category {
  id: string;
  label: string;
}

export interface Product {
  name: string;
  brand?: string;
  category: string;
  image: string;
}

export const categories: Category[] = [
  { id: 'camisetas', label: 'Camisetas' },
  { id: 'camisas', label: 'Camisas' },
  { id: 'trico-moletom', label: 'Tricô & Moletom' },
  { id: 'feminino', label: 'Feminino' },
  { id: 'calcados', label: 'Calçados' },
  { id: 'acessorios', label: 'Acessórios' },
];

export const products: Product[] = [
  // Camisetas
  {
    name: 'Camiseta Estampada Bege',
    category: 'camisetas',
    image: '/images/products/camiseta-bege.jpg',
  },
  {
    name: 'Camiseta Básica Azul',
    category: 'camisetas',
    image: '/images/products/camiseta-azul.jpg',
  },
  {
    name: 'Camiseta Verde Militar',
    category: 'camisetas',
    image: '/images/products/camiseta-verde-militar.jpg',
  },
  {
    name: 'Camiseta Off The Wall',
    brand: 'Vans',
    category: 'camisetas',
    image: '/images/products/camiseta-vans.jpg',
  },

  // Camisas
  {
    name: 'Camisa Flanela Xadrez Verde',
    category: 'camisas',
    image: '/images/products/camisa-flanela-verde.jpg',
  },
  {
    name: 'Camisa Flanela Escura',
    category: 'camisas',
    image: '/images/products/camisa-flanela-escura.jpg',
  },
  {
    name: 'Camisa Bege Bordada',
    category: 'camisas',
    image: '/images/products/camisa-bege-bordada.jpg',
  },

  // Tricô & Moletom
  {
    name: 'Tricô Mescla Bordô',
    category: 'trico-moletom',
    image: '/images/products/trico-bordo.jpg',
  },

  // Feminino
  {
    name: 'Vestido Cetim Off-White',
    category: 'feminino',
    image: '/images/products/vestido-cetim.jpg',
  },
  {
    name: 'Vestido Longo Estampado',
    category: 'feminino',
    image: '/images/products/vestido-estampado.jpg',
  },
  {
    name: 'Conjunto Crochê P&B',
    category: 'feminino',
    image: '/images/products/conjunto-croche.jpg',
  },
  {
    name: 'Conjunto Laranja Estampado',
    category: 'feminino',
    image: '/images/products/conjunto-laranja.jpg',
  },
  {
    name: 'Conjunto Alfaiataria Roxo',
    category: 'feminino',
    image: '/images/products/conjunto-roxo.jpg',
  },

  // Calçados
  {
    name: 'Tênis Fresh Foam',
    brand: 'New Balance',
    category: 'calcados',
    image: '/images/products/tenis-nb-par.jpg',
  },
  {
    name: 'Tênis Skate Bege',
    brand: 'Vans',
    category: 'calcados',
    image: '/images/products/tenis-vans-bege.jpg',
  },

  // Acessórios
  {
    name: 'Bonés Clean Up',
    brand: "'47 · New Balance",
    category: 'acessorios',
    image: '/images/products/bones-nb.jpg',
  },
  {
    name: 'Boné Marrom',
    brand: 'Cantão',
    category: 'acessorios',
    image: '/images/products/bone-cantao.jpg',
  },
  {
    name: 'Relógio Digital',
    brand: 'Casio',
    category: 'acessorios',
    image: '/images/products/relogio-casio.jpg',
  },
  {
    name: 'Óculos de Sol',
    brand: 'Oakley',
    category: 'acessorios',
    image: '/images/oculos-oakley.png',
  },
];
