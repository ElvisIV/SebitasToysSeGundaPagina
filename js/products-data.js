/* ==========================================================================
   SEBITAS TOYS - DATA DE PRODUCTOS & CONFIGURACIÓN
   Anime · Coleccionables · Juegos de Mesa
   Tienda Especializada en Bolivia
   ========================================================================== */

const STORE_CONFIG = {
  name: "Sebitas Toys",
  tagline: "Anime · Coleccionables · Juegos",
  description: "Tu tienda especializada en figuras de anime originales, manga, juegos de mesa y coleccionables en Bolivia.",
  phoneDisplay: "77227645",
  phoneRaw: "59177227645", // Código de país Bolivia +591 + número 77227645
  whatsappNumber: "77227645",
  email: "contacto@sebitastoys.bo",
  city: "La Paz, Bolivia",
  address: "Av. 6 de Agosto #2450, Sopocachi - La Paz",
  shippingStandardCost: 15,
  freeShippingThreshold: 500,
  currency: "Bs.",
  socials: {
    instagram: "https://instagram.com/sebitastoys",
    facebook: "https://facebook.com/sebitastoys",
    tiktok: "https://tiktok.com/@sebitastoys"
  }
};

const CATEGORIES_DATA = [
  {
    id: "anime",
    name: "Anime",
    icon: "fa-book-open",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    description: "Manga, novelas ligeras, posters y productos oficiales",
    count: 12
  },
  {
    id: "figuras",
    name: "Figuras",
    icon: "fa-cubes",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80",
    description: "Figuras a escala, Nendoroids, Pop Up Parade y estatuas",
    count: 18
  },
  {
    id: "juegos-mesa",
    name: "Juegos de mesa",
    icon: "fa-dice",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80",
    description: "Estrategia, familiares, cooperativos y de fiesta",
    count: 14
  },
  {
    id: "juegos-cartas",
    name: "Juegos de cartas",
    icon: "fa-clone",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&auto=format&fit=crop&q=80",
    description: "TCG Pokémon, Yu-Gi-Oh!, Magic, Uno y cartas coleccionables",
    count: 10
  },
  {
    id: "coleccionables",
    name: "Coleccionables",
    icon: "fa-gem",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    description: "Funko Pops, réplicas, dioramas y ediciones limitadas",
    count: 15
  },
  {
    id: "accesorios",
    name: "Accesorios",
    icon: "fa-ring",
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=600&auto=format&fit=crop&q=80",
    description: "Protectores de cartas, dados de rol, llaveros y vitrinas",
    count: 8
  }
];

const PRODUCTS_DATA = [
  // ===================== PRODUCTOS DESTACADOS SOLICITADOS =====================
  {
    id: "ak-001",
    name: "Figura Monkey D. Luffy",
    category: "figuras",
    categoryName: "Figuras",
    franchise: "One Piece",
    price: 350,
    oldPrice: 390,
    rating: 4.9,
    reviewsCount: 38,
    stock: 6,
    isFeatured: true,
    isNew: false,
    isDeal: true,
    image: "img/products/figure-luffy-gear5.jpg",
    gallery: [
      "img/products/figure-luffy-gear5.jpg",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Más Vendido",
    manufacturer: "Bandai Spirits / Banpresto",
    specs: {
      "Escala": "22 cm de altura",
      "Material": "PVC y ABS de alta densidad",
      "Fabricante": "Bandai Spirits",
      "Franquicia": "One Piece",
      "Origen": "Japón (Original con sello Toei)",
      "Incluye": "Base soporte personalizada y caja de colección"
    },
    description: "Figura oficial y 100% original de Monkey D. Luffy, el futuro Rey de los Piratas. Esculpida con extraordinario detalle en su pose clásica de combate con su sombrero de paja y textura realista en su vestimenta. Acabado de pintura impecable con sombreado profesional."
  },
  {
    id: "ak-002",
    name: "Figura Goku Super Saiyan",
    category: "figuras",
    categoryName: "Figuras",
    franchise: "Dragon Ball",
    price: 450,
    oldPrice: 510,
    rating: 5.0,
    reviewsCount: 42,
    stock: 4,
    isFeatured: true,
    isNew: false,
    isDeal: true,
    image: "img/products/figure-goku.jpg",
    gallery: [
      "img/products/figure-goku.jpg"
    ],
    badge: "Edición Coleccionista",
    manufacturer: "Banpresto / Grandista",
    specs: {
      "Escala": "28 cm de altura",
      "Material": "PVC de grado coleccionista",
      "Fabricante": "Banpresto Grandista",
      "Franquicia": "Dragon Ball Z",
      "Origen": "Japón (Licencia Toei Animation)",
      "Incluye": "Base soporte y cabeza alternativa intercambiable"
    },
    description: "Impresionante figura a gran escala de Son Goku en su legendaria transformación de Super Saiyan. Detalle minucioso en músculos, pliegues del dogi naranja desgarrado y cabello dorado nacarado. Una pieza central imprescindible para cualquier vitrina."
  },
  {
    id: "ak-003",
    name: "Funko Pop Pikachu",
    category: "coleccionables",
    categoryName: "Coleccionables",
    franchise: "Pokémon",
    price: 220,
    oldPrice: null,
    rating: 4.8,
    reviewsCount: 29,
    stock: 8,
    isFeatured: true,
    isNew: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Nuevo Ingreso",
    manufacturer: "Funko Pop! Games #353",
    specs: {
      "Tamaño": "9.5 cm de altura (Escala estándar)",
      "Material": "Vinilo premium",
      "Fabricante": "Funko LLC",
      "Franquicia": "Pokémon / Nintendo",
      "Caja": "Caja con ventana transparente para exhibición",
      "Número": "Edición #353 Oficial"
    },
    description: "Figura de vinilo coleccionable oficial de Pikachu, el Pokémon eléctrico más icónico de todos los tiempos. Presentado en su caja original con ventana transparente de colección intacta y código de autenticidad."
  },
  {
    id: "ak-004",
    name: "Juego Catan",
    category: "juegos-mesa",
    categoryName: "Juegos de mesa",
    franchise: "Catan",
    price: 280,
    oldPrice: 320,
    rating: 4.9,
    reviewsCount: 55,
    stock: 7,
    isFeatured: true,
    isNew: false,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Premio Mundial",
    manufacturer: "Devir / Klaus Teuber",
    specs: {
      "Jugadores": "3 a 4 Jugadores (ampliable)",
      "Duración": "60 - 90 minutos",
      "Edad": "10+ años",
      "Idioma": "Totalmente en Español",
      "Tipo": "Estrategia, negociación y gestión de recursos",
      "Editorial": "Devir Iberia"
    },
    description: "El juego de mesa de estrategia moderno más premiado y vendido del mundo. Coloniza la isla de Catan recolectando madera, trigo, ladrillos, mineral y lana para construir pueblos, ciudades y caminos mientras negocias con los demás jugadores."
  },
  {
    id: "ak-005",
    name: "Juego UNO Pokémon",
    category: "juegos-cartas",
    categoryName: "Juegos de cartas",
    franchise: "Pokémon",
    price: 120,
    oldPrice: null,
    rating: 4.7,
    reviewsCount: 31,
    stock: 12,
    isFeatured: true,
    isNew: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Familiar",
    manufacturer: "Mattel Games",
    specs: {
      "Jugadores": "2 a 10 Jugadores",
      "Duración": "15 - 30 minutos",
      "Edad": "7+ años",
      "Contenido": "112 cartas temáticas ilustradas",
      "Regla Especial": "Carta comodín Snorlax Bloqueo",
      "Idioma": "Manual en Español"
    },
    description: "El clásico y divertido juego de cartas UNO con tus Pokémon favoritos como Pikachu, Charizard, Bulbasaur y Eevee. Incluye una carta especial de regla exclusiva que cambia el rumbo de la partida."
  },
  {
    id: "ak-006",
    name: "Manga Jujutsu Kaisen",
    category: "anime",
    categoryName: "Anime & Manga",
    franchise: "Jujutsu Kaisen",
    price: 80,
    oldPrice: 95,
    rating: 5.0,
    reviewsCount: 24,
    stock: 15,
    isFeatured: true,
    isNew: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Tomo #01 Oficial",
    manufacturer: "Panini Manga / Shueisha",
    specs: {
      "Autor": "Gege Akutami",
      "Editorial": "Panini Manga",
      "Formato": "Tankōbon con sobrecubierta mate",
      "Páginas": "192 páginas b/n + hojas a color",
      "Idioma": "Español",
      "Franquicia": "Jujutsu Kaisen"
    },
    description: "Tomo oficial de Jujutsu Kaisen en español. Acompaña a Yuji Itadori al ingresar al oscuro y fascinante mundo de la hechicería de jujutsu tras consumir el dedo maldito de Ryomen Sukuna. Edición con sobrecubierta de alta calidad."
  },

  // ===================== FIGURAS ADICIONALES =====================
  {
    id: "ak-007",
    name: "Figura Satoru Gojo - Vacío Inconmensurable",
    category: "figuras",
    categoryName: "Figuras",
    franchise: "Jujutsu Kaisen",
    price: 680,
    oldPrice: 750,
    rating: 5.0,
    reviewsCount: 36,
    stock: 3,
    isFeatured: true,
    isNew: true,
    isDeal: true,
    image: "img/products/figure-gojo.jpg",
    gallery: [
      "img/products/figure-gojo.jpg"
    ],
    badge: "Top Calidad",
    manufacturer: "MAPPA / FuRyu",
    specs: {
      "Escala": "26 cm de altura",
      "Material": "PVC / ABS translúcido",
      "Fabricante": "FuRyu / MAPPA",
      "Franquicia": "Jujutsu Kaisen",
      "Detalles": "Vórtice de energía maldita azul translúcido",
      "Origen": "Japón (Importación Oficial)"
    },
    description: "Espectacular figura de Satoru Gojo ejecutando su Expansión de Dominio. Muestra su antifaz deslizado descubriendo sus impactantes ojos celestes de los Seis Ojos con base circular de efecto espacial."
  },
  {
    id: "ak-008",
    name: "Figura Tanjiro Kamado - Hinokami Kagura",
    category: "figuras",
    categoryName: "Figuras",
    franchise: "Demon Slayer",
    price: 520,
    oldPrice: 580,
    rating: 4.9,
    reviewsCount: 28,
    stock: 3,
    isFeatured: false,
    isNew: true,
    isDeal: true,
    image: "img/products/figure-tanjiro.jpg",
    gallery: [
      "img/products/figure-tanjiro.jpg"
    ],
    badge: "Efecto Fuego",
    manufacturer: "Aniplex / Kotobukiya",
    specs: {
      "Escala": "24 cm de altura",
      "Material": "PVC con resina traslúcida de fuego",
      "Fabricante": "Aniplex+ / Kotobukiya",
      "Franquicia": "Demon Slayer: Kimetsu no Yaiba",
      "Origen": "Japón Oficial"
    },
    description: "Tanjiro ejecutando la Danza del Dios del Fuego. El dragón de llamas translúcido recorre su katana nichirin creando una composición dinámica y majestuosa para exhibir."
  },
  {
    id: "ak-009",
    name: "Nendoroid Anya Forger #1956",
    category: "figuras",
    categoryName: "Figuras",
    franchise: "Spy x Family",
    price: 360,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 33,
    stock: 5,
    isFeatured: true,
    isNew: true,
    isDeal: false,
    image: "img/products/figure-anya-nendoroid.jpg",
    gallery: [
      "img/products/figure-anya-nendoroid.jpg"
    ],
    badge: "Nendoroid Original",
    manufacturer: "Good Smile Company",
    specs: {
      "Escala": "10 cm (Articulada)",
      "Material": "PVC / ABS mate",
      "Fabricante": "Good Smile Company Japón",
      "Franquicia": "Spy x Family",
      "Accesorios": "3 rostros (Smug 'Heh', Sorpresa, Llanto) + peluche Quimera"
    },
    description: "La tierna telépata Anya Forger en versión Nendoroid #1956 totalmente articulada. Incluye su icónica cara de picardía 'Heh', peluche Señor Quimera y base magnética de soporte."
  },

  // ===================== JUEGOS DE MESA ADICIONALES =====================
  {
    id: "ak-010",
    name: "Juego Carcassonne (Edición 20 Aniversario)",
    category: "juegos-mesa",
    categoryName: "Juegos de mesa",
    franchise: "Carcassonne",
    price: 260,
    oldPrice: 295,
    rating: 4.8,
    reviewsCount: 22,
    stock: 6,
    isFeatured: false,
    isNew: false,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Clásico Familiar",
    manufacturer: "Devir / Hans im Glück",
    specs: {
      "Jugadores": "2 a 5 Jugadores",
      "Duración": "35 - 45 minutos",
      "Edad": "7+ años",
      "Idioma": "Español",
      "Mecánica": "Colocación de losetas y control de áreas"
    },
    description: "Crea el mapa de la región medieval de Carcassonne loseta a loseta, construyendo caminos, castillos, monasterios y campos mientras colocas a tus seguidores (meeples)."
  },
  {
    id: "ak-011",
    name: "Juego Dixit (Juego de Mesa Creativo)",
    category: "juegos-mesa",
    categoryName: "Juegos de mesa",
    franchise: "Dixit",
    price: 240,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 19,
    stock: 4,
    isFeatured: false,
    isNew: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Premio al Arte",
    manufacturer: "Libellud / Asmodee",
    specs: {
      "Jugadores": "3 a 8 Jugadores",
      "Duración": "30 minutos",
      "Edad": "8+ años",
      "Idioma": "Español",
      "Componentes": "84 cartas de gran tamaño con ilustraciones de ensueño"
    },
    description: "Un juego poético y encantador de adivinanza e imaginación con cartas artísticas de gran formato. Un jugador da una pista enigmática y los demás deben elegir la carta que mejor encaje."
  },
  {
    id: "ak-012",
    name: "Juego Virus! (Juego de Cartas Rápido)",
    category: "juegos-mesa",
    categoryName: "Juegos de mesa",
    franchise: "Tranjis Games",
    price: 95,
    oldPrice: 110,
    rating: 4.9,
    reviewsCount: 47,
    stock: 14,
    isFeatured: false,
    isNew: false,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Súper Ventas",
    manufacturer: "Tranjis Games",
    specs: {
      "Jugadores": "2 a 6 Jugadores",
      "Duración": "20 minutos",
      "Edad": "8+ años",
      "Idioma": "Español",
      "Objetivo": "Ser el primero en reunir 4 órganos sanos"
    },
    description: "El adictivo y rápido juego de cartas de sabotaje médico. Enfrenta la pandemia protegiendo tus órganos sanos mientras infectas y extirpas los órganos de tus rivales."
  },

  // ===================== JUEGOS DE CARTAS / TCG =====================
  {
    id: "ak-013",
    name: "Caja Booster TCG Pokémon: Escarlata y Púrpura",
    category: "juegos-cartas",
    categoryName: "Juegos de cartas",
    franchise: "Pokémon",
    price: 490,
    oldPrice: 550,
    rating: 5.0,
    reviewsCount: 26,
    stock: 5,
    isFeatured: true,
    isNew: true,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Caja Sellada",
    manufacturer: "The Pokémon Company",
    specs: {
      "Contenido": "36 Sobres de cartas originales en español",
      "Cartas por sobre": "10 cartas + 1 energía básica",
      "Rarezas": "Posibilidad de cartas Ultra Raras, Ex e Ilustración Especial",
      "Idioma": "Español Oficial"
    },
    description: "Caja display sellada de fábrica con 36 paquetes de cartas TCG de Pokémon. Amplía tu baraja competitiva o consigue las cartas holográficas secretas más valiosas de la colección."
  },
  {
    id: "ak-014",
    name: "Baraja de Estructura Yu-Gi-Oh!: Dragón Blanco",
    category: "juegos-cartas",
    categoryName: "Juegos de cartas",
    franchise: "Yu-Gi-Oh!",
    price: 130,
    oldPrice: null,
    rating: 4.8,
    reviewsCount: 15,
    stock: 9,
    isFeatured: false,
    isNew: false,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Baraja Lista",
    manufacturer: "Konami",
    specs: {
      "Contenido": "45 cartas listas para jugar (40 Principal + 5 Extra)",
      "Idioma": "Español",
      "Incluye": "Tapete de juego y guía de duelista",
      "Franquicia": "Yu-Gi-Oh! OCG/TCG"
    },
    description: "Deck completo y listo para duelo enfocado en la invocación sincronizada y por fusión del legendario Dragón Blanco de Ojos Azules de Seto Kaiba."
  },

  // ===================== MANGA Y ANIME =====================
  {
    id: "ak-015",
    name: "Manga Demon Slayer: Kimetsu no Yaiba Vol. 01",
    category: "anime",
    categoryName: "Anime & Manga",
    franchise: "Demon Slayer",
    price: 80,
    oldPrice: null,
    rating: 4.9,
    reviewsCount: 20,
    stock: 11,
    isFeatured: false,
    isNew: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Manga Oficial",
    manufacturer: "Panini Manga / Shueisha",
    specs: {
      "Autor": "Koyoharu Gotouge",
      "Editorial": "Panini Manga",
      "Formato": "Rústica con sobrecubierta",
      "Páginas": "192 páginas",
      "Idioma": "Español"
    },
    description: "El inicio de la conmovedora historia de Tanjiro y Nezuko en su búsqueda para derrotar a los demonios y curar la maldición que aqueja a su hermana."
  },
  {
    id: "ak-016",
    name: "Manga One Piece - Tomo 100 Celebración",
    category: "anime",
    categoryName: "Anime & Manga",
    franchise: "One Piece",
    price: 90,
    oldPrice: 105,
    rating: 5.0,
    reviewsCount: 50,
    stock: 8,
    isFeatured: false,
    isNew: false,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Hito Histórico",
    manufacturer: "Panini Manga / Eiichiro Oda",
    specs: {
      "Autor": "Eiichiro Oda",
      "Editorial": "Panini Manga",
      "Páginas": "208 páginas",
      "Idioma": "Español",
      "Detalle": "Portada metalizada conmemorativa del volumen 100"
    },
    description: "El legendario volumen número 100 de One Piece con la épica batalla en la cima de Onigashima. Portada conmemorativa dorada de colección."
  },

  // ===================== ACCESORIOS Y COLECCIONABLES =====================
  {
    id: "ak-017",
    name: "Set de Dados de Rol Poliedricos RPG (Galaxia Mística)",
    category: "accesorios",
    categoryName: "Accesorios",
    franchise: "Dungeons & Dragons",
    price: 75,
    oldPrice: 90,
    rating: 4.8,
    reviewsCount: 17,
    stock: 10,
    isFeatured: false,
    isNew: false,
    isDeal: true,
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "7 Dados + Bolsa",
    manufacturer: "Chessex / Sebitas Toys",
    specs: {
      "Set": "7 dados (D4, D6, D8, D10, D12, D20 y D%)",
      "Material": "Resina perlada de alta precisión balanceada",
      "Números": "Grabado en dorado de alta legibilidad",
      "Incluye": "Bolsita de terciopelo suave de regalo"
    },
    description: "Juego completo de 7 dados poliédricos para juegos de rol de mesa como Calabozos y Dragones (D&D 5e), Pathfinder y Call of Cthulhu."
  },
  {
    id: "ak-018",
    name: "Protectores Dragon Shield Matte (Caja 100 Unidades)",
    category: "accesorios",
    categoryName: "Accesorios",
    franchise: "Dragon Shield",
    price: 110,
    oldPrice: null,
    rating: 5.0,
    reviewsCount: 39,
    stock: 16,
    isFeatured: false,
    isNew: true,
    isDeal: false,
    image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=600&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=600&auto=format&fit=crop&q=80"
    ],
    badge: "Máxima Protección",
    manufacturer: "Arcane Tinmen",
    specs: {
      "Cantidad": "100 fundas de tamaño estándar (63x88 mm)",
      "Acabado": "Dorso Mate con textura antideslizante",
      "Compatibilidad": "Pokémon, Magic: The Gathering, Digimon, One Piece Card Game",
      "Material": "Polipropileno libre de ácido y PVC"
    },
    description: "Las fundas protectoras número uno del mundo para cartas TCG. Barajado suave, resistencia insuperable contra rasgaduras y protección total contra humedad y polvo."
  }
];

// Helper to get all franchises
function getUniqueFranchises() {
  const set = new Set();
  PRODUCTS_DATA.forEach(p => {
    if (p.franchise) set.add(p.franchise);
  });
  return Array.from(set).sort();
}
