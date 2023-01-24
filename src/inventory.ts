export enum Category {
  Art = "art",
  Fruit = "fruit",
  Miscellaneous = "miscellaneous",
  Nature = "nature",
}

export enum Size {
  XSmall = '6"',
  Small = '6.5"',
  Medium = '7"',
  Large = '7.5"',
  XLarge = '8"',
  XXLarge = '8.5"',
}

export interface ProductImage {
  description: string;
  fileName: any;
}

export interface Bracelet {
  category: Category;
  description: string;
  id: string;
  images: ProductImage[];
  name: string;
  price: number;
  stock: number;
}

export const inventory: Bracelet[] = [
  {
    category: Category.Nature,
    description:
      "This bracelet is inspired by the sunsets of Hawaii.  Peach moonstones represent the sand, yellow quartz represent the sunshine, green garnets represent the seaweed, pale blue aquamarines represent the seafoam, dark aqua blue apatites represent the ocean water, cornflower blue sapphires and purple spinels represent the deep ocean shadows.",
    id: "ocean1",
    images: [
      {
        description:
          "Ocean Sunset Product Image 1: the bracelet has a gold lobster clasp and small gemstone beads arranged in colored segments of pale peach to yellow to light green to light blue to dark aqua blue to cornflower blue and purple",
        fileName: "Beach1.jpg",
      },
      {
        description: "Ocean Sunset Product Image 2",
        fileName: "Beach2.jpg",
      },
    ],
    name: "Ocean Sunset",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Art,
    description:
      "This bracelet is inspired by Monet's paintings of water lilies. Rubies, pale pink sapphires, and green peridot respresent the lilies. Pale green emeralds, cornflower blue sapphires & pale purple tanzanites represent the water and bridge in the painting. Green tsavorites, tourmalines & teal grandidierites represent the lush greenery all around.",
    id: "monet1",
    images: [
      {
        description:
          "Water Lilies Product Image 1: the bracelet has a gold lobster clasp and small gemstone beads arranged in colored segments of hot pink to pale pink to pale olive green, to pale seafoam green, to deep teal, to cornflower blue, to pale purple, and black",
        fileName: "Monet1.jpg",
      },
      {
        description: "Water Lilies Product Image 2",
        fileName: "Monet2.jpg",
      },
      {
        description: "Water Lilies Product Image 3",
        fileName: "Monet3.jpg",
      },
      {
        description: "Water Lilies Product Image 4",
        fileName: "Monet4.jpg",
      },
    ],
    name: "Water Lilies",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Art,
    description:
      "This bracelet is inspired by my sister's favorite painting that shows a woman in a grey business suit with a cascade of flowers falling down across her body.  Clear morganites represents the plainness of the grey business suit, with a colorful waterfall of sapphires, fire opals, spinels, rubies, garnets, emeralds, and peridots.",
    id: "flowers1",
    images: [
      {
        description:
          "Melting into Flowers Product Image 1:  the bracelet has a gold lobster clasp and small gemstone beads arranged in 3 segments.  The first and last third of the bracelet are clear beads, and the middle third has a variety of colors in a random pattern with greens, pinks, oranges, yellows, reds, and blues",
        fileName: "Flowers1.jpg",
      },
      {
        description: "Melting into Flowers Product Image 2",
        fileName: "Flowers2.jpg",
      },
      {
        description: "Melting into Flowers Product Image 3",
        fileName: "Flowers3.jpg",
      },
    ],
    name: "Melting into Flowers",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Nature,
    description:
      "This bracelet is inspired by an awesome night eating ice cream with my friend Ellie in Delores Park, staring at a cotton candy pink sunset.  The colorful sky is represented by pink and rainbow opals mixed with mauve sapphires",
    id: "delores",
    images: [
      {
        description:
          "Candy Sky in Delores Park Product Image 1: the bracelet has a gold lobster clasp and small gemstone beads arranged in a random color pattern of blush pink, mauve, and rainbow opals",
        fileName: "Delores1.jpg",
      },
      {
        description: "Candy Sky in Delores Park Product Image 2",
        fileName: "Delores2.jpg",
      },
      {
        description:
          "A view of the San Francisco skyline viewed from Delores Park during a sunset where the sky is colored pastel pink, orange, and purple.",
        fileName: "Delores3.jpg",
      },
    ],
    name: "Candy Sky in Delores Park",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Nature,
    description:
      "The Grand Canyon: a blue sapphire sky contrasting layers of sunstone, sapphire, citrine, and lemon quartz rocks, before settling into the peridot and sapphire water.",
    id: "grand",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "GrandCanyon1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "GrandCanyon2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "GrandCanyon3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "GrandCanyon4.jpg",
      },
    ],
    name: "Grand Canyon",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Art,
    description:
      "Twenty Skies by @alexhyner reimagined in 12 colorful sky-scapes of sapphire, spinel, grandiderite, moonstone, citrine, and rubies. Check out the original art piece by Alex, it’s beautiful!",
    id: "20skies",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Twenty1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Twenty2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Twenty3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Twenty4.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Twenty5.jpg",
      },
    ],
    name: "Twenty Skies",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Fruit,
    description:
      "A peach: Juicy peachy colors of red ruby, andesine, orange carnelian, sapphire, yellow citrine, lemon quartz, green peridot leaves and finally a tourmaline stem.",
    id: "peach",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Peach1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Peach2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Peach3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Peach4.jpg",
      },
    ],
    name: "Juicy Peach",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Miscellaneous,
    description:
      "My favorite exhibit at the Exploratorium is the bubble wall! A kaleidoscope of ruby, sapphire, apatite, carnelian, chrysoprase, and amethyst.",
    id: "bubbles",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Bubbles1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Bubbles2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Bubbles2.jpg",
      },
    ],
    name: "Bubbles",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Art,
    description:
      "The Starry Night by Van Gogh. Ironically, it’s one of his most popular paintings today, but in a letter he wrote to Emile Bernard, he considered it a “failure”. A blue swirly sky of sapphire, tanzanite, and aquamarine with a bright orange sapphire moon, lemon quartz stars and Venus. Rolling blue sapphire hills with green peridots heading into the town. Finally, towering dark garnet, sapphire, and grandiderite cypress trees.",
    id: "starry",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Starry1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Starry2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Starry3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Starry4.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Starry5.jpg",
      },
    ],
    name: "Starry Night",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Art,
    description:
      "Jimson Weed/White Flower No. 1, 1932 by Georgia O’Keeffe. A blue sapphire sky, lush green grandidierite and sapphire leaves, and a delicate tsavorite and morganite bloom",
    id: "georgia1",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "WhiteFlower1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "WhiteFlower2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "WhiteFlower3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "WhiteFlower4.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "WhiteFlower5.jpg",
      },
    ],
    name: "White Flower",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Miscellaneous,
    description:
      "The beautiful Cordelia, green catseye chrysoberyl and black tourmaline eyes, pink andesine and moonstone nose, brown andalusite and white topaz fur, and her black tourmaline tail",
    id: "cordelia",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Cordelia1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Cordelia2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Cordelia3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Cordelia4.jpg",
      },
    ],
    name: "Cordelia",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Art,
    description:
      "Lake and Mountains by Lawren Harris: A deep blue sapphire and kyanite sky streaked with pale blue aquamarine clouds and a large billowing cloud of white topaz, morganite, and pale pink sapphires. Towering blue sapphire and kyanite mountains with pale purple spinel and aqua amazonite snow, rolling hills of teal grandidierite, to a teal lake of amazonite, finally a cool brown tundra sapphire shore.",
    id: "lake",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Lake1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Lake2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Lake3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Lake4.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Lake5.jpg",
      },
    ],
    name: "Lake and Mountains",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Art,
    description:
      "Abstraction Blue by Georgia O’Keeffe Layers of beautiful blue sky topaz, pale blue aquamarine, a splash of pink sapphires, deep dark polite, teal ammonite and clear topaz",
    id: "georgia2",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "AbstractionBlue1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "AbstractionBlue2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "AbstractionBlue3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "AbstractionBlue4.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "AbstractionBlue5.jpg",
      },
    ],
    name: "Abstraction Blue",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Nature,
    description:
      "A magical forest moment between 2 handlebars. Purple amethyst handlebars frame an array of green tsavorite leaves with sky blue topaz sunlight peeking through, and the brown tundra sapphire forest floor below.",
    id: "forest",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Trees1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Trees2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Trees3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Trees4.jpg",
      },
    ],
    name: "Forest",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Nature,
    description:
      "Beach in Beads. Pink opal and peach moonstone sand, warm lemon quartz sunlight, seafoam green chrysoprase and bright aqua amazonite water with deeper blue sapphire and spinel water in the distance.",
    id: "ocean2",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "BeachDay1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "BeachDay2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "BeachDay3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "BeachDay4.jpg",
      },
    ],
    name: "Beach Day",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Nature,
    description:
      "Cotton Candy Sky at Joshua Tree A pastel colored sky in pale yellow citrine, lemon quartz, peach moonstones, orangey pink spinels, and bright blue topaz lead into the grey purple spinel mountains in the distance. Dark green tourmaline and peridot palm leaves provide contrast along with the brown andalusite earth.",
    id: "joshua",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Joshua1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Joshua2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Joshua3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Joshua4.jpg",
      },
    ],
    name: "Cotton Candy Sky at Joshua Tree",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Art,
    description:
      "A celebration of art with bright spring colors. Sapphires, moonstones, fire opals, lapis, lemon quartz, topaz, sunstones, labradorite, and tourmalines to name a few ",
    id: "artwall",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Spring1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Spring2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Spring3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Spring4.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Spring5.jpg",
      },
    ],
    name: "Spring Art Wall",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Miscellaneous,
    description:
      "The trans flag with blue apatite, pink Peruvian opals, and clear topaz.",
    id: "flag",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Trans1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Trans2.jpg",
      },
    ],
    name: "Trans Flag",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Miscellaneous,
    description: "A happy rainbow of colors",
    id: "rainbow",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Rainbow1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Rainbow2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Rainbow3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Rainbow4.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Rainbow5.jpg",
      },
    ],
    name: "Rainbow",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Miscellaneous,
    description:
      "Xena the Warrior Princess, fire opals backdrop her iconic sterling silver and gold chakram, her black spinel leather outfit embellished with more 18k gold beads, and her skin in peach carnelians",
    id: "xena",
    images: [
      {
        description:
          "Model holding the Xena bracelet in front of image of Xena the warrior princess wearing leather armour dress and holding up her circular metal chakram weapon.  The Xena bracelet ",
        fileName: "Xena1.jpg",
      },
      {
        description:
          "Model holding the Xena bracelet in front of image of Xena the warrior princess wearing leather armour dress and holding up her circular metal chakram weapon.  The Xena bracelet ",
        fileName: "Xena2.jpg",
      },
      {
        description:
          "Model holding the Xena bracelet in front of image of Xena the warrior princess wearing leather armour dress and holding up her circular metal chakram weapon.  The Xena bracelet ",
        fileName: "Xena3.jpg",
      },
      {
        description:
          "Model holding the Xena bracelet in front of image of Xena the warrior princess wearing leather armour dress and holding up her circular metal chakram weapon.  The Xena bracelet ",
        fileName: "Xena4.jpg",
      },
      {
        description:
          "Model holding the Xena bracelet in front of image of Xena the warrior princess wearing leather armour dress and holding up her circular metal chakram weapon.  The Xena bracelet ",
        fileName: "Xena5.jpg",
      },
    ],
    name: "Xena the Warrior Princess",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Nature,
    description:
      "Dynamic photo of water and waves turned into a bracelet. Clear morganite and pale blue topaz beads for the foam on top of the water, aquamarines for the medium tones, and finally, deep grey and teal grandiderite and sapphire beads for the dark depths of the water.",
    id: "waves",
    images: [
      {
        description: "TODO write bracelet image description",
        fileName: "Waves1.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Waves2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Waves3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Waves4.jpg",
      },
    ],
    name: "Water and Waves",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Fruit,
    description:
      "Blackberry bushes bracelet. Juicy blackberries are represented with midnight blue sapphires speckled with deep red rubies and purple spinels. Olive green peridots for the leaves and brown tourmalines for the stems.",
    id: "blackberry",
    images: [
      {
        description:
          "Model holding the blackberry bushes bracelet next to real blackberries.  The bracelet has 3mm beads with an assortment of olive green, midnight blue, ruby red, and purple beads with a gold lobster clasp",
        fileName: "Blackberry1.jpg",
      },
      {
        description:
          "Model holding the blackberry bushes bracelet next to real blackberries.  The bracelet has 3mm beads with an assortment of olive green, midnight blue, ruby red, and purple beads with a gold lobster clasp",
        fileName: "Blackberry2.jpg",
      },
      {
        description:
          "Model holding the blackberry bushes bracelet next to real blackberries.  The bracelet has 3mm beads with an assortment of olive green, midnight blue, ruby red, and purple beads with a gold lobster clasp",
        fileName: "Blackberry3.jpg",
      },
      {
        description:
          "Model holding the blackberry bushes bracelet next to real blackberries.  The bracelet has 3mm beads with an assortment of olive green, midnight blue, ruby red, and purple beads with a gold lobster clasp",
        fileName: "Blackberry4.jpg",
      },
    ],
    name: "Blackberry Bushes",
    price: 200,
    stock: 10,
  },
];

const sortByName = (a: Bracelet, b: Bracelet) => {
  let fa = a.name.toLowerCase(),
    fb = b.name.toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
};

export const getArtItems = () =>
  inventory
    .filter((item) => item.category === Category.Art)
    .sort((a, b) => sortByName(a, b));

export const getFruitItems = () =>
  inventory
    .filter((item) => item.category === Category.Fruit)
    .sort((a, b) => sortByName(a, b));

export const getNatureItems = () =>
  inventory
    .filter((item) => item.category === Category.Nature)
    .sort((a, b) => sortByName(a, b));

export const getMiscItems = () =>
  inventory
    .filter((item) => item.category === Category.Miscellaneous)
    .sort((a, b) => sortByName(a, b));

export const getItemById = (id: string) =>
  inventory.find((item) => item.id === id);
