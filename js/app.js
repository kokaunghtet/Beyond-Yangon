// ===== REGION DATA =====
const regionData = {
  MM01: {
    name: "Sagaing Region",
    bgImg: "./photo/Sagaing/overview.jpg",

    overview:
      "Sagaing Region is located in northwestern Myanmar and is known for its strong Buddhist culture, monasteries, and the scenic Sagaing Hills.",

    cities: [
      {
        name: "Monywa",
        img: "./photo/Sagaing/button.jpg",
        bgImg: "./photo/Sagaing/button.jpg",
        desc: "Capital of Sagaing Region",
      },
    ],

    food: [{ name: "Monywa Noodles", img: "images/monywa.jpg" }],

    tourism: "Sagaing Hills and U Min Thonze Pagoda.",
  },
  MM02: {
    name: "Bago Region",
    bgImg: "./photo/Bago/overview.jpg",
    overview:
      "Bago Region is rich in history and home to ancient cities and famous pagodas like Shwemawdaw.",
    cities: [
      {
        name: "Bago",
        img: "./photo/Bago/button.jpg",
        bgImg: "./photo/Bago/button.jpg",
        desc: "Capital of Bago Region",
      },
    ],
    food: [{ name: "Pyay Rice", img: "images/pyay.jpg" }],
    tourism: "Shwemawdaw Pagoda and Kanbawzathadi Palace.",
  },

  MM03: {
    name: "Magway Region",
    bgImg: "./photo/Magway/overview.jpg",
    overview:
      "Magway Region lies in central Myanmar and is known for dry-zone agriculture and oil fields.",
    cities: [
      {
        name: "Magway",
        img: "./photo/Magway/button.jpg",
        bgImg: "./photo/Magway/button.jpg",
        desc: "Capital of Magway Region",
      },
    ],
    food: [{ name: "Sesame Snacks", img: "images/sesame.jpg" }],
    tourism: "Myathalun Pagoda.",
  },

  MM04: {
    name: "Mandalay Region",
    bgImg: "./photo/Mandalay_region/overview.jpg",
    overview: "Cultural heart of Myanmar",
    cities: [
      {
        name: "Mandalay",
        img: "./photo/Mandalay_region/mandalay button.jpg",
        bgImg: "./photo/Mandalay_region/mandalay button.jpg",
        desc: "Cultural capital of Myanmar",
      },
    ],
  },

  MM05: {
    name: "Tanintharyi Region",
    bgImg: "./photo/thnintharyi/overview.jpg",
    overview:
      "Tanintharyi is a coastal region with beautiful islands and rich marine biodiversity.",
    cities: [
      {
        name: "Dawei",
        img: "./photo/thnintharyi/button.jpg",
        bgImg: "./photo/thnintharyi/button.jpg",
        desc: "Capital city of Tanintharyi Region",
      },
    ],
    food: [{ name: "Seafood", img: "images/seafood.jpg" }],
    tourism: "Myeik Archipelago.",
  },

  MM06: {
    name: "Yangon Region",
    bgImg: "./photo/yangon/overview.jpg",
    overview:
      "Yangon is the largest city and economic center of Myanmar with colonial heritage.",
    cities: [
      {
        name: "Yangon",
        img: "./photo/yangon/button.jpg",
        bgImg: "./photo/yangon/button.jpg",
        desc: "Capital city of Yangon Region",
      },
    ],
    food: [{ name: "Mohinga", img: "images/mohinga.jpg" }],
    tourism: "Shwedagon Pagoda.",
  },

  MM07: {
    name: "Ayeyarwady Region",
    bgImg: "./photo/Pathein/overview.jpg",
    overview:
      "Ayeyarwady Region is the rice bowl of Myanmar with vast delta plains.",
    cities: [
      {
        name: "Pathein",
        img: "./photo/Pathein/button.jpg",
        bgImg: "./photo/Pathein/button.jpg",
        desc: "Capital city of Ayeyarwady Region",
      },
    ],
    food: [{ name: "Fish Curry", img: "images/fish.jpg" }],
    tourism: "Ngwe Saung Beach.",
  },

  MM11: {
    name: "Kachin State",
    bgImg: "./photo/Kachin State/overview.jpg",
    overview:
      "Kachin State is known for mountains, jade mining, and rich ethnic culture.",
    cities: [
      {
        name: "Myitkyina",
        img: "./photo/Kachin State/button.jpg",
        bgImg: "./photo/Kachin State/button.jpg",
        desc: "Capital city of Kachin State",
      },
    ],
    food: [{ name: "Kachin Traditional Food", img: "images/kachin.jpg" }],
    tourism: "Myitsone and surrounding natural beauty.",
  },

  MM12: {
    name: "Kayah State",
    bgImg: "./photo/Kayah/overview.jpg",
    overview:
      "Kayah is the smallest state and known for its ethnic traditions.",
    cities: [
      {
        name: "LoiKaw",
        img: "./photo/Kayah/button.jpg",
        bgImg: "./photo/Kayah/button.jpg",
        desc: "Capital city of Kayah State",
      },
    ],
    food: [{ name: "Traditional Rice Dishes", img: "images/rice.jpg" }],
    tourism: "Taung Kwe Pagoda.",
  },

  MM13: {
    name: "Kayin State",
    bgImg: "./photo/kayin/overview.jpg",
    overview: "Kayin State is famous for limestone mountains and caves.",
    cities: [
      {
        name: "Hpa-an",
        img: "./photo/kayin/button.jpg",
        bgImg: "./photo/kayin/button.jpg",
        desc: "Capital city of Kayin State",
      },
    ],
    food: [{ name: "Karen Food", img: "images/karen.jpg" }],
    tourism: "Saddan Cave.",
  },

  MM14: {
    name: "Chin State",
    bgImg: "./photo/chin/overview.jpg",
    overview:
      "Chin State is mountainous and known for its traditional tribes and culture.",
    cities: [
      {
        name: "Hakha",
        img: "./photo/chin/button.jpg",
        bgImg: "./photo/chin/button.jpg",
        desc: "Capital of Chin State",
      },
    ],
    food: [{ name: "Chin Traditional Food", img: "images/chin-food.jpg" }],
    tourism: "Mount Victoria.",
  },

  MM15: {
    name: "Mon State",
    bgImg: "./photo/Mon/overview.jpg",
    overview:
      "Mon State is known for its ancient Mon culture and coastal beauty.",
    cities: [
      {
        name: "Mawlamyine",
        img: "./photo/Mon/button.jpg",
        bgImg: "./photo/Mon/button.jpg",
        desc: "Capital of Mon State",
      },
    ],
    food: [{ name: "Mon Cuisine", img: "images/mon-food.jpg" }],
    tourism: "Golden Rock.",
  },

  MM16: {
    name: "Rakhine State",
    bgImg: "./photo/rakhine/overview.jpg",
    overview:
      "Rakhine State is a coastal state known for beaches and ancient temples.",
    cities: [
      {
        name: "Sittwe",
        img: "./photo/rakhine/button.jpg",
        bgImg: "./photo/rakhine/button.jpg",
        desc: "Capital of Rakhine State",
      },
    ],
    food: [{ name: "Rakhine Mont Di", img: "images/montdi.jpg" }],
    tourism: "Ngapali Beach.",
  },

  MM17: {
    name: "Shan State",
    bgImg: "./photo/shan state/overview/overview.jpg",
    overview:
      "Shan State is the largest state in Myanmar, known for mountains, ethnic diversity, and Inle Lake.",
    cities: [
      {
        name: "Taunggyi",
        img: "./photo/shan state/3button/Taunggyi.jpg",
        bgImg: "./photo/shan state/3button/Taunggyi.jpg",
        desc: "Capital of Shan State",
      },
    ],
    food: [{ name: "Shan Noodles", img: "images/shan-noodle.jpg" }],
    tourism: "Inle Lake.",
  },
};

let currentState = null;
let currentRegionData = null;
let currentCityData = null;
let cityExplorerOpen = false;
let visibleCategories = [];
let currentCityImage = "";
const cityCategoryData = {};
cityCategoryData.YANGON = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Shwedagon",
        desc: "The most sacred pagoda in Myanmar.\nCovered in gold with stunning city views.",
        img: "./photo/yangon/Shwedagon Pagoda.jpg",
      },
      {
        title: "Sule Pagoda",
        desc: "Historic pagoda in downtown Yangon.\nSurrounded by busy roads and colonial buildings.",
        img: "./photo/yangon/Sule Pagoda.jpg",
      },
      {
        title: "Yangon Circular Railway",
        desc: "A slow train ride around the city.\nShows daily life and local markets.",
        img: "./photo/yangon/Yangon Circular Railway.jpg",
      },
      {
        title: "Bogyoke Aung San Market",
        desc: "Famous market for souvenirs and gems.\nGreat place to shop traditional items.",
        img: "./photo/yangon/Bogyoke Aung San Market.jpg",
      },
      {
        title: "Kandawgyi Lake",
        desc: "Peaceful lake with scenic views.\nPerfect for relaxing and sunset walks.",
        img: "./photo/yangon/Kandawgyi Lake.jpg",
      },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Mohinga",
        desc: "Myanmar’s national dish with fish soup.\nUsually eaten as a breakfast meal.",
        img: "./photo/yangon/Mohinga.jpg",
      },
      {
        title: "Ohn No Khao Swe",
        desc: "Coconut chicken noodle soup.\nRich, creamy and slightly spicy flavor.",
        img: "./photo/yangon/Ohn No Khao Swe.jpg",
      },
      {
        title: "Laphet Thoke",
        desc: "Famous tea leaf salad.\nMixed with nuts and crunchy toppings.",
        img: "./photo/yangon/Laphet Thoke.jpg",
      },
      {
        title: "Street BBQ",
        desc: "Grilled meats and skewers.\nPopular street food at night.",
        img: "./photo/yangon/Shwedagon Pagoda.jpg",
      },
      {
        title: "Mont Lin Mayar",
        desc: "Crispy street snack with fillings.\nOften made with eggs or beans.",
        img: "./photo/yangon/Mont Lin Mayar.jpg",
      },
    ],
  },
  Event: {
    title: "Events",
    items: [
      {
        title: "Thingyan Water Festival",
        desc: "Myanmar New Year water festival.\nPeople celebrate by splashing water.",
        img: "./photo/yangon/Thingyan Water Festival.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights after Buddhist Lent.\nHomes and streets are decorated brightly.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
      {
        title: "Tazaungdaing Festival",
        desc: "Festival with lights and hot air balloons.\nIncludes traditional offering ceremonies.",
        img: "./photo/yangon/Tazaungdaing Festival.jpg",
      },
      {
        title: "Shwedagon Pagoda Festival",
        desc: "Large religious festival at Shwedagon.\nFilled with food stalls and activities.",
        img: "./photo/yangon/Shwedagon Pagoda Festival.jpg",
      },
      {
        title: "Yangon Street Food Festival",
        desc: "Food event with many local dishes.\nA great place to try street food.",
        img: "./photo/yangon/Yangon Street Food Festival.jpg",
      },
    ],
  },
};

cityCategoryData.MANDALAY = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Mandalay",
        desc: "Historic royal city of Myanmar.\nHome to Mandalay Hill and the old palace.",
        img: "./photo/Mandalay_region/Mandalay .jpg",
      },
      {
        title: "Pyin Oo Lwin",
        desc: "Cool hill town with colonial charm.\nKnown for gardens and fresh climate.",
        img: "./photo/Mandalay_region/pyinoolwin.jpg",
      },
      {
        title: "Mingun",
        desc: "Ancient riverside site.\nFamous for Mingun Bell and pagoda ruins.",
        img: "./photo/Mandalay_region/mingun.jpg",
      },
      {
        title: "Amarapura",
        desc: "Former royal capital.\nKnown for U Bein Bridge and sunset views.",
        img: "./photo/Mandalay_region/amarabura.jpg",
      },
      {
        title: "Inwa",
        desc: "Ancient Ava city ruins.\nExplored by horse cart rides.",
        img: "./photo/Mandalay_region/inwa.jpg",
      },
    ],
  },

  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Mandalay Htoe Mont",
        desc: "Traditional sweet rice cake.\nRich, buttery and slightly sticky.",
        img: "./photo/Mandalay_region/Htoe Mont.jpg",
      },
      {
        title: "Mee Shay",
        desc: "Rice noodles with pork and oil.\nSimple and flavorful local dish.",
        img: "./photo/Mandalay_region/Mee Shay.jpg",
      },
      {
        title: "Mont Di",
        desc: "Tangy noodles with fish soup.\nPopular Upper Myanmar dish.",
        img: "./photo/Mandalay_region/Mont Di.jpg",
      },
      {
        title: "Oli Rice",
        desc: "Rice mixed with oil and peas.\nCommon everyday Mandalay meal.",
        img: "./photo/Mandalay_region/Oli Rice.jpg",
      },
      {
        title: "Mandalay Mont ti",
        desc: "Rice noodle salad with toppings.\nCrunchy and slightly spicy taste.",
        img: "./photo/Mandalay_region/Mandalay Mont ti.jpg",
      },
    ],
  },

  Event: {
    title: "Events",
    items: [
      {
        title: "Mahamuni Pagoda Festival",
        desc: "Religious festival at Mahamuni.\nIncludes prayers and night markets.",
        img: "./photo/Mandalay_region/Mahamuni Pagoda Festival.jpg",
      },
      {
        title: "Mandalay Thingyan",
        desc: "Water festival in Mandalay.\nCelebrated with music and crowds.",
        img: "./photo/Mandalay_region/Mandalay Thingyan.jpg",
      },
      {
        title: "Taungbyone Nat Festival",
        desc: "Famous spirit worship festival.\nIncludes dancing and ceremonies.",
        img: "./photo/Mandalay_region/Taungbyone Nat Festival.jpg",
      },
      {
        title: "Yadanagu Nat Festival",
        desc: "Traditional nat spirit event.\nLocals honor guardian spirits.",
        img: "./photo/Mandalay_region/Yadanagu Nat Festival.jpg",
      },
      {
        title: "Thadingyut Festival Mandalay.",
        desc: "Festival of lights celebration.\nMarks the end of Buddhist Lent.",
        img: "./photo/Mandalay_region/Thadingyut Festival Mandalay.jpg",
      },
    ],
  },
};

cityCategoryData.MONYWA = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Bodhi Tataung",
        desc: "Home to giant Buddha statues.\nOne of the tallest in Southeast Asia.",
        img: "./photo/Sagaing/Bodhi.jpg",
      },
      {
        title: "Hpo Win Daung Caves",
        desc: "Cave complex with ancient murals.\nShows detailed Buddhist paintings.",
        img: "./photo/Sagaing/Hpo.jpg",
      },
      {
        title: "Shwe Ba Taung",
        desc: "Rocky hills with monastery caves.\nOffers scenic views of the river.",
        img: "./photo/Sagaing/Shwe.jpg",
      },
      {
        title: "Mohnyin Thambuddhei Pagoda",
        desc: "Colorful pagoda with many Buddha images.\nUnique and crowded with statues.",
        img: "./photo/Sagaing/Mohnyin.jpg",
      },
      {
        title: "Thanboddhay Pagoda",
        desc: "Famous pagoda with thousands of images.\nBright and eye-catching design.",
        img: "./photo/Sagaing/Tanboddhay.jpg",
      },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Htamin jin",
        desc: "Fermented rice mixed with fish.\nSour and traditional local flavor.",
        img: "./photo/Sagaing/Htamin jin.jpg",
      },
      {
        title: "Nga Phe Thoke",
        desc: "Fish paste salad with spices.\nStrong taste and popular locally.",
        img: "./photo/Sagaing/Nga Phe Thoke.jpg",
      },
      {
        title: "Sagaing Mont Ti",
        desc: "Rice noodles with light broth.\nSimple and refreshing dish.",
        img: "./photo/Sagaing/Sagaing Mont Ti.jpg",
      },
      {
        title: "Shwe Yin Aye",
        desc: "Sweet coconut dessert drink.\nIncludes jelly, rice, and coconut milk.",
        img: "./photo/Sagaing/Shwe Yin Aye.jpg",
      },
      {
        title: "Ngapi Yay",
        desc: "Fish paste dip with vegetables.\nServed with rice and side dishes.",
        img: "./photo/Sagaing/Ngapi Yay.jpg",
      },
    ],
  },
  Event: {
    title: "Events",
    items: [
      {
        title: "Thingyan Water Festival",
        desc: "Myanmar New Year water festival.\nCelebrated with water splashing.",
        img: "./photo/yangon/Thingyan Water Festival.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights after Lent.\nHomes and streets shine brightly.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
      {
        title: "Tazaungdaing Festival",
        desc: "Festival with lights and offerings.\nIncludes traditional ceremonies.",
        img: "./photo/yangon/Tazaungdaing Festival.jpg",
      },
      {
        title: "Bodhi Tataung Pagoda Festival",
        desc: "Religious festival at Bodhi Tataung.\nCrowds gather for prayers and food stalls.",
        img: "./photo/Sagaing/Bodhi Fes.jpg",
      },
      {
        title: "Kaunghmudaw Pagoda Festival",
        desc: "Local pagoda celebration event.\nIncludes markets and community gatherings.",
        img: "./photo/Sagaing/pagoda fes.jpg",
      },
    ],
  },
};

cityCategoryData.MAGWAY = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Mya Tha Lun Pagoda",
        desc: "Famous riverside pagoda in Magway.\nOffers beautiful sunset views.",
        img: "./photo/Magway/Myat Tha Lon.jpg",
      },
      {
        title: "Shwesettaw Pagoda",
        desc: "Sacred site with Buddha footprints.\nLocated near the Mann River.",
        img: "./photo/Magway/Shwe Sat Taw.jpg",
      },
      {
        title: "Minbu Mud Volcano",
        desc: "Natural mud volcano attraction.\nVisitors can see bubbling mud pools.",
        img: "./photo/Magway/Minbu MUb.jpg",
      },
      {
        title: "Beikthano Ancient City",
        desc: "Ancient Pyu city ruins.\nOne of Myanmar’s earliest civilizations.",
        img: "./photo/Magway/Beikthano.jpg",
      },
      {
        title: "Magway Bridge",
        desc: "Bridge across the Irrawaddy River.\nOffers wide river and city views.",
        img: "./photo/Magway/Bridge.jpg",
      },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Sesame Snacks",
        desc: "Famous dry-zone sesame treats.\nSweet and crunchy texture.",
        img: "./photo/Magway/Sesame snak.jpg",
      },
      {
        title: "Magway Mont Di",
        desc: "Rice noodle dish with rich broth.\nPopular local comfort food.",
        img: "./photo/Magway/Mont ti.jpg",
      },
      {
        title: "Myanmar Curry",
        desc: "Traditional curry with rice.\nServed with many side dishes.",
        img: "./photo/Magway/Myanmar Curry.jpg",
      },
      {
        title: "Bean Dishes",
        desc: "Various dishes made with beans.\nCommon in central Myanmar meals.",
        img: "./photo/Magway/Bean.jpg",
      },
      {
        title: "Street BBQ skewers",
        desc: "Grilled meat on sticks.\nEasy and popular street food.",
        img: "./photo/Magway/BBQ.jpg",
      },
    ],
  },
  Event: {
    title: "Events",
    items: [
      {
        title: "Mya Tha Lun Pagoda Festival",
        desc: "Pagoda festival with food stalls.\nIncludes local performances.",
        img: "./photo/Magway/Mya Tha Lon fes.jpg",
      },
      {
        title: "Shwesettaw Pagoda Festival",
        desc: "Large religious gathering.\nPilgrims visit and camp nearby.",
        img: "./photo/Magway/Shwe Sat Taw fes.jpg",
      },
      {
        title: "Thingyan Water Festival",
        desc: "Myanmar New Year celebration.\nPeople enjoy water splashing.",
        img: "./photo/yangon/Thingyan Water Festival.jpg",
      },
      {
        title: "Tazaungdaing Festival",
        desc: "Festival of lights and offerings.\nCelebrated with lanterns and robes.",
        img: "./photo/yangon/Tazaungdaing Festival.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Lighting festival after Lent.\nHomes are decorated with lights.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
    ],
  },
};

cityCategoryData.BAGO = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Shwemawdaw",
        desc: "One of the tallest pagodas in Myanmar.\nImportant religious site in Bago.",
        img: "./photo/Bago/shwe mawdaw.jpg",
      },
      {
        title: "Kyaik Pun",
        desc: "Pagoda with four seated Buddhas.\nEach facing a different direction.",
        img: "./photo/Bago/Kyaik Pun Pagoda.jpg",
      },
      {
        title: "Kanbawzathadi",
        desc: "Reconstructed royal palace.\nShows history of King Bayinnaung.",
        img: "./photo/Bago/Kanbawzathadi Palace.jpg",
      },
      {
        title: "Shwe Tha Lyaung",
        desc: "Famous reclining Buddha image.\nKnown for its large size and detail.",
        img: "./photo/Bago/Shwethalyaung Buddha.jpg",
      },
      {
        title: "Hintha Gon Pagoda",
        desc: "Hilltop pagoda with city views.\nPeaceful and scenic location.",
        img: "./photo/Bago/Hinthagon Pagoda.jpg",
      },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Mon-style Mohinga",
        desc: "Rich and flavorful mohinga.\nSlightly different from Yangon style.",
        img: "./photo/Bago/Mon-style Mohinga.jpg",
      },
      {
        title: "Htamin Paung",
        desc: "Rice wrapped in banana leaves.\nSoft texture and simple taste.",
        img: "./photo/Bago/Htamin Paung (Rice Wrap).jpg",
      },
      {
        title: "Nga Baung(Fish Dish)",
        desc: "Fish dish cooked with spices.\nPopular in Mon and Bago region.",
        img: "./photo/Bago/. Nga Baung (Fish Dish).jpg",
      },
      {
        title: "Street BBQ skewers",
        desc: "Grilled meat sticks.\nCommon evening street snack.",
        img: "./photo/Magway/BBQ.jpg",
      },
      {
        title: "Traditional Snacks",
        desc: "Various Myanmar sweet snacks.\nFound in local markets.",
        img: "./photo/Bago/Traditional Snacks (Mont).jpg",
      },
    ],
  },
  Event: {
    title: "Events",
    items: [
      {
        title: "Thingyan Water Festival",
        desc: "Myanmar New Year water festival.\nCelebrated with water splashing.",
        img: "./photo/yangon/Thingyan Water Festival.jpg",
      },
      {
        title: "Tazaungdaing Festival",
        desc: "Festival with lights and offerings.\nIncludes robe donation ceremonies.",
        img: "./photo/yangon/Tazaungdaing Festival.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights after Lent.\nHomes are decorated with lights.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
      {
        title: "Shwe Maw Daw Festival",
        desc: "Major pagoda festival in Bago.\nIncludes fairs and local food stalls.",
        img: "./photo/Bago/Shwemawdaw Pagoda Festival.jpg",
      },
      {
        title: "Kyaik Pun",
        desc: "Religious gathering at Kyaik Pun.\nVisitors come for prayer and merit.",
        img: "./photo/Bago/Kyaik Pun Pagoda.jpg",
      },
    ],
  },
};

cityCategoryData.PATHEIN = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Ngwe Saung Beach",
        desc: "Beautiful white sand beach.\nPopular for relaxing and sea views.",
        img: "./photo/Pathein/Ngwe Saung Beach.jpg",
      },
      {
        title: "Chaung Tha Beach",
        desc: "Famous local beach destination.\nGreat for seafood and activities.",
        img: "./photo/Pathein/Chaung Tha Beach.jpg",
      },
      {
        title: "Pathein",
        desc: "City known for handmade umbrellas.\nImportant delta trading center.",
        img: "./photo/Pathein/Pathein.jpg",
      },
      {
        title: "Shwemokhtaw Pagoda",
        desc: "Main religious site in Pathein.\nPeaceful place for worship.",
        img: "./photo/Pathein/Shwemokhtaw Pagoda.jpg",
      },
      {
        title: "Meinmahla Kyun Wildlife Sanctuary",
        desc: "Protected mangrove forest area.\nHome to crocodiles and rare birds.",
        img: "./photo/Pathein/Meinmahla Kyun Wildlife Sanctuary.jpg",
      },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Halawa",
        desc: "Sweet traditional dessert.\nMade with coconut and jaggery.",
        img: "./photo/Pathein/Halawa.jpg",
      },
      {
        title: "Mohinga",
        desc: "Fish noodle soup breakfast dish.\nPopular across Myanmar.",
        img: "./photo/yangon/Mohinga.jpg",
      },
      {
        title: "Ohn No Khao Swe",
        desc: "Coconut chicken noodle soup.\nCreamy and flavorful meal.",
        img: "./photo/yangon/Ohn No Khao Swe.jpg",
      },
      {
        title: "Coconut Snacks",
        desc: "Snacks made from coconut.\nSweet and common in delta region.",
        img: "./photo/Pathein/Coconut Snacks.jpg",
      },
      {
        title: "Fried Fish & Dried Fish",
        desc: "Fish dishes from delta rivers.\nSalty and rich in flavor.",
        img: "./photo/Pathein/Fried Fish & Dried Fish.jpg",
      },
    ],
  },
  Event: {
    title: "Events",
    items: [
      {
        title: "Shwemokhtaw Pagoda Festival",
        desc: "Important religious festival.\nIncludes markets and donations.",
        img: "./photo/Pathein/Shwemokhtaw Pagoda Festival.jpg",
      },
      {
        title: "Pathein Umbrella Festival",
        desc: "Celebration of local umbrella craft.\nShows traditional skills and designs.",
        img: "./photo/Pathein/Pathein Umbrella Festival.jpg",
      },
      {
        title: "Thingyan Water Festival",
        desc: "Myanmar New Year celebration.\nPeople enjoy water splashing.",
        img: "./photo/yangon/Thingyan Water Festival.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights after Lent.\nDecorations with candles and lights.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
      {
        title: "Tazaungdaing Festival",
        desc: "Festival with lights and offerings.\nIncludes robe donation events.",
        img: "./photo/yangon/Tazaungdaing Festival.jpg",
      },
    ],
  },
};

cityCategoryData.DAWEI = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Myeik Archipelago",
        desc: "Group of tropical islands.\nKnown for clear water and beaches.",
        img: "./photo/thnintharyi/Myeik Archipelago.jpg",
      },
      {
        title: "Ngapali? No, Dawei Beach",
        desc: "Quiet and less crowded beach.\nPerfect for peaceful relaxation.",
        img: "./photo/thnintharyi/Dawei Beach.jpg",
      },
      {
        title: "Maungmagan Beach",
        desc: "Popular beach near Dawei.\nGreat for sunset and local food.",
        img: "./photo/thnintharyi/Maungmagan Beach.jpg",
      },
      {
        title: "Lampi Island Marine National Park",
        desc: "Marine park with rich biodiversity.\nIdeal for snorkeling and nature trips.",
        img: "./photo/thnintharyi/Lampi Island Marine National Park.jpg",
      },
      {
        title: "Shin Koe Shin Pagoda",
        desc: "Sacred pagoda near the coast.\nImportant spiritual place for locals.",
        img: "./photo/thnintharyi/Shin Koe Shin Pagoda.jpg",
      },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Seafood (Fish, Prawn, Crab)",
        desc: "Fresh seafood from the coast.\nCooked in many local styles.",
        img: "./photo/thnintharyi/Seafood (Fish, Prawn, Crab).jpg",
      },
      {
        title: "Mohinga",
        desc: "Traditional fish soup noodles.\nCommon breakfast across Myanmar.",
        img: "./photo/yangon/Mohinga.jpg",
      },
      {
        title: "Coconut Rice & Curry",
        desc: "Rice cooked with coconut milk.\nServed with flavorful curries.",
        img: "./photo/thnintharyi/Coconut Rice & Curry.jpg",
      },
      {
        title: "Dried Seafood Snacks",
        desc: "Preserved seafood products.\nSalty and long-lasting snacks.",
        img: "./photo/thnintharyi/Dried Seafood Snacks.jpg",
      },
      {
        title: "Spicy Seafood Salad",
        desc: "Mixed seafood with spices.\nFresh, sour and spicy taste.",
        img: "./photo/thnintharyi/Spicy Seafood Salad.jpg",
      },
    ],
  },
  Event: {
    title: "Events",
    items: [
      {
        title: "Shin Koe Shin Pagoda Festival",
        desc: "Religious celebration at pagoda.\nIncludes prayer and food stalls.",
        img: "./photo/thnintharyi/Shin Koe Shin Pagoda Festival.jpg",
      },
      {
        title: "Thingyan Water Festival",
        desc: "Myanmar New Year water festival.\nCelebrated with fun and music.",
        img: "./photo/yangon/Thingyan Water Festival.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights after Lent.\nHomes shine with decorations.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
      {
        title: "Thingyan",
        desc: "Traditional water celebration.\nPeople enjoy splashing water.",
        img: "./photo/thnintharyi/Maungmagan Beach.jpg",
      },
      {
        title: "Sea Gypsy (Moken) Cultural Events",
        desc: "Cultural events of Moken people.\nShowcases sea-based lifestyle.",
        img: "./photo/thnintharyi/Sea Gypsy (Moken) Cultural Events.jpg",
      },
    ],
  },
};

cityCategoryData.MYITKYINA = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "MyitSone",
        desc: "Confluence of Mali and N'mai rivers.\nImportant natural and cultural site.",
        img: "./photo/Kachin State/Myitsone.jpg",
      },
      {
        title: "Shwe Myint Zu Pagoda",
        desc: "Famous riverside pagoda.\nOffers peaceful views of the Irrawaddy.",
        img: "./photo/Kachin State/Shwe Myint Zu Pagoda.jpg",
      },
      {
        title: "Putao",
        desc: "Remote mountain town in the north.\nGateway for trekking and adventure.",
        img: "./photo/Kachin State/Putao.jpg",
      },
      {
        title: "Indawgyi Lake",
        desc: "Largest lake in Myanmar.\nRich in wildlife and bird species.",
        img: "./photo/Kachin State/indawgyi lake.jpg",
      },
      {
        title: "Hkakabo Razi",
        desc: "Highest mountain in Southeast Asia.\nFamous for extreme trekking routes.",
        img: "./photo/Kachin State/Hkakabo Razi.jpg",
      },
    ],
  },

  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Kachin Traditional Rice",
        desc: "Steamed rice with herbs and sides.\nSimple and healthy local meal.",
        img: "./photo/Kachin State/Kachin Traditional Rice.jpg",
      },
      {
        title: "Kachin Chicken Curry",
        desc: "Spicy curry with local spices.\nRich flavor and traditional cooking.",
        img: "./photo/Kachin State/Kachin Chicken Curry.jpg",
      },
      {
        title: "Bamboo Shoot Curry",
        desc: "Dish made with bamboo shoots.\nCommon in northern Myanmar cuisine.",
        img: "./photo/Kachin State/Bamboo Shoot Curry.jpg",
      },
      {
        title: "Kachin Pickled Tea",
        desc: "Fermented tea leaf dish.\nServed as salad or side dish.",
        img: "./photo/Kachin State/Kachin Pickled Tea.jpg",
      },
      {
        title: "Grilled River Fish",
        desc: "Fresh fish grilled over fire.\nSimple and smoky taste.",
        img: "./photo/Kachin State/Grilled River Fish.jpg",
      },
    ],
  },

  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Kachin Traditional Dress",
        desc: "Colorful woven traditional outfit.\nWorn during festivals and events.",
        img: "./photo/Kachin State/Kachin Traditional Dress.jpg",
      },
      {
        title: "Manau Costume",
        desc: "Special costume for Manau festival.\nDecorated with bright patterns.",
        img: "./photo/Kachin State/Manau Costume.jpg",
      },
      {
        title: "Kachin Headdress",
        desc: "Traditional headwear with beads.\nSymbol of cultural identity.",
        img: "./photo/Kachin State/Kachin Headdress.jpg",
      },
      {
        title: "Beaded Jewelry Kachin",
        desc: "Handmade bead accessories.\nUsed in ceremonies and daily wear.",
        img: "./photo/Kachin State/Beaded Jewelry Kachin.jpg",
      },
      {
        title: "Handwoven Textiles Kachin",
        desc: "Locally woven fabrics.\nMade using traditional looms.",
        img: "./photo/Kachin State/Handwoven Textiles Kachin.jpg",
      },
    ],
  },

  Event: {
    title: "Events",
    items: [
      {
        title: "Manau Festival",
        desc: "Largest Kachin cultural festival.\nIncludes dance and traditional rituals.",
        img: "./photo/Kachin State/Manau Festival.jpg",
      },
      {
        title: "Kachin New Year Festival",
        desc: "Celebration of Kachin new year.\nIncludes music and cultural shows.",
        img: "./photo/Kachin State/Kachin New Year Festival.jpg",
      },
      {
        title: "Christmas in Kachin",
        desc: "Major festival for Christian communities.\nCelebrated with church events.",
        img: "./photo/Kachin State/Christmas in Kachin.jpg",
      },
      {
        title: "Harvest Festival Kachin",
        desc: "Celebration after harvest season.\nThanks for crops and food.",
        img: "./photo/Kachin State/Harvest Festival Kachin.jpg",
      },
      {
        title: "Church Festivals Kachin",
        desc: "Religious gatherings in churches.\nCommunity-based celebrations.",
        img: "./photo/Kachin State/Church Festivals Kachin.jpg",
      },
    ],
  },
};

cityCategoryData.LOIKAW = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Taung Kwe Pagoda",
        desc: "Pagoda built on rocky hill.\nOffers panoramic city views.",
        img: "./photo/Kayah/Taung Kwe Pagoda.jpg",
      },
      {
        title: "Seven Lakes (Htee Pwint Kan)",
        desc: "Group of natural lakes.\nPeaceful and scenic environment.",
        img: "./photo/Kayah/Seven Lakes.jpg",
      },
      {
        title: "Kyat Cave",
        desc: "Limestone cave with Buddha images.\nCool and quiet place to visit.",
        img: "./photo/Kayah/Kyat Cave.jpg",
      },
      {
        title: "Pan Pet Village",
        desc: "Village of Kayan people.\nKnown for long-neck women tradition.",
        img: "./photo/Kayah/Pan Pet Village.jpg",
      },
      {
        title: "Lawpita Waterfall",
        desc: "Beautiful waterfall near Loikaw.\nPopular for nature lovers.",
        img: "./photo/Kayah/Lawpita Waterfall.jpg",
      },
    ],
  },

  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Kayah Sausage",
        desc: "Traditional smoked meat sausage.\nRich flavor with local spices.",
        img: "./photo/Kayah/Kayah Sausage.jpg",
      },
      {
        title: "Bamboo Shoot Curry",
        desc: "Curry made with bamboo shoots.\nCommon in Kayah cuisine.",
        img: "./photo/Kayah/Bamboo Shoot Curry.jpg",
      },
      {
        title: "Sticky Rice",
        desc: "Soft and chewy rice dish.\nEaten with meat or vegetables.",
        img: "./photo/Kayah/Sticky Rice.jpg",
      },
      {
        title: "Grilled Fish & Meat",
        desc: "Fresh meat grilled over fire.\nSimple and smoky taste.",
        img: "./photo/Kayah/Grilled Fish & Meat.jpg",
      },
      {
        title: "Herbal Soup",
        desc: "Soup made with local herbs.\nHealthy and light meal.",
        img: "./photo/Kayah/Herbal Soup.jpg",
      },
    ],
  },

  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Kayah Traditional Dress",
        desc: "Colorful red and black outfit.\nRepresents Kayah identity.",
        img: "./photo/Kayah/Kayah Traditional Dress.jpg",
      },
      {
        title: "Kayan people (Long-neck Women Style)",
        desc: "Traditional brass neck rings.\nUnique cultural appearance.",
        img: "./photo/Kayah/Kayan people.jpg",
      },
      {
        title: "Handwoven Longyi (Htamein & Paso)",
        desc: "Locally woven traditional clothing.\nUsed in daily life and festivals.",
        img: "./photo/Kayah/Handwoven Longyi.jpg",
      },
      {
        title: "Beaded Accessories",
        desc: "Colorful handmade jewelry.\nWorn during special occasions.",
        img: "./photo/Kayah/Beaded Accessories.jpg",
      },
      {
        title: "Headscarves & Shawls",
        desc: "Traditional woven cloth pieces.\nUsed for style and warmth.",
        img: "./photo/Kayah/headscarves traditional.jpg",
      },
    ],
  },

  Event: {
    title: "Events",
    items: [
      {
        title: "Kayah State Day Festival",
        desc: "Celebration of Kayah state.\nIncludes dances and performances.",
        img: "./photo/Kayah/Kayah State Day Festival.jpg",
      },
      {
        title: "Traditional Kayah Wrist-Tying Ceremony",
        desc: "Cultural ceremony for blessings.\nFamilies tie strings on wrists.",
        img: "./photo/Kayah/Traditional Kayah Wrist-Tying Ceremony.jpg",
      },
      {
        title: "Thingyan Water Festival",
        desc: "Myanmar New Year festival.\nCelebrated with water activities.",
        img: "./photo/yangon/Thingyan Water Festival.jpg",
      },
      {
        title: "Tazaungdaing Festival",
        desc: "Festival with lights and offerings.\nIncludes traditional rituals.",
        img: "./photo/yangon/Tazaungdaing Festival.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights after Lent.\nHomes glow with decorations.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
    ],
  },
};

cityCategoryData["HPA-AN"] = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Mount Zwegabin",
        desc: "Famous limestone mountain near Hpa-An.\nPopular for hiking and sunrise views.",
        img: "./photo/kayin/Mount Zwegabin.jpg",
      },
      {
        title: "Saddan Cave",
        desc: "Large cave with Buddha statues.\nEnds with a beautiful lake exit.",
        img: "./photo/kayin/Saddan Cave.jpg",
      },
      {
        title: "Kyauk Kalap Pagoda",
        desc: "Pagoda on a rock in the lake.\nIconic landmark of Kayin State.",
        img: "./photo/kayin/Kyauk Kalap Pagoda.jpg",
      },
      {
        title: "Kawgun Cave",
        desc: "Cave filled with ancient carvings.\nContains many Buddha images.",
        img: "./photo/kayin/Kawgun Cave.jpg",
      },
      {
        title: "Lumbini Garden",
        desc: "Garden with many Buddha statues.\nPeaceful place near Mount Zwegabin.",
        img: "./photo/kayin/Lumbini Garden.jpg",
      },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Kayin Talapaw Soup",
        desc: "Traditional Karen herbal soup.\nMade with vegetables and meat.",
        img: "./photo/kayin/Kayin Talapaw Soup.jpg",
      },
      {
        title: "Bamboo Shoot Curry",
        desc: "Curry with bamboo shoots.\nCommon in ethnic cuisine.",
        img: "./photo/Kayah/Bamboo Shoot Curry.jpg",
      },
      {
        title: "Sticky Rice",
        desc: "Soft and chewy rice dish.\nEaten with side dishes.",
        img: "./photo/Kayah/Sticky Rice.jpg",
      },
      {
        title: "Grilled Fish & Meat",
        desc: "Fresh meat grilled on fire.\nSimple and smoky flavor.",
        img: "./photo/Kayah/Grilled Fish & Meat.jpg",
      },
      {
        title: "Herbal Vegetable Dishes",
        desc: "Vegetables cooked with herbs.\nHealthy and traditional meals.",
        img: "./photo/kayin/Herbal Vegetable Dishes.jpg",
      },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Karen Traditional Shirt (White Tunic)",
        desc: "White tunic worn by Karen men.\nSimple and culturally symbolic.",
        img: "./photo/kayin/Karen Traditional Shirt (White Tunic).jpg",
      },
      {
        title: "Karen people Traditional Dress",
        desc: "Colorful woven clothing.\nRepresents Karen ethnic identity.",
        img: "./photo/kayin/kayin.jpg",
      },
      {
        title: "Handwoven Longyi (Htamein & Paso)",
        desc: "Traditional woven lower garment.\nUsed in daily life and events.",
        img: "./photo/Kayah/Handwoven Longyi.jpg",
      },
      {
        title: "Accesssories in Kayin",
        desc: "Traditional handmade accessories.\nWorn during festivals and ceremonies.",
        img: "./photo/kayin/Accessories.jpg",
      },
      {
        title: "Handwoven Cloth",
        desc: "Locally made woven fabrics.\nUsed for clothing and decoration.",
        img: "./photo/kayin/Handwoven Cloth.jpg",
      },
    ],
  },
  Event: {
    title: "Events",
    items: [
      {
        title: "Karen New Year",
        desc: "Important Karen cultural festival.\nIncludes dances and celebrations.",
        img: "./photo/kayin/Karen New Year Festival.jpg",
      },
      {
        title: "Don Dance Festival",
        desc: "Traditional Karen dance event.\nPerformed during celebrations.",
        img: "./photo/kayin/Don Dance Festival.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights after Lent.\nDecorated with candles and lights.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
      {
        title: "Tazaungdaing Festival",
        desc: "Festival with lights and offerings.\nIncludes robe donation ceremonies.",
        img: "./photo/yangon/Tazaungdaing Festival.jpg",
      },
      {
        title: "Wrist-Tying Ceremony",
        desc: "Traditional blessing ceremony.\nPeople tie strings for good luck.",
        img: "./photo/kayin/Wrist-Tying Ceremony.jpg",
      },
    ],
  },
};

cityCategoryData.HAKHA = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Mount Victoria",
        desc: "Highest mountain in Chin State.\nPopular for trekking and nature.",
        img: "./photo/chin/mount-victoria.jpg",
      },
      {
        title: "Rih Lake",
        desc: "Heart-shaped natural lake.\nImportant cultural and scenic site.",
        img: "./photo/chin/Rih Lake.jpg",
      },
      {
        title: "Nat Ma Taung National Park",
        desc: "Protected mountain park.\nHome to rare plants and animals.",
        img: "./photo/chin/Nat Ma Taung National Park.jpg",
      },
      {
        title: "Kanpetlet",
        desc: "Small town near Mount Victoria.\nGateway for trekking trips.",
        img: "./photo/chin/Kanpetlet.jpg",
      },
      {
        title: "Chin Villages",
        desc: "Traditional mountain villages.\nKnown for unique local culture.",
        img: "./photo/chin/Chin Villages.jpg",
      },
    ],
  },
  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Smoked Meat 🥩",
        desc: "Meat preserved by smoking.\nCommon in Chin traditional meals.",
        img: "./photo/chin/Smoked Meat 🥩.jpg",
      },
      {
        title: "Fermented Food (Pickles)",
        desc: "Fermented vegetables and foods.\nSour taste and long preservation.",
        img: "./photo/chin/Fermented Food (Pickles).jpg",
      },
      {
        title: "Bamboo Shoot Dishes",
        desc: "Dishes made with bamboo shoots.\nSeasonal and local ingredient.",
        img: "./photo/chin/Bamboo Shoot Dishes.jpg",
      },
      {
        title: "Chin Rice (Sticky Rice)",
        desc: "Sticky rice common in Chin State.\nEaten with meat and vegetables.",
        img: "./photo/chin/Chin Rice (Sticky Rice).jpg",
      },
      {
        title: "Vegetable Soup",
        desc: "Simple soup with local greens.\nHealthy and light meal.",
        img: "./photo/chin/Vegetable Soup.jpg",
      },
    ],
  },
  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Chin people Traditional Dress",
        desc: "Colorful woven ethnic clothing.\nFeatures bold geometric patterns.",
        img: "./photo/chin/Chin people Traditional Dress.jpg",
      },
      {
        title: "Handwoven Cloth",
        desc: "Traditional handmade fabrics.\nUsed for clothing and shawls.",
        img: "./photo/chin/Handwoven Cloth.jpg",
      },
      {
        title: "Woolen Clothing",
        desc: "Warm clothes for mountain climate.\nMade from wool materials.",
        img: "./photo/chin/Woolen Clothing.jpg",
      },
      {
        title: "Traditional Shawls",
        desc: "Woven shawls with patterns.\nUsed in ceremonies and daily wear.",
        img: "./photo/chin/Traditional Shawls.jpg",
      },
      {
        title: "Beads & Accessories",
        desc: "Handmade bead jewelry.\nWorn during cultural events.",
        img: "./photo/chin/Beads & Accessories.jpg",
      },
    ],
  },
  Event: {
    title: "Events",
    items: [
      {
        title: "Chin National Day",
        desc: "Major cultural celebration.\nIncludes dances and performances.",
        img: "./photo/chin/Chin National Day.jpg",
      },
      {
        title: "Harvest Fest",
        desc: "Festival after harvest season.\nCelebrates food and community.",
        img: "./photo/chin/Harvest Festival.jpg",
      },
      {
        title: "Thingyan Water Festival",
        desc: "Myanmar New Year festival.\nCelebrated with water activities.",
        img: "./photo/yangon/Thingyan Water Festival.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights after Lent.\nDecorated with candles and lights.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
      {
        title: "Traditional Chin Festivals",
        desc: "Various cultural events.\nShow local traditions and customs.",
        img: "./photo/chin/Traditional Chin Festival.jpg",
      },
    ],
  },
};

cityCategoryData.MAWLAMYINE = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Kyaiktiyo Pagoda",
        desc: "A famous hilltop pagoda known for its golden rock. Pilgrims visit from all over Mon State.",
        img: "./photo/Mon/Kyaiktiyo Pagoda.jpg",
      },
      {
        title: "Setse Beach",
        desc: "A popular coastal spot for day trips and relaxation. Visitors enjoy swimming and sunsets.",
        img: "./photo/Mon/Setse Beach.jpg",
      },
      {
        title: "Thanbyuzayat War Cemetery",
        desc: "Historic World War II cemetery. It commemorates soldiers who built the Death Railway.",
        img: "./photo/Mon/Thanbyuzayat War Cemetery.jpg",
      },
      {
        title: "Win Sein Taw Ya",
        desc: "Home to one of the largest reclining Buddha statues. The site features intricate religious art.",
        img: "./photo/Mon/Win Sein Taw Ya.jpg",
      },
      {
        title: "Kyaikthanlan Pagoda",
        desc: "Offers panoramic city and river views at sunset. A peaceful spot for reflection and photos.",
        img: "./photo/Mon/Kyaikthanlan Pagoda.jpg",
      },
    ],
  },

  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Mon Mohinga",
        desc: "Traditional Mon breakfast noodle soup. Flavored with local fish and spices.",
        img: "./photo/yangon/Mohinga.jpg",
      },
      {
        title: "Mon Curry",
        desc: "A spicy coastal curry made with fresh ingredients. Popular among locals and visitors.",
        img: "./photo/Mon/Mon Curry.jpg",
      },
      {
        title: "Rice Salad (Htamin Thoke)",
        desc: "Mix of rice, nuts, and herbs. A flavorful traditional Mon dish.",
        img: "./photo/Mon/Rice Salad (Htamin Thoke).jpg",
      },
      {
        title: "Nga Htamin (Fish Rice)",
        desc: "Steamed rice served with fresh fish. A staple dish in Mon cuisine.",
        img: "./photo/Mon/Nga Htamin (Fish Rice).jpg",
      },
      {
        title: "Mon Traditional Snacks (Mont)",
        desc: "Variety of sweet and savory street snacks. Often eaten during festivals.",
        img: "./photo/Mon/Mon Traditional Snacks (Mont).jpg",
      },
    ],
  },

  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Mon people Traditional Dress",
        desc: "Colorful traditional attire worn during festivals. Patterns vary by region and community.",
        img: "./photo/Mon/Mon people Traditional Dress.jpg",
      },
      {
        title: "Mon Longyi (Htamein & Paso)",
        desc: "Handwoven ceremonial longyi worn by men and women. Often used in traditional events.",
        img: "./photo/Mon/Mon Longyi (Htamein & Paso).jpg",
      },
      {
        title: "Shawl (Yin Htwe)",
        desc: "Light, woven wraps for daily and ceremonial use. Adds elegance to traditional outfits.",
        img: "./photo/Mon/Shawl (Yin Htwe).jpg",
      },
      {
        title: "Traditional Blouse",
        desc: "Brightly colored blouses worn by Mon women. Matches the local ceremonial longyi.",
        img: "./photo/Mon/Traditional Blouse.jpg",
      },
      {
        title: "Handwoven Fabric",
        desc: "Locally crafted fabrics with intricate designs. Used for clothing and decorative purposes.",
        img: "./photo/Mon/Handwoven Fabric.jpg",
      },
    ],
  },

  Event: {
    title: "Events",
    items: [
      {
        title: "Kyaiktiyo Pagoda Festival",
        desc: "Annual festival celebrating the sacred pagoda. Pilgrims and tourists gather for rituals.",
        img: "./photo/Mon/Kyaiktiyo Pagoda Festival.jpg",
      },
      {
        title: "Mon National Day",
        desc: "Celebrates Mon culture and heritage. Features parades, fairs, and local performances.",
        img: "./photo/Mon/Mon National Day.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights marking the end of Buddhist Lent. Colorful decorations and ceremonies.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
      {
        title: "Tazaungdaing Festival",
        desc: "Celebrated with lights and offerings at temples. Community gatherings and traditional events.",
        img: "./photo/yangon/Tazaungdaing Festival.jpg",
      },
      {
        title: "Thingyan Water Festival",
        desc: "Burmese New Year water festival. People splash water to symbolize cleansing and renewal.",
        img: "./photo/yangon/Thingyan Water Festival.jpg",
      },
    ],
  },
};

cityCategoryData.SITTWE = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Ngapali Beach",
        desc: "Famous beach known for white sand and sunsets. Popular for swimming and relaxation.",
        img: "./photo/rakhine/Ngapali Beach.jpg",
      },
      {
        title: "Mrauk U",
        desc: "Ancient city with historic temples and ruins. Offers unique cultural experiences.",
        img: "./photo/rakhine/Mrauk U.jpg",
      },
      {
        title: "Shittaung Pagoda",
        desc: "Historic pagoda with numerous Buddha images. A center of religious devotion.",
        img: "./photo/rakhine/Shittaung Pagoda.jpg",
      },
      {
        title: "Koe Thaung Temple",
        desc: "Largest temple in Mrauk U region. Known for detailed sculptures and carvings.",
        img: "./photo/rakhine/Koe Thaung Temple.jpg",
      },
      {
        title: "Mahāmuni Buddha Temple",
        desc: "Famous for its giant Buddha statue. Pilgrims visit to pay respect and meditate.",
        img: "./photo/rakhine/Mahāmuni Buddha Temple.jpg",
      },
    ],
  },

  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Rakhine Mont Di",
        desc: "Signature Rakhine noodle dish with spicy flavors. Served with fresh local ingredients.",
        img: "./photo/rakhine/Rakhine Mont Di.jpg",
      },
      {
        title: "Seafood (Fish, Prawn, Crab)",
        desc: "Fresh seafood from the coast. Grilled or cooked with traditional spices.",
        img: "./photo/thnintharyi/Seafood (Fish, Prawn, Crab).jpg",
      },
      {
        title: "Ngapi Yay (Fish Paste Soup)",
        desc: "Local soup made from fermented fish paste. Adds rich and tangy flavors to meals.",
        img: "./photo/rakhine/Ngapi Yay (Fish Paste Soup).jpg",
      },
      {
        title: "Spicy Fish Curry",
        desc: "Curry made with freshly caught fish. Traditional coastal spices enhance the taste.",
        img: "./photo/rakhine/Spicy Fish Curry.jpg",
      },
      {
        title: "Seaweed Salad",
        desc: "Salad made with fresh seaweed from local markets. Light and healthy option.",
        img: "./photo/rakhine/Seaweed Salad.jpg",
      },
    ],
  },

  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Rakhine people Traditional Dress",
        desc: "Colorful clothing reflecting local traditions. Worn during festivals and ceremonies.",
        img: "./photo/rakhine/Rakhine people Traditional Dress.jpg",
      },
      {
        title: "Rakhine Longyi (Htamein & Paso)",
        desc: "Traditional skirt and wrap for men and women. Suitable for daily and ceremonial wear.",
        img: "./photo/rakhine/Rakhine Longyi (Htamein & Paso).jpg",
      },
      {
        title: "Traditional Blouse & Shirt",
        desc: "Bright blouses and shirts paired with local longyi. Worn during celebrations.",
        img: "./photo/rakhine/Traditional Blouse & Shirt.jpg",
      },
      {
        title: "Headscarves",
        desc: "Woven scarves with regional patterns. Often worn for protection and style.",
        img: "./photo/rakhine/Headscarves.jpg",
      },
      {
        title: "Handwoven Fabric",
        desc: "Locally crafted fabric for ceremonial attire. Shows traditional Rakhine motifs.",
        img: "./photo/rakhine/Handwoven Fabric.jpg",
      },
    ],
  },

  Event: {
    title: "Events",
    items: [
      {
        title: "Shittaung Pagoda Festival",
        desc: "Temple festival with religious rituals and offerings. Attracts devotees from nearby towns.",
        img: "./photo/rakhine/Shittaung Pagoda Festival.jpg",
      },
      {
        title: "Rakhine State Day",
        desc: "Celebration of Rakhine heritage. Features cultural competitions and performances.",
        img: "./photo/rakhine/Rakhine State Day.jpg",
      },
      {
        title: "Thadingyut Festival",
        desc: "Festival of lights marking the end of Buddhist Lent. Decorated streets and temples.",
        img: "./photo/yangon/Thadingyut Festival.jpg",
      },
      {
        title: "Tazaungdaing Festival",
        desc: "Annual festival with lanterns and offerings. Communities gather for celebrations.",
        img: "./photo/yangon/Tazaungdaing Festival.jpg",
      },
      {
        title: "Man Aung Festival",
        desc: "Local festival showcasing Rakhine culture. Music, dance, and traditional events abound.",
        img: "./photo/rakhine/Man Aung Festival.jpg",
      },
    ],
  },
};

cityCategoryData.TAUNGGYI = {
  Tourism: {
    title: "Top Spots",
    items: [
      {
        title: "Inle Lake",
        desc: "Scenic freshwater lake with floating gardens. Famous for local boat markets and villages.",
        img: "./photo/shan state/tanggyi/food/Torisum/inlay.jpg",
      },
      {
        title: "Kalaw",
        desc: "Hill town known for trekking and border trade goods. Offers stunning mountain landscapes.",
        img: "./photo/shan state/tanggyi/food/Torisum/Kalaw.jpg",
      },
      {
        title: "Pindaya",
        desc: "Town surrounded by limestone caves and scenic Shan landscapes. Famous for crafts and temples.",
        img: "./photo/shan state/tanggyi/food/Torisum/pindaya.jpg",
      },
      {
        title: "Kakku",
        desc: "Site with thousands of ancient pagodas. Offers unique views of local religious architecture.",
        img: "./photo/shan state/tanggyi/food/Torisum/kakku.jpg",
      },
      {
        title: "Hsipaw",
        desc: "Picturesque town with riverside views. Known for local culture and trekking experiences.",
        img: "./photo/shan state/Hsipaw.jpg",
      },
    ],
  },

  Food: {
    title: "Local Taste",
    items: [
      {
        title: "Shan Noodles",
        desc: "Light, savory noodle soup. Often served with herbs, meat, and chili sauce.",
        img: "./photo/shan state/tanggyi/food/shannoodles.jpg",
      },
      {
        title: "Fish Rice",
        desc: "Rice served with local fish dishes. A traditional Shan snack or meal.",
        img: "./photo/shan state/tanggyi/food/fishrice.jpg",
      },
      {
        title: "Hin Tope",
        desc: "Grilled skewers and street BBQ stalls. Popular for local festivals and gatherings.",
        img: "./photo/shan state/tanggyi/food/hintope.jpg",
      },
      {
        title: "Grilled Fish",
        desc: "Freshly caught fish grilled with spices. Served with rice or salad.",
        img: "./photo/shan state/tanggyi/food/Tasty Oven Grilled Fish Recipe.jpg",
      },
      {
        title: "To Fu Nawe",
        desc: "Traditional Shan tofu soup. Savory and often served with herbs and chili.",
        img: "./photo/shan state/tanggyi/food/tofunawe.jpg",
      },
    ],
  },

  Clothes: {
    title: "Traditional Wear",
    items: [
      {
        title: "Shan Traditional Dress",
        desc: "Striped longyi designs worn during festivals. Represents Shan culture and identity.",
        img: "./photo/shan state/Shan Traditional Dress.jpg",
      },
      {
        title: "Shan Longyi",
        desc: "Worn by men and women in daily life or ceremonies. Made from handwoven fabrics.",
        img: "./photo/shan state/Shan Longyi.jpg",
      },
      {
        title: "Shan Jacket",
        desc: "Traditional jacket for formal and festival occasions. Often paired with longyi.",
        img: "./photo/shan state/Shan Jacket.jpg",
      },
      {
        title: "Shan Dance Dress",
        desc: "Used in cultural dance performances. Colorful attire highlighting traditional motifs.",
        img: "./photo/shan state/shan dance dress.jpg",
      },
      {
        title: "Handwoven Shan Textiles",
        desc: "Locally crafted fabrics. Used for clothing, decoration, and ceremonial purposes.",
        img: "./photo/shan state/Handwoven Shan Textiles.jpg",
      },
    ],
  },

  Event: {
    title: "Events",
    items: [
      {
        title: "Phaung Daw Oo Pagoda Festival",
        desc: "Annual festival held at Inle Lake. Involves boat processions and religious rituals.",
        img: "./photo/shan state/Phaung Daw Oo Pagoda Festival.jpg",
      },
      {
        title: "Taunggyi Balloon Festival",
        desc: "Famous hot air balloon festival. Attracts visitors for cultural celebrations and competitions.",
        img: "./photo/shan state/Taunggyi Balloon Festival.jpg",
      },
      {
        title: "Shan New Year Festival",
        desc: "Celebrates the traditional Shan calendar. Includes dances, food, and cultural events.",
        img: "./photo/shan state/Shan New Year Festival.jpg",
      },
      {
        title: "Thingyan in Shan State",
        desc: "Water festival marking the Burmese New Year. Community celebrations with fun and rituals.",
        img: "./photo/shan state/Thingyan in Shan State.jpg",
      },
      {
        title: "Thadingyut Festival Shan",
        desc: "Festival of lights in Shan State. Temples and homes decorated, with cultural performances.",
        img: "./photo/shan state/Thadingyut Festival Shan.jpg",
      },
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.getElementById("go-to-page2-btn");
  const backBtn = document.getElementById("back-to-state-btn");
  const section3 = document.getElementById("city-explorer-section");

  if (exploreBtn) exploreBtn.style.display = "none";
  if (backBtn) backBtn.style.display = "none";
  if (section3) section3.style.display = "none";
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
  document.getElementById("main-header").classList.add("hidden");

  document
    .querySelectorAll("#map svg path")
    .forEach((p) => p.classList.remove("selected-state"));
  const selected = document.querySelector(".sm_state_" + id);
  if (selected) {
    selected.classList.add("selected-state");
  }
  document.getElementById("map").classList.add("map-zoomed");

  document.getElementById("r-name").innerText = data.name || "Region";
  const overviewCard = document.getElementById("overview-card");
  overviewCard.innerHTML = `
            <div class="card-body">
                <h4>Overview</h4>
                <p>${data.overview || "No data available for this region."}</p>
            </div>`;

  // Explore Button
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

  // Section 3 (City Explorer)
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

  // Set STATE background (default city image)
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

  // setup first city content immediately
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

  document.getElementById("exp-city-name").style.color = "#22D3EE";

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

function isRegionLevel() {
  const name = currentRegionData?.name || "";
  if (name.includes("Region")) return true;
  if (name.includes("State")) return false;

  if (currentState) {
    const num = parseInt(String(currentState).replace("MM", ""), 10);
    if (!Number.isNaN(num)) return num >= 1 && num <= 7;
  }

  return false;
}

function getAvailableCategories() {
  const categories = ["Tourism", "Food", "Event"];
  if (!isRegionLevel()) categories.splice(2, 0, "Clothes");
  return categories;
}

function renderCategoryButtons() {
  const row = document.getElementById("category-row");
  if (!row) return;

  row.innerHTML = "";

  const categories = getAvailableCategories();

  categories.forEach((label) => {
    const btn = document.createElement("button");
    btn.className = "category-btn";

    const circle = document.createElement("div");
    circle.className = "circle";

    const circleImg = document.createElement("div");
    circleImg.className = "circle-img";

    // IMAGE SET
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

    // ðŸ”¥ CLICK
    btn.onclick = () => {
      updateHero(label);
      updateCategoryContent(label);
    };

    row.appendChild(btn);
  });
}

function renderCategoryContent(label) {
  const content = document.getElementById("category-content");
  const data = getCategoryData(label);

  const cards = data.items
    .map(
      (item) => `
    <div class="category-card">
      <img src="${item.img}" />  <!-- ðŸ”¥ image -->
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
  const allowedCategories = getAvailableCategories();

  if (!allowedCategories.includes(label)) {
    return { title: label, items: [] };
  }
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

let activeCityObject = null;

function setupSection3(data) {
  const navContainer = document.getElementById("city-nav-right");
  navContainer.innerHTML = "";

  if (data.cities && data.cities.length > 0) {
    const setActiveIndex = (activeIndex) => {
      navContainer.querySelectorAll(".city-circle-btn").forEach((btn, i) => {
        btn.classList.toggle("active", i === activeIndex);
      });
      navContainer.querySelectorAll(".dot-indicator").forEach((dot, i) => {
        dot.classList.toggle("active", i === activeIndex);
      });
    };

    data.cities.forEach((city, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "city-item";

      const btn = document.createElement("div");
      btn.className = `city-circle-btn ${index === 0 ? "active" : ""}`;
      btn.style.backgroundImage = `url('${city.img}')`;

      const dot = document.createElement("div");
      dot.className = `dot-indicator ${index === 0 ? "active" : ""}`;

      wrapper.addEventListener("mouseenter", () => {
        setActiveIndex(index);
        updateSection3Content(city);
      });

      dot.onclick = () => {
        setActiveIndex(index);
        updateSection3Content(city);
      };

      btn.onclick = () => {
        setActiveIndex(index);
        document.getElementById("city-explorer-section").style.display = "none";
        document.getElementById("nagano-ui-overlay").style.display = "flex";

        const cityName = city.name.toUpperCase();
        activeCityObject = cityCategoryData[cityName];

        if (activeCityObject) {
          renderNaganoCategoryMenu();
          renderNaganoCards("Tourism");
        } else {
          console.error("No data found for: " + cityName);
        }
      };

      wrapper.appendChild(btn);
      wrapper.appendChild(dot);
      navContainer.appendChild(wrapper);
    });
  }
}
function renderNaganoCategoryMenu() {
  const menu = document.getElementById("nagano-category-menu");
  menu.innerHTML = "";
  const cats = getAvailableCategories();

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

function renderNaganoCards(category) {
  const holder = document.getElementById("nagano-cards-holder");
  holder.innerHTML = "";

  const items = activeCityObject[category]?.items || [];
  if (items.length === 0) return;

  let currentBgItem = items[0];
  updateNaganoView(currentBgItem.title, currentBgItem.desc, currentBgItem.img);

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

  const descEl = document.getElementById("nagano-desc");
  if (descEl) descEl.innerText = desc || "Experience the beauty of Myanmar.";

  overlay.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${img}')`;
}

function closeNaganoExplorer() {
  document.getElementById("nagano-ui-overlay").style.display = "none";
  document.getElementById("city-explorer-section").style.display = "flex";
}
// SimpleMaps Event Hooks
simplemaps_countrymap.hooks.zoomable_click_state = handleStateSelect;
simplemaps_countrymap.hooks.click_state = handleStateSelect;
