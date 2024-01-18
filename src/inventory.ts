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
          "Ocean Sunset bracelet: the bracelet has a gold lobster clasp and small gemstone beads arranged in colored segments of pale peach to yellow to light green to light blue to dark aqua blue to cornflower blue and purple",
        fileName: "Beach1.jpg",
      },
      {
        description:
          "The Ocean Sunset bracelet being held in the palm of a person's hand",
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
          "Water Lilies Bracelet: the bracelet has a gold lobster clasp and small gemstone beads arranged in colored segments of hot pink to pale pink to pale olive green, to pale seafoam green, to deep teal, to cornflower blue, to pale purple, and black",
        fileName: "Monet1.jpg",
      },
      {
        description:
          "The Water Lilies bracelet being held in the palm of a person's hand",
        fileName: "Monet2.jpg",
      },
      {
        description:
          "Water Lilies bracelet being worn with the pink and green side showing",
        fileName: "Monet3.jpg",
      },
      {
        description:
          "Water Lilies bracelet being worn with the green, teal, blue and purple side showing",
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
          "Melting into Flowers bracelet:  the bracelet has a gold lobster clasp and small gemstone beads arranged in 3 segments.  The first and last third of the bracelet are clear beads, and the middle third has a variety of colors in a random pattern with greens, pinks, oranges, yellows, reds, and blues",
        fileName: "Flowers1.jpg",
      },
      {
        description:
          "Melting into Flowers bracelet being held in the palm of a person's hand",
        fileName: "Flowers2.jpg",
      },
      {
        description:
          "Melting into Flowers being worn with the colorful side showing",
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
          "Candy Sky in Delores Park bracelet: the bracelet has a gold lobster clasp and small gemstone beads arranged in a random color pattern of blush pink, mauve, and rainbow opals",
        fileName: "Delores1.jpg",
      },
      {
        description:
          "Candy Sky in Delores Park bracelet being held in the palm of a person's hand",
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
      "This bracelet is inspired by the Grand Canyon.  Blue sapphires represent the sky contrasting layers of speckled orange sunstones, orange sapphires, honey citrines, and lemon quartz represent the layered rocks, and green peridots and blue sapphires represent the water at the base of the canyon.",
    id: "grand",
    images: [
      {
        description:
          "Grand Canyon bracelet: the bracelet has a gold lobster clasp and small gemstone beads arranged in colored segments of blue, orange, yellow, green, and blue again",
        fileName: "GrandCanyon1.jpg",
      },
      {
        description:
          "Grand Canyon bracelet held in front of image of the Grand Canyon",
        fileName: "GrandCanyon2.jpg",
      },
      {
        description:
          "Grand Canyon bracelet being worn with the blue and orange side showing",
        fileName: "GrandCanyon3.jpg",
      },
      {
        description:
          "Grand Canyon bracelet being worn with the yellow and green side showing",
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
      "This bracelet is inspired by the art piece Twenty Skies by @alexhyner where multiple sunset images are combined using the geometry created by power lines.  This piece was reimagined in 12 gradients of color separated by 18k gold beads to represent the powerlines.  The sky-scapes are represented by gradients of pink, orange, yellow and blue sapphires, purple spinels, teals grandiderites, peach moonstones, yellow citrines, and hot pink rubies. Check out the original art piece by Alex, it’s beautiful!",
    id: "20skies",
    images: [
      {
        description:
          "Twenty Skies bracelet: the bracelet has a gold lobster clasp and small gemstone beads arranged in 12 color segments with gold beads separating them.  The segments are:  (1) blue, peach, purple, (2) white, pink, blue, (3) orange, red, purple, (4) yellow, orange, pink, (5) light blue, (6) dark teal, (7) blue, pink, (8) purple, (9) peach, light teal, (10) white, light blue, (11) yellow, (12) pink, purple",
        fileName: "Twenty1.jpg",
      },
      {
        description:
          "Twenty Skies bracelet being worn with the (2) white, pink, blue, (3) orange, red, purple, and (4) yellow, orange, pink segments showing",
        fileName: "Twenty2.jpg",
      },
      {
        description:
          "Twenty Skies bracelet being worn with the (6) dark teal, (7) blue, pink, and (8) purple segments showing",
        fileName: "Twenty3.jpg",
      },
      {
        description:
          "Twenty Skies bracelet being worn with the (8) purple, (9) peach, light teal, (10) white, light blue, and (11) yellow segments showing",
        fileName: "Twenty4.jpg",
      },
      {
        description:
          "Twenty Skies bracelet being held in the palm of a person's hand",
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
      "This bracelet is inspired by peaches. The gradient of colors of the peach are represented by red rubies and andesines, orange carnelians and sapphires, yellow citrines, lemon quartz, green peridots for the leaves and finally brown tourmalines for the peach stem.",
    id: "peach",
    images: [
      {
        description:
          "Juicy Peach bracelet:  the bracelet has a gold lobster clasp and small gemstone beads arranged in a gradient from dark red, to lighter red, to dark orange, to lighter orange, to golden yellow, to light yellow, to green and finally brown",
        fileName: "Peach1.jpg",
      },
      {
        description:
          "Juicy Peach bracelet being worn with the red side showing",
        fileName: "Peach2.jpg",
      },
      {
        description:
          "Juicy Peach bracelet being worn with the orange side showing",
        fileName: "Peach3.jpg",
      },
      {
        description:
          "Juicy Peach bracelet being worn with the light orange, ywllow, and green side showing",
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
      "This bracelet is inspired by my favorite exhibit at the Exploratorium: the bubble wall! The kaleidoscope of colors of the bubbles are represented by deep red and hot pink rubies, pink and yellow sapphires, blue apatites, orange carnelians, green chrysoprases, and purple amethysts.",
    id: "bubbles",
    images: [
      {
        description:
          "Bubbles bracelet: the bracelet has a gold lobster clasp and small gemstone beads arranged in colored segments of purple, yellow, red, blue, pink, green, orange, hot pink, yellow, blue, purple, red, green, pink, blue, yellow, orange, hot pink, purple, and red",
        fileName: "Bubbles1.jpg",
      },
      {
        description:
          "Water Lilies bracelet being worn with the blue, yellow, orange, hot pink, purple and red side showing",
        fileName: "Bubbles2.jpg",
      },
      {
        description:
          "Water Lilies bracelet being worn with the yellow, red, blue, pink, green, orange, and hot pink side showing",
        fileName: "Bubbles3.jpg",
      },
    ],
    name: "Bubbles",
    price: 200,
    stock: 10,
  },
  {
    category: Category.Art,
    description:
      "This bracelet is inspired by the Starry Night painting by Van Gogh. A blue swirly sky is represented by blue sapphires, pale purple tanzanites, and light blue aquamarines, the moon with a bright orange sapphires, and the starts and Venus with lemon quartz. The rolling hills are represented with blue sapphires and green peridots. Finally, the dark, towering cypress trees are represented by dark red garnets, inky dark blue sapphires, and deep teal grandiderites.",
    id: "starry",
    images: [
      {
        description:
          "Starry Night Bracelet: the bracelet has a gold lobster clasp and small gemstone beads arranged in 4 colored segments: (1) blue, light blue, pale purple, yellow and orange, (2) 2 gradients of dark to light blue, (3) blue, light blue, green, and (4) dark red, dark teal, dark blue.",
        fileName: "Starry1.jpg",
      },
      {
        description:
          "Starry Night bracelet being worn with the blue, light blue, pale purple, yellow and orange side showing",
        fileName: "Starry2.jpg",
      },
      {
        description:
          "Starry Night bracelet being worn with the gradients of dark to light blue side showing",
        fileName: "Starry3.jpg",
      },
      {
        description:
          "Starry Night bracelet being worn with the blue, light blue, green, and dark red, dark teal, dark blue sides showing",
        fileName: "Starry4.jpg",
      },
      {
        description:
          "The Starry Night bracelet being held in the palm of a person's hand",
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
        description:
          "The White Flower bracelet being held in the palm of a person's hand",
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
      "This bracelet is inspired by the art piece Lake and Mountains by Lawren Harris.  Deep blue sapphires and kyanites represent the sky streaked with pale blue aquamarine clouds and a large billowing cloud of white topaz, morganite, and pale pink sapphires. Towering blue sapphire and kyanite mountains with pale purple spinel and aqua amazonite snow, rolling hills of teal grandidierite, to a teal lake of amazonite, finally a cool brown tundra sapphire shore.",
    id: "lake",
    images: [
      {
        description:
          "Lake and Mountains bracelet:  the bracelet has a gold lobster clasp and small gemstone beads arranged in colored segments of medium blue, pale blue, white with pale pink, blue, dark teal, light teal and brown.",
        fileName: "Lake1.jpg",
      },
      {
        description:
          "Lake and Mountains bracelet being held in front of the Lake and Mountains art piece",
        fileName: "Lake2.jpg",
      },
      {
        description:
          "Lake and Mountains bracelet being worn with the medium blue and pale blue side showing",
        fileName: "Lake3.jpg",
      },
      {
        description:
          "Lake and Mountains bracelet being worn with the blue and teal side showing",
        fileName: "Lake4.jpg",
      },
      {
        description:
          "Lake and Mountains bracelet being worn with the white and pale pink side showing",
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
      "This bracelet is inspired by the painting Abstraction Blue by Georgia O’Keeffe.  The painting's abstract layers of color are represented with sky blue topaz, pale blue aquamarines, a splash of pink sapphires, deep dark iolites, teal ammonites and clear topaz.",
    id: "georgia2",
    images: [
      {
        description:
          "Abstraction Blue bracelet: the bracelet has a gold lobster clasp and small gemstone beads arranged a symmetrical pattern of light blue, pink, purple, teal, and clear",
        fileName: "AbstractionBlue1.jpg",
      },
      {
        description:
          "Abstraction Blue bracelet being held in front of the Abstraction Blue painting",
        fileName: "AbstractionBlue2.jpg",
      },
      {
        description:
          "Abstraction Blue bracelet being worn with the blue, pink and purple side showing",
        fileName: "AbstractionBlue3.jpg",
      },
      {
        description:
          "Abstraction Blue bracelet being worn with the teal and white side showin",
        fileName: "AbstractionBlue4.jpg",
      },
      {
        description:
          "Abstraction Blue bracelet being worn with the other blue, pink and purple side showing",
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
      "This bracelet is inspired by the trans pride flag.  The blue stripes are represented with blue apatite, the pink stripes with pink Peruvian opals, and the white stripes with clear topazes.",
    id: "flag",
    images: [
      {
        description:
          "Trans Pride bracelet: the bracelet has a gold lobster clasp and small gemstone beads arranged a symmetrical pattern of blue, pink, and clear",
        fileName: "Trans1.jpg",
      },
      {
        description:
          "The Trans Pride bracelet being held in the palm of a person's hand",
        fileName: "Trans2.jpg",
      },
    ],
    name: "Trans Pride",
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
      "This bracelet is inspired by Xena the Warrior Princess. Orange fire opals backdrop her iconic sterling silver and gold chakram, black spinels represent her leather outfit embellished with more 18k gold beads, and her skin represented by peach carnelians",
    id: "xena",
    images: [
      {
        description: "Xena the Warrior Princess bracelet:  ",
        fileName: "Xena1.jpg",
      },
      {
        description:
          "TODO The Xena bracelet held in front of image of Xena the warrior princess wearing leather armour dress and holding up her circular metal chakram weapon.  The Xena bracelet ",
        fileName: "Xena2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Xena3.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Xena4.jpg",
      },
      {
        description: "TODO write bracelet image description",
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
        description: "TODO write bracelet image description",
        fileName: "Blackberry2.jpg",
      },
      {
        description: "TODO write bracelet image description",
        fileName: "Blackberry3.jpg",
      },
      {
        description: "TODO write bracelet image description",
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
