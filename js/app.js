// ===== REGION DATA =====
const regionData = {
  MM01: {
    name: "Sagaing Region",

    bgImg: "./photo/sagaing state/overview/overview.jpg",
    overview:
      "Sagaing Region is located in northwestern Myanmar and is known for its strong Buddhist culture, monasteries, and the scenic Sagaing Hills.",
    population: "5.3 million",
    capital: "Sagaing",
    region: "Northwest Myanmar",
    cities: [
      { name: "Sagaing", img: "./photo/sagaing/sagaing.jpg" },
      { name: "Monywa", img: "./photo/sagaing/monywa.jpg" },
      { name: "Shwebo", img: "./photo/sagaing/shwebo.jpg" },
    ],
    cultureImg: "images/sagaing.jpg",
    cultureTags: ["Buddhism", "Monasteries", "Traditional Life"],
    food: [{ name: "Monywa Noodles", img: "images/monywa.jpg" }],
    temp: "32°C",
    humidity: "60%",
    tourismImg: "images/sagaing-hills.jpg",
    tourism: "Sagaing Hills and U Min Thonze Pagoda.",
  },
  MM02: {
    name: "Bago Region",
    overview:
      "Bago Region is rich in history and home to ancient cities and famous pagodas like Shwemawdaw.",
    population: "4.8 million",
    capital: "Bago",
    region: "Southern Myanmar",
    cities: [
      { name: "Bago", img: "./photo/bago/bago.jpg" },
      { name: "Pyay", img: "./photo/bago/pyay.jpg" },
      { name: "Taungoo", img: "./photo/bago/taungoo.jpg" },
    ],
    cultureImg: "images/bago.jpg",
    cultureTags: ["Ancient City", "Pagodas", "History"],
    food: [{ name: "Pyay Rice", img: "images/pyay.jpg" }],
    temp: "30°C",
    humidity: "70%",
    tourismImg: "images/shwemawdaw.jpg",
    tourism: "Shwemawdaw Pagoda and Kanbawzathadi Palace.",
  },

  MM03: {
    name: "Magway Region",
    overview:
      "Magway Region lies in central Myanmar and is known for dry-zone agriculture and oil fields.",
    population: "3.9 million",
    capital: "Magway",
    region: "Central Myanmar",
    cities: [
      { name: "Magway", img: "./photo/magway/magway.jpg" },
      { name: "Pakokku", img: "./photo/magway/pakokku.jpg" },
    ],
    cultureImg: "images/magway.jpg",
    cultureTags: ["Dry Zone", "Agriculture"],
    food: [{ name: "Sesame Snacks", img: "images/sesame.jpg" }],
    temp: "35°C",
    humidity: "50%",
    tourismImg: "images/magway-pagoda.jpg",
    tourism: "Myathalun Pagoda.",
  },

  MM04: {
    name: "Mandalay Region",

    // 🖼️ 1. OVERVIEW IMAGE (state main image)
    overviewImg: "./photo/mandalay/overview.jpg",

    overview: "Cultural heart of Myanmar",

    // ===== 3 CITIES =====
    cities: [
      {
        name: "Mandalay",

        // 🖼️ 2. CITY BUTTON IMAGE (circle button image)
        img: "./photo/mandalay/city1.jpg",

        desc: "Main city",

        // ===== 5 CATEGORY =====
        categories: {
          Food: {
            // 🖼️ 5 IMAGES (Food)
            items: [
              {
                title: "Food 1",
                img: "./photo/shan state/tanggyi/food/hintope.jpg",
              },
              { title: "Food 2", img: "./photo/mandalay/food2.jpg" },
              { title: "Food 3", img: "./photo/mandalay/food3.jpg" },
              { title: "Food 4", img: "./photo/mandalay/food4.jpg" },
              { title: "Food 5", img: "./photo/mandalay/food5.jpg" },
            ],
          },

          Event: {
            items: [
              { title: "Event 1", img: "./photo/mandalay/event1.jpg" },
              { title: "Event 2", img: "./photo/mandalay/event2.jpg" },
              { title: "Event 3", img: "./photo/mandalay/event3.jpg" },
              { title: "Event 4", img: "./photo/mandalay/event4.jpg" },
              { title: "Event 5", img: "./photo/mandalay/event5.jpg" },
            ],
          },

          Culture: {
            items: [
              { title: "Culture 1", img: "./photo/mandalay/culture1.jpg" },
              { title: "Culture 2", img: "./photo/mandalay/culture2.jpg" },
              { title: "Culture 3", img: "./photo/mandalay/culture3.jpg" },
              { title: "Culture 4", img: "./photo/mandalay/culture4.jpg" },
              { title: "Culture 5", img: "./photo/mandalay/culture5.jpg" },
            ],
          },

          Clothes: {
            items: [
              { title: "Clothes 1", img: "./photo/mandalay/clothes1.jpg" },
              { title: "Clothes 2", img: "./photo/mandalay/clothes2.jpg" },
              { title: "Clothes 3", img: "./photo/mandalay/clothes3.jpg" },
              { title: "Clothes 4", img: "./photo/mandalay/clothes4.jpg" },
              { title: "Clothes 5", img: "./photo/mandalay/clothes5.jpg" },
            ],
          },

          Tourism: {
            items: [
              { title: "Place 1", img: "./photo/mandalay/tour1.jpg" },
              { title: "Place 2", img: "./photo/mandalay/tour2.jpg" },
              { title: "Place 3", img: "./photo/mandalay/tour3.jpg" },
              { title: "Place 4", img: "./photo/mandalay/tour4.jpg" },
              { title: "Place 5", img: "./photo/mandalay/tour5.jpg" },
            ],
          },
        },
      },

      // 👉 CITY 2
      {
        name: "Amarapura",
        img: "./photo/mandalay/city2.jpg",
        desc: "Ancient capital",
        categories: {
          /* same structure */
        },
      },

      // 👉 CITY 3
      {
        name: "Pyin Oo Lwin",
        img: "./photo/mandalay/city3.jpg",
        desc: "Hill town",
        categories: {
          /* same structure */
        },
      },
    ],
  },

  MM05: {
    name: "Tanintharyi Region",
    overview:
      "Tanintharyi is a coastal region with beautiful islands and rich marine biodiversity.",
    population: "1.4 million",
    capital: "Dawei",
    region: "Southern Myanmar",
    cities: [
      { name: "Dawei", img: "./photo/tanintharyi/dawei.jpg" },
      { name: "Myeik", img: "./photo/tanintharyi/myeik.jpg" },
    ],
    cultureImg: "images/tanintharyi.jpg",
    cultureTags: ["Coastal", "Fishing"],
    food: [{ name: "Seafood", img: "images/seafood.jpg" }],
    temp: "30°C",
    humidity: "80%",
    tourismImg: "images/myeik.jpg",
    tourism: "Myeik Archipelago.",
  },

  MM06: {
    name: "Yangon Region",
    overview:
      "Yangon is the largest city and economic center of Myanmar with colonial heritage.",
    population: "7.4 million",
    capital: "Yangon",
    region: "Lower Myanmar",
    cities: [{ name: "Yangon", img: "./photo/yangon/yangon.jpg" }],
    cultureImg: "images/yangon.jpg",
    cultureTags: ["Urban", "Colonial"],
    food: [{ name: "Mohinga", img: "images/mohinga.jpg" }],
    temp: "31°C",
    humidity: "75%",
    tourismImg: "images/shwedagon.jpg",
    tourism: "Shwedagon Pagoda.",
  },

  MM07: {
    name: "Ayeyarwady Region",
    overview:
      "Ayeyarwady Region is the rice bowl of Myanmar with vast delta plains.",
    population: "6.2 million",
    capital: "Pathein",
    region: "Delta Region",
    cities: [{ name: "Pathein", img: "./photo/ayeyarwady/pathein.jpg" }],
    cultureImg: "images/pathein.jpg",
    cultureTags: ["Delta", "Farming"],
    food: [{ name: "Fish Curry", img: "images/fish.jpg" }],
    temp: "30°C",
    humidity: "85%",
    tourismImg: "images/ngwesaung.jpg",
    tourism: "Ngwe Saung Beach.",
  },

  MM11: {
    name: "Kachin State",
    overview:
      "Kachin State is located in the north and is known for mountains and jade mining.",
    population: "1.7 million",
    capital: "Myitkyina",
    region: "Northern Myanmar",
    cities: [{ name: "Myitkyina", img: "./photo/kachin/myitkyina.jpg" }],
    cultureImg: "images/kachin.jpg",
    cultureTags: ["Ethnic Culture", "Mountains"],
    food: [{ name: "Kachin Traditional Food", img: "images/kachin-food.jpg" }],
    temp: "25°C",
    humidity: "65%",
    tourismImg: "images/hkakabo.jpg",
    tourism: "Hkakabo Razi.",
  },

  MM12: {
    name: "Kayah State",
    overview:
      "Kayah is the smallest state and known for its ethnic traditions.",
    population: "0.3 million",
    capital: "Loikaw",
    region: "Eastern Myanmar",
    cities: [{ name: "Loikaw", img: "./photo/kayah/loikaw.jpg" }],
    cultureImg: "images/kayah.jpg",
    cultureTags: ["Ethnic Groups"],
    food: [{ name: "Traditional Rice Dishes", img: "images/rice.jpg" }],
    temp: "28°C",
    humidity: "60%",
    tourismImg: "images/loikaw.jpg",
    tourism: "Taung Kwe Pagoda.",
  },

  MM13: {
    name: "Kayin State",
    overview: "Kayin State is famous for limestone mountains and caves.",
    population: "1.6 million",
    capital: "Hpa-An",
    region: "Southeast Myanmar",
    cities: [{ name: "Hpa-An", img: "./photo/kayin/hpaan.jpg" }],
    cultureImg: "images/kayin.jpg",
    cultureTags: ["Nature", "Caves"],
    food: [{ name: "Karen Food", img: "images/karen.jpg" }],
    temp: "29°C",
    humidity: "70%",
    tourismImg: "images/saddan.jpg",
    tourism: "Saddan Cave.",
  },

  MM14: {
    name: "Chin State",
    overview:
      "Chin State is mountainous and known for its traditional tribes and culture.",
    population: "0.5 million",
    capital: "Hakha",
    region: "Western Myanmar",
    cities: [{ name: "Hakha", img: "./photo/chin/hakha.jpg" }],
    cultureImg: "images/chin.jpg",
    cultureTags: ["Mountains", "Tribal Culture"],
    food: [{ name: "Chin Traditional Food", img: "images/chin-food.jpg" }],
    temp: "20°C",
    humidity: "60%",
    tourismImg: "images/victoria.jpg",
    tourism: "Mount Victoria.",
  },

  MM15: {
    name: "Mon State",
    overview:
      "Mon State is known for its ancient Mon culture and coastal beauty.",
    population: "2.1 million",
    capital: "Mawlamyine",
    region: "Southern Myanmar",
    cities: [{ name: "Mawlamyine", img: "./photo/mon/mawlamyine.jpg" }],
    cultureImg: "images/mon.jpg",
    cultureTags: ["Ancient Culture"],
    food: [{ name: "Mon Cuisine", img: "images/mon-food.jpg" }],
    temp: "30°C",
    humidity: "75%",
    tourismImg: "images/kyaiktiyo.jpg",
    tourism: "Golden Rock.",
  },

  MM16: {
    name: "Rakhine State",
    overview:
      "Rakhine State is a coastal state known for beaches and ancient temples.",
    population: "3.2 million",
    capital: "Sittwe",
    region: "Western Myanmar",
    cities: [{ name: "Sittwe", img: "./photo/rakhine/sittwe.jpg" }],
    cultureImg: "images/rakhine.jpg",
    cultureTags: ["Coastal", "History"],
    food: [{ name: "Rakhine Mont Di", img: "images/montdi.jpg" }],
    temp: "30°C",
    humidity: "80%",
    tourismImg: "images/ngapali.jpg",
    tourism: "Ngapali Beach.",
  },

  MM17: {
    name: "Shan State",
    bgImg: "./photo/shan state/overview/overview.jpg",
    overview:
      "Shan State is the largest state in Myanmar, known for mountains, ethnic diversity, and Inle Lake.",
    population: "5.8 million",
    capital: "Taunggyi",
    region: "Eastern Myanmar",
    cities: [
      {
        name: "Taunggyi",

        img: "./photo/shan state/3button/Taunggyi.jpg",

        bgImg: "./photo/shan state/3button/Taunggyi.jpg",

        desc: "Beautiful capital of Shan State",
      },
      {
        name: "Lashio",
        img: "./photo/shan state/3button/Lashio.jpg",
        bgImg: "./photo/shan state/3button/Lashio.jpg",
        desc: "Trade city near China border",
      },
      {
        name: "Kengtung",
        img: "./photo/shan state/3button/Kentung.jpg",
        bgImg: "./photo/shan state/3button/Kentung.jpg",
        desc: "Cultural eastern Shan city",
      },
    ],
    cultureImg: "images/shan.jpg",
    cultureTags: ["Ethnic Groups", "Traditions"],
    food: [{ name: "Shan Noodles", img: "images/shan-noodle.jpg" }],
    temp: "28°C",
    humidity: "70%",
    tourismImg: "images/inle.jpg",
    tourism: "Inle Lake.",
  },
};

let currentState = null;
let currentRegionData = null;
let currentCityData = null;
let cityExplorerOpen = false;
let lastScrollY = 0;
let hasScrolledCity = false;
let hiddenCategory = null;
let visibleCategories = [];
let currentCityImage = "";

const cityCategoryData = {};

cityCategoryData.SAGAING = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Sagaing Hills", desc: "Hilltop views and many monasteries." },
      { title: "U Min Thonze", desc: "Cave pagoda with 45 Buddha images." },
      {
        title: "Soon U Ponya Shin",
        desc: "Golden stupa with panoramic views.",
      },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Monywa Noodles", desc: "Regional noodles served with herbs." },
      { title: "Tea Leaf Salad", desc: "Crisp, tangy laphet thoke." },
      { title: "River Fish Curry", desc: "Fresh Chindwin river catch." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Monastic Life", desc: "Famous for meditation centers." },
      { title: "River Markets", desc: "Traditional trade along the river." },
      { title: "Crafts", desc: "Lacquer and bamboo weaving." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Cotton Longyi", desc: "Everyday wear for men and women." },
      { title: "Handwoven Shawls", desc: "Simple, warm local textiles." },
      { title: "Monk Robes", desc: "Deep maroon robes in temples." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Festivals", desc: "Seasonal temple celebrations." },
      { title: "Thingyan", desc: "Water festival in April." },
      { title: "Tazaungdaing", desc: "Hot-air balloons and lights." },
    ],
  },
};

cityCategoryData.MONYWA = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Pho Win Taung", desc: "Sandstone caves with murals." },
      { title: "Thanboddhay", desc: "Colorful pagoda complex." },
      { title: "Chindwin River", desc: "Boat rides at sunset." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Monywa Noodles", desc: "Famous regional noodle dish." },
      { title: "Palm Sugar", desc: "Sweet local jaggery." },
      { title: "Fried Street Snacks", desc: "Crispy bites at markets." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "River Trading", desc: "Busy docks and markets." },
      { title: "Religious Art", desc: "Murals and statues in caves." },
      { title: "Local Markets", desc: "Everyday life and crafts." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Patterned Longyi", desc: "Bold checks and stripes." },
      { title: "Cotton Shirts", desc: "Light clothing for dry weather." },
      { title: "Headscarves", desc: "Sun protection for vendors." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Fairs", desc: "Food, music, and prayers." },
      { title: "Thingyan", desc: "City-wide water festival." },
      { title: "Village Fetes", desc: "Seasonal community gatherings." },
    ],
  },
};

cityCategoryData.SHWEBO = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Royal Heritage", desc: "Historic royal city of Konbaung." },
      { title: "Shwebo Moat", desc: "Old city walls and moat." },
      { title: "Local Pagodas", desc: "Classic central Myanmar shrines." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Rice Dishes", desc: "Hearty meals from nearby farms." },
      { title: "Sesame Snacks", desc: "Roasted and sweet treats." },
      { title: "Pickled Tea", desc: "Tangy laphet sides." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Royal History", desc: "Palace-era legacy." },
      { title: "Traditional Markets", desc: "Local trade and crafts." },
      { title: "Monasteries", desc: "Quiet study centers." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Plain Longyi", desc: "Simple, everyday patterns." },
      { title: "Cotton Jackets", desc: "Light layers in cool season." },
      { title: "Handwoven Tops", desc: "Local tailoring styles." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Festival", desc: "Annual temple celebrations." },
      { title: "Full Moon Nights", desc: "Community prayers and food." },
      { title: "Harvest Thanksgivings", desc: "Seasonal village events." },
    ],
  },
};

cityCategoryData.BAGO = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Shwemawdaw", desc: "One of Myanmar’s tallest stupas." },
      { title: "Kyaik Pun", desc: "Four seated Buddha statues." },
      { title: "Kanbawzathadi", desc: "Ancient palace grounds." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Bago Curries", desc: "Rich and mildly spiced." },
      { title: "Rice & Fish", desc: "Delta-style meals." },
      { title: "Street Snacks", desc: "Fritters and noodles." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Mon Heritage", desc: "Ancient Mon traditions." },
      { title: "Pagoda Pilgrims", desc: "Busy religious life." },
      { title: "Local Handicraft", desc: "Wood and bamboo works." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Classic Longyi", desc: "Everyday Mon-Myanmar styles." },
      { title: "Silk Scarves", desc: "Light, colorful accessories." },
      { title: "Temple Attire", desc: "Modest clothing for visits." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Festival", desc: "Shwemawdaw celebrations." },
      { title: "Thingyan", desc: "Water festival in April." },
      { title: "Thadingyut", desc: "Festival of lights." },
    ],
  },
};

cityCategoryData.PYAY = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Sri Ksetra", desc: "UNESCO ancient Pyu city." },
      { title: "Bawbawgyi", desc: "Iconic Pyu stupa." },
      { title: "Akauktaung", desc: "Cliffside Buddha carvings." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Pyay Rice", desc: "Famous regional rice dishes." },
      { title: "River Fish", desc: "Fresh Ayeyarwady catch." },
      { title: "Tea Leaf Salad", desc: "Crisp, nutty flavors." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Pyu History", desc: "Ancient urban heritage." },
      { title: "River Life", desc: "Markets and ferries." },
      { title: "Local Crafts", desc: "Handmade souvenirs." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Cotton Longyi", desc: "Light for warm weather." },
      { title: "Woven Shawls", desc: "Simple regional textiles." },
      { title: "Festive Wear", desc: "Bright patterns for events." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Sri Ksetra Fest", desc: "Cultural exhibitions." },
      { title: "Pagoda Fairs", desc: "Food stalls and music." },
      { title: "Full Moon Feast", desc: "Community gatherings." },
    ],
  },
};

cityCategoryData.TAUNGOO = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Taungoo Walls", desc: "Historic city gates." },
      { title: "Shwesandaw", desc: "Sacred pagoda site." },
      { title: "Kaytumadi Lake", desc: "Relaxed lake views." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Town Curries", desc: "Mild central Myanmar style." },
      { title: "Rice Noodles", desc: "Simple street bowls." },
      { title: "Sweet Snacks", desc: "Local desserts and jaggery." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Royal Past", desc: "Taungoo Dynasty legacy." },
      { title: "Monasteries", desc: "Traditional learning centers." },
      { title: "Market Life", desc: "Daily trading culture." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Plain Longyi", desc: "Everyday wear." },
      { title: "Cotton Shirts", desc: "Light, breathable fabrics." },
      { title: "Festival Attire", desc: "Bright color accents." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Festival", desc: "Seasonal temple fair." },
      { title: "Thingyan", desc: "Traditional water festival." },
      { title: "Local Sports", desc: "Community games and shows." },
    ],
  },
};

cityCategoryData.MAGWAY = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Myathalun", desc: "Iconic riverside stupa." },
      { title: "Ayeyarwady Bank", desc: "Sunset river walks." },
      { title: "Town Viewpoints", desc: "City and river panoramas." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Sesame Snacks", desc: "Dry-zone specialty." },
      { title: "Bean Dishes", desc: "Hearty local meals." },
      { title: "Tea Shop Plates", desc: "Classic Burmese breakfast." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Dry Zone Life", desc: "Agriculture and oil fields." },
      { title: "Pagoda Visits", desc: "Active religious community." },
      { title: "Local Markets", desc: "Busy daily trade." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Cotton Longyi", desc: "Comfortable in hot weather." },
      { title: "Light Shawls", desc: "Sun protection layers." },
      { title: "Simple Weaves", desc: "Local cotton textiles." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Fair", desc: "Food and cultural shows." },
      { title: "Thingyan", desc: "City-wide celebrations." },
      { title: "Harvest Events", desc: "Seasonal gatherings." },
    ],
  },
};

cityCategoryData.PAKOKKU = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Thiho Shin", desc: "Historic Pakokku pagoda." },
      { title: "Riverside", desc: "Boat rides and markets." },
      { title: "Old Town", desc: "Traditional neighborhoods." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Pakokku Ta Pae", desc: "Local snack tradition." },
      { title: "Sesame Sweets", desc: "Dry-zone specialty." },
      { title: "Street Noodles", desc: "Simple, flavorful bowls." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "River Trade", desc: "Busy docks and boats." },
      { title: "Monasteries", desc: "Many learning centers." },
      { title: "Craft Markets", desc: "Handmade local goods." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Patterned Longyi", desc: "Bold stripes and checks." },
      { title: "Cotton Jackets", desc: "Light layers at night." },
      { title: "Woven Scarves", desc: "Local cotton pieces." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Festival", desc: "Annual temple fair." },
      { title: "Thingyan", desc: "Water festival." },
      { title: "Boat Races", desc: "Seasonal river races." },
    ],
  },
};

cityCategoryData.MANDALAY = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Mandalay Hill", desc: "Sunrise and sunset views." },
      { title: "Royal Palace", desc: "Historic palace complex." },
      { title: "Kuthodaw", desc: "World’s largest book." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Mee Shay", desc: "Famous Mandalay noodles." },
      { title: "Tea Shops", desc: "Snacks and sweet tea." },
      { title: "Street BBQ", desc: "Skewers and grills." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Royal Heritage", desc: "Capital of last dynasty." },
      { title: "Craft Villages", desc: "Gold leaf, marionettes." },
      { title: "Monastic Schools", desc: "Traditional education hubs." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Silk Longyi", desc: "Mandalay silk patterns." },
      { title: "Traditional Blouses", desc: "Classic Myanmar styles." },
      { title: "Festival Wear", desc: "Bright, elegant textiles." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Mahamuni Festival", desc: "Major pilgrimage event." },
      { title: "Thingyan", desc: "Water festival." },
      { title: "Thadingyut", desc: "Festival of lights." },
    ],
  },
};

cityCategoryData.AMARAPURA = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "U Bein Bridge", desc: "Iconic teak bridge." },
      { title: "Mahagandayon", desc: "Famous monastery." },
      { title: "Taungthaman Lake", desc: "Sunset lakeside views." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Lake Fish", desc: "Fresh and grilled." },
      { title: "Tea Shop Snacks", desc: "Noodles and fritters." },
      { title: "Traditional Sweets", desc: "Local desserts." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Monastic Life", desc: "Large monk community." },
      { title: "Bridge Walks", desc: "Daily local life." },
      { title: "Weaving", desc: "Textile traditions nearby." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Weaved Longyi", desc: "Handloom patterns." },
      { title: "Cotton Blouses", desc: "Simple local styles." },
      { title: "Silk Scarves", desc: "Light, elegant wraps." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Monastic Ceremony", desc: "Regular alms rituals." },
      { title: "Bridge Festival", desc: "Cultural gatherings." },
      { title: "Full Moon Prayers", desc: "Community worship." },
    ],
  },
};

cityCategoryData.DAWEI = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Maungmagan Beach", desc: "Relaxed coastal beach." },
      { title: "Dawei Market", desc: "Local seafood and produce." },
      { title: "Coastal Temples", desc: "Small seaside pagodas." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Seafood Dishes", desc: "Fresh from the coast." },
      { title: "Dawei Noodles", desc: "Regional noodle style." },
      { title: "Pickled Foods", desc: "Tangy local sides." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Coastal Life", desc: "Fishing and markets." },
      { title: "Local Crafts", desc: "Wood and shell items." },
      { title: "Traditional Music", desc: "Regional performances." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Light Longyi", desc: "Comfortable seaside wear." },
      { title: "Cotton Shirts", desc: "Breathable fabrics." },
      { title: "Sea Breeze Shawls", desc: "Light wraps." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Seaside Festivals", desc: "Community celebrations." },
      { title: "Thingyan", desc: "Water festival." },
      { title: "Pagoda Fair", desc: "Seasonal temple events." },
    ],
  },
};

cityCategoryData.MYEIK = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Myeik Archipelago", desc: "Island-hopping paradise." },
      { title: "Seaside Town", desc: "Harbor views and sunsets." },
      { title: "Local Piers", desc: "Boats and fishing life." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Grilled Seafood", desc: "Fresh and smoky flavors." },
      { title: "Fish Soup", desc: "Light, coastal broths." },
      { title: "Seaweed Dishes", desc: "Regional specialty." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Seafaring Life", desc: "Boats and island trade." },
      { title: "Local Markets", desc: "Busy seafood bazaars." },
      { title: "Island Traditions", desc: "Distinct coastal customs." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Light Longyi", desc: "Breezy coastal wear." },
      { title: "Headscarves", desc: "Sun protection by the sea." },
      { title: "Simple Sandals", desc: "Practical daily footwear." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Seafood Festivals", desc: "Community celebrations." },
      { title: "Boat Races", desc: "Seasonal harbor events." },
      { title: "Pagoda Fairs", desc: "Local temple gatherings." },
    ],
  },
};

cityCategoryData.YANGON = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Shwedagon", desc: "Myanmar’s most famous pagoda." },
      { title: "Sule Pagoda", desc: "Downtown landmark." },
      { title: "Colonial Streets", desc: "Historic architecture walks." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Mohinga", desc: "Classic breakfast soup." },
      { title: "Street BBQ", desc: "Skewers and grills." },
      { title: "Tea Shops", desc: "Snacks and milk tea." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Urban Life", desc: "Modern city rhythm." },
      { title: "Colonial Heritage", desc: "Historic downtown buildings." },
      { title: "Art Spaces", desc: "Galleries and cafes." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Modern Longyi", desc: "City-style patterns." },
      { title: "Office Attire", desc: "Business casual mix." },
      { title: "Festival Outfits", desc: "Bright, formal wear." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Shwedagon Festivals", desc: "Religious celebrations." },
      { title: "Thingyan", desc: "Largest water festival." },
      { title: "Art Fairs", desc: "Urban cultural events." },
    ],
  },
};

cityCategoryData.PATHEIN = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Ngwe Saung", desc: "Famous beach nearby." },
      { title: "Pathein River", desc: "Riverside strolls." },
      { title: "Umbrella Workshops", desc: "Iconic local craft." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Fish Curry", desc: "Delta-style specialty." },
      { title: "Pathein Snacks", desc: "Market street foods." },
      { title: "Coconut Desserts", desc: "Sweet local treats." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Delta Life", desc: "Rice fields and waterways." },
      { title: "Umbrella Craft", desc: "Traditional handmade craft." },
      { title: "Market Culture", desc: "Bustling daily trade." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Colorful Longyi", desc: "Bright delta patterns." },
      { title: "Light Cotton", desc: "Comfort for humid weather." },
      { title: "Rain Capes", desc: "Practical monsoon wear." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Festivals", desc: "Seasonal celebrations." },
      { title: "Boat Races", desc: "Delta river competitions." },
      { title: "Harvest Fairs", desc: "Community gatherings." },
    ],
  },
};

cityCategoryData.MYITKYINA = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "River Confluence", desc: "Ayeyarwady headwaters." },
      { title: "Local Markets", desc: "Colorful border trade." },
      { title: "Hill Views", desc: "Cool northern scenery." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Kachin Dishes", desc: "Herbs and fermented flavors." },
      { title: "Sticky Rice", desc: "Popular northern staple." },
      { title: "Tea Shop Meals", desc: "Warm, simple plates." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Kachin Traditions", desc: "Music and dance heritage." },
      { title: "Church & Festival", desc: "Strong community events." },
      { title: "Jade Trade", desc: "Local commerce history." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Kachin Shawls", desc: "Bright woven textiles." },
      { title: "Warm Layers", desc: "Cooler climate wear." },
      { title: "Handmade Bags", desc: "Local woven accessories." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Manau Festival", desc: "Major Kachin celebration." },
      { title: "Christmas Events", desc: "Community gatherings." },
      { title: "New Year Fest", desc: "Traditional dances." },
    ],
  },
};

cityCategoryData.LOIKAW = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Taung Kwe", desc: "Rocky pagoda hill." },
      { title: "Local Lakes", desc: "Peaceful lakeside views." },
      { title: "Village Tours", desc: "Ethnic Kayah villages." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Rice Dishes", desc: "Kayah-style meals." },
      { title: "Leafy Salads", desc: "Fresh herb plates." },
      { title: "Smoked Foods", desc: "Traditional preservation." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Kayah Heritage", desc: "Ethnic traditions." },
      { title: "Handicrafts", desc: "Weaving and carving." },
      { title: "Local Markets", desc: "Daily trade and food." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Kayah Weaving", desc: "Red and black textiles." },
      { title: "Patterned Shawls", desc: "Distinct ethnic designs." },
      { title: "Beaded Accessories", desc: "Handmade ornaments." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Kayah Festival", desc: "Cultural shows and dance." },
      { title: "Pagoda Fairs", desc: "Seasonal events." },
      { title: "Harvest Celebrations", desc: "Village gatherings." },
    ],
  },
};

cityCategoryData["HPA-AN"] = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Saddan Cave", desc: "Boat-through limestone cave." },
      { title: "Mount Zwegabin", desc: "Iconic mountain trek." },
      { title: "Kyauk Kalap", desc: "Stunning lake pagoda." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Karen Cuisine", desc: "Herbs and fresh greens." },
      { title: "River Fish", desc: "Local lakeside dishes." },
      { title: "Tea Leaf Salad", desc: "Classic Burmese favorite." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Karen Traditions", desc: "Music and dance culture." },
      { title: "Cave Temples", desc: "Religious heritage." },
      { title: "Village Life", desc: "Rural community spirit." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Karen Weaves", desc: "Red and white patterns." },
      { title: "Handmade Bags", desc: "Local woven accessories." },
      { title: "Cotton Longyi", desc: "Simple daily wear." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Karen New Year", desc: "Major cultural festival." },
      { title: "Pagoda Fairs", desc: "Seasonal temple events." },
      { title: "Boat Races", desc: "River celebrations." },
    ],
  },
};

cityCategoryData.HAKHA = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Hakha Viewpoints", desc: "Mountain panoramas." },
      { title: "Local Villages", desc: "Traditional Chin life." },
      { title: "Hillside Paths", desc: "Scenic walking routes." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Chin Dishes", desc: "Smoked meats and herbs." },
      { title: "Mountain Rice", desc: "Hearty local staple." },
      { title: "Tea & Snacks", desc: "Warm, simple bites." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Chin Traditions", desc: "Distinct ethnic customs." },
      { title: "Weaving", desc: "Textiles and patterns." },
      { title: "Community Life", desc: "Close village ties." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Chin Shawls", desc: "Bold, geometric designs." },
      { title: "Warm Jackets", desc: "Cool climate layers." },
      { title: "Handmade Beads", desc: "Traditional accessories." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Chin National Day", desc: "Major cultural festival." },
      { title: "Harvest Fest", desc: "Seasonal gatherings." },
      { title: "Village Ceremonies", desc: "Community rituals." },
    ],
  },
};

cityCategoryData.MAWLAMYINE = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Kyaikthanlan", desc: "Hilltop pagoda views." },
      { title: "Strand Road", desc: "Colonial riverside walk." },
      { title: "Thanlwin Bridge", desc: "Scenic river crossing." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Mon Cuisine", desc: "Distinct Mon flavors." },
      { title: "Seafood Dishes", desc: "Fresh coastal plates." },
      { title: "Street Snacks", desc: "Fritters and noodles." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Mon Heritage", desc: "Ancient cultural roots." },
      { title: "Riverside Life", desc: "Harbor and trade." },
      { title: "Colonial History", desc: "Old town architecture." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Mon Longyi", desc: "Distinct Mon patterns." },
      { title: "Light Cotton", desc: "Comfortable coastal wear." },
      { title: "Festival Attire", desc: "Colorful cultural outfits." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Fairs", desc: "Seasonal celebrations." },
      { title: "Mon New Year", desc: "Cultural festivities." },
      { title: "Water Festival", desc: "Thingyan events." },
    ],
  },
};

cityCategoryData.SITTWE = {
  Tourism: {
    title: "Top Spots",
    items: [
      { title: "Sittwe Seafront", desc: "Ocean breeze and sunsets." },
      { title: "Local Jetty", desc: "Boats and harbor views." },
      { title: "Rakhine Museum", desc: "Regional history." },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      { title: "Rakhine Mont Di", desc: "Signature noodle dish." },
      { title: "Seafood Curries", desc: "Coastal flavors." },
      { title: "Fish Paste Dips", desc: "Local spicy sides." },
    ],
  },
  Culture: {
    title: "Culture",
    items: [
      { title: "Rakhine Traditions", desc: "Distinct coastal culture." },
      { title: "Seaside Markets", desc: "Busy harbor trade." },
      { title: "Temple Visits", desc: "Active religious life." },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      { title: "Rakhine Longyi", desc: "Regional patterns and colors." },
      { title: "Light Shawls", desc: "Sea breeze layers." },
      { title: "Festival Wear", desc: "Bright community outfits." },
    ],
  },
  Event: {
    title: "Events",
    items: [
      { title: "Pagoda Festivals", desc: "Seasonal temple fairs." },
      { title: "Boat Races", desc: "Coastal competitions." },
      { title: "Water Festival", desc: "Thingyan celebrations." },
    ],
  },
};

cityCategoryData.TAUNGGYI = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Hot Springs",
        desc: "Relaxing natural springs.",
        img: "./photo/shan state/tanggyi/food/Torisum/inlay.jpg",
      },
      {
        title: "Local Market",
        desc: "Border trade goods.",
        img: "./photo/shan state/tanggyi/food/Torisum/Kalaw.jpg",
      },
      {
        title: "Hill Views",
        desc: "Scenic Shan landscapes.",
        img: "./photo/shan state/tanggyi/food/Torisum/pindaya.jpg",
      },
      {
        title: "Temple",
        desc: "Local pagoda view.",
        img: "./photo/lashio/tour4.jpg",
      },
      {
        title: "Sunset Point",
        desc: "Evening view.",
        img: "./photo/lashio/tour5.jpg",
      },
    ],
  },

  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Shan Noodles",
        desc: "Light, savory bowls.",
        img: "./photo/shan state/tanggyi/food/shannoodles.jpg",
      },
      {
        title: "Pickled Tea",
        desc: "Classic Shan snack.",
        img: "./photo/shan state/tanggyi/food/fishrice.jpg",
      },
      {
        title: "Grilled Meats",
        desc: "Street BBQ stalls.",
        img: "./photo/shan state/tanggyi/food/hintope.jpg",
      },
      {
        title: "Rice Dish",
        desc: "Local rice plate.",
        img: "./photo/shan state/tanggyi/food/Tasty Oven Grilled Fish Recipe.jpg",
      },
      {
        title: "Soup",
        desc: "Traditional soup.",
        img: "./photo/shan state/tanggyi/food/tofunawe.jpg",
      },
    ],
  },

  Culture: {
    title: "Culture",
    items: [
      {
        title: "Ethnic Mix",
        desc: "Shan, Palaung, and more.",
        img: "./photo/lashio/culture1.jpg",
      },
      {
        title: "Trade Town",
        desc: "Busy market life.",
        img: "./photo/lashio/culture2.jpg",
      },
      {
        title: "Monastic Schools",
        desc: "Traditional learning.",
        img: "./photo/lashio/culture3.jpg",
      },
      {
        title: "Village Life",
        desc: "Local traditions.",
        img: "./photo/lashio/culture4.jpg",
      },
      {
        title: "Festivals",
        desc: "Cultural events.",
        img: "./photo/lashio/culture5.jpg",
      },
    ],
  },

  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Shan Textiles",
        desc: "Striped longyi designs.",
        img: "./photo/lashio/clothes1.jpg",
      },
      {
        title: "Warm Layers",
        desc: "Cool climate wear.",
        img: "./photo/lashio/clothes2.jpg",
      },
      {
        title: "Handwoven Bags",
        desc: "Local accessories.",
        img: "./photo/lashio/clothes3.jpg",
      },
      {
        title: "Scarves",
        desc: "Traditional style.",
        img: "./photo/lashio/clothes4.jpg",
      },
      {
        title: "Accessories",
        desc: "Local handmade.",
        img: "./photo/lashio/clothes5.jpg",
      },
    ],
  },

  Event: {
    title: "Events",
    items: [
      {
        title: "Shan New Year",
        desc: "Cultural festivities.",
        img: "./photo/lashio/event1.jpg",
      },
      {
        title: "Market Fairs",
        desc: "Seasonal trade events.",
        img: "./photo/lashio/event2.jpg",
      },
      {
        title: "Pagoda Days",
        desc: "Temple celebrations.",
        img: "./photo/lashio/event3.jpg",
      },
      {
        title: "Local Festival",
        desc: "Community events.",
        img: "./photo/lashio/event4.jpg",
      },
      {
        title: "Music Show",
        desc: "Cultural performance.",
        img: "./photo/lashio/event5.jpg",
      },
    ],
  },
};

cityCategoryData.LASHIO = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Hot Springs",
        desc: "Relaxing natural springs.",
        img: "./photo/lashio/tour1.jpg",
      },
      {
        title: "Local Market",
        desc: "Border trade goods.",
        img: "./photo/lashio/tour2.jpg",
      },
      {
        title: "Hill Views",
        desc: "Scenic Shan landscapes.",
        img: "./photo/lashio/tour3.jpg",
      },
      {
        title: "Temple",
        desc: "Local pagoda view.",
        img: "./photo/lashio/tour4.jpg",
      },
      {
        title: "Sunset Point",
        desc: "Evening view.",
        img: "./photo/lashio/tour5.jpg",
      },
    ],
  },

  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Shan Noodles",
        desc: "Light, savory bowls.",
        img: "./photo/shan state/tanggyi/food/hintope.jpg",
      },
      {
        title: "Pickled Tea",
        desc: "Classic Shan snack.",
        img: "./photo/lashio/food2.jpg",
      },
      {
        title: "Grilled Meats",
        desc: "Street BBQ stalls.",
        img: "./photo/lashio/food3.jpg",
      },
      {
        title: "Rice Dish",
        desc: "Local rice plate.",
        img: "./photo/lashio/food4.jpg",
      },
      {
        title: "Soup",
        desc: "Traditional soup.",
        img: "./photo/lashio/food5.jpg",
      },
    ],
  },

  Culture: {
    title: "Culture",
    items: [
      {
        title: "Ethnic Mix",
        desc: "Shan, Palaung, and more.",
        img: "./photo/lashio/culture1.jpg",
      },
      {
        title: "Trade Town",
        desc: "Busy market life.",
        img: "./photo/lashio/culture2.jpg",
      },
      {
        title: "Monastic Schools",
        desc: "Traditional learning.",
        img: "./photo/lashio/culture3.jpg",
      },
      {
        title: "Village Life",
        desc: "Local traditions.",
        img: "./photo/lashio/culture4.jpg",
      },
      {
        title: "Festivals",
        desc: "Cultural events.",
        img: "./photo/lashio/culture5.jpg",
      },
    ],
  },

  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Shan Textiles",
        desc: "Striped longyi designs.",
        img: "./photo/lashio/clothes1.jpg",
      },
      {
        title: "Warm Layers",
        desc: "Cool climate wear.",
        img: "./photo/lashio/clothes2.jpg",
      },
      {
        title: "Handwoven Bags",
        desc: "Local accessories.",
        img: "./photo/lashio/clothes3.jpg",
      },
      {
        title: "Scarves",
        desc: "Traditional style.",
        img: "./photo/lashio/clothes4.jpg",
      },
      {
        title: "Accessories",
        desc: "Local handmade.",
        img: "./photo/lashio/clothes5.jpg",
      },
    ],
  },

  Event: {
    title: "Events",
    items: [
      {
        title: "Shan New Year",
        desc: "Cultural festivities.",
        img: "./photo/lashio/event1.jpg",
      },
      {
        title: "Market Fairs",
        desc: "Seasonal trade events.",
        img: "./photo/lashio/event2.jpg",
      },
      {
        title: "Pagoda Days",
        desc: "Temple celebrations.",
        img: "./photo/lashio/event3.jpg",
      },
      {
        title: "Local Festival",
        desc: "Community events.",
        img: "./photo/lashio/event4.jpg",
      },
      {
        title: "Music Show",
        desc: "Cultural performance.",
        img: "./photo/lashio/event5.jpg",
      },
    ],
  },
};

cityCategoryData.KENGTUNG = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Hot Springs",
        desc: "Relaxing natural springs.",
        img: "./photo/lashio/tour1.jpg",
      },
      {
        title: "Local Market",
        desc: "Border trade goods.",
        img: "./photo/lashio/tour2.jpg",
      },
      {
        title: "Hill Views",
        desc: "Scenic Shan landscapes.",
        img: "./photo/lashio/tour3.jpg",
      },
      {
        title: "Temple",
        desc: "Local pagoda view.",
        img: "./photo/lashio/tour4.jpg",
      },
      {
        title: "Sunset Point",
        desc: "Evening view.",
        img: "./photo/lashio/tour5.jpg",
      },
    ],
  },

  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Shan Noodles",
        desc: "Light, savory bowls.",
        img: "./photo/shan state/tanggyi/food/hintope.jpg",
      },
      {
        title: "Pickled Tea",
        desc: "Classic Shan snack.",
        img: "./photo/lashio/food2.jpg",
      },
      {
        title: "Grilled Meats",
        desc: "Street BBQ stalls.",
        img: "./photo/lashio/food3.jpg",
      },
      {
        title: "Rice Dish",
        desc: "Local rice plate.",
        img: "./photo/lashio/food4.jpg",
      },
      {
        title: "Soup",
        desc: "Traditional soup.",
        img: "./photo/lashio/food5.jpg",
      },
    ],
  },

  Culture: {
    title: "Culture",
    items: [
      {
        title: "Ethnic Mix",
        desc: "Shan, Palaung, and more.",
        img: "./photo/lashio/culture1.jpg",
      },
      {
        title: "Trade Town",
        desc: "Busy market life.",
        img: "./photo/lashio/culture2.jpg",
      },
      {
        title: "Monastic Schools",
        desc: "Traditional learning.",
        img: "./photo/lashio/culture3.jpg",
      },
      {
        title: "Village Life",
        desc: "Local traditions.",
        img: "./photo/lashio/culture4.jpg",
      },
      {
        title: "Festivals",
        desc: "Cultural events.",
        img: "./photo/lashio/culture5.jpg",
      },
    ],
  },

  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Shan Textiles",
        desc: "Striped longyi designs.",
        img: "./photo/lashio/clothes1.jpg",
      },
      {
        title: "Warm Layers",
        desc: "Cool climate wear.",
        img: "./photo/lashio/clothes2.jpg",
      },
      {
        title: "Handwoven Bags",
        desc: "Local accessories.",
        img: "./photo/lashio/clothes3.jpg",
      },
      {
        title: "Scarves",
        desc: "Traditional style.",
        img: "./photo/lashio/clothes4.jpg",
      },
      {
        title: "Accessories",
        desc: "Local handmade.",
        img: "./photo/lashio/clothes5.jpg",
      },
    ],
  },

  Event: {
    title: "Events",
    items: [
      {
        title: "Shan New Year",
        desc: "Cultural festivities.",
        img: "./photo/lashio/event1.jpg",
      },
      {
        title: "Market Fairs",
        desc: "Seasonal trade events.",
        img: "./photo/lashio/event2.jpg",
      },
      {
        title: "Pagoda Days",
        desc: "Temple celebrations.",
        img: "./photo/lashio/event3.jpg",
      },
      {
        title: "Local Festival",
        desc: "Community events.",
        img: "./photo/lashio/event4.jpg",
      },
      {
        title: "Music Show",
        desc: "Cultural performance.",
        img: "./photo/lashio/event5.jpg",
      },
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.getElementById("go-to-page2-btn");
  const backBtn = document.getElementById("back-to-state-btn");
  const section3 = document.getElementById("city-explorer-section");
  const scrollSpacer = document.getElementById("scroll-spacer");
  const popup = document.getElementById("city-popup");
  const popupClose = document.getElementById("city-popup-close");
  const popupBack = document.getElementById("city-popup-back");

  if (exploreBtn) exploreBtn.style.display = "none";
  if (backBtn) backBtn.style.display = "none";
  if (section3) section3.style.display = "none";
  if (scrollSpacer) scrollSpacer.style.display = "none";
  document.body.style.overflow = "hidden";

  lastScrollY = window.scrollY || 0;

  const closeCityPopup = () => {
    if (popup) popup.classList.remove("show");
    if (section3) section3.classList.remove("popup-mode");
    if (backBtn && cityExplorerOpen) backBtn.style.display = "block";
  };

  if (popupClose && popup) {
    popupClose.addEventListener("click", closeCityPopup);
  }
  if (popupBack && popup) {
    popupBack.addEventListener("click", closeCityPopup);
  }
  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        closeCityPopup();
      }
    });
  }
});

function handleStateSelect(id) {
  if (currentState === id) {
    goBack();
    return;
  }

  currentState = id;
  const data = regionData[id] || {};
  currentRegionData = data;

  const dashboard = document.getElementById("dashboard");
  dashboard.style.display = "flex";
  dashboard.classList.add("active-layout");

  // Header ကို ခေတ္တဖျောက်မယ်
  document.getElementById("main-header").classList.add("hidden");

  // Map Zoom Logic
  document
    .querySelectorAll("#map svg path")
    .forEach((p) => p.classList.remove("selected-state"));
  const selected = document.querySelector(".sm_state_" + id);
  if (selected) {
    selected.classList.add("selected-state");
  }
  document.getElementById("map").classList.add("map-zoomed");

  // Overview စာသားများ Update လုပ်မယ်
  document.getElementById("r-name").innerText = data.name || "Region";
  const overviewCard = document.getElementById("overview-card");
  overviewCard.innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body">
                <h4>Overview</h4>
                <p>${data.overview || "No data available for this region."}</p>
            </div>
        </div>`;

  // Explore Button ကို အစမှာ ဖျောက်ထားမယ်
  const exploreBtn = document.getElementById("go-to-page2-btn");
  exploreBtn.style.display = "block";

  const scrollSpacer = document.getElementById("scroll-spacer");
  if (scrollSpacer) scrollSpacer.style.display = "none";

  const section3 = document.getElementById("city-explorer-section");
  if (section3) section3.style.display = "none";
  cityExplorerOpen = false;
  hasScrolledCity = false;
  const backBtn = document.getElementById("back-to-state-btn");
  if (backBtn) backBtn.style.display = "none";
  document.body.style.overflow = "hidden";

  // Section 3 (City Explorer) အတွက် Data တွေ ကြိုတင်ပြင်ဆင်မယ်
  setupSection3(data);
  if (data.bgImg) {
    document.body.classList.add("state-bg");

    document.body.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('${data.bgImg}')
  `;
  }
}

// ===== 3. REVEAL CITY EXPLORER (Section 3) =====
function revealCityExplorer() {
  const section3 = document.getElementById("city-explorer-section");
  if (!section3) return;

  // 🔹 Set STATE background (default city image)
  let defaultCity = currentRegionData?.cities?.[0]; // first city
  if (defaultCity) {
    const bg = defaultCity.bgImg || defaultCity.img || "";
    section3.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${bg}')`;
  }

  section3.style.display = "flex";
  cityExplorerOpen = true;
  hasScrolledCity = false;
  document.body.style.overflow = "hidden";

  const exploreBtn = document.getElementById("go-to-page2-btn");
  if (exploreBtn) exploreBtn.style.display = "none";
  const backBtn = document.getElementById("back-to-state-btn");
  if (backBtn) backBtn.style.display = "block";
  const dashboard = document.getElementById("dashboard");
  if (dashboard) dashboard.style.display = "none";
  const header = document.getElementById("main-header");
  if (header) header.style.display = "none";

  window.scrollTo({ top: 0, behavior: "smooth" });

  // 🔹 setup first city content immediately
  if (defaultCity) updateSection3Content(defaultCity);
}

function returnToStateView() {
  const section3 = document.getElementById("city-explorer-section");
  if (section3) section3.style.display = "none";
  cityExplorerOpen = false;
  hasScrolledCity = false;
  document.body.style.overflow = "hidden";
  if (section3) section3.classList.remove("popup-mode");
  const popup = document.getElementById("city-popup");
  if (popup) popup.classList.remove("show");

  const backBtn = document.getElementById("back-to-state-btn");
  if (backBtn) backBtn.style.display = "none";
  const exploreBtn = document.getElementById("go-to-page2-btn");
  if (exploreBtn) exploreBtn.style.display = currentState ? "block" : "none";
  const dashboard = document.getElementById("dashboard");
  if (dashboard) dashboard.style.display = "flex";
  const header = document.getElementById("main-header");
  if (header) {
    header.style.display = "flex";
    header.classList.remove("hidden");
  }
  document.getElementById("main-header").classList.add("hidden");

  window.scrollTo({ behavior: "smooth" });
}

function updateSection3Content(city) {
  currentCityData = city;
  document.getElementById("exp-city-name").innerText = city.name.toUpperCase();
  document.getElementById("exp-city-desc").innerText =
    city.desc || "Explore the wonders of this location.";

  const bg = city.bgImg || city.img || "";
  document.getElementById("city-explorer-section").style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${bg}')`;
}
function getCategoryImage(category, cityName) {
  const cityData = cityCategoryData[cityName];
  if (cityData && cityData[category] && cityData[category].img) {
    return cityData[category].img;
  }

  return categoryImages[category] || "";
}

function openCityPopup(city) {
  const popup = document.getElementById("city-popup");

  // 🔥 default category
  const defaultCategory = "Tourism";

  // 🔥 default image
  document.getElementById("city-popup-img").src =
    categoryImages[defaultCategory];

  document.getElementById("hero-title").innerText =
    defaultCategory.toUpperCase();

  // 🔥 IMPORTANT (button create)
  renderCategoryButtons();

  // 🔥 content
  renderCategoryContent(defaultCategory);

  popup.classList.add("show");
}

function renderCategoryButtons() {
  const row = document.getElementById("category-row");
  if (!row) return;

  row.innerHTML = "";

  const categories = ["Tourism", "Food", "Culture", "Clothes", "Event"];

  categories.forEach((label) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";

    const circle = document.createElement("div");
    circle.className = "circle";

    const circleImg = document.createElement("div");
    circleImg.className = "circle-img";

    // 🔥 IMAGE SET
    const imgSrc = categoryImages[label];
    if (imgSrc) {
      circleImg.style.backgroundImage = `url('${imgSrc}')`;
    }

    circle.appendChild(circleImg);

    const text = document.createElement("div");
    text.className = "label";
    text.innerText = label;

    btn.appendChild(circle);
    btn.appendChild(text);

    // 🔥 CLICK
    btn.onclick = () => {
      updateHero(label);
      updateCategoryContent(label);
    };

    row.appendChild(btn);
  });
}

function swapCategory(clickedLabel) {
  if (!hiddenCategory) return;
  visibleCategories = visibleCategories.map((label) =>
    label === clickedLabel ? hiddenCategory : label,
  );
  hiddenCategory = clickedLabel;
  renderCategoryButtons();
  updateCategoryContent(clickedLabel);
}

function updateCategoryContent(label) {
  const popupImg = document.getElementById("city-popup-img");
  const heroTitle = document.getElementById("hero-title");

  const imgSrc = categoryImages[label];

  if (popupImg && imgSrc) {
    popupImg.src = imgSrc;
  }

  if (heroTitle) {
    heroTitle.innerText = label.toUpperCase();
  }

  renderCategoryContent(label);
}

function renderCategoryContent(label) {
  const content = document.getElementById("category-content");
  const data = getCategoryData(label);

  const cards = data.items
    .map(
      (item) => `
    <div class="category-card">
      <img src="${item.img}" />  <!-- 🔥 image -->
      <div class="category-card-title">${item.title}</div>
      <div class="category-card-text">${item.desc}</div>
    </div>
  `,
    )
    .join("");

  content.innerHTML = `
    <h3 style="color:white">${data.title}</h3>
    <div>${cards}</div>
  `;
}

function getCategoryData(label) {
  const city = currentCityData || {};
  const region = currentRegionData || {};
  const cityCategories = city.categories || {};
  if (cityCategories[label]) return cityCategories[label];

  const cityName = city.name || "This city";
  const regionName = region.name || "this region";

  if (label === "Tourism") {
    return {
      title: "Top Spots",
      items: [
        {
          title: "Highlights",
          desc: `${cityName} is a great base for exploring ${regionName}.`,
        },
        {
          title: "Key Attraction",
          desc: region.tourism || "Local landmarks and scenic viewpoints.",
        },
        { title: "Best Time", desc: "Early morning and sunset for views." },
      ],
    };
  }
  if (label === "Food") {
    const food =
      region.food && region.food[0] ? region.food[0].name : "local cuisine";
    return {
      title: "Local Taste",
      items: [
        { title: "Signature", desc: food },
        { title: "Street Food", desc: "Popular stalls and tea shops." },
        { title: "Dining", desc: "Family-run restaurants and markets." },
      ],
    };
  }
  if (label === "Culture") {
    const culture =
      region.cultureTags && region.cultureTags.length > 0
        ? region.cultureTags.join(", ")
        : "traditional life, festivals, and local arts";
    return {
      title: "Culture",
      items: [
        { title: "Identity", desc: culture },
        { title: "Community", desc: "Active local traditions and rituals." },
        {
          title: "Daily Life",
          desc: "Markets, monasteries, and neighborhoods.",
        },
      ],
    };
  }
  if (label === "Clothes") {
    return {
      title: "Traditional Wear",
      items: [
        { title: "Longyi", desc: "Everyday wear across Myanmar." },
        { title: "Textiles", desc: "Region-specific woven patterns." },
        { title: "Accessories", desc: "Simple scarves and handmade bags." },
      ],
    };
  }
  if (label === "Event") {
    return {
      title: "Events",
      items: [
        { title: "Pagoda Festivals", desc: "Seasonal temple celebrations." },
        { title: "Thingyan", desc: "Myanmar water festival in April." },
        { title: "Local Fairs", desc: "Community markets and performances." },
      ],
    };
  }
  return { title: label, items: [] };
}

function updateHero(label) {
  const popupImg = document.getElementById("city-popup-img");
  const heroTitle = document.getElementById("hero-title");

  const img = getCategoryImage(label, currentCityData.name);

  if (popupImg && img) popupImg.src = img;
  if (heroTitle) heroTitle.innerText = label;
}

function goBack() {
  currentState = null;
  document.body.style.overflow = "hidden";
  document.getElementById("dashboard").style.display = "flex";
  document.getElementById("dashboard").classList.remove("active-layout");
  document.getElementById("main-header").style.display = "flex";
  document.getElementById("main-header").classList.remove("hidden");
  document.getElementById("city-explorer-section").style.display = "none";
  document
    .getElementById("city-explorer-section")
    .classList.remove("popup-mode");
  const popup = document.getElementById("city-popup");
  if (popup) popup.classList.remove("show");
  const scrollSpacer = document.getElementById("scroll-spacer");
  if (scrollSpacer) scrollSpacer.style.display = "none";
  const backBtn = document.getElementById("back-to-state-btn");
  if (backBtn) backBtn.style.display = "none";
  cityExplorerOpen = false;
  hasScrolledCity = false;
  const exploreBtn = document.getElementById("go-to-page2-btn");
  if (exploreBtn) exploreBtn.style.display = "none";

  // SimpleMaps Reset
  if (window.simplemaps_countrymap && simplemaps_countrymap.back) {
    simplemaps_countrymap.back();
  }
  document.getElementById("map").classList.remove("map-zoomed");
  document
    .querySelectorAll("#map svg path")
    .forEach((p) => p.classList.remove("selected-state"));
  document.body.classList.remove("state-bg");
  document.body.style.backgroundImage = "";
}
// ၁။ Circle Button နှိပ်လျှင် Nagano UI ပွင့်စေခြင်း
let activeCityObject = null;

// ၁။ Circle Button များကို Render လုပ်ပြီး Click ချိတ်ဆက်ခြင်း
function setupSection3(data) {
  const navContainer = document.getElementById("city-nav-right");
  navContainer.innerHTML = "";

  if (data.cities && data.cities.length > 0) {
    data.cities.forEach((city, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "city-item";

      const btn = document.createElement("div");
      btn.className = `city-circle-btn ${index === 0 ? "active" : ""}`;
      btn.style.backgroundImage = `url('${city.img}')`;

      // 🔹 Circle Button နှိပ်လိုက်လျှင် Dashboard ကိုဖျောက်ပြီး Nagano UI ကိုဖွင့်မည်
      btn.onclick = () => {
        document.getElementById("city-explorer-section").style.display = "none";
        document.getElementById("nagano-ui-overlay").style.display = "flex";

        // မြို့အမည်ကို uppercase ပြောင်းပြီး data ဆွဲထုတ်မည်
        const cityName = city.name.toUpperCase();
        activeCityObject = cityCategoryData[cityName];

        if (activeCityObject) {
          renderNaganoCategoryMenu();
          renderNaganoCards("Tourism"); // အစမှာ Tourism ကိုပြမည်
        } else {
          console.error("No data found for: " + cityName);
        }
      };

      wrapper.appendChild(btn);
      navContainer.appendChild(wrapper);
    });
  }
}

// ၂။ အပေါ်က Tourism, Food စသည့် Menu များထုတ်ပေးခြင်း
function renderNaganoCategoryMenu() {
  const menu = document.getElementById("nagano-category-menu");
  menu.innerHTML = "";
  const cats = ["Tourism", "Food", "Culture", "Clothes", "Event"];

  cats.forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.className = `nagano-nav-item ${index === 0 ? "active" : ""}`;
    btn.innerText = cat.toUpperCase();
    btn.onclick = () => {
      document
        .querySelectorAll(".nagano-nav-item")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderNaganoCards(cat);
    };
    menu.appendChild(btn);
  });
}

// ၃။ Card များထုတ်ပေးခြင်းနှင့် Smooth Animation Logic
function renderNaganoCards(category) {
  const holder = document.getElementById("nagano-cards-holder");
  holder.innerHTML = "";

  const items = activeCityObject[category]?.items || [];
  if (items.length === 0) return;

  // ၁။ ပထမဆုံး Item ကို Background အဖြစ်ပြပြီး ကျန် ၄ ခုကို Card တန်းထဲထည့်မည်
  let currentBgItem = items[0];
  updateNaganoView(currentBgItem.title, currentBgItem.desc, currentBgItem.img);

  // လက်ရှိမြင်ရမည့် ၄ ကတ် (၅ ကတ်ထဲမှ ၁ ကတ်က Background ဖြစ်နေသောကြောင့်)
  let visibleItems = items.slice(1, 5);

  function refreshLayout() {
    holder.innerHTML = "";
    visibleItems.forEach((item) => {
      const card = document.createElement("div");
      card.className = "nagano-card";
      card.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('${item.img}')`;
      card.innerHTML = `
        <div class="card-label">
            <small>EXPLORE</small>
            <h3>${item.title.toUpperCase()}</h3>
        </div>
      `;

      card.onclick = function () {
        // (က) နှိပ်လိုက်သောကတ် ပျောက်သွားသည့် Animation ပြုလုပ်
        this.classList.add("card-moving-out");

        setTimeout(() => {
          // (ခ) Logic အရွှေ့အပြောင်း: Background ဟောင်းကို အနောက်ဆုံးပို့၊ နှိပ်လိုက်သောကတ်ကို Background အသစ်လုပ်
          const oldBg = currentBgItem;
          currentBgItem = item;

          visibleItems = visibleItems.filter((i) => i !== item);
          visibleItems.push(oldBg);

          updateNaganoView(
            currentBgItem.title,
            currentBgItem.desc,
            currentBgItem.img,
          );
          refreshLayout();

          // (ဂ) အသစ်ဝင်လာသောကတ်ကို Animation ပြရန်
          holder.lastElementChild.classList.add("card-arriving");
        }, 500);
      };

      holder.appendChild(card);
    });
  }

  refreshLayout();
}

function updateNaganoView(title, desc, img) {
  const overlay = document.getElementById("nagano-ui-overlay");
  document.getElementById("nagano-title").innerText = title.toUpperCase();

  // Description update (ရှိလျှင်)
  const descEl = document.getElementById("nagano-desc");
  if (descEl) descEl.innerText = desc || "Experience the beauty of Myanmar.";

  // Background transition
  overlay.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${img}')`;
}

function refreshLayout() {
  holder.innerHTML = "";
  visibleItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "nagano-card";
    // ပိုမိုကြည်လင်သော Gradient သုံးထားပါသည်
    card.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%), url('${item.img}')`;

    card.innerHTML = `
            <div class="card-label">
                <small>EXPLORE</small>
                <h3>${item.title.toUpperCase()}</h3>
            </div>
        `;

    card.onclick = function () {
      // Click လုပ်လိုက်သော Card ကို Smooth ဖြစ်အောင် အရင်ဖျောက်မည်
      this.style.pointerEvents = "none";
      this.classList.add("card-moving-out");

      setTimeout(() => {
        const oldBg = currentBgItem;
        currentBgItem = item;

        visibleItems = visibleItems.filter((i) => i !== item);
        visibleItems.push(oldBg);

        updateNaganoView(
          currentBgItem.title,
          currentBgItem.desc,
          currentBgItem.img,
        );
        refreshLayout();

        // အနောက်ဆုံးမှ ဝင်လာသောကတ်ကို ညင်သာစွာ ပြမည်
        const lastCard = holder.lastElementChild;
        if (lastCard) lastCard.classList.add("card-arriving");
      }, 600);
    };

    holder.appendChild(card);
  });
}
function closeNaganoExplorer() {
  document.getElementById("nagano-ui-overlay").style.display = "none";
  document.getElementById("city-explorer-section").style.display = "flex";
}
// SimpleMaps Event Hooks
simplemaps_countrymap.hooks.zoomable_click_state = handleStateSelect;
simplemaps_countrymap.hooks.click_state = handleStateSelect;
