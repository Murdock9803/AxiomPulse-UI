import { ColumnData, TokenPair } from '../types'

const BORDER_COLORS = [
  '#22c55e', // Green
  '#eab308', // Yellow
  '#a855f7', // Purple
  '#3b82f6', // Blue
  '#f43f5e', // Red
  undefined
];

// --- STABLE COINMARKETCAP IMAGES ---
const TOKENS = [
  { name: 'Pepe', symbol: 'PEPE', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png' },
  { name: 'Dogwifhat', symbol: 'WIF', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28752.png' },
  { name: 'Bonk', symbol: 'BONK', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png' },
  { name: 'Popcat', symbol: 'POPCAT', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28782.png' },
  { name: 'Slerf', symbol: 'SLERF', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29881.png' },
  { name: 'Book of Meme', symbol: 'BOME', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29300.png' },
  { name: 'Wen', symbol: 'WEN', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29149.png' },
  { name: 'Mog Coin', symbol: 'MOG', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27659.png' },
  { name: 'Jeo Boden', symbol: 'BODEN', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29687.png' },
  { name: 'Doland Tremp', symbol: 'TREMP', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29756.png' },
  { name: 'Shiba Inu', symbol: 'SHIB', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png' },
  { name: 'Floki', symbol: 'FLOKI', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10804.png' },
  { name: 'Brett', symbol: 'BRETT', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29743.png' },
  { name: 'Cat in a Dogs World', symbol: 'MEW', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29868.png' },
  { name: 'Dogecoin', symbol: 'DOGE', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png' },
  { name: 'Myro', symbol: 'MYRO', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28382.png' },
  { name: 'Ponke', symbol: 'PONKE', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28936.png' },
  { name: 'Gigachad', symbol: 'GIGA', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/32837.png' },
  { name: 'Turbo', symbol: 'TURBO', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24911.png' },
  { name: 'Apu Apustaja', symbol: 'APU', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29798.png' },
  { name: 'Maneki', symbol: 'MANEKI', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/30917.png' },
  { name: 'Slothana', symbol: 'SLOTH', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/30862.png' },
  { name: 'Peng', symbol: 'PENG', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29668.png' },
  { name: 'Andy', symbol: 'ANDY', url: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29746.png' }
];

const pickRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const createRandomPair = (index: number): TokenPair => {
  const token = pickRandom(TOKENS);
  const color = pickRandom(BORDER_COLORS);
  
  return {
    id: index.toString(),
    symbol: token.symbol,
    name: token.name,
    description: `${token.name} token`,
    image: token.url, 
    borderColor: color, 
    timeAgo: `${Math.floor(Math.random() * 59) + 1}s`,
    address: `0x${Math.floor(Math.random()*99).toString()}...4444`, 
    
    stats: {
      replies: Math.floor(Math.random() * 500),
      likes: Math.floor(Math.random() * 1000),
      views: Math.floor(Math.random() * 10000),
      holders: Math.floor(Math.random() * 300)
    },
    
    marketCap: `$${(Math.random() * 100).toFixed(1)}K`,
    volume: `$${(Math.random() * 50).toFixed(1)}K`,
    txCount: Math.floor(Math.random() * 800),
    price: '$0.000...',
    liquiditySOL: `${(Math.random() * 5).toFixed(1)} BNB`,
    
    metrics: [
      { label: '5m', value: `${Math.floor(Math.random() * 20)}%`, isPositive: Math.random() > 0.3 },
      { label: '1h', value: `${Math.floor(Math.random() * 50)}%`, isPositive: Math.random() > 0.5 },
      { label: '6h', value: `${Math.floor(Math.random() * 100)}%`, isPositive: Math.random() > 0.4 }
    ]
  }
};

const generateList = (count: number, startId: number) => {
  return Array.from({ length: count }).map((_, i) => createRandomPair(startId + i));
}

export const getColumnData = (): ColumnData[] => [
  {
    title: 'New Pairs',
    count: 15,
    pairs: generateList(20, 0) 
  },
  {
    title: 'Final Stretch',
    count: 8,
    pairs: generateList(20, 100) 
  },
  {
    title: 'Migrated',
    count: 124,
    pairs: generateList(20, 200) 
  }
]