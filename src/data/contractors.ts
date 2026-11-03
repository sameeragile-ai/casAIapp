import { Contractor } from '../types';

export const MOCK_CONTRACTORS: Contractor[] = [
  {
    id: 'firm-1',
    name: 'Nordic Build Arhitectura & Structuri SRL',
    category: 'General Contractors',
    rating: 4.95,
    reviewsCount: 78,
    verified: true,
    county: 'Cluj',
    city: 'Cluj-Napoca',
    yearsInBusiness: 12,
    startingPriceRON: 45000,
    logo: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Constructor general de referință în Transilvania pentru vile pasive, structuri din cadre de beton armat și finisaje de cel mai înalt nivel. Echipă proprie de ingineri structuriști și maiștri pietrari.',
    phone: '+40 742 819 304',
    email: 'contact@nordicbuild.ro',
    completedProjects: 86,
    tags: ['Case Pasive', 'La Cheie', 'Garanție Extinsă 10 Ani'],
    partnerBadges: ['Certificat ISO 9001', 'Membru OAR Transilvania'],
    services: [
      'Construcție casă la roșu / la cheie',
      'Management de proiect și diriginte de șantier',
      'Structuri beton armat și zidărie termoizolantă',
      'Fațade ventilate cu ceramică și lemn compozit'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Andrei Popescu',
        city: 'Cluj-Napoca (Zorilor)',
        rating: 5,
        date: '14 Octombrie 2024',
        comment: 'Au preluat proiectul nostru din faza de schiță 3D generată și au respectat la milimetru specificațiile tehnice și bugetul negociat. Fără costuri ascunse!',
        projectType: 'Vilă P+1 240mp'
      },
      {
        id: 'rev-2',
        author: 'Ioana Moldovan',
        city: 'Florești, Cluj',
        rating: 5,
        date: '28 August 2024',
        comment: 'Execuție impecabilă la fațada ventilată cu vată bazaltică și plăci de klinker.',
        projectType: 'Casă unifamilială'
      }
    ]
  },
  {
    id: 'firm-2',
    name: 'Atelier Aurelia — Interior & Spatial Design',
    category: 'Interior Designers',
    rating: 5.0,
    reviewsCount: 64,
    verified: true,
    county: 'București',
    city: 'București (Sector 1)',
    yearsInBusiness: 9,
    startingPriceRON: 12500,
    logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Studio exclusivist de design interior premiat internațional, specializat în rezidențe de lux, penthouse-uri și boutique offices. Oferim asistență completă de la concept la achiziții de mobilier.',
    phone: '+40 721 994 120',
    email: 'studio@atelieraurelia.ro',
    completedProjects: 114,
    tags: ['High-End', 'Proiectare 3D & VR', 'Urmărire Șantier'],
    partnerBadges: ['AD Award 2023', 'Romanian Design Week'],
    services: [
      'Proiectare design interior completă (schițe, planuri electrice, mobilier la comandă)',
      'Consultanță selecție materiale & cataloage import Italia',
      'Supervizare șantier și coordonare furnizori'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Răzvan Enache',
        city: 'București (Herăstrău)',
        rating: 5,
        date: '02 Noiembrie 2024',
        comment: 'Atmosfera pe care au creat-o în livingul nostru este demnă de coperțile revistelor de arhitectură.',
        projectType: 'Penthouse 190mp'
      }
    ]
  },
  {
    id: 'firm-3',
    name: 'Fenestra Lux — VEKA & Schüco Premium Partner',
    category: 'PVC Windows',
    rating: 4.9,
    reviewsCount: 89,
    verified: true,
    county: 'Timiș',
    city: 'Timișoara',
    yearsInBusiness: 16,
    startingPriceRON: 18000,
    logo: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=80',
    description: 'Partener certificat VEKA AG Germania și Schüco. Producător autorizat de tâmplărie PVC Clasa A (Softline 82) și pereți cortină din aluminiu cu sticlă securizată tripan Saint-Gobain.',
    phone: '+40 735 601 228',
    email: 'comenzi@fenestralux.ro',
    completedProjects: 340,
    tags: ['VEKA Clasa A', 'Geam Tripan 4S', 'Uși Culisante HST'],
    partnerBadges: ['VEKA Certified Partner', 'Schüco Aluminium Pro'],
    services: [
      'Tâmplărie PVC VEKA Softline 82 cu 7 camere',
      'Sisteme glisante cu ridicare mari deschideri (HST până la 6m lățime)',
      'Montaj profesional conform standardelor RAL cu benzi de etanșare',
      'Rulouri exterioare din aluminiu cu acționare Somfy'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-4',
    name: 'VoltPro Energy — Instalatori Electrici & ANRE',
    category: 'Electricians',
    rating: 4.92,
    reviewsCount: 112,
    verified: true,
    county: 'București',
    city: 'București & Ilfov',
    yearsInBusiness: 10,
    startingPriceRON: 7500,
    logo: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    description: 'Companie atestată ANRE pentru proiectare și execuție instalații electrice de joasă și medie tensiune. Specializați în tablouri electrice inteligente Schneider/Hager și automatizări KNX.',
    phone: '+40 724 502 918',
    email: 'office@voltpro.ro',
    completedProjects: 220,
    tags: ['Atestat ANRE', 'Tablouri Inteligente', 'KNX & DALI'],
    partnerBadges: ['ANRE Gr. II B', 'Schneider EcoXpert'],
    services: [
      'Cablare structurată și instalații electrice pentru vile',
      'Integrare Smart Home KNX, iluminat DALI și scenarii',
      'Branșamente, împământări și buletine PRAM autorizate',
      'Protecții la supratensiune și stații de încărcare EV'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-5',
    name: 'Helios EcoSolar — Sisteme Fotovoltaice & Stocare',
    category: 'Solar Installers',
    rating: 4.98,
    reviewsCount: 145,
    verified: true,
    county: 'Brașov',
    city: 'Brașov',
    yearsInBusiness: 8,
    startingPriceRON: 22000,
    logo: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    description: 'Instalator validat AFM Casa Verde. Implementăm sisteme solare fotovoltaice hibride cu acumulatori de stocare de la 5kW la 50kW pentru locuințe și pensiuni în zona montană.',
    phone: '+40 751 228 940',
    email: 'solar@helioseco.ro',
    completedProjects: 410,
    tags: ['Casa Verde AFM', 'Huawei & Fronius', 'Dosar Prosumator Gratuit'],
    partnerBadges: ['Huawei Gold Partner', 'ANRE Autorizat'],
    services: [
      'Audit energetic și dimensionare sistem solar personalizat',
      'Montaj pe orice tip de acoperiș (țiglă ceramică, tablă fălțuită, terasă)',
      'Punere în funcțiune invertoare hibride și baterii LFP',
      'Întocmire completă a dosarului de prosumator la distribuitor'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-6',
    name: 'ThermaClima HVAC — Pompe de Căldură & Ventilație',
    category: 'HVAC & Heat Pumps',
    rating: 4.88,
    reviewsCount: 96,
    verified: true,
    county: 'Iași',
    city: 'Iași',
    yearsInBusiness: 11,
    startingPriceRON: 16500,
    logo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: 'Partener autorizat Daikin, NIBE și Mitsubishi Electric. Proiectăm și instalăm sisteme complete de climatizare, încălzire în pardoseală și unități de ventilație cu recuperare de căldură.',
    phone: '+40 740 318 702',
    email: 'info@thermaclima.ro',
    completedProjects: 190,
    tags: ['Pompe de Căldură Aer-Apă', 'Încălzire Pardoseală', 'NIBE Vip Partner'],
    services: [
      'Instalare pompe căldură aer-apă și sol-apă geotermal',
      'Sisteme de încălzire / răcire în pardoseală și tavan',
      'Ventilație centralizată cu tubulatură antibacteriană',
      'Service, mentenanță și reglare hidraulică a instalației'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-7',
    name: 'AquaOasis — Piscine & Centre Spa Rezidențiale',
    category: 'Plumbers',
    rating: 4.96,
    reviewsCount: 45,
    verified: true,
    county: 'Constanța',
    city: 'Constanța & Mamaia',
    yearsInBusiness: 14,
    startingPriceRON: 35000,
    logo: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    description: 'Construcție de piscine cu overflow (luciu de apă) și skimmer, saune finlandeze la comandă, băi de abur și instalații sanitare premium cu hidrofor și stații de dedurizare.',
    phone: '+40 769 114 832',
    email: 'contact@aquaoasis.ro',
    completedProjects: 82,
    tags: ['Piscine Overflow', 'Tratare fără Clor', 'Saune Custom'],
    partnerBadges: ['Hayward Gold Installer'],
    services: [
      'Construcție piscine din beton armat placate cu mozaic vitroceramic',
      'Sisteme automatizate de electroliză cu sare și control pH',
      'Instalații sanitare master bathroom cu baterii încastrate',
      'Stații de pompare și filtrare apă potabilă'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-8',
    name: 'TerraForma Peisagistică & Grădini Japoneze',
    category: 'Landscaping & Nursery',
    rating: 4.9,
    reviewsCount: 57,
    verified: true,
    county: 'Sibiu',
    city: 'Sibiu',
    yearsInBusiness: 8,
    startingPriceRON: 9800,
    logo: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80',
    description: 'Arhitectură peisageră modernă, rulouri de gazon sportiv, sisteme automatizate de irigații Hunter, iluminat de noapte architectural și arbori maturi aclimatizați.',
    phone: '+40 748 702 441',
    email: 'gradini@terraformapeisaj.ro',
    completedProjects: 110,
    tags: ['Irigații Inteligente', 'Arbori Maturi', 'Pavele Vibropresate'],
    services: [
      'Proiectare peisagistică 3D a curții și grădinii',
      'Montaj gazon rulou cu plasă anti-cârtițe și pământ vegetal îmbogățit',
      'Instalare sistem automatizat de aspersoare cu senzor de ploaie',
      'Alei pietonale din piatră naturală poligonală și deck compozit'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-9',
    name: 'Artisan Finish — Rigips & Vopsele Decorative San Marco',
    category: 'Drywall & Finishing',
    rating: 4.93,
    reviewsCount: 71,
    verified: true,
    county: 'București',
    city: 'București & Ilfov',
    yearsInBusiness: 13,
    startingPriceRON: 8500,
    logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Maeștri în finisaje interioare de clasă Q4. Plafoane casetate cu scafe LED invizibile, vopsele decorative italiene San Marco și Oikos, microciment continuu.',
    phone: '+40 722 814 590',
    email: 'office@artisanfinish.ro',
    completedProjects: 175,
    tags: ['Finisaj Q4 Perfect', 'Scafe LED', 'Vopsele San Marco'],
    services: [
      'Compartimentări fonoizolante gips-carton Rigips Habito',
      'Scafe arhitecturale pentru profile magnetice de iluminat',
      'Gletuire mecanizată și șlefuire Festool fără praf',
      'Aplicare vopsele decorative perlate și stucco veneziano'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-10',
    name: 'EpoxyStudio Romania — Pardoseli Continue & Terrazzo',
    category: 'Epoxy Flooring',
    rating: 4.89,
    reviewsCount: 39,
    verified: true,
    county: 'Bihor',
    city: 'Oradea',
    yearsInBusiness: 7,
    startingPriceRON: 11000,
    logo: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Turnare pardoseli epoxidice autonivelante fără rosturi, ciment polimeric și terrazzo venețian cu granule de marmură șlefuite lucios.',
    phone: '+40 745 990 123',
    email: 'contact@epoxystudio.ro',
    completedProjects: 94,
    tags: ['Fără Rosturi', 'Terrazzo Venețian', 'Garanție 8 Ani'],
    services: [
      'Pregătire mecanică diamantată a suportului de beton',
      'Pardoseli poliuretanice elastice cu confort acustic',
      'Pardoseli epoxidice antistatice și rezistente chimic',
      'Microtopping pentru trepte și băi moderne'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-11',
    name: 'SomfyPorte — Automatizări Porți & Grilaje Rulou',
    category: 'Gate Automation & Rollers',
    rating: 4.91,
    reviewsCount: 63,
    verified: true,
    county: 'Prahova',
    city: 'Ploiești & Valea Prahovei',
    yearsInBusiness: 15,
    startingPriceRON: 6800,
    logo: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    description: 'Instalator de top motoare porți batante și culisante Somfy, BFT și Nice. Uși de garaj secționale Hörmann izolate termic 42mm cu control smartphone.',
    phone: '+40 730 450 781',
    email: 'service@somfyporte.ro',
    completedProjects: 280,
    tags: ['Motoare Somfy & Nice', 'Uși Garaj Hörmann', 'Deschidere GPS'],
    services: [
      'Automatizări porți culisante pe șină sau autoportante în consolă',
      'Uși secționale de garaj cu panouri termoizolante și geamuri vitrate',
      'Bariere de acces auto și stâlpi escamotabili de securitate',
      'Interfoane video IP cu recunoaștere facială și cartelă RFID'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-12',
    name: 'EcoBioSept — Fose Septice Ecologice & Drenaje',
    category: 'Septic Systems',
    rating: 4.87,
    reviewsCount: 49,
    verified: true,
    county: 'Ilfov',
    city: 'Otopeni & Buftea',
    yearsInBusiness: 10,
    startingPriceRON: 7900,
    logo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: 'Stații de epurare microbiologice avansate cu epurare 98%, fose septice tricompartimentate polietilenă și tunele de percolare Graf Germania.',
    phone: '+40 720 188 349',
    email: 'vanzari@ecobiosept.ro',
    completedProjects: 165,
    tags: ['Epurare 98%', 'Marcaj CE', 'Tunel Percolare Graf'],
    services: [
      'Livrare și montaj stații de epurare pentru 4-20 persoane',
      'Excavații mecanizate, pat de nisip și branșare sanitară completă',
      'Câmpuri de drenaj subteran și puțuri absorbante',
      'Servicii de vidanjare și reactivare bacteriană periodică'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-13',
    name: 'București Prime Construct SRL',
    category: 'General Contractors',
    rating: 4.97,
    reviewsCount: 92,
    verified: true,
    county: 'București',
    city: 'București & Pipera',
    yearsInBusiness: 18,
    startingPriceRON: 60000,
    logo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Constructor autorizat pentru proiecte rezidențiale high-end în Pipera, Băneasa și Snagov. Peste 150 de vile finalizate cu diriginte de șantier atestat ISC.',
    phone: '+40 723 100 200',
    email: 'office@bucurestiprime.ro',
    completedProjects: 154,
    tags: ['Pipera & Băneasa', 'Finisaje Lux', 'ISC Autorizat'],
    services: [
      'Construcție completă rezidențială la cheie',
      'Consolidări structurale și extinderi vile istorice',
      'Instalații complexe și finisaje import Italia'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-14',
    name: 'Transilvania WoodCraft — Tâmplărie Lemn Masiv & Aluminiu',
    category: 'PVC Windows',
    rating: 4.94,
    reviewsCount: 43,
    verified: true,
    county: 'Brașov',
    city: 'Brașov & Poiana',
    yearsInBusiness: 14,
    startingPriceRON: 24000,
    logo: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=80',
    description: 'Ferestre și uși mixte lemn stratificat cu placare exterioară din aluminiu. Izolație termică excepțională adaptată climatului montan din Carpați.',
    phone: '+40 744 551 890',
    email: 'contact@woodcraft.ro',
    completedProjects: 78,
    tags: ['Lemn Stratificat', 'Garanție 15 Ani', 'Rezistent la Ger'],
    services: [
      'Tâmplărie lemn-aluminiu profil 92mm',
      'Geam tripan 52mm cu gaz Krypton',
      'Uși de intrare blindate cu finisaj stejar periat'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-15',
    name: 'Linea Concept — Arhitectură & Design Interior Cluj',
    category: 'Interior Designers',
    rating: 4.92,
    reviewsCount: 51,
    verified: true,
    county: 'Cluj',
    city: 'Cluj-Napoca',
    yearsInBusiness: 8,
    startingPriceRON: 11500,
    logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Echipă tânără de arhitecți specializați în spații deschise, jocuri de texturi naturale, piatră și lemn, combinate cu automatizări discrete.',
    phone: '+40 749 883 219',
    email: 'hello@lineaconcept.ro',
    completedProjects: 68,
    tags: ['Randări Foto-Reale', 'Mobilier Custom', 'Ergonomie'],
    services: [
      'Concept și planimetrie detaliată',
      'Dosar tehnic pentru electricieni și instalatori',
      'Relația directă cu atelierele de tâmplărie pe comandă'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-16',
    name: 'Banat Solar Systems SRL',
    category: 'Solar Installers',
    rating: 4.86,
    reviewsCount: 67,
    verified: true,
    county: 'Timiș',
    city: 'Timișoara & Dumbrăvița',
    yearsInBusiness: 6,
    startingPriceRON: 21000,
    logo: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    description: 'Soluții fotovoltaice integrate pentru vestul României. Peste 2.5 MW instalați în sectorul rezidențial și comercial.',
    phone: '+40 733 912 400',
    email: 'solar@banatsystems.ro',
    completedProjects: 185,
    tags: ['Fronius Partner', 'Baterii BYD', 'Monitorizare Mobil'],
    services: [
      'Proiectare tehnică și racordare la Enel / Rețele Electrice Banat',
      'Instalare invertoare Fronius & SolarEdge cu optimizatori de putere',
      'Mentenanță anuală și termoviziune cu dronă pe panouri'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-17',
    name: 'Moldova HVAC ClimaTech',
    category: 'HVAC & Heat Pumps',
    rating: 4.84,
    reviewsCount: 38,
    verified: true,
    county: 'Iași',
    city: 'Iași & Miroslava',
    yearsInBusiness: 9,
    startingPriceRON: 15000,
    logo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: 'Specialiști în încălzire ecologică și ventilații cu recuperare pentru clădiri nZEB (Nearly Zero Energy Buildings).',
    phone: '+40 752 443 118',
    email: 'contact@climatech-iasi.ro',
    completedProjects: 115,
    tags: ['Standard nZEB', 'Mitsubishi Zubadan', 'Garanție 7 Ani'],
    services: [
      'Sisteme de pompe de căldură Zubadan eficiente la -28°C',
      'Încălzire în pardoseală Uponor cu reglaj independent pe fiecare cameră',
      'Proiectare canale de ventilație silențioase'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'firm-18',
    name: 'Dobrogea Green Landscape',
    category: 'Landscaping & Nursery',
    rating: 4.89,
    reviewsCount: 34,
    verified: true,
    county: 'Constanța',
    city: 'Constanța & Eforie',
    yearsInBusiness: 7,
    startingPriceRON: 8900,
    logo: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=300&q=80',
    coverImage: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80',
    description: 'Design de grădini mediteraneene și costiere rezistente la vânturi saline și secetă de vară. Plante xerofile, măslini ornamentali și deck din lemn exotic Teak.',
    phone: '+40 765 892 109',
    email: 'gradini@dobrogeagreen.ro',
    completedProjects: 72,
    tags: ['Grădini Mediteraneene', 'Deck Lemn Teak', 'Plante Rezistente la Sare'],
    services: [
      'Proiectare peisaj litoral cu arbori și arbuști mediteraneeni',
      'Decking din lemn nobil în jurul piscinelor',
      'Sisteme de picurare subterană pentru economie de 60% apă'
    ],
    portfolio: [
      'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];
