const regionData = {
  MM01: {
    name: "Sagaing State",
    loc: "Located in ...",
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
  // တခြား ID တွေ ဒီအတိုင်း ထပ်ထည့်ရုံပါပဲ...
};

simplemaps_countrymap.hooks.click_state = function (id) {
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
};

function goBack() {
  document.getElementById("main-header").classList.remove("hidden");
  document.getElementById("dashboard").classList.remove("active-layout");
  document
    .querySelectorAll("#map svg path")
    .forEach((p) => p.classList.remove("selected-state"));
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
