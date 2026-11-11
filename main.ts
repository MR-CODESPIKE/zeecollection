/**
 * Zee Collection - Luxury Modest Fashion
 * Client Demo Interactive TypeScript Application
 * Clean Vanilla TypeScript (ES2017+)
 */

export interface Product {
  id: string;
  name: string;
  category: 'abayas' | 'kaftans' | 'occasionwear' | 'sets' | 'hijabs';
  categoryLabel: string;
  price: number;
  oldPrice?: number;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  rating: number;
  reviewCount: number;
  stock: 'In Stock' | 'Low Stock' | 'Made to Order';
  badge?: 'New' | 'Best Seller' | 'Sale';
  image: string;
  reviews: { author: string; rating: number; date: string; comment: string }[];
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  class: string;
}

// ==========================================
// MOCK DATA STORE & ASSET PATHS (Vercel & Vite public root)
// ==========================================

const HERO_IMAGE = '/images/hero_abaya.jpg';
const KAFTAN_IMAGE = '/images/silk_kaftan.jpg';
const EMBROIDERED_ABAYA_IMAGE = '/images/embroidered_abaya.jpg';
const ATELIER_IMAGE = '/images/atelier_craft.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'zee-001',
    name: 'Classic Abaya',
    category: 'abayas',
    categoryLabel: 'Abayas',
    price: 45000,
    description: 'An understated masterpiece crafted from breathable Japanese Nidha fabric. Features clean lines, hidden snap closures, and a fluid straight drape for effortless elegance.',
    details: ['100% Premium Japanese Nidha', 'Concealed front snap buttons', 'Matching chiffon hijab included', 'Dry clean or gentle hand wash'],
    sizes: ['52', '54', '56', '58', '60'],
    colors: [
      { name: 'Obsidian Black', hex: '#111111' },
      { name: 'Warm Charcoal', hex: '#2A2A2A' },
      { name: 'Midnight Navy', hex: '#1E2530' }
    ],
    rating: 4.9,
    reviewCount: 42,
    stock: 'In Stock',
    badge: 'Best Seller',
    image: EMBROIDERED_ABAYA_IMAGE,
    reviews: [
      { author: 'Fatima Z.', rating: 5, date: 'October 14, 2026', comment: 'The drape and finish are exquisite. True luxury modest couture.' },
      { author: 'Amina B.', rating: 5, date: 'September 28, 2026', comment: 'Perfect length for heels or flats. The fabric does not crease easily.' }
    ]
  },
  {
    id: 'zee-002',
    name: 'Embroidered Abaya',
    category: 'abayas',
    categoryLabel: 'Abayas',
    price: 78000,
    oldPrice: 88000,
    description: 'Bespoke open-front abaya adorned with intricate hand-stitched antique gold bullion thread along the kimono sleeves and sweeping lapels.',
    details: ['Heavyweight matte silk crepe', 'Hand-applied gold metallic embroidery', 'Detachable silk crepe belt', 'Includes slip dress in champagne'],
    sizes: ['54', '56', '58', '60'],
    colors: [
      { name: 'Obsidian & Gold', hex: '#111111' },
      { name: 'Champagne Taupe', hex: '#B8A99A' }
    ],
    rating: 5.0,
    reviewCount: 38,
    stock: 'Low Stock',
    badge: 'Sale',
    image: HERO_IMAGE,
    reviews: [
      { author: 'Hauwa M.', rating: 5, date: 'October 20, 2026', comment: 'Wore this to a royal wedding in Abuja; received countless compliments.' }
    ]
  },
  {
    id: 'zee-003',
    name: 'Royal Doguwar Riga',
    category: 'occasionwear',
    categoryLabel: 'Occasionwear',
    price: 65000,
    description: 'An homage to majestic Northern Nigerian tailoring. Features regal structured shoulders, rich gold brocade trim, and a cascading flared hem.',
    details: ['Rich structured jacquard brocade', 'Subtle gold threading along cuffs', 'Breathable inner lining', 'Tailored for grand celebrations'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Royal Gold & Onyx', hex: '#D4AF37' },
      { name: 'Ivory Cream', hex: '#F8F4EC' },
      { name: 'Emerald Velvet', hex: '#0B3B2B' }
    ],
    rating: 4.8,
    reviewCount: 29,
    stock: 'In Stock',
    badge: 'New',
    image: KAFTAN_IMAGE,
    reviews: [
      { author: 'Zainab D.', rating: 5, date: 'October 2, 2026', comment: 'Captures heritage and modern luxury seamlessly. A true showstopper!' }
    ]
  },
  {
    id: 'zee-004',
    name: 'Pure Silk Kaftan',
    category: 'kaftans',
    categoryLabel: 'Kaftans',
    price: 85000,
    oldPrice: 98000,
    description: 'Fluid 100% pure Mulberry silk kaftan featuring delicate geometric embroidery framing the neckline and an ethereal, billowing drape.',
    details: ['100% Pure Mulberry Silk (19 Momme)', 'Hand-embroidered neckline', 'Sash belt with hand-turned silk tassels', 'Featherweight luxury feel'],
    sizes: ['Free Size (Fits S - XXL)'],
    colors: [
      { name: 'Champagne Ivory', hex: '#F8F4EC' },
      { name: 'Muted Rose', hex: '#C9A7A0' },
      { name: 'Olive Bronze', hex: '#635B48' }
    ],
    rating: 4.9,
    reviewCount: 51,
    stock: 'In Stock',
    badge: 'Best Seller',
    image: KAFTAN_IMAGE,
    reviews: [
      { author: 'Maryam K.', rating: 5, date: 'September 12, 2026', comment: 'The feel of pure silk on skin is irreplaceable. Packaging was so luxurious.' }
    ]
  },
  {
    id: 'zee-005',
    name: 'Moroccan Sfifa Jalabiya',
    category: 'kaftans',
    categoryLabel: 'Kaftans',
    price: 55000,
    description: 'Crafted with traditional braided Moroccan sfifa and hand-made aakad buttons down the bodice. Relaxed yet deeply luxurious silhouette.',
    details: ['Premium linen-silk blend', 'Authentic Moroccan gold braiding', 'Discreet side pockets', 'Side slit with inner panel'],
    sizes: ['54', '56', '58', '60'],
    colors: [
      { name: 'Desert Sand', hex: '#D2B48C' },
      { name: 'Obsidian Black', hex: '#111111' },
      { name: 'Rose Dust', hex: '#C9A7A0' }
    ],
    rating: 4.7,
    reviewCount: 19,
    stock: 'In Stock',
    image: EMBROIDERED_ABAYA_IMAGE,
    reviews: [
      { author: 'Halima S.', rating: 5, date: 'October 18, 2026', comment: 'Extremely comfortable for hosting gatherings at home or formal events.' }
    ]
  },
  {
    id: 'zee-006',
    name: 'Luxury Silk Hijab Set (3-Pack)',
    category: 'hijabs',
    categoryLabel: 'Hijab Sets',
    price: 18000,
    description: 'A curated trio of essential hijabs in premium modal and featherweight crinkle silk-chiffon, accompanied by a pair of Zee gold magnetic pins.',
    details: ['Set of 3: Obsidian, Ivory, and Muted Rose', 'Includes 2 Zee signature gold magnetic clasp pins', 'Generous 200cm x 80cm coverage', 'Non-slip breathable texture'],
    sizes: ['One Size (200cm x 80cm)'],
    colors: [
      { name: 'Signature Trio', hex: '#C9A7A0' }
    ],
    rating: 5.0,
    reviewCount: 67,
    stock: 'In Stock',
    badge: 'Best Seller',
    image: ATELIER_IMAGE,
    reviews: [
      { author: 'Safiya N.', rating: 5, date: 'October 25, 2026', comment: 'The gold magnetic pins alone are worth it! The fabric stays in place all day.' }
    ]
  },
  {
    id: 'zee-007',
    name: 'Two-Piece Kimono & Slip Set',
    category: 'sets',
    categoryLabel: 'Two-Piece Sets',
    price: 62000,
    description: 'An effortlessly coordinated two-piece featuring a sweeping open abaya kimono and an ankle-length sleeveless inner slip dress in matching crepe.',
    details: ['Heavy Japanese crepe', 'Inner slip with adjustable shoulder straps', 'Wide cuff sleeves with gold piping', 'Includes matching belt'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Smoky Taupe', hex: '#8C827A' },
      { name: 'Obsidian Black', hex: '#111111' },
      { name: 'Ivory Cream', hex: '#F8F4EC' }
    ],
    rating: 4.8,
    reviewCount: 31,
    stock: 'In Stock',
    badge: 'New',
    image: HERO_IMAGE,
    reviews: [
      { author: 'Bilkisu T.', rating: 5, date: 'October 11, 2026', comment: 'Wear them together or mix and match with Western wear. So versatile.' }
    ]
  },
  {
    id: 'zee-008',
    name: 'Midnight Occasion Abaya',
    category: 'occasionwear',
    categoryLabel: 'Occasionwear',
    price: 110000,
    oldPrice: 130000,
    description: 'Our crown jewel gala abaya, intricately encrusted with Swarovski crystals and antique bugle beads across the shoulders and trailing hemline.',
    details: ['Midnight black velvet-crepe composite', 'Hand-stitched crystal embellishments (over 28 hours of artisan work)', 'Includes matching embellished shayla', 'Dry clean only'],
    sizes: ['54', '56', '58', '60'],
    colors: [
      { name: 'Midnight Onyx & Crystal', hex: '#111111' }
    ],
    rating: 5.0,
    reviewCount: 22,
    stock: 'Made to Order',
    badge: 'Sale',
    image: EMBROIDERED_ABAYA_IMAGE,
    reviews: [
      { author: 'Dr. Aisha Y.', rating: 5, date: 'October 29, 2026', comment: 'Breathtaking artistry. Truly comparable to haute couture maisons in Paris and Dubai.' }
    ]
  },
  {
    id: 'zee-009',
    name: 'French Chantilly Lace Abaya',
    category: 'abayas',
    categoryLabel: 'Abayas',
    price: 72000,
    description: 'Delicate floral chantilly lace layered over whisper-soft double georgette crepe. Scalloped eyelash edges along the cuffs and sweeping hem.',
    details: ['Imported French Chantilly lace', 'Double georgette silk-crepe base', 'Scalloped cuff details', 'Gentle dry clean only'],
    sizes: ['52', '54', '56', '58'],
    colors: [
      { name: 'Onyx Noir', hex: '#111111' },
      { name: 'Dusty Rose', hex: '#C9A7A0' }
    ],
    rating: 4.9,
    reviewCount: 17,
    stock: 'Low Stock',
    badge: 'New',
    image: HERO_IMAGE,
    reviews: [
      { author: 'Khadija B.', rating: 5, date: 'September 19, 2026', comment: 'The lace detailing is so subtle and refined, not flashy at all. Very tasteful.' }
    ]
  },
  {
    id: 'zee-010',
    name: 'Minimalist Crepe Abaya',
    category: 'abayas',
    categoryLabel: 'Abayas',
    price: 52000,
    description: 'The pinnacle of daily luxury. Features functional deep side pockets, magnetic sleeve cuffs for easy wudhu, and an anti-static finish.',
    details: ['Wrinkle-resistant Japanese poly-crepe', 'Functional hidden seam pockets', 'Magnetic wudhu-friendly cuffs', 'Machine wash gentle'],
    sizes: ['52', '54', '56', '58', '60', '62'],
    colors: [
      { name: 'Charcoal Black', hex: '#1A1A1A' },
      { name: 'Mocha Brown', hex: '#4A3B32' },
      { name: 'Sage Green', hex: '#4F5D54' }
    ],
    rating: 4.8,
    reviewCount: 44,
    stock: 'In Stock',
    badge: 'Best Seller',
    image: EMBROIDERED_ABAYA_IMAGE,
    reviews: [
      { author: 'Nura A.', rating: 5, date: 'October 16, 2026', comment: 'My absolute go-to work abaya. Pockets are deep enough for my phone!' }
    ]
  },
  {
    id: 'zee-011',
    name: 'Heavy Hammered Satin Kaftan',
    category: 'kaftans',
    categoryLabel: 'Kaftans',
    price: 68000,
    description: 'Lustrous heavyweight hammered satin that catches ambient candlelight. Styled with an asymmetric draped neckline and waist-slimming cinch.',
    details: ['Heavy hammered liquid satin', 'Asymmetric neckline with gold collar pin', 'Draped batwing sleeve', 'Hand wash cold'],
    sizes: ['Free Size (Fits S - XL)'],
    colors: [
      { name: 'Champagne Gold', hex: '#E5D392' },
      { name: 'Blush Rose', hex: '#D8B8B0' },
      { name: 'Emerald', hex: '#1B4D3E' }
    ],
    rating: 4.7,
    reviewCount: 26,
    stock: 'In Stock',
    image: KAFTAN_IMAGE,
    reviews: [
      { author: 'Maryam O.', rating: 5, date: 'October 21, 2026', comment: 'Drapes like liquid metal. Looked astonishing in photos.' }
    ]
  },
  {
    id: 'zee-012',
    name: 'Wide-Leg Palazzo Two-Piece Set',
    category: 'sets',
    categoryLabel: 'Two-Piece Sets',
    price: 58000,
    description: 'Contemporary modest co-ord featuring wide-leg palazzo trousers with an elasticated waistband and an elongated batwing high-low tunic.',
    details: ['Fluid viscose-linen weave', 'Elasticated high waist with drawcord', 'High-low tunic with side slits', 'Wrinkle resistant'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Muted Rose', hex: '#C9A7A0' },
      { name: 'Ivory Cream', hex: '#F8F4EC' },
      { name: 'Obsidian Black', hex: '#111111' }
    ],
    rating: 4.9,
    reviewCount: 35,
    stock: 'In Stock',
    badge: 'New',
    image: HERO_IMAGE,
    reviews: [
      { author: 'Zubaida L.', rating: 5, date: 'October 27, 2026', comment: 'So chic and comfortable. I travel in this set constantly.' }
    ]
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'lb-1',
    title: 'The Royal Sahara Collection',
    subtitle: 'Haute Couture Edition · 2026',
    image: HERO_IMAGE,
    class: 'item-large'
  },
  {
    id: 'lb-2',
    title: 'Pure Silk Solstice',
    subtitle: '100% Mulberry Silk Kaftans',
    image: KAFTAN_IMAGE,
    class: 'item-tall'
  },
  {
    id: 'lb-3',
    title: 'Nocturne Embroidery',
    subtitle: 'Obsidian Crepe & Antique Gold',
    image: EMBROIDERED_ABAYA_IMAGE,
    class: 'item-tall'
  },
  {
    id: 'lb-4',
    title: 'Artisanal Atelier Craft',
    subtitle: 'Hand-Finished in Victoria Island',
    image: ATELIER_IMAGE,
    class: 'item-large'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Hajiya Fatima Al-Hassan',
    role: 'Creative Director',
    location: 'Abuja, Nigeria',
    rating: 5,
    text: '“Zee Collection has redefined modest luxury in West Africa. The precision of their bullion embroidery on the Royal Abaya matches Savile Row standards.”',
    initials: 'FA'
  },
  {
    id: 't-2',
    name: 'Amina Bello-Dikko',
    role: 'Architect & Interior Curator',
    location: 'Lagos & London',
    rating: 5,
    text: '“I ordered three silk kaftans for an international diplomacy summit. The packaging arrived in bespoke velvet boxes and the drape was impeccably weighted.”',
    initials: 'AB'
  },
  {
    id: 't-3',
    name: 'Zahra Mansoor',
    role: 'Private Client',
    location: 'Dubai, UAE',
    rating: 5,
    text: '“Having lived in the Emirates for 10 years, I am very particular with abaya fabrics. Zee’s Japanese Nidha and velvet blends are second to none.”',
    initials: 'ZM'
  },
  {
    id: 't-4',
    name: 'Dr. Khadija Garba',
    role: 'Consultant Surgeon',
    location: 'Kano, Nigeria',
    rating: 5,
    text: '“Their size 58 fits like a glove with 3-inch heels. The customer support on WhatsApp was so attentive, and delivery arrived within 48 hours.”',
    initials: 'KG'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Fabrics & Quality',
    question: 'What fabrics does Zee Collection use in its abayas and kaftans?',
    answer: 'We exclusively source premium grade fabrics including authentic Japanese Nidha, 19-momme pure Mulberry silk, double georgette crepe, and breathable linen-silk blends. All metallic bullion threads and beads are hand-stitched by master artisans.'
  },
  {
    category: 'Sizing & Fit',
    question: 'How do I determine my correct abaya and kaftan size?',
    answer: 'Traditional abaya sizes (52, 54, 56, 58, 60, 62) correspond directly to the overall garment length from shoulder seam to floor in inches. If you are 5ft 4in and wear flats, size 54 is your standard fit; if you plan to wear 3-inch heels, size 56 gives an elegant floor-sweeping puddle. Check our interactive Size Guide for full bust and sleeve measurements.'
  },
  {
    category: 'Custom & Bespoke',
    question: 'Do you offer custom sizing, bridal bespoke, or custom embroidery?',
    answer: 'Yes! Our Victoria Island atelier accepts bespoke commissions for brides, mothers of the bride, and private VIP clients. You can submit your exact shoulder, bust, and height measurements via our WhatsApp Concierge for a tailored piece.'
  },
  {
    category: 'Delivery & Shipping',
    question: 'What are the delivery timelines across Nigeria and internationally?',
    answer: 'For in-stock ready-to-wear pieces: Lagos delivery takes 24–48 hours; Abuja and other Nigerian states take 2–3 business days. International express orders via DHL Express take 3–5 business days to the UK, US, Canada, and GCC.'
  },
  {
    category: 'Demo & Orders',
    question: 'Is this website a live store or a client preview demo?',
    answer: 'This website is an interactive client demo for Zee Collection. You can freely test adding products to your cart, test filtering and search, apply discount code ZEE10, test size selection, and inspect WhatsApp checkout messages. No actual payments or charges are made.'
  },
  {
    category: 'Ordering via WhatsApp',
    question: 'Can clients place orders and pay directly via WhatsApp?',
    answer: 'Yes! In our production workflow, clients frequently prefer our WhatsApp VIP Concierge. In this demo, clicking "Checkout via WhatsApp" automatically compiles your cart items, sizes, and subtotal into a ready-to-send WhatsApp preview message.'
  },
  {
    category: 'Garment Care',
    question: 'How should I clean and store my silk and embroidered garments?',
    answer: 'We recommend specialized dry cleaning for our crystal and bullion embroidered abayas. Plain crepe and Nidha abayas can be gently hand-washed in lukewarm water with mild silk detergent, then dried flat away from direct sunlight.'
  }
];

export const SIZE_GUIDE_DATA = [
  { size: '52', lengthIn: '52"', lengthCm: '132 cm', height: "5'0\" - 5'2\"", bustIn: '38" - 40"', sleeveIn: '26"' },
  { size: '54', lengthIn: '54"', lengthCm: '137 cm', height: "5'3\" - 5'4\"", bustIn: '40" - 42"', sleeveIn: '27"' },
  { size: '56', lengthIn: '56"', lengthCm: '142 cm', height: "5'5\" - 5'6\"", bustIn: '42" - 44"', sleeveIn: '28"' },
  { size: '58', lengthIn: '58"', lengthCm: '147 cm', height: "5'7\" - 5'8\"", bustIn: '44" - 46"', sleeveIn: '29"' },
  { size: '60', lengthIn: '60"', lengthCm: '152 cm', height: "5'9\" - 5'10\"", bustIn: '46" - 48"', sleeveIn: '30"' },
  { size: '62', lengthIn: '62"', lengthCm: '157 cm', height: "5'11\"+", bustIn: '48" - 50"', sleeveIn: '31"' }
];

// ==========================================
// APPLICATION STATE
// ==========================================

class StoreState {
  cart: CartItem[] = [];
  wishlist: string[] = []; // product IDs
  discountCode: string = '';
  discountPercent: number = 0;
  
  // Filter state
  activeCategory: string = 'all';
  activeSize: string = 'all';
  priceRange: string = 'all';
  sortBy: string = 'featured';
  searchQuery: string = '';

  constructor() {
    this.loadState();
  }

  loadState() {
    try {
      const savedCart = localStorage.getItem('zee_cart');
      if (savedCart) this.cart = JSON.parse(savedCart);

      const savedWishlist = localStorage.getItem('zee_wishlist');
      if (savedWishlist) this.wishlist = JSON.parse(savedWishlist);

      const savedDiscount = localStorage.getItem('zee_discount');
      if (savedDiscount === 'ZEE10') {
        this.discountCode = 'ZEE10';
        this.discountPercent = 10;
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }

  saveCart() {
    try {
      localStorage.setItem('zee_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.warn(e);
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem('zee_wishlist', JSON.stringify(this.wishlist));
    } catch (e) {
      console.warn(e);
    }
  }

  addToCart(product: Product, size: string, color: string, qty = 1): boolean {
    const existingIndex = this.cart.findIndex(
      item => item.productId === product.id && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += qty;
    } else {
      this.cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        color,
        quantity: qty
      });
    }

    this.saveCart();
    return true;
  }

  updateQuantity(index: number, delta: number) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
      this.saveCart();
    }
  }

  removeFromCart(index: number) {
    if (this.cart[index]) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  toggleWishlist(productId: string): boolean {
    const idx = this.wishlist.indexOf(productId);
    let added = false;
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
    } else {
      this.wishlist.push(productId);
      added = true;
    }
    this.saveWishlist();
    return added;
  }

  isInWishlist(productId: string): boolean {
    return this.wishlist.includes(productId);
  }

  getCartSubtotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getCartCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  applyDiscount(code: string): { success: boolean; message: string } {
    const clean = code.trim().toUpperCase();
    if (clean === 'ZEE10') {
      this.discountCode = 'ZEE10';
      this.discountPercent = 10;
      localStorage.setItem('zee_discount', 'ZEE10');
      return { success: true, message: 'Code ZEE10 applied! 10% discount granted.' };
    }
    return { success: false, message: 'Invalid promo code. Try code "ZEE10".' };
  }
}

// Global state instance
const state = new StoreState();

// Helper to format Nigerian Naira
export function formatNaira(amount: number): string {
  return '₦' + amount.toLocaleString('en-NG');
}

// ==========================================
// TOAST NOTIFICATION UTILITY
// ==========================================

export function showToast(message: string, icon = '✦') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// RENDERERS
// ==========================================

export function renderProductCard(p: Product): string {
  const isWishlisted = state.isInWishlist(p.id);
  const badgeHtml = p.badge
    ? `<span class="card-badge badge-${p.badge.toLowerCase().replace(' ', '')}">${p.badge}</span>`
    : '';
  const oldPriceHtml = p.oldPrice
    ? `<span class="price-old">${formatNaira(p.oldPrice)}</span>`
    : '';

  return `
    <article class="product-card" data-id="${p.id}">
      <div class="card-media">
        ${badgeHtml}
        <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                data-wishlist="${p.id}" 
                title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                aria-label="Toggle Wishlist">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <img src="${p.image}" alt="${p.name} - Zee Collection" loading="lazy" />
        <div class="card-hover-actions">
          <button class="btn-card-quickview" data-quickview="${p.id}">Quick View</button>
        </div>
      </div>
      <div class="card-info">
        <div class="card-meta">
          <span class="card-category">${p.categoryLabel}</span>
          <span class="card-rating">
            <svg width="14" height="14" fill="#D4AF37" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            ${p.rating.toFixed(1)} <small style="color:#9CA3AF">(${p.reviewCount})</small>
          </span>
        </div>
        <h3 class="card-title" data-quickview="${p.id}" style="cursor:pointer">${p.name}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-footer">
          <div class="card-pricing tabular-nums">
            <span class="price-current">${formatNaira(p.price)}</span>
            ${oldPriceHtml}
          </div>
          <button class="btn-card-add" data-quickadd="${p.id}">
            <span>+ Add</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

export function filterAndRenderProducts() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('product-count-label');
  if (!grid) return;

  let filtered = [...PRODUCTS];

  // Category filter
  if (state.activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === state.activeCategory);
  }

  // Size filter
  if (state.activeSize !== 'all') {
    filtered = filtered.filter(p => 
      p.sizes.some(s => s.toLowerCase().includes(state.activeSize.toLowerCase()))
    );
  }

  // Price range filter
  if (state.priceRange === 'under-60k') {
    filtered = filtered.filter(p => p.price < 60000);
  } else if (state.priceRange === '60k-80k') {
    filtered = filtered.filter(p => p.price >= 60000 && p.price <= 80000);
  } else if (state.priceRange === 'above-80k') {
    filtered = filtered.filter(p => p.price > 80000);
  }

  // Search query
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} creations`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-catalog">
        <h3>No matching garments found</h3>
        <p style="color:var(--color-text-muted); margin:0.5rem 0 1.5rem">
          Try adjusting your search criteria or resetting filters to see our full atelier collection.
        </p>
        <button class="btn btn-outline" id="btn-reset-empty">Clear All Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('btn-reset-empty');
    if (resetBtn) {
      resetBtn.addEventListener('click', resetAllFilters);
    }
  } else {
    grid.innerHTML = filtered.map(renderProductCard).join('');
    attachProductCardListeners();
  }
}

function resetAllFilters() {
  state.activeCategory = 'all';
  state.activeSize = 'all';
  state.priceRange = 'all';
  state.sortBy = 'featured';
  state.searchQuery = '';

  const searchInput = document.getElementById('shop-search') as HTMLInputElement | null;
  if (searchInput) searchInput.value = '';

  const sizeSelect = document.getElementById('filter-size') as HTMLSelectElement | null;
  if (sizeSelect) sizeSelect.value = 'all';

  const priceSelect = document.getElementById('filter-price') as HTMLSelectElement | null;
  if (priceSelect) priceSelect.value = 'all';

  const sortSelect = document.getElementById('sort-products') as HTMLSelectElement | null;
  if (sortSelect) sortSelect.value = 'featured';

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === 'all');
  });

  filterAndRenderProducts();
}

// ==========================================
// CART & DRAWER MANAGEMENT & ANIMATIONS
// ==========================================

export function animateCartIcon() {
  const btn = document.getElementById('btn-open-cart');
  if (btn) {
    btn.classList.remove('animate-cart-bounce');
    void btn.offsetWidth; // trigger reflow for restart
    btn.classList.add('animate-cart-bounce');
    setTimeout(() => btn.classList.remove('animate-cart-bounce'), 700);
  }
}

export function updateCartBadges() {
  const count = state.getCartCount();
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = count.toString();
    const wasHidden = b.classList.contains('hidden');
    b.classList.toggle('hidden', count === 0);
    if (!wasHidden && count > 0) {
      b.classList.remove('animate-badge-pop');
      void (b as HTMLElement).offsetWidth;
      b.classList.add('animate-badge-pop');
    }
  });

  const wishlistCount = state.wishlist.length;
  const wishBadges = document.querySelectorAll('.wishlist-count-badge');
  wishBadges.forEach(b => {
    b.textContent = wishlistCount.toString();
    b.classList.toggle('hidden', wishlistCount === 0);
    b.classList.remove('animate-badge-pop');
    void (b as HTMLElement).offsetWidth;
    b.classList.add('animate-badge-pop');
  });
}

export function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  const footerContainer = document.getElementById('cart-drawer-footer');
  if (!container || !footerContainer) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-drawer-state">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h4 style="font-family:var(--font-serif); font-size:1.35rem; color:var(--color-charcoal)">Your Bag is Empty</h4>
        <p style="font-size:0.85rem;">Discover our collection of handcrafted abayas and bespoke silk kaftans.</p>
        <button class="btn btn-outline" id="btn-explore-shop" style="margin-top:1rem;">Explore Collection</button>
      </div>
    `;
    footerContainer.style.display = 'none';

    const exploreBtn = document.getElementById('btn-explore-shop');
    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        closeAllDrawers();
        const shopSection = document.getElementById('shop');
        if (shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
    return;
  }

  footerContainer.style.display = 'flex';

  container.innerHTML = state.cart.map((item, idx) => `
    <div class="cart-item-row" data-index="${idx}">
      <div class="cart-item-thumb">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <p class="cart-item-variant">Size: <strong>${item.size}</strong> · Color: <strong>${item.color}</strong></p>
        <span class="cart-item-price tabular-nums">${formatNaira(item.price)}</span>
        <div class="cart-quantity-row">
          <div class="qty-control">
            <button class="qty-btn btn-qty-minus" data-index="${idx}" aria-label="Decrease quantity">−</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn btn-qty-plus" data-index="${idx}" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn-remove-item" data-index="${idx}">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  // Calculate totals
  const subtotal = state.getCartSubtotal();
  const discountAmount = Math.round((subtotal * state.discountPercent) / 100);
  const shipping = subtotal > 100000 ? 0 : (subtotal > 0 ? 4500 : 0);
  const total = subtotal - discountAmount + shipping;

  const subtotalEl = document.getElementById('cart-subtotal');
  const discountRowEl = document.getElementById('cart-discount-row');
  const discountValEl = document.getElementById('cart-discount-val');
  const shippingEl = document.getElementById('cart-shipping-val');
  const totalEl = document.getElementById('cart-total-val');

  if (subtotalEl) subtotalEl.textContent = formatNaira(subtotal);
  if (discountRowEl && discountValEl) {
    if (state.discountPercent > 0) {
      discountRowEl.style.display = 'flex';
      discountValEl.textContent = `-${formatNaira(discountAmount)} (${state.discountPercent}%)`;
    } else {
      discountRowEl.style.display = 'none';
    }
  }
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Complimentary' : formatNaira(shipping);
  if (totalEl) totalEl.textContent = formatNaira(total);

  // Attach cart row listeners
  container.querySelectorAll('.btn-qty-minus').forEach(b => {
    b.addEventListener('click', (e) => {
      const idx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-index') || '0', 10);
      state.updateQuantity(idx, -1);
      renderCartDrawer();
      updateCartBadges();
    });
  });

  container.querySelectorAll('.btn-qty-plus').forEach(b => {
    b.addEventListener('click', (e) => {
      const idx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-index') || '0', 10);
      state.updateQuantity(idx, 1);
      renderCartDrawer();
      updateCartBadges();
    });
  });

  container.querySelectorAll('.btn-remove-item').forEach(b => {
    b.addEventListener('click', (e) => {
      const idx = parseInt((e.currentTarget as HTMLElement).getAttribute('data-index') || '0', 10);
      state.removeFromCart(idx);
      renderCartDrawer();
      updateCartBadges();
      showToast('Item removed from shopping bag');
    });
  });
}

export function renderWishlistDrawer() {
  const container = document.getElementById('wishlist-drawer-items');
  if (!container) return;

  const wishlistedProducts = PRODUCTS.filter(p => state.isInWishlist(p.id));

  if (wishlistedProducts.length === 0) {
    container.innerHTML = `
      <div class="empty-drawer-state">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <h4 style="font-family:var(--font-serif); font-size:1.35rem; color:var(--color-charcoal)">Your Wishlist is Empty</h4>
        <p style="font-size:0.85rem;">Save your favorite modest couture pieces to review later or order on demand.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = wishlistedProducts.map(p => `
    <div class="cart-item-row" data-id="${p.id}">
      <div class="cart-item-thumb">
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-title">${p.name}</h4>
        <span class="card-category" style="font-size:0.7rem;">${p.categoryLabel}</span>
        <span class="cart-item-price tabular-nums">${formatNaira(p.price)}</span>
        <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
          <button class="btn btn-primary" style="padding:0.4rem 0.8rem; font-size:0.7rem;" data-wishlist-add="${p.id}">Move to Bag</button>
          <button class="btn-remove-item" data-wishlist-remove="${p.id}">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-wishlist-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pid = (e.currentTarget as HTMLElement).getAttribute('data-wishlist-add')!;
      const prod = PRODUCTS.find(x => x.id === pid);
      if (prod) {
        state.addToCart(prod, prod.sizes[0], prod.colors[0].name, 1);
        state.toggleWishlist(pid);
        updateCartBadges();
        renderWishlistDrawer();
        renderCartDrawer();
        filterAndRenderProducts();
        showToast(`Moved ${prod.name} to shopping bag!`);
      }
    });
  });

  container.querySelectorAll('[data-wishlist-remove]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pid = (e.currentTarget as HTMLElement).getAttribute('data-wishlist-remove')!;
      state.toggleWishlist(pid);
      updateCartBadges();
      renderWishlistDrawer();
      filterAndRenderProducts();
      showToast('Removed from wishlist');
    });
  });
}

export function openDrawer(type: 'cart' | 'wishlist') {
  const backdrop = document.getElementById('drawer-backdrop');
  const cartPanel = document.getElementById('cart-drawer');
  const wishPanel = document.getElementById('wishlist-drawer');

  if (backdrop) backdrop.classList.add('active');

  if (type === 'cart') {
    renderCartDrawer();
    if (cartPanel) cartPanel.classList.add('open');
    if (wishPanel) wishPanel.classList.remove('open');
  } else {
    renderWishlistDrawer();
    if (wishPanel) wishPanel.classList.add('open');
    if (cartPanel) cartPanel.classList.remove('open');
  }
}

export function closeAllDrawers() {
  const backdrop = document.getElementById('drawer-backdrop');
  const cartPanel = document.getElementById('cart-drawer');
  const wishPanel = document.getElementById('wishlist-drawer');

  if (backdrop) backdrop.classList.remove('active');
  if (cartPanel) cartPanel.classList.remove('open');
  if (wishPanel) wishPanel.classList.remove('open');
}

// ==========================================
// QUICK VIEW MODAL
// ==========================================

export function openQuickView(productId: string) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById('quickview-modal');
  const content = document.getElementById('quickview-content');
  if (!modal || !content) return;

  let selectedSize = prod.sizes[0];
  let selectedColor = prod.colors[0].name;
  let currentQty = 1;

  const oldPriceHtml = prod.oldPrice
    ? `<span class="price-old" style="font-size:1.1rem;">${formatNaira(prod.oldPrice)}</span>`
    : '';

  content.innerHTML = `
    <div class="quickview-layout">
      <div class="quickview-gallery">
        <img src="${prod.image}" alt="${prod.name}" id="qv-main-img" />
      </div>
      <div class="quickview-details">
        <div class="qv-meta">
          <span class="card-category">${prod.categoryLabel}</span>
          <span class="card-rating">
            <svg width="15" height="15" fill="#D4AF37" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            ${prod.rating.toFixed(1)} (${prod.reviewCount} Reviews)
          </span>
        </div>

        <h2 class="qv-title">${prod.name}</h2>
        <div class="qv-price-row tabular-nums">
          <span class="qv-price">${formatNaira(prod.price)}</span>
          ${oldPriceHtml}
          <span style="font-size:0.75rem; color:var(--color-gold-dark); font-weight:600; text-transform:uppercase;">
            ${prod.stock}
          </span>
        </div>

        <p style="font-size:0.9rem; color:#4B5563; line-height:1.7;">${prod.description}</p>

        <!-- Fabric details -->
        <ul style="font-size:0.8rem; color:#6B7280; display:flex; flex-direction:column; gap:0.25rem; border-left:2px solid var(--color-gold); padding-left:0.75rem;">
          ${prod.details.map(d => `<li>• ${d}</li>`).join('')}
        </ul>

        <!-- Size selection -->
        <div>
          <div class="selector-label">
            <span>Select Size: <strong id="qv-selected-size-label">${selectedSize}</strong></span>
            <button class="btn-open-size-guide" id="btn-qv-size-guide">View Size Guide</button>
          </div>
          <div class="size-pill-group">
            ${prod.sizes.map((s, idx) => `
              <button class="size-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
            `).join('')}
          </div>
        </div>

        <!-- Color selection -->
        <div>
          <div class="selector-label">
            <span>Color Palette: <strong id="qv-selected-color-label">${selectedColor}</strong></span>
          </div>
          <div class="color-swatch-group">
            ${prod.colors.map((c, idx) => `
              <button class="color-swatch ${idx === 0 ? 'active' : ''}" 
                      style="background-color:${c.hex};" 
                      data-color="${c.name}"
                      title="${c.name}"></button>
            `).join('')}
          </div>
        </div>

        <!-- Quantity & Add to Cart -->
        <div style="display:flex; gap:1rem; align-items:center; margin-top:0.5rem; flex-wrap:wrap;">
          <div class="qty-control" style="height:2.9rem;">
            <button class="qty-btn" id="qv-qty-minus" style="width:2.2rem;">−</button>
            <span class="qty-display" id="qv-qty-display" style="width:2.5rem; font-size:0.95rem;">1</span>
            <button class="qty-btn" id="qv-qty-plus" style="width:2.2rem;">+</button>
          </div>
          <button class="btn btn-gold" id="qv-btn-add" style="flex:1; height:2.9rem;">
            Add to Bag (${formatNaira(prod.price)})
          </button>
          <button class="btn btn-outline" id="qv-btn-wish" style="height:2.9rem; padding:0 1rem;" title="Save to Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${state.isInWishlist(prod.id) ? '#D4AF37' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <!-- Customer reviews snippet -->
        <div style="margin-top:1.5rem; padding-top:1.25rem; border-top:1px solid #EAE4D8;">
          <h4 style="font-family:var(--font-serif); font-size:1.1rem; color:var(--color-charcoal); margin-bottom:0.75rem;">
            Client Impressions
          </h4>
          <div style="display:flex; flex-direction:column; gap:0.75rem;">
            ${prod.reviews.map(r => `
              <div style="font-size:0.8rem; background:#FAF7F2; padding:0.75rem 1rem; border-radius:4px; border-left:2px solid var(--color-gold);">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.25rem;">
                  <strong>${r.author}</strong>
                  <span style="color:#9CA3AF;">${r.date}</span>
                </div>
                <p style="color:#4B5563;">“${r.comment}”</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Size buttons handler
  content.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      content.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      const target = e.currentTarget as HTMLElement;
      target.classList.add('active');
      selectedSize = target.getAttribute('data-size') || prod.sizes[0];
      const label = document.getElementById('qv-selected-size-label');
      if (label) label.textContent = selectedSize;
    });
  });

  // Color swatch handler
  content.querySelectorAll('.color-swatch').forEach(btn => {
    btn.addEventListener('click', (e) => {
      content.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('active'));
      const target = e.currentTarget as HTMLElement;
      target.classList.add('active');
      selectedColor = target.getAttribute('data-color') || prod.colors[0].name;
      const label = document.getElementById('qv-selected-color-label');
      if (label) label.textContent = selectedColor;
    });
  });

  // Quantity controls
  const qtyMinus = document.getElementById('qv-qty-minus');
  const qtyPlus = document.getElementById('qv-qty-plus');
  const qtyDisplay = document.getElementById('qv-qty-display');
  const btnAdd = document.getElementById('qv-btn-add');

  qtyMinus?.addEventListener('click', () => {
    if (currentQty > 1) {
      currentQty--;
      if (qtyDisplay) qtyDisplay.textContent = currentQty.toString();
      if (btnAdd) btnAdd.textContent = `Add to Bag (${formatNaira(prod.price * currentQty)})`;
    }
  });

  qtyPlus?.addEventListener('click', () => {
    currentQty++;
    if (qtyDisplay) qtyDisplay.textContent = currentQty.toString();
    if (btnAdd) btnAdd.textContent = `Add to Bag (${formatNaira(prod.price * currentQty)})`;
  });

  // Add to Bag action
  btnAdd?.addEventListener('click', () => {
    state.addToCart(prod, selectedSize, selectedColor, currentQty);
    updateCartBadges();
    closeAllModals();
    openDrawer('cart');
    showToast(`Added ${prod.name} (${selectedSize}) to your bag!`);
  });

  // Toggle Wishlist action
  const btnWish = document.getElementById('qv-btn-wish');
  btnWish?.addEventListener('click', () => {
    const isAdded = state.toggleWishlist(prod.id);
    updateCartBadges();
    filterAndRenderProducts();
    if (btnWish) {
      const svg = btnWish.querySelector('svg');
      if (svg) svg.setAttribute('fill', isAdded ? '#D4AF37' : 'none');
    }
    showToast(isAdded ? `Saved ${prod.name} to Wishlist!` : `Removed ${prod.name} from Wishlist`);
  });

  // Size guide button
  const btnSizeGuide = document.getElementById('btn-qv-size-guide');
  btnSizeGuide?.addEventListener('click', () => {
    openSizeGuideModal();
  });

  modal.classList.add('open');
}

export function openSizeGuideModal() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) modal.classList.add('open');
}

export function openLookbookLightbox(item: LookbookItem) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img') as HTMLImageElement | null;
  const caption = document.getElementById('lightbox-caption');

  if (modal && img && caption) {
    img.src = item.image;
    img.alt = item.title;
    caption.innerHTML = `<h3>${item.title}</h3><p style="color:var(--color-gold); font-size:0.85rem; letter-spacing:0.1em; text-transform:uppercase;">${item.subtitle}</p>`;
    modal.classList.add('open');
  }
}

export function openOrderReceiptModal(orderSummary: { orderId: string; subtotal: number; total: number; itemCount: number }) {
  const modal = document.getElementById('order-receipt-modal');
  const detailsEl = document.getElementById('receipt-details');
  if (!modal || !detailsEl) return;

  detailsEl.innerHTML = `
    <div style="text-align:center; padding:1.5rem 0;">
      <div style="width:3.5rem; height:3.5rem; border-radius:50%; background:rgba(212,175,55,0.15); border:1px solid var(--color-gold); display:flex; align-items:center; justify-content:center; margin:0 auto 1rem; color:var(--color-gold-dark);">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <span class="demo-pill" style="margin-bottom:0.75rem;">Demo Order Simulation</span>
      <h3 style="font-family:var(--font-serif); font-size:1.85rem; color:var(--color-charcoal); margin-bottom:0.25rem;">
        Order Reserved: #${orderSummary.orderId}
      </h3>
      <p style="font-size:0.875rem; color:#6B7280; max-width:440px; margin:0 auto 1.5rem;">
        Thank you for previewing the Zee Collection checkout journey. In a live environment, your atelier confirmation and DHL tracking code would arrive via SMS and email.
      </p>

      <div style="background:#FAF7F2; border:1px solid #EAE4D8; border-radius:8px; padding:1.25rem; text-align:left; font-size:0.85rem; margin-bottom:1.5rem;">
        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; color:#4B5563;">
          <span>Items Ordered:</span>
          <strong>${orderSummary.itemCount} piece(s)</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; color:#4B5563;">
          <span>Atelier Packaging:</span>
          <strong>Bespoke Zee Velvet Box & Ribbon</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; color:#4B5563;">
          <span>Estimated Delivery:</span>
          <strong>24 - 48 Hours Express</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-family:var(--font-serif); font-size:1.2rem; font-weight:700; color:var(--color-charcoal); border-top:1px solid #DDD7CB; padding-top:0.75rem; margin-top:0.5rem;">
          <span>Total Order Value:</span>
          <span class="tabular-nums" style="color:var(--color-gold-dark)">${formatNaira(orderSummary.total)}</span>
        </div>
      </div>

      <button class="btn btn-primary" id="btn-close-receipt" style="width:100%;">
        Return to Atelier Catalog
      </button>
    </div>
  `;

  document.getElementById('btn-close-receipt')?.addEventListener('click', () => {
    closeAllModals();
  });

  modal.classList.add('open');
}

export function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
}

// ==========================================
// CHECKOUT VIA WHATSAPP (DEMO)
// ==========================================

export function handleWhatsAppCheckout() {
  if (state.cart.length === 0) {
    showToast('Your shopping bag is empty.');
    return;
  }

  const subtotal = state.getCartSubtotal();
  const discountAmount = Math.round((subtotal * state.discountPercent) / 100);
  const total = subtotal - discountAmount;

  let message = `Hello Zee Collection Concierge! ✨\nI would like to place an order for the following items:\n\n`;

  state.cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.name}*\n   Size: ${item.size} | Color: ${item.color}\n   Qty: ${item.quantity} × ${formatNaira(item.price)}\n\n`;
  });

  if (state.discountPercent > 0) {
    message += `Promo Code: *${state.discountCode}* (10% Off: -${formatNaira(discountAmount)})\n`;
  }

  message += `*Total Order Value:* ${formatNaira(total)}\n\nPlease advise on payment and delivery timeline to my address.`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/2348000000000?text=${encoded}`;

  // In demo mode, inform client and open WhatsApp in separate demo tab
  showToast('Generating WhatsApp Concierge message...');
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
  }, 400);
}

// ==========================================
// DOM LISTENERS & INITIALIZATION
// ==========================================

function attachProductCardListeners() {
  // Quick View triggers
  document.querySelectorAll('[data-quickview]').forEach(el => {
    el.addEventListener('click', (e) => {
      const pid = (e.currentTarget as HTMLElement).getAttribute('data-quickview')!;
      openQuickView(pid);
    });
  });

  // Direct quick-add to bag with micro-interaction
  document.querySelectorAll('[data-quickadd]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const btn = e.currentTarget as HTMLElement;
      const pid = btn.getAttribute('data-quickadd')!;
      const prod = PRODUCTS.find(p => p.id === pid);
      if (prod) {
        state.addToCart(prod, prod.sizes[0], prod.colors[0].name, 1);
        updateCartBadges();
        animateCartIcon();

        // Button success animation
        const originalHtml = btn.innerHTML;
        btn.classList.add('btn-added-success');
        btn.innerHTML = '<span>✓ Added</span>';
        setTimeout(() => {
          btn.classList.remove('btn-added-success');
          btn.innerHTML = originalHtml;
        }, 1200);

        showToast(`Added ${prod.name} to your bag!`);
      }
    });
  });

  // Wishlist heart toggle with heart bounce animation
  document.querySelectorAll('[data-wishlist]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const btn = e.currentTarget as HTMLElement;
      const pid = btn.getAttribute('data-wishlist')!;
      const prod = PRODUCTS.find(p => p.id === pid);
      const isAdded = state.toggleWishlist(pid);
      btn.classList.toggle('active', isAdded);

      // Heart bounce animation
      btn.classList.remove('animate-heart-pop');
      void btn.offsetWidth;
      btn.classList.add('animate-heart-pop');

      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isAdded ? 'currentColor' : 'none');
      updateCartBadges();
      showToast(isAdded ? `Saved ${prod?.name} to wishlist!` : `Removed ${prod?.name} from wishlist`);
    });
  });
}

export function initApp() {
  // 1. Initial product render
  filterAndRenderProducts();
  updateCartBadges();

  // 2. Render FAQ accordion
  const faqListEl = document.getElementById('faq-accordion-list');
  if (faqListEl) {
    faqListEl.innerHTML = FAQS.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''}">
        <button class="faq-question" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <span>${faq.question}</span>
          <span class="faq-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');

    faqListEl.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', (e) => {
        const item = (e.currentTarget as HTMLElement).closest('.faq-item')!;
        const isActive = item.classList.contains('active');
        // Close others
        faqListEl.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        });
        if (!isActive) {
          item.classList.add('active');
          item.querySelector('.faq-question')?.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // 3. Render Testimonials
  const testGrid = document.getElementById('testimonials-grid');
  if (testGrid) {
    testGrid.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonial-card">
        <div class="stars-row">
          ${Array(t.rating).fill('★').join('')}
        </div>
        <p class="testimonial-text">${t.text}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.initials}</div>
          <div class="author-meta">
            <h5>${t.name}</h5>
            <p>${t.role} · ${t.location}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Render Lookbook
  const lookbookGrid = document.getElementById('lookbook-grid');
  if (lookbookGrid) {
    lookbookGrid.innerHTML = LOOKBOOK_ITEMS.map(item => `
      <div class="lookbook-item ${item.class}" data-lookbook="${item.id}">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="lookbook-caption">
          <h4>${item.title}</h4>
          <p>${item.subtitle}</p>
        </div>
      </div>
    `).join('');

    lookbookGrid.querySelectorAll('[data-lookbook]').forEach(el => {
      el.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-lookbook');
        const item = LOOKBOOK_ITEMS.find(x => x.id === id);
        if (item) openLookbookLightbox(item);
      });
    });
  }

  // 5. Render Size Guide Table
  const sizeTableBody = document.getElementById('size-table-body');
  if (sizeTableBody) {
    sizeTableBody.innerHTML = SIZE_GUIDE_DATA.map(row => `
      <tr>
        <td style="font-weight:700; color:var(--color-charcoal);">${row.size}</td>
        <td>${row.lengthIn} (${row.lengthCm})</td>
        <td>${row.height}</td>
        <td>${row.bustIn}</td>
        <td>${row.sleeveIn}</td>
      </tr>
    `).join('');
  }

  // 6. Navigation Scroll Effect
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 7. Filter Tabs click listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      const target = e.currentTarget as HTMLElement;
      target.classList.add('active');
      state.activeCategory = target.getAttribute('data-cat') || 'all';
      filterAndRenderProducts();
    });
  });

  // 8. Size & Price & Sort filter select dropdowns
  const sizeFilter = document.getElementById('filter-size') as HTMLSelectElement | null;
  sizeFilter?.addEventListener('change', (e) => {
    state.activeSize = (e.target as HTMLSelectElement).value;
    filterAndRenderProducts();
  });

  const priceFilter = document.getElementById('filter-price') as HTMLSelectElement | null;
  priceFilter?.addEventListener('change', (e) => {
    state.priceRange = (e.target as HTMLSelectElement).value;
    filterAndRenderProducts();
  });

  const sortSelect = document.getElementById('sort-products') as HTMLSelectElement | null;
  sortSelect?.addEventListener('change', (e) => {
    state.sortBy = (e.target as HTMLSelectElement).value;
    filterAndRenderProducts();
  });

  // Search input live typing
  const searchInput = document.getElementById('shop-search') as HTMLInputElement | null;
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = (e.target as HTMLInputElement).value;
    filterAndRenderProducts();
  });

  // Reset filters button in filter bar
  document.getElementById('btn-reset-filters')?.addEventListener('click', resetAllFilters);

  // 9. Drawer Triggers
  document.getElementById('btn-open-cart')?.addEventListener('click', () => openDrawer('cart'));
  document.getElementById('btn-open-wishlist')?.addEventListener('click', () => openDrawer('wishlist'));
  document.getElementById('drawer-backdrop')?.addEventListener('click', closeAllDrawers);
  document.getElementById('btn-close-cart')?.addEventListener('click', closeAllDrawers);
  document.getElementById('btn-close-wishlist')?.addEventListener('click', closeAllDrawers);

  // Promo code in cart
  document.getElementById('btn-apply-promo')?.addEventListener('click', () => {
    const input = document.getElementById('cart-promo-input') as HTMLInputElement | null;
    if (!input) return;
    const res = state.applyDiscount(input.value);
    showToast(res.message);
    if (res.success) {
      renderCartDrawer();
    }
  });

  // WhatsApp Checkout Trigger
  document.getElementById('btn-checkout-whatsapp')?.addEventListener('click', handleWhatsAppCheckout);

  // Demo Standard Checkout Trigger
  document.getElementById('btn-checkout-standard')?.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('Your shopping bag is empty.');
      return;
    }
    const orderId = 'ZEE-' + Math.floor(1000 + Math.random() * 9000);
    const subtotal = state.getCartSubtotal();
    const discountAmount = Math.round((subtotal * state.discountPercent) / 100);
    const shipping = subtotal > 100000 ? 0 : 4500;
    const total = subtotal - discountAmount + shipping;
    const count = state.getCartCount();

    state.clearCart();
    updateCartBadges();
    closeAllDrawers();

    openOrderReceiptModal({
      orderId,
      subtotal,
      total,
      itemCount: count
    });
  });

  // 10. Modals Close triggers
  document.querySelectorAll('[data-close-modal]').forEach(b => {
    b.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-backdrop').forEach(m => {
    m.addEventListener('click', (e) => {
      if (e.target === m) closeAllModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      closeAllDrawers();
      closeMobileMenu();
    }
  });

  // 11. Mobile menu toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav-drawer');
  const mobileClose = document.getElementById('mobile-nav-close');

  function openMobileMenu() {
    mobileNav?.classList.add('open');
  }

  function closeMobileMenu() {
    mobileNav?.classList.remove('open');
  }

  hamburgerBtn?.addEventListener('click', openMobileMenu);
  mobileClose?.addEventListener('click', closeMobileMenu);

  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMobileMenu);
  });

  // 12. Size Guide trigger from navbar or footer
  document.querySelectorAll('.open-size-guide-trigger').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openSizeGuideModal();
    });
  });

  // 13. Contact Form Submission
  const contactForm = document.getElementById('atelier-contact-form') as HTMLFormElement | null;
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name') as HTMLInputElement | null;
    const name = nameInput ? nameInput.value : 'Guest';
    showToast(`Thank you, ${name}! Your inquiry has been sent to our atelier team.`);
    contactForm.reset();
  });

  // 14. Newsletter Form Submission
  const newsForm = document.getElementById('newsletter-form') as HTMLFormElement | null;
  newsForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Welcome to the Zee Collection Atelier Journal! Check your inbox for code ZEE10.');
    newsForm.reset();
  });

  // 15. Header Search button trigger
  document.getElementById('btn-nav-search')?.addEventListener('click', () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const searchBox = document.getElementById('shop-search');
        searchBox?.focus();
      }, 500);
    }
  });

  // 16. Scroll reveal animations via IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll, .section-title, .category-card, .testimonial-card, .lookbook-item').forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  }

  // 17. Interactive 3D Tilt on Hero Image Card (Desktop)
  const heroCard = document.querySelector('.hero-image-card') as HTMLElement | null;
  if (heroCard && window.innerWidth > 900) {
    heroCard.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xRot = (y / rect.height - 0.5) * -12;
      const yRot = (x / rect.width - 0.5) * 12;
      heroCard.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // 18. Back to Top Floating Button
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
