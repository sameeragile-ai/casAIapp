import { Product } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  // FURNITURE
  {
    id: 'prod-1',
    name: 'Canapea Modulară Velvet Noir 4 Locuri',
    category: 'Furniture',
    supplier: 'Somproduct',
    price: 6499,
    oldPrice: 7890,
    rating: 4.9,
    reviewsCount: 38,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Dimensiuni': '290 × 170 × 82 cm',
      'Material tapițerie': 'Catifea hidrofobă Premium Touch',
      'Structură': 'Lemn masiv fag & arcuri sinusoidale',
      'Garanție': '5 ani cadru, 2 ani textile'
    },
    description: 'Canapea modulară de un rafinament discret, concepută pentru livinguri contemporane ample. Catifea rezistentă la pete cu umplutură ergonomică din spumă HR cu memorie.',
    sku: 'SP-FURN-2024-01',
    featured: true
  },
  {
    id: 'prod-2',
    name: 'Masă Dining Stejar Masiv & Rășină Epoxidică Negru Fumuriu',
    category: 'Furniture',
    supplier: 'Somproduct',
    price: 8250,
    oldPrice: 9400,
    rating: 5.0,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Dimensiuni': '240 × 100 × 76 cm',
      'Blat': 'Stejar sălbatic mat tratat cu ceară Osmo',
      'Picioare': 'Oțel vopsit electrostatic negru mat',
      'Capacitate': '8 - 10 persoane'
    },
    description: 'Piesă statement de dining realizată din bârne selecționate de stejar românesc de peste 80 ani, cu inserție fluidă din rășină epoxidică translucidă fumurie.',
    sku: 'SP-FURN-2024-02',
    featured: true
  },
  {
    id: 'prod-3',
    name: 'Fotoliu Lounge Bouclé Crem cu Pivotant Bronz',
    category: 'Furniture',
    supplier: 'Vivre',
    price: 2890,
    oldPrice: 3450,
    rating: 4.8,
    reviewsCount: 44,
    image: 'https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580481077195-c3a821a58875?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Înălțime șezut': '44 cm',
      'Tapițerie': 'Țesătură bouclé lână-acrilic',
      'Bază': 'Oțel periat finisaj alama antică',
      'Rotire': '360° silențios'
    },
    description: 'Ergonomie organică inspirată din designul scandinav mid-century, tapițată cu lână bouclé caldă și bază din alamă mată.',
    sku: 'VV-CHAIR-891',
    featured: false
  },
  {
    id: 'prod-4',
    name: 'Comodă Minimalistă Travertin & Lemn de Nuc American',
    category: 'Furniture',
    supplier: 'IKEA România',
    price: 4799,
    rating: 4.7,
    reviewsCount: 22,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Dimensiuni': '200 × 45 × 55 cm',
      'Top': 'Marmură travertin natural șlefuit',
      'Fronturi': 'Furnir nuc american cu caneluri 3D',
      'Sertare': 'Sistem Blum push-to-open soft close'
    },
    description: 'Unitate media cu blat de travertin periat și lamele de nuc, proiectată să ascundă complet cablajele și echipamentele AV.',
    sku: 'IK-STOR-551',
    featured: false
  },

  // LIGHTING
  {
    id: 'prod-5',
    name: 'Lustră Arhitecturală Pendul Alamă Periată Lineară 180cm',
    category: 'Lighting',
    supplier: 'Somproduct',
    price: 3450,
    oldPrice: 4200,
    rating: 4.9,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Lungime': '180 cm',
      'Putere': '48W LED integrat CRI 95',
      'Temperatură lumină': '2700K - 4000K reglabil CCT',
      'Protocol': 'Compatibil DALI / Triac / Tuya Smart'
    },
    description: 'Profil minimalist din alamă naturală periată ce oferă lumină difuză sus-jos, perfect calibrată deasupra insulei de bucătărie sau mesei de dining.',
    sku: 'SP-LGT-901',
    featured: true
  },
  {
    id: 'prod-6',
    name: 'Lampadar de Podea Arco Din Marmură Marquina & Oțel',
    category: 'Lighting',
    supplier: 'Vivre',
    price: 2199,
    rating: 4.8,
    reviewsCount: 15,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Înălțime': '225 cm reglabilă',
      'Bază': 'Bloc 45kg marmură neagră Marquina',
      'Abajur': 'Aluminiu turnat finisaj antracit',
      'Soclu': 'E27 compatibil Smart Hue'
    },
    description: 'Siluetă arcuită iconică ce aduce lumina focalizată deasupra zonei de conversație fără a necesita cablare în tavan.',
    sku: 'VV-LGT-210',
    featured: false
  },
  {
    id: 'prod-7',
    name: 'Sistem Sine Magnetice Încastrate Trimless 48V (Kit 6m)',
    category: 'Lighting',
    supplier: 'Dedeman',
    price: 4890,
    oldPrice: 5600,
    rating: 5.0,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Tensiune': '48V Low Voltage Safety',
      'Componente kit': '3x profile 2m, 4 spoturi focalizate, 2 module liniare difuze',
      'Montaj': 'Sub gips-carton fără ramă vizibilă',
      'Control': 'Zigbee 3.0 / DALI'
    },
    description: 'Iluminat arhitectural de ultimă generație pentru vile contemporane. Modulele LED pot fi repoziționate magnetic oriunde de-a lungul șinei printr-un simplu clic.',
    sku: 'DDM-MAG-48V',
    featured: false
  },

  // BUILDING MATERIALS
  {
    id: 'prod-8',
    name: 'Cărămidă Aparentă Klinker Fassade Antracit Texturat (mp)',
    category: 'Building Materials',
    supplier: 'MatHaus',
    price: 185,
    rating: 4.9,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Format': '240 × 71 × 14 mm',
      'Ambalare': 'Cutie 0.88 mp',
      'Absorbție apă': '< 3%',
      'Rezistență îngheț': 'Clasa F2 conform SR EN 771-1'
    },
    description: 'Cărămidă klinker premium arsă la 1200°C pentru fațade ventilate și accente exterioare cu zero mentenanță pe parcursul deceniilor.',
    sku: 'MH-KLINK-77',
    featured: false
  },
  {
    id: 'prod-9',
    name: 'Tablă Fălțuită Click RetrOpan Titan-Zinc Mat (mp)',
    category: 'Building Materials',
    supplier: 'MatHaus',
    price: 94,
    rating: 4.8,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Grosime oțel': '0.60 mm miez oțel suedez SSAB',
      'Acoperire': 'GreenCoat Crown BT 50 microni',
      'Lățime utilă': '510 mm',
      'Garanție': '50 ani tehnică, 30 ani estetică'
    },
    description: 'Profil arhitectural fălțuit modern cu îmbinare rapidă click, ideal pentru acoperișuri în două ape și placări perete-fațadă.',
    sku: 'MH-ROOF-510',
    featured: false
  },
  {
    id: 'prod-10',
    name: 'Microciment Bicomponent Pavicrom Grigio Chiaro (Kit 15mp)',
    category: 'Building Materials',
    supplier: 'Dedeman',
    price: 1350,
    oldPrice: 1520,
    rating: 4.9,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Acoperire': '15 mp în 2 straturi (grosime 2.5 mm)',
      'Finisaj': 'Satinat mat impermeabil',
      'Compatibilitate': 'Șapă, gresie veche, pereți gips-carton',
      'Kitul include': 'Amorsă cuart, pulbere microciment, rășină, lac poliuretanic 2K'
    },
    description: 'Sistem continuu fără rosturi pentru pardoseli și băi în stil minimalist brutalist sau japandi. Rezistent la apă și uzură mecanică intensă.',
    sku: 'DDM-MICROCEM-15',
    featured: true
  },

  // DRYWALL & INSULATION
  {
    id: 'prod-11',
    name: 'Placă Gips-Carton Acustic Rigips Habito 12.5mm',
    category: 'Drywall & Insulation',
    supplier: 'Dedeman',
    price: 54,
    rating: 4.8,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Dimensiuni': '1200 × 2600 × 12.5 mm (3.12 mp)',
      'Capacitate sarcină': 'Până la 30 kg per șurub standard fără diblu',
      'Izolare fonică': 'Până la 60 dB în sistem dublu placat',
      'Rezistență impact': 'Ultra-înaltă'
    },
    description: 'Cea mai rezistentă placă de gips-carton pentru vile de lux. Permite fixarea televizoarelor și a corpurilor suspendate direct cu șuruburi obișnuite.',
    sku: 'DDM-HABITO-12',
    featured: false
  },
  {
    id: 'prod-12',
    name: 'Vată Bazaltică Fațadă Ventilată Rockwool Frontrock Pro 150mm',
    category: 'Drywall & Insulation',
    supplier: 'MatHaus',
    price: 118,
    rating: 5.0,
    reviewsCount: 73,
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Conductivitate termică': 'λ = 0.035 W/mK',
      'Grosime': '150 mm densitate dublă (Dual Density)',
      'Rezistență la foc': 'Clasa A1 incombustibil (peste 1000°C)',
      'Ambalare': 'Pachet 1.2 mp'
    },
    description: 'Termoizolație premium din rocă vulcanică naturală. Garantează casă pasivă, eficiență energetică A+ și barieră fonică excelentă.',
    sku: 'MH-ROCK-150',
    featured: false
  },

  // FLOORING
  {
    id: 'prod-13',
    name: 'Parchet Triplustratificat Stejar Chevron Natural Periat (mp)',
    category: 'Flooring',
    supplier: 'Somproduct',
    price: 365,
    oldPrice: 420,
    rating: 4.9,
    reviewsCount: 37,
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Unghi tăiere': 'Chevron francez 45°',
      'Grosime': '14 mm (strat nobil stejar 3.6 mm)',
      'Finisaj': 'Ulei natural Bona mat UV',
      'Compatibilitate': 'Recomandat pentru încălzire în pardoseală'
    },
    description: 'Modelul clasic parizian Chevron realizat cu măiestrie din stejar selecționat, aducând o căldură atemporală spațiilor rezidențiale vaste.',
    sku: 'SP-CHEV-OAK',
    featured: true
  },
  {
    id: 'prod-14',
    name: 'Plăci Porțelanate Marmură Statuario Calacatta Gold 120×280cm (mp)',
    category: 'Flooring',
    supplier: 'MatHaus',
    price: 390,
    rating: 5.0,
    reviewsCount: 28,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Format': '120 × 280 cm (slab gigantic)',
      'Grosime': '6 mm rectificat',
      'Finisaj': 'Lappato Silk lucios / mătăsos',
      'Origine': 'Italia - Sassuolo'
    },
    description: 'Plăci mari bookmatch cu venatură aurie discretă inspirată din cele mai rare cariere de marmură toscană.',
    sku: 'MH-CALAC-280',
    featured: true
  },

  // BATHROOM & SPA
  {
    id: 'prod-15',
    name: 'Cadă Freestanding Compozit Mineral Velvet Touch 170cm',
    category: 'Bathroom & Spa',
    supplier: 'Dedeman',
    price: 7490,
    oldPrice: 8900,
    rating: 4.9,
    reviewsCount: 23,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Dimensiuni': '170 × 80 × 58 cm (greutate 118 kg)',
      'Material': 'Solid Surface compozit mineral dolomitic',
      'Capacitate': '260 litri',
      'Inclus': 'Ventil click-clack și preaplin integrat ascuns'
    },
    description: 'Punct focal al oricărei băi master. Piatră compozită turnată dintr-o singură bucată cu izolație termică superioară ce păstrează apa caldă dublu față de acril.',
    sku: 'DDM-BATH-170',
    featured: true
  },
  {
    id: 'prod-16',
    name: 'Sistem Duș Încastrat Termostatat Alama Periată Aurie',
    category: 'Bathroom & Spa',
    supplier: 'Somproduct',
    price: 3890,
    rating: 4.8,
    reviewsCount: 19,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Pălărie ploaie': '40 × 40 cm ultra-subțire din oțel inox AISI 304',
      'Cartuș': 'Termostatat Vernet Franța cu limitator la 38°C',
      'Finisaj': 'PVD Brushed Gold anti-amprentă',
      'Părți': 'Corp încastrat iBox, pară duș de mână, baterie mixer 2 căi'
    },
    description: 'Set de duș minimalist ascuns în perete. Acoperirea PVD rezistă la zgârieturi și depuneri de calcar.',
    sku: 'SP-SHWR-GOLD',
    featured: false
  },
  {
    id: 'prod-17',
    name: 'Jacuzzi Spa Exterior 5 Persoane cu Încălzire Geotermală & Ozon',
    category: 'Bathroom & Spa',
    supplier: 'Dedeman',
    price: 34500,
    oldPrice: 38900,
    rating: 5.0,
    reviewsCount: 11,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Dimensiuni': '220 × 220 × 94 cm',
      'Jeturi hidromasaj': '48 jeturi inox cu aerare ajustabilă',
      'Putere încălzitor': '3kW titan Balboa USA',
      'Izolație': 'Spumă poliuretanică triplă pentru ierni la -25°C'
    },
    description: 'Mini-piscină spa all-season pentru terase de penthouse sau grădini private. Echipată cu cromoterapie LED și sistem audio Bluetooth integrat.',
    sku: 'DDM-SPA-220',
    featured: true
  },

  // APPLIANCES
  {
    id: 'prod-18',
    name: 'Pompa de Căldură Aer-Apă Split 16kW Monofazic / Trifazic A+++',
    category: 'Appliances',
    supplier: 'Dedeman',
    price: 28900,
    oldPrice: 32500,
    rating: 4.9,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'COP': 'Până la 5.12 la A7/W35',
      'Agent frigorific': 'R32 ecologic cu GWP scăzut',
      'Temperatură tur': 'Până la 65°C la -15°C exterior',
      'Control': 'Modul Wi-Fi cu monitorizare consum energetic'
    },
    description: 'Soluția completă de încălzire, răcire și apă caldă menajeră pentru locuințe de până la 280 mp. Eligibilă pentru programul Casa Verde.',
    sku: 'DDM-HEAT-16KW',
    featured: true
  },
  {
    id: 'prod-19',
    name: 'Șemineu Automatizat pe Peleți cu Fațadă Sticlă Ceramică 12kW',
    category: 'Appliances',
    supplier: 'MatHaus',
    price: 11400,
    rating: 4.8,
    reviewsCount: 16,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Eficiență': '92.4% Clasa EcoDesign 2022',
      'Rezervor peleți': '25 kg (autonomie până la 36 ore)',
      'Programare': 'Cronotermostat săptămânal & telecomandă',
      'Dimensiuni': '105 × 52 × 54 cm'
    },
    description: 'Căldură radiantă cu flacără vie și confort automatizat. Pornire programabilă de pe telefonul mobil înainte de sosirea acasă.',
    sku: 'MH-FIRE-12KW',
    featured: false
  },
  {
    id: 'prod-20',
    name: 'Plită Inducție 80cm cu Hotă Integrată Downdraft Silence',
    category: 'Appliances',
    supplier: 'eMAG Home',
    price: 8499,
    oldPrice: 9799,
    rating: 4.9,
    reviewsCount: 33,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Debit aer hotă': '680 m³/h la doar 49 dB',
      'Zone inducție': '4 zone flexibile ce se pot conecta (Bridge)',
      'Filtru': 'Filtru cărbune ceramic regenerabil la cuptor',
      'Clasă energetică': 'A+'
    },
    description: 'Elimină necesitatea unei hote suspendate inestetice. Aburul și mirosurile sunt aspirate direct de la nivelul vasului de gătit.',
    sku: 'EMG-COOK-80',
    featured: true
  },

  // OUTDOOR & POOL
  {
    id: 'prod-21',
    name: 'Pachet Piscină Îngropată Monobloc Beton & Liner Premium 8×4m',
    category: 'Outdoor & Pool',
    supplier: 'MatHaus',
    price: 89000,
    oldPrice: 98000,
    rating: 5.0,
    reviewsCount: 9,
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Dimensiuni': '8.0 × 4.0 m (adâncime 1.50 m)',
      'Volum apă': '45 m³',
      'Filtrare': 'Filtru nisip sticlă reciclată AFM & electroliză sare Hayward',
      'Accesorii': '2 lumini subacvatice LED RGB, skimmere inox, scară romană'
    },
    description: 'Pachet structural complet pentru construirea piscinei de vis. Include echipamentele de pompare, filtrare, tratare ecologică fără clor și liner armat 1.5mm.',
    sku: 'MH-POOL-8X4',
    featured: true
  },
  {
    id: 'prod-22',
    name: 'Pergolă Bioclimatică Aluminiu Lamele Orientabile Motorizate 5×3m',
    category: 'Outdoor & Pool',
    supplier: 'Dedeman',
    price: 24900,
    oldPrice: 28500,
    rating: 4.9,
    reviewsCount: 14,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Suprafață': '15 mp (5.00 × 3.00 m înălțime 2.60 m)',
      'Lamele': 'Rotire 0-135° complet etanșe la ploaie cu drenaj ascuns',
      'Rezistență vânt': 'Clasa 6 (până la 120 km/h)',
      'Dotări': 'Iluminat perimetral LED cald dimmabil cu senzor vânt-ploaie Somfy'
    },
    description: 'Protecție solară și de ploaie cu design minimalist închis cu picioare solide din aluminiu vopsit pulbere gri antracit RAL 7016.',
    sku: 'DDM-PERG-5X3',
    featured: true
  },

  // SMART HOME
  {
    id: 'prod-23',
    name: 'Kit Panouri Fotovoltaice 10kW Hibrid cu Baterie 10kWh LFP',
    category: 'Smart Home',
    supplier: 'Dedeman',
    price: 44900,
    oldPrice: 49000,
    rating: 4.9,
    reviewsCount: 56,
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Panouri': '24x Panouri Trina Solar 425W Vertex S+ sticlă dublă',
      'Invertor': 'Huawei SUN2000-10KTL-M1 Trifazat',
      'Stocare': 'Baterie LUNA2000 10kWh modulară cu BMS',
      'Garanție producție': '30 ani eficiență garantată peste 87.4%'
    },
    description: 'Sistem fotovoltaic de înaltă performanță pentru independență energetică completă. Pregătit pentru injectare în rețea ca prosumator.',
    sku: 'DDM-SOLAR-10K',
    featured: true
  },
  {
    id: 'prod-24',
    name: 'Unitate Centrală Ventilație cu Recuperare de Căldură Enthalpică 94%',
    category: 'Smart Home',
    supplier: 'MatHaus',
    price: 16800,
    rating: 5.0,
    reviewsCount: 20,
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
    ],
    inStock: true,
    specs: {
      'Debit aer': '350 m³/h la 100 Pa',
      'Recuperator': 'Entalpic (recuperează și umiditatea optimă pe timp de iarnă)',
      'Filtrare': 'Filtru polen ePM1 70% (F7) pentru persoanele alergice',
      'Certificare': 'Passivhaus Institut Darmstadt'
    },
    description: 'Aer proaspăt filtrat non-stop în întreaga locuință fără deschiderea geamurilor și fără pierderi de căldură. Senzori CO₂ și COV integrați.',
    sku: 'MH-HRV-350',
    featured: false
  }
];
