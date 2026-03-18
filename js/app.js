const regionData = {
  MM01: {
    name: "Sagaing Region",
    loc: "Northwest Myanmar; bordered by India and Chin State, with the Ayeyarwady River along parts of its eastern and southern edge.",
    cap: "Monywa",
    eth: "Bamar, Shan, Chin, Naga...",
    wea: "Dry Zone in the south; hotter plains with cooler northern highlands.",
    cul: "Bamar and Shan traditions with Chin/Naga highland cultures.",
    foo: "Rice and wheat staples; sesame, peanuts, and pulses.",
    eco: "Agriculture-led; major rice and wheat production plus cross-border trade with India.",
    tou: "Alaungdaw Kathapa National Park and wildlife sanctuaries.",
  },
  MM02: {
    name: "Bago Region",
    loc: "South-central Myanmar between Mandalay/Magway (north) and Yangon (south); bordered by Rakhine/Ayeyarwady (west) and Kayin/Mon (east).",
    cap: "Bago",
    eth: "Bamar majority with Karen, Mon, Chin, Rakhine, Shan minorities.",
    wea: "Tropical monsoon; hot wet season (based on Bago city climate).",
    cul: "Bamar and Karen cultural mix with historic Mon influence.",
    foo: "Rice-based dishes and freshwater fish.",
    eco: "Timber/teak and petroleum; rice is the dominant crop.",
    tou: "Historic Bago and Pyay.",
  },
  MM03: {
    name: "Magway Region",
    loc: "Central Myanmar; capital Magway on the Irrawaddy River.",
    cap: "Magway",
    eth: "Bamar, Chin, Rakhine, Shan, Karen...",
    wea: "Hot and dry; part of Myanmar's central Dry Zone.",
    cul: "Bamar-majority with Chin, Shan, Karen communities.",
    foo: "Sesame and groundnut oil, beans/pulses; rice and millet.",
    eco: "Myanmar's petroleum and natural gas heartland; major crops include sesame and groundnut.",
    tou: "Irrawaddy river towns like Magway and Pakokku.",
  },
  MM04: {
    name: "Mandalay Region",
    loc: "Cultural heart of Myanmar...",
    cap: "Mandalay",
    eth: "Bamar",
    wea: "Dry and hot",
    cul: "Royal traditions",
    foo: "Mandalay Myee Shay",
    eco: "Tourism/Agriculture",
    tou: "Bagan",
  },
  MM05: {
    name: "Tanintharyi Region",
    loc: "Long narrow southern peninsula on the Andaman Sea; borders Thailand to the east and Mon State to the north.",
    cap: "Dawei",
    eth: "Bamar, Dawei, Myeik, Rakhine, Kayin, Moken, Malay, Mon, Thai...",
    wea: "Coastal and humid monsoon climate (inferred from Andaman Sea coastline).",
    cul: "Coastal cultures with Dawei and Myeik traditions.",
    foo: "Seafood-focused cuisine; dried fish, shrimp, and ngapi.",
    eco: "Seafood products and bird's nests; coastal fishing economy.",
    tou: "Mergui Archipelago islands and beaches.",
  },
  MM06: {
    name: "Yangon Region",
    loc: "The main economic hub...",
    cap: "Yangon",
    eth: "Bamar, Karen, Mon...",
    wea: "Tropical Monsoon",
    cul: "Colonial & Buddhist heritage",
    foo: "Mohinga",
    eco: "Trading/Industry",
    tou: "Shwedagon Pagoda",
  },
  MM07: {
    name: "Ayeyarwady Region",
    loc: "Ayeyarwady River delta west of the Rakhine Yoma; major rice-growing lowlands.",
    cap: "Pathein",
    eth: "Bamar majority with a large Karen minority.",
    wea: "Delta/coastal monsoon climate with heavy rains (inferred).",
    cul: "Bamar and Karen cultural mix.",
    foo: "Rice-based dishes and river/sea fish.",
    eco: "Myanmar's main rice-producing region; agriculture dominates.",
    tou: "Chaungtha and Ngwesaung beaches.",
  },
  MM11: {
    name: "Kachin State",
    loc: "Northernmost Myanmar; borders China and India, south of Shan State.",
    cap: "Myitkyina",
    eth: "Jingpho (Kachin), Khamti, Naga, Lisu, Shan, Bamar, Chinese...",
    wea: "Highland climate; cooler in the mountains (inferred from high elevations).",
    cul: "Kachin (Jingpho) traditions with diverse hill-ethnic cultures.",
    foo: "Rice and sugarcane staples.",
    eco: "Agriculture plus mining (jade, gold, rare earths).",
    tou: "Hkakabo Razi and Indawgyi Lake.",
  },
  MM12: {
    name: "Kayah State",
    loc: "Eastern Myanmar; mountainous Dawna Range/Karen Hills with the Salween River.",
    cap: "Loikaw",
    eth: "Karenni (Kayah), Bamar, Shan, Karen...",
    wea: "Mountainous highlands; cooler than lowlands (inferred).",
    cul: "Karenni cultural traditions with Shan and Karen influences.",
    foo: "Rice, millet, maize, and sesame-based dishes.",
    eco: "Rice and other crops; minerals (tin, tungsten, alabaster) and hydropower.",
    tou: "Rugged mountains, lakes, and waterfalls around Loikaw.",
  },
  MM13: {
    name: "Kayin State",
    loc: "Mountainous state along Thailand; bordered by Mon/Bago to the west and Kayah/Shan to the north.",
    cap: "Hpa-an",
    eth: "Karen majority; Bamar, Mon, Pa-O, Shan minorities.",
    wea: "Mountainous terrain; tropical monsoon pattern (inferred).",
    cul: "Karen cultural heartland with Mon and Bamar influences.",
    foo: "Rice and rubber-based livelihoods; local river fish.",
    eco: "Farming (paddy, rubber), border trade at Myawaddy, and tourism.",
    tou: "Hpa-an area and Mount Zwegabin.",
  },
  MM14: {
    name: "Chin State",
    loc: "Western Myanmar; borders Sagaing/Magway, Rakhine, Bangladesh, and India.",
    cap: "Hakha",
    eth: "Chin majority with small Rakhine and Bamar minorities.",
    wea: "Cooler highlands; mountainous climate (inferred from high elevation).",
    cul: "Chin ethnic traditions and festivals.",
    foo: "Rice, maize, and millet staples.",
    eco: "Agriculture-dominated; rotational farming and subsistence crops.",
    tou: "Nat Ma Taung (Mount Victoria) highlands.",
  },
  MM15: {
    name: "Mon State",
    loc: "Lower Myanmar between Kayin State and the Andaman Sea; bordered by Bago (north) and Tanintharyi (south).",
    cap: "Mawlamyine",
    eth: "Mon, Bamar, Karen, Pa-O, Shan...",
    wea: "Tropical climate near the sea with very heavy rainfall.",
    cul: "Mon heritage with Bamar and Karen influences.",
    foo: "Rice, rubber, betel nut; dried fish and fish sauce.",
    eco: "Rice cultivation, rubber plantations, fishing and fish products.",
    tou: "Mawlamyine and limestone landscapes near Mudon.",
  },
  MM16: {
    name: "Rakhine State",
    loc: "Western coastal Myanmar on the Bay of Bengal; borders Chin, Magway, Bago, Ayeyarwady, and Bangladesh.",
    cap: "Sittwe",
    eth: "Rakhine majority; Chin, Bamar, and other minorities.",
    wea: "Coastal monsoon climate (inferred from Bay of Bengal coastline).",
    cul: "Rakhine cultural traditions with Chin influences.",
    foo: "Rice, coconut/nipa palm products, and seafood.",
    eco: "Rice farming, fishing, timber and small-scale oil production.",
    tou: "Mrauk U ruins and Ngapali Beach.",
  },
  MM17: {
    name: "Shan State",
    loc: "Located in Eastern Myanmar...",
    cap: "Taunggyi",
    eth: "Shan, Pa-O, Intha...",
    wea: "Cool and temperate",
    cul: "Leg rowing tradition",
    foo: "Shan Noodles",
    eco: "Agriculture/Mining",
    tou: "Inle Lake",
  },
};

function handleStateSelect(id) {
  const data = regionData[id] || { name: id, loc: "Data coming soon..." };

  // Hide header & slide layout
  document.getElementById("main-header").classList.add("hidden");
  document.getElementById("dashboard").classList.add("active-layout");

  // Highlight selected state only
  const allPaths = document.querySelectorAll("#map svg path");
  allPaths.forEach((p) => p.classList.remove("selected-state"));
  const selectedPath = document.querySelector(".sm_state_" + id);
  if (selectedPath) selectedPath.classList.add("selected-state");

  // Set Data
  document.getElementById("r-name").innerText = data.name;
  document.getElementById("d-loc").innerText = data.loc || "";
  document.getElementById("d-cap").innerText = data.cap || "";
  document.getElementById("d-eth").innerText = data.eth || "";
  document.getElementById("d-wea").innerText = data.wea || "";
  document.getElementById("d-cul").innerText = data.cul || "";
  document.getElementById("d-foo").innerText = data.foo || "";
  document.getElementById("d-eco").innerText = data.eco || "";
  document.getElementById("d-tou").innerText = data.tou || "";

  showTab("loc", document.querySelector(".cat-nav-btn"));
}

// When states are zoomable, the library fires zoomable_click_state (not click_state).
simplemaps_countrymap.hooks.zoomable_click_state = function (id) {
  handleStateSelect(id);
};

// Fallback for non-zoomable clicks.
simplemaps_countrymap.hooks.click_state = function (id) {
  handleStateSelect(id);
};

// if (document.getElementById("dashboard").classList.contains("active-layout")) {
//   document.getElementById("left-side").addEventListener("click", () => {
//     goBack();
//   });
// }

function goBack() {
  document.getElementById("main-header").classList.remove("hidden");
  document.getElementById("dashboard").classList.remove("active-layout");
  document
    .querySelectorAll("#map svg path")
    .forEach((p) => p.classList.remove("selected-state"));
  if (window.simplemaps_countrymap && simplemaps_countrymap.back) {
    simplemaps_countrymap.back();
  }
}

function showTab(tabId, btn) {
  document
    .querySelectorAll(".cat-nav-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document
    .querySelectorAll(".pane")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("p-" + tabId).classList.add("active");
}
