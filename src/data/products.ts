export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  category: 'masculino' | 'feminino' | 'esportivo' | 'luxo';
  size: string;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  specs: {
    material: string;
    movement: string;
    waterResistance: string;
    caseDiameter: string;
    warranty: string;
  };
  inStock: boolean;
  soldCount: number;
  isNew: boolean;
}

export const products: Product[] = [
  {
    id: '100',
    name: 'Christian Modern White',
    brand: 'Christian Watches',
    price: 2999.00,
    originalPrice: 3599.00,
    category: 'masculino',
    size: '42mm',
    rating: 4.0,
    reviews: 127,
    images: [
      '/christian.jpeg'
    ],
    description: 'Design minimalista, pulseira branca e mostrador moderno. Ideal para quem busca elegância e versatilidade no dia a dia.',
    specs: {
      material: 'Aço Inoxidável e Silicone',
      movement: 'Quartzo Japonês',
      waterResistance: '50m',
      caseDiameter: '42mm',
      warranty: '2 anos',
    },
    inStock: true,
    soldCount: 58,
    isNew: true,
  },
  {
    id: '1',
    name: 'Royal Chronograph Elite',
    brand: 'Christian Watches',
    price: 12499.00,
    originalPrice: 14999.00,
    category: 'luxo',
    size: '42mm',
    rating: 4.9,
    reviews: 127,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800',
    ],
    description: 'O Royal Chronograph Elite representa o ápice da relojoaria de luxo. Combinando tradição artesanal com tecnologia de ponta, este relógio é uma declaração de sucesso e refinamento.',
    specs: {
      material: 'Aço Inoxidável 316L com banho de ouro 18k',
      movement: 'Automático Suíço',
      waterResistance: '100m',
      caseDiameter: '42mm',
      warranty: '5 anos internacional',
    },
    inStock: true,
    soldCount: 89,
    isNew: false,
  },
  {
    id: '2',
    name: 'Midnight Sport Pro',
    brand: 'Christian Watches',
    price: 4999.00,
    category: 'esportivo',
    size: '44mm',
    rating: 4.7,
    reviews: 234,
    images: [
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800',
      'https://images.unsplash.com/photo-1434056886845-dbd39c1cc727?w=800',
    ],
    description: 'Projetado para atletas e aventureiros, o Midnight Sport Pro combina robustez excepcional com elegância contemporânea.',
    specs: {
      material: 'Titânio revestido DLC',
      movement: 'Quartzo Japonês de alta precisão',
      waterResistance: '300m',
      caseDiameter: '44mm',
      warranty: '3 anos',
    },
    inStock: true,
    soldCount: 156,
    isNew: true,
  },
  {
    id: '3',
    name: 'Elegance Rose',
    brand: 'Christian Watches',
    price: 7899.00,
    category: 'feminino',
    size: '36mm',
    rating: 4.8,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1518131672697-613becd4fab5?w=800',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800',
    ],
    description: 'Uma obra-prima de feminilidade e sofisticação. O Elegance Rose foi criado para mulheres que apreciam a beleza nos detalhes.',
    specs: {
      material: 'Aço Inoxidável com banho de ouro rosé',
      movement: 'Quartzo Suíço',
      waterResistance: '50m',
      caseDiameter: '36mm',
      warranty: '3 anos',
    },
    inStock: true,
    soldCount: 67,
    isNew: false,
  },
  {
    id: '4',
    name: 'Classic Gentleman',
    brand: 'Christian Watches',
    price: 8499.00,
    category: 'masculino',
    size: '40mm',
    rating: 4.9,
    reviews: 312,
    images: [
      'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800',
      'https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=800',
    ],
    description: 'O Classic Gentleman encapsula a essência do homem moderno: elegante, confiante e atemporal.',
    specs: {
      material: 'Aço Inoxidável 316L polido',
      movement: 'Automático com reserva de 48h',
      waterResistance: '100m',
      caseDiameter: '40mm',
      warranty: '5 anos',
    },
    inStock: true,
    soldCount: 203,
    isNew: false,
  },
  {
    id: '5',
    name: 'Diamond Luxe',
    brand: 'Christian Watches',
    price: 24999.00,
    originalPrice: 29999.00,
    category: 'luxo',
    size: '38mm',
    rating: 5.0,
    reviews: 45,
    images: [
      'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800',
      'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800',
    ],
    description: 'Adornado com diamantes genuínos, o Diamond Luxe é a expressão máxima de opulência e exclusividade.',
    specs: {
      material: 'Ouro 18k com 48 diamantes VVS',
      movement: 'Tourbillon Manual Suíço',
      waterResistance: '30m',
      caseDiameter: '38mm',
      warranty: '10 anos',
    },
    inStock: true,
    soldCount: 12,
    isNew: true,
  },
  {
    id: '6',
    name: 'Urban Explorer',
    brand: 'Christian Watches',
    price: 3499.00,
    category: 'esportivo',
    size: '42mm',
    rating: 4.6,
    reviews: 178,
    images: [
      'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800',
      'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800',
    ],
    description: 'Para os exploradores urbanos que não abrem mão do estilo. Resistente, versátil e moderno.',
    specs: {
      material: 'Aço Inoxidável com cerâmica',
      movement: 'Quartzo Japonês',
      waterResistance: '200m',
      caseDiameter: '42mm',
      warranty: '2 anos',
    },
    inStock: true,
    soldCount: 234,
    isNew: false,
  },
  {
    id: '7',
    name: 'Pearl Delicacy',
    brand: 'Christian Watches',
    price: 5999.00,
    category: 'feminino',
    size: '32mm',
    rating: 4.7,
    reviews: 92,
    images: [
      'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800',
      'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800',
    ],
    description: 'Delicadeza e sofisticação em cada detalhe. O Pearl Delicacy é perfeito para momentos especiais.',
    specs: {
      material: 'Aço Inoxidável com madrepérola',
      movement: 'Quartzo Suíço',
      waterResistance: '30m',
      caseDiameter: '32mm',
      warranty: '3 anos',
    },
    inStock: true,
    soldCount: 78,
    isNew: true,
  },
  {
    id: '8',
    name: 'Titan Bold',
    brand: 'Christian Watches',
    price: 6799.00,
    category: 'masculino',
    size: '46mm',
    rating: 4.8,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800',
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800',
    ],
    description: 'Imponente e marcante, o Titan Bold foi projetado para homens que fazem declarações ousadas.',
    specs: {
      material: 'Titânio escovado',
      movement: 'Automático com cronógrafo',
      waterResistance: '150m',
      caseDiameter: '46mm',
      warranty: '5 anos',
    },
    inStock: false,
    soldCount: 145,
    isNew: false,
  },
];

export const categories = [
  { id: 'masculino', name: 'Masculino', icon: '👔' },
  { id: 'feminino', name: 'Feminino', icon: '💎' },
  { id: 'esportivo', name: 'Esportivo', icon: '🏃' },
  { id: 'luxo', name: 'Luxo', icon: '👑' },
];

export const sizes = ['32mm', '36mm', '38mm', '40mm', '42mm', '44mm', '46mm'];

export const priceRanges = [
  { id: '0-5000', label: 'Até R$ 5.000', min: 0, max: 5000 },
  { id: '5000-10000', label: 'R$ 5.000 - R$ 10.000', min: 5000, max: 10000 },
  { id: '10000-20000', label: 'R$ 10.000 - R$ 20.000', min: 10000, max: 20000 },
  { id: '20000+', label: 'Acima de R$ 20.000', min: 20000, max: Infinity },
];
