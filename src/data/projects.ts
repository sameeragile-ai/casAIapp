import { ProjectTransformation } from '../types';

export const MOCK_PROJECTS: ProjectTransformation[] = [
  {
    id: 'proj-1',
    title: 'Vilă Contemporană Clasa A — Fațadă Klinker & Lemn Termotratat',
    category: 'Exterior',
    style: 'Modern Luxury',
    // Raw concrete structural shell / construction
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=1200&q=80',
    // Finished luxury exterior villa
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Transformare completă din carcasă brută de beton în reședință premium cu fațadă ventilată klinker antracit, vitraje largi VEKA și acoperiș fălțuit.',
    budgetRON: 186500,
    durationWeeks: 14,
    areaSqm: 260,
    location: 'Cluj-Napoca (Zorilor)',
    contractorName: 'Nordic Build Arhitectura & Structuri SRL',
    contractorId: 'firm-1',
    taggedProducts: [
      {
        id: 'tag-1',
        productId: 'prod-8',
        name: 'Cărămidă Klinker Fațadă Antracit',
        price: 185,
        supplier: 'MatHaus',
        xPercent: 32,
        yPercent: 48,
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 'tag-2',
        productId: 'prod-9',
        name: 'Tablă Fălțuită RetrOpan Titan-Zinc',
        price: 94,
        supplier: 'MatHaus',
        xPercent: 68,
        yPercent: 18,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 'tag-3',
        productId: 'prod-12',
        name: 'Vată Bazaltică Rockwool Frontrock 150mm',
        price: 118,
        supplier: 'MatHaus',
        xPercent: 20,
        yPercent: 70,
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=300&q=80'
      }
    ]
  },
  {
    id: 'proj-2',
    title: 'Living Open-Space Minimalist & Semineu Liniar',
    category: 'Interior',
    style: 'Minimal Japandi & Scandinavian',
    // Raw unfinished room with wires and concrete
    beforeImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    // Finished luxury warm living space
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Amenajare open-space integrată cu parchet chevron stejar masiv, canapea modulară noir și profile liniare magnetice în tavan.',
    budgetRON: 78400,
    durationWeeks: 8,
    areaSqm: 85,
    location: 'București (Sector 1)',
    contractorName: 'Atelier Aurelia — Interior Design',
    contractorId: 'firm-2',
    taggedProducts: [
      {
        id: 'tag-4',
        productId: 'prod-1',
        name: 'Canapea Modulară Velvet Noir',
        price: 6499,
        supplier: 'Somproduct',
        xPercent: 45,
        yPercent: 62,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 'tag-5',
        productId: 'prod-5',
        name: 'Lustră Arhitecturală Pendul Alamă',
        price: 3450,
        supplier: 'Somproduct',
        xPercent: 55,
        yPercent: 24,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 'tag-6',
        productId: 'prod-13',
        name: 'Parchet Stejar Chevron Natural',
        price: 365,
        supplier: 'Somproduct',
        xPercent: 25,
        yPercent: 88,
        image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=300&q=80'
      }
    ]
  },
  {
    id: 'proj-3',
    title: 'Master Bathroom Sanctuary — Marmură Statuario & Cadă Minerală',
    category: 'Spa & Bathroom',
    style: 'Modern Luxury',
    // Unfinished plumbing & rough concrete bathroom
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    // Gorgeous marble bathroom with freestanding tub
    afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    description: 'Transformare radicală dintr-un spațiu tehnic într-un sanctuar de relaxare cu plăci gigant Calacatta Gold și robinetărie aurie ascunsă.',
    budgetRON: 48900,
    durationWeeks: 5,
    areaSqm: 22,
    location: 'Timișoara (Dumbrăvița)',
    contractorName: 'AquaOasis — Centre Spa',
    contractorId: 'firm-7',
    taggedProducts: [
      {
        id: 'tag-7',
        productId: 'prod-15',
        name: 'Cadă Freestanding Compozit Mineral 170cm',
        price: 7490,
        supplier: 'Dedeman',
        xPercent: 52,
        yPercent: 68,
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 'tag-8',
        productId: 'prod-16',
        name: 'Sistem Duș Încastrat Alamă Periată',
        price: 3890,
        supplier: 'Somproduct',
        xPercent: 82,
        yPercent: 40,
        image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 'tag-9',
        productId: 'prod-14',
        name: 'Plăci Marmură Calacatta Gold 120×280cm',
        price: 390,
        supplier: 'MatHaus',
        xPercent: 18,
        yPercent: 35,
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80'
      }
    ]
  },
  {
    id: 'proj-4',
    title: 'Finisare Nivel Q4 & Iluminat Arhitectural Scafe LED',
    category: 'Construction Finish',
    style: 'Industrial & Brutalist Chic',
    // Dust and construction gypsum
    beforeImage: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80',
    // Refined microcement & minimal interior
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Execuție impecabilă de gips-carton fonic Rigips Habito, microciment satinat pe pardoseală și scafe perimetrice de lumină caldă.',
    budgetRON: 52000,
    durationWeeks: 6,
    areaSqm: 140,
    location: 'Brașov',
    contractorName: 'Artisan Finish SRL',
    contractorId: 'firm-9',
    taggedProducts: [
      {
        id: 'tag-10',
        productId: 'prod-10',
        name: 'Microciment Pavicrom Grigio Chiaro',
        price: 1350,
        supplier: 'Dedeman',
        xPercent: 38,
        yPercent: 85,
        image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 'tag-11',
        productId: 'prod-7',
        name: 'Sistem Sine Magnetice Trimless 48V',
        price: 4890,
        supplier: 'Dedeman',
        xPercent: 70,
        yPercent: 15,
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=300&q=80'
      }
    ]
  },
  {
    id: 'proj-5',
    title: 'Oază Curte Rezidențială — Piscină Îngropată & Pergolă Bioclimatică',
    category: 'Landscaping & Pools',
    style: 'Mediterranean Resort',
    // Muddy yard with excavation
    beforeImage: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80',
    // Breathtaking illuminated swimming pool & deck
    afterImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    description: 'Amenajare exterioară la cheie cu piscină 8×4m tratată cu sare ecologică, pergolă bioclimatică cu lamele orientabile și iluminat ambiental.',
    budgetRON: 145000,
    durationWeeks: 9,
    areaSqm: 380,
    location: 'Constanța (Mamaia Nord)',
    contractorName: 'Dobrogea Green Landscape & AquaOasis',
    contractorId: 'firm-7',
    taggedProducts: [
      {
        id: 'tag-12',
        productId: 'prod-21',
        name: 'Pachet Piscină Beton & Liner 8×4m',
        price: 89000,
        supplier: 'MatHaus',
        xPercent: 48,
        yPercent: 65,
        image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=300&q=80'
      },
      {
        id: 'tag-13',
        productId: 'prod-22',
        name: 'Pergolă Bioclimatică Aluminiu 5×3m',
        price: 24900,
        supplier: 'Dedeman',
        xPercent: 78,
        yPercent: 28,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80'
      }
    ]
  }
];
