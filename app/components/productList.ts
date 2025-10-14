interface ProductItem {
  id: number;
  category: string;
  type: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  isStock: boolean;
  image: string;
}

const productList:ProductItem[] = [
  {
    id: 1,
    category: "indoor",
    type: "monstera",
    name: "Monstera Albo",
    description:
      "The Monstera Albo is a highly coveted and stunning plant, celebrated for its unique variegated foliage. Each glossy, heart-shaped leaf is a work of art, featuring striking patterns of deep green and pure white, ensuring no two leaves are exactly alike. This rare beauty adds a touch of sophisticated elegance and a tropical vibe to any indoor space. As it matures, the leaves develop the iconic 'fenestrations' or natural splits, adding to its dramatic appeal. Perfect for experienced plant enthusiasts looking for a show-stopping statement piece, the Monstera Albo thrives in bright, indirect light and appreciates consistent humidity. Elevate your plant collection with this exquisite and eye-catching specimen.",
    quantity: 100,
    price: 15.5,
    isStock: true,
    image: "monstera-albo.jpg",
  },
  {
    id: 2,
    category: "indoor",
    type: "epiprenum",
    name: "Epipremnum Aureum (Pothos)",
    description:
      "Often referred to as the 'Devil's Ivy', the Epipremnum Aureum is a remarkably versatile and easy-to-care-for plant, making it an excellent choice for both beginners and seasoned plant parents. Its vibrant, heart-shaped leaves, often splashed with shades of green and yellow, cascade beautifully, making it ideal for hanging baskets, shelves, or trained to climb. This resilient plant is known for its ability to tolerate a wide range of light conditions, from low to bright indirect light, and is forgiving of occasional neglect. Beyond its aesthetic appeal, the Pothos is also recognized for its air-purpurifying qualities, helping to create a healthier indoor environment. Bring a touch of lush greenery and effortless charm into your home with this popular and adaptable plant.",
    quantity: 200,
    price: 8.99,
    isStock: true,
    image: "epiprenum-aureum.jpg",
  },
  {
    id: 3,
    category: "indoor",
    type: "calathea",
    name: "Calathea Makoyana",
    description:
      "Step into a world of botanical artistry with the Calathea Makoyana, a true masterpiece of nature. This exquisite plant boasts large, rounded leaves adorned with captivating, intricate patterns of light and dark green stripes, giving it a luxurious and sophisticated appearance. Each leaf is a testament to natural design, making it a focal point in any room. Like other Calatheas, the Makoyana exhibits 'nyctinasty' where its leaves fold upwards at night and unfurl during the day, a fascinating behavior to observe. Ideal for those who appreciate unique foliage and are ready to provide consistent humidity and bright, indirect light. The Calathea Makoyana is more than just a plant; it's a living piece of art that brings elegance and a tranquil ambiance to your home.",
    quantity: 100,
    price: 10.99,
    isStock: true,
    image: "calathea-makoyana.jpg",
  },
  {
    id: 4,
    category: "indoor",
    type: "ficus",
    name: "Ficus Lyrata (Fiddle Leaf Fig)",
    description:
      "The Ficus Lyrata, commonly known as the Fiddle Leaf Fig, is an iconic and highly sought-after houseplant renowned for its large, violin-shaped leaves. These glossy, dark green leaves with prominent veins make a bold architectural statement, instantly elevating the style of any interior space. Originating from the tropical rainforests of West Africa, this majestic plant thrives in bright, indirect light and adds a touch of lush, exotic grandeur to modern and traditional décor alike. While it requires consistent care and a stable environment to flourish, the stunning visual impact of a healthy Fiddle Leaf Fig makes it a rewarding centerpiece for plant enthusiasts looking to create a dramatic green focal point in their home or office.",
    quantity: 100,
    price: 25.99,
    isStock: true,
    image: "ficus-lyrata.png",
  },
  {
    id: 5,
    category: "indoor",
    type: "ficus",
    name: "Ficus Tineke (Variegated Rubber Plant)",
    description:
      "The Ficus Tineke, a vibrant variety of the Rubber Plant, is admired for its strikingly variegated foliage. Its thick, leathery leaves display a beautiful mosaic of creamy white, soft green, and dusty rose hues, with new leaves often emerging with a pronounced pink blush. This attractive variegation adds a unique visual interest and a sophisticated splash of color to any room. Easy to care for and relatively hardy, the Ficus Tineke is an excellent choice for those seeking a stylish plant that can adapt to various indoor conditions, preferring bright, indirect light to maintain its vivid coloration. Its upright growth habit makes it perfect as a floor plant or a substantial tabletop accent.",
    quantity: 100,
    price: 17.99,
    isStock: true,
    image: "ficus-tineke.png",
  },
  {
    id: 6,
    category: "indoor",
    type: "fittonia",
    name: "Fittonia Red Tiger (Nerve Plant)",
    description:
      "The Fittonia 'Red Tiger', commonly known as the Nerve Plant, is a vibrant and compact gem that instantly adds a burst of color to any collection. Its small, intricately veined leaves feature a stunning network of bright red or deep pink lines against a rich green background, creating a mesmerizing pattern reminiscent of a delicate stained-glass window. This eye-catching plant is perfect for terrariums, small pots, or as a colorful accent on a desk or shelf. Fittonias are known for being a bit dramatic, famously 'fainting' when thirsty, only to perk right back up after a good drink, making them quite responsive to their care. They thrive in high humidity and bright, indirect light, bringing a lively, jewel-toned elegance to humid environments like bathrooms or kitchens.",
    quantity: 100,
    price: 10.99,
    isStock: true,
    image: "fittonia-red-tiger.png",
  },
  {
    id: 7,
    category: "indoor",
    type: "alocasia",
    name: "Alocasia Dragon Scale(Silver)",
    description:
      "The Alocasia Dragon Scale is a captivating and highly sought-after plant for its incredibly textured and uniquely patterned leaves. True to its name, the foliage resembles the scales of a mythical dragon, with deep emerald-green veins etched into a lighter, almost silvery-green background, creating a three-dimensional, ridged surface. The undersides of the leaves often showcase a reddish hue, adding to its allure. This exotic Alocasia brings a touch of the extraordinary to any plant collection, thriving in warm, humid conditions with bright, indirect light. It's a fantastic choice for collectors and those who appreciate plants with unusual and striking architectural form, guaranteed to be a conversation starter.",
    quantity: 100,
    price: 15.99,
    isStock: true,
    image: "alocasia-dragon-silver.png",
  },
  {
    id: 8,
    category: "indoor",
    type: "cactus",
    name: "Opuntia Microdasys (Bunny Ear Cactus)",
    description:
      "The Opuntia Microdasys, affectionately known as the Bunny Ear Cactus, is a charming and distinctive plant that brings a playful desert vibe to any home. Its flattened, oval pads grow in pairs, resembling a rabbit's ears, and are covered in tiny, harmless-looking glochids (prickly hairs) that give it a soft, fuzzy appearance. This unique cactus is ideal for bright, sunny spots, preferring a south-facing window where it can soak up plenty of light. It's incredibly low-maintenance, requiring infrequent watering and well-draining soil, making it perfect for busy individuals or those new to plant care. The Bunny Ear Cactus adds a touch of whimsical greenery and architectural interest to modern, bohemian, or minimalist interiors.",
    quantity: 100,
    price: 7.99,
    isStock: true,
    image: "opuntia-microdasys.png",
  },
  {
    id: 9,
    category: "indoor",
    type: "cactus",
    name: "Mammillaria Hahniana (Old Lady Cactus)",
    description:
      "The Mammillaria Hahniana, or Old Lady Cactus, is a delightful and strikingly beautiful succulent that commands attention with its dense covering of soft, white, hair-like spines. These fluffy white 'hairs' protect the plant and give it a charming, almost fuzzy appearance, contrasting beautifully with its vibrant pink or purplish-red flowers that often form a crown around its top in spring. This globular cactus is relatively small and slow-growing, making it perfect for windowsills, office desks, or as part of a succulent arrangement. It thrives on bright light and minimal watering, embodying resilience and understated elegance. The Old Lady Cactus adds a touch of unique texture and a pop of color to any well-lit space.",
    quantity: 100,
    price: 8.99,
    isStock: true,
    image: "mammillaria-hahniana.png",
  },
  {
    id: 10,
    category: "indoor",
    type: "cactus",
    name: "Cereus Peruvianus (Peruvian Apple Cactus)",
    description:
      "The Cereus Peruvianus, also known as the Peruvian Apple Cactus, is a magnificent and statuesque plant that brings a strong architectural presence to any large indoor space. With its tall, columnar, and often branching stems, this cactus creates a dramatic focal point, mimicking the grandeur of desert landscapes. Its blue-green stems are ribbed and typically have short spines, giving it a majestic yet minimalist appeal. This fast-growing cactus can eventually produce edible, red-skinned fruit indoors given optimal conditions. Thriving in abundant direct sunlight and requiring very little water, the Peruvian Apple Cactus is perfect for contemporary, minimalist, or industrial interiors seeking a striking, low-maintenance statement piece that exudes sophisticated desert charm.",
    quantity: 100,
    price: 55.99,
    isStock: true,
    image: "cereus-repuvianus.png",
  },
  {
    id: 11,
    category: "indoor",
    type: "croton",
    name: "Codiaeum Variegatum (Croton Plant)",
    description:
      "The Codiaeum Variegatum, commonly known as the Croton Plant, is a breathtaking explosion of color that instantly injects tropical vibrancy into any room. Famous for its incredibly diverse and vividly patterned foliage, Crotons display a brilliant spectrum of red, orange, yellow, green, and even purple hues, often splashed and marbled across each leaf. The intensity of its colors deepens with ample bright, direct sunlight, making it a spectacular living art piece. With various leaf shapes, from broad and oval to long and narrow, each Croton is a unique spectacle. While it appreciates consistent humidity and warmth, the Croton is a rewarding plant for those seeking a bold, colorful statement that brings an unmistakable exotic flair to their interior decor",
    quantity: 100,
    price: 20.99,
    isStock: true,
    image: "croton-variegated.png",
  },
];

export default productList;