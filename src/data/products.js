export const products = [
  {
    id: 1,
    name: "Savon Noir",
    category: "Savons",
    price: 8.99,
    image: "/images/savon3.jpg",
    shortDescription: "Savon purifiant à base de charbon actif",
    fullDescription: "Notre savon noir est fabriqué à partir de charbon actif qui aide à éliminer les impuretés et à purifier la peau. Idéal pour les peaux grasses et à imperfections. Sans parabènes ni sulfates.",
    keyIngredients: ["Charbon actif", "Huile d'olive", "Huile de coco", "Beurre de karité"],
    reviews: [
      { author: "Marie", rating: 5, comment: "Parfait pour ma peau grasse!" },
      { author: "Jean", rating: 4, comment: "Résultat visible après une semaine" }
    ]
  },
  {
    id: 2,
    name: "Savon au Miel",
    category: "Savons",
    price: 9.99,
    image: "/images/savon2.jpg",
    shortDescription: "Savon nourrissant au miel biologique",
    fullDescription: "Ce savon au miel biologique est enrichi en propriétés antibactériennes naturelles. Il hydrate et adoucit la peau tout en la protégeant. Parfait pour les peaux sensibles.",
    keyIngredients: ["Miel biologique", "Beurre de cacao", "Huile d'amande douce", "Cire d'abeille"],
    reviews: [
      { author: "Sophie", rating: 5, comment: "Adore l'odeur et la texture!" }
    ]
  },
  {
    id: 3,
    name: "Baume à Lèvres Fraise",
    category: "Baumes à lèvres",
    price: 5.99,
    image: "/images/baume-fraise.jpg",
    shortDescription: "Baume nourrissant à la fraise bio",
    fullDescription: "Notre baume à lèvres à la fraise bio hydrate intensément grâce à sa formule riche en beurre de karité et en cire d'abeille. Parfum délicat de fraise naturelle.",
    keyIngredients: ["Beurre de karité", "Cire d'abeille", "Huile de coco", "Extrait de fraise"],
    reviews: []
  },
  {
    id: 4,
    name: "Beurre Corporel Karité",
    category: "Beurres corporels",
    price: 12.99,
    image: "/images/beurre-karite.jpg",
    shortDescription: "Beurre corporel 100% karité",
    fullDescription: "Ce beurre corporel pur à 100% est extrait directement des noix de karité. Riche en vitamines A et E, il nourrit, protège et répare les peaux les plus sèches.",
    keyIngredients: ["Beurre de karité pur", "Vitamine E"],
    reviews: [
      { author: "Lucie", rating: 5, comment: "Absorbe rapidement sans laisser de film gras" },
      { author: "Paul", rating: 4, comment: "Parfait pour l'hiver" }
    ]
  },
  {
  id: 5,
    name: "Baume à Lèvres Passion",
    category: "Baumes à lèvres",
    price: 6.99,
    image: "/images/baume-passion.jpg",
    shortDescription: "Baume nourrissant à la passion bio",
    fullDescription: "Notre baume à lèvres à la passion bio hydrate intensément grâce à sa formule riche en beurre de karité. Parfum exotique de fruit de la passion.",
    keyIngredients: ["Beurre de karité", "Cire d'abeille", "Huile de coco", "Extrait de passion"],
    reviews: []
  },
  {
    id: 6,
    name: "Baume à Lèvres Pastèque",
    category: "Baumes à lèvres",
    price: 6.99,
    image: "/images/baume-pasteque.png",
    shortDescription: "Baume rafraîchissant à la pastèque",
    fullDescription: "Ce baume à lèvres à la pastèque offre une hydratation légère avec une touche rafraîchissante. Parfait pour l'été.",
    keyIngredients: ["Beurre de cacao", "Huile d'amande", "Extrait de pastèque", "Menthe douce"],
    reviews: []
  },
  {
    id: 7,
    name: "Baume à Lèvres Banane",
    category: "Baumes à lèvres",
    price: 6.99,
    image: "/images/baume-banane.jpg",
    shortDescription: "Baume réparateur à la banane",
    fullDescription: "Formule ultra-nourrissante à la banane pour les lèvres très sèches. Avec des propriétés réparatrices exceptionnelles.",
    keyIngredients: ["Beurre de karité", "Extrait de banane", "Vitamine E", "Huile d'avocat"],
    reviews: []
  },
  {
    id: 8,
    name: "Beurre Corporel Curcuma",
    category: "Beurres corporels",
    price: 14.99,
    image: "/images/beurre-curcuma.png",
    shortDescription: "Beurre corporel au curcuma anti-inflammatoire",
    fullDescription: "Ce beurre corporel au curcuma aide à réduire les inflammations et donne un éclat naturel à la peau.",
    keyIngredients: ["Beurre de karité", "Curcuma bio", "Huile de jojoba", "Vitamine E"],
    reviews: []
  },
  {id: 9,
    name: "Beurre Corporel Amande",
    category: "Beurres corporels",
    price: 14.99,
    image: "/images/beurre-amande.png",
    shortDescription: "Beurre corporel à l'huile d'amande",
    fullDescription: "Ultra-nourrissant avec de l'huile d'amande douce pour une peau douce et soyeuse.",
    keyIngredients: ["Beurre de karité", "Huile d'amande douce", "Vitamine E", "Extrait de vanille"],
    reviews: []
  },
  {
    id: 10,
    name: "Beurre Corporel Coco",
    category: "Beurres corporels",
    price: 14.99,
    image: "/images/beurre-coco.png",
    shortDescription: "Beurre corporel à la noix de coco",
    fullDescription: "Aux senteurs tropicales de noix de coco, ce beurre nourrit en profondeur sans effet gras.",
    keyIngredients: ["Beurre de karité", "Huile de coco vierge", "Extrait de coco", "Vitamine E"],
    reviews: []
  },
  {
  id: 11,
  name: "Beurre Corporel Vanille Bourbon",
  category: "Beurres corporels",
  price: 14.99,
  image: "/images/beurre-vanille.png",
  shortDescription: "Nourriture intense parfumée à la vanille naturelle de Madagascar",
  fullDescription: `
    Notre beurre corporel à la vanille Bourbon de Madagascar offre une expérience sensorielle unique. 
    Formulé avec du beurre de karité biologique et des huiles nourrissantes, il pénètre rapidement 
    sans laisser de film gras. La vanille naturelle apporte un parfum chaud et enveloppant tout en 
    aidant à apaiser les peaux sensibles. Idéal pour le corps, les mains et les zones sèches.
    
    Caractéristiques :
    - Texture fondante et non grasse
    - 98% d'ingrédients d'origine naturelle
    - Sans parabènes ni silicones
    - Convient aux peaux sensibles
    - Fabriqué artisanalement au Québec
  `,
  keyIngredients: [
    "Beurre de karité bio (30%)",
    "Extrait pur de vanille Bourbon de Madagascar",
    "Huile d'amande douce pressée à froid",
    "Vitamine E naturelle",
    "Cire d'abeille locale"
  ],
  usageTips: `
    Appliquer sur peau propre et légèrement humide. 
    Pour une hydratation intensive, utiliser après le bain.
    Conservation : à l'abri de la chaleur et de la lumière directe.
  `,
  reviews: [
    {
      author: "Émilie",
      rating: 5,
      comment: "Le parfum est divin et persiste toute la journée ! Ma peau est ultra douce."
    },
    {
      author: "Thomas",
      rating: 4,
      comment: "Texture agréable, mais le pot pourrait être plus pratique."
    }
  ],
  volume: "200 ml",
  sku: "BCV-2023",
  featured: true
}
];
export const featuredProducts = [products[0], products[1], products[5]];


export const cartItems = []; 