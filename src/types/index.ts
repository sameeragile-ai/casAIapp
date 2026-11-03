export type ProductCategory =
  | 'Furniture'
  | 'Lighting'
  | 'Building Materials'
  | 'Drywall & Insulation'
  | 'Flooring'
  | 'Bathroom & Spa'
  | 'Appliances'
  | 'Outdoor & Pool'
  | 'Smart Home';

export type Supplier =
  | 'Somproduct'
  | 'Vivre'
  | 'MatHaus'
  | 'Dedeman'
  | 'eMAG Home'
  | 'IKEA România';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  supplier: Supplier;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  inStock: boolean;
  specs: Record<string, string>;
  description: string;
  sku: string;
  featured?: boolean;
}

export type ContractorCategory =
  | 'General Contractors'
  | 'Interior Designers'
  | 'PVC Windows'
  | 'Gate Automation & Rollers'
  | 'Electricians'
  | 'Plumbers'
  | 'Solar Installers'
  | 'HVAC & Heat Pumps'
  | 'Landscaping & Nursery'
  | 'Drywall & Finishing'
  | 'Epoxy Flooring'
  | 'Septic Systems';

export interface ContractorReview {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  projectType: string;
}

export interface Contractor {
  id: string;
  name: string;
  category: ContractorCategory;
  rating: number;
  reviewsCount: number;
  verified: boolean;
  county: string;
  city: string;
  yearsInBusiness: number;
  startingPriceRON: number;
  logo: string;
  coverImage: string;
  description: string;
  phone: string;
  email: string;
  completedProjects: number;
  tags: string[];
  services: string[];
  portfolio: string[];
  partnerBadges?: string[];
  reviews?: ContractorReview[];
}

export interface TaggedHotspot {
  id: string;
  productId: string;
  name: string;
  price: number;
  supplier: Supplier;
  xPercent: number; // 0 to 100
  yPercent: number; // 0 to 100
  image?: string;
}

export interface ProjectTransformation {
  id: string;
  title: string;
  category: 'Interior' | 'Exterior' | 'Spa & Bathroom' | 'Construction Finish' | 'Landscaping & Pools';
  style: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  budgetRON: number;
  durationWeeks: number;
  areaSqm: number;
  location: string;
  taggedProducts: TaggedHotspot[];
  contractorName?: string;
  contractorId?: string;
}

export interface Lead {
  id: string;
  clientName: string;
  county: string;
  city: string;
  projectType: string;
  budgetRON: number;
  renderThumbnail: string;
  date: string;
  maskedPhone: string;
  realPhone: string;
  status: 'new' | 'unlocked' | 'contacted';
  unlockFeeRON: number;
  sqm: number;
  notes: string;
  architecturalStyle: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderCustomer {
  fullName: string;
  phone: string;
  email: string;
  county: string;
  city: string;
  address: string;
  postalCode?: string;
  notes?: string;
}

export interface Order {
  id: string;
  createdAt: string;
  customer: OrderCustomer;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  vatAmount: number;
  total: number;
  paymentMethod: 'card' | 'bank_transfer';
  status: 'confirmed' | 'processing';
}

export interface UrbanismCertData {
  certificateNumber: string;
  cadastralCode: string;
  zone: string;
  potMax: string; // Procent Ocupare Teren
  cutMax: string; // Coeficient Utilizare Teren
  rhMax: string; // Regim Inaltime (e.g. P+2E+M)
  maxHeightM: number;
  retractions: string;
  utilitiesAvailable: string[];
}
