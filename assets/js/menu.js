/* ---------------- MENU ---------------- */
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
}

function toggleDropdown() {
  document.getElementById("portfolioMenu").classList.toggle("open");
}

// Auto-close side menu when clicking a link
document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("sideMenu").classList.remove("open");
  });
});


/* ---------------- FILTER SYSTEM ---------------- */

// MAIN FILTER CLICK
function showMainFilter(category, btn) {

  // Highlight active main filter
  document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Hide all subfilter groups
  document.querySelectorAll(".subfilters").forEach(sf => sf.classList.remove("show"));

  // Show correct subfilter group
  if (category === "residential") {
    document.getElementById("residential-sub").classList.add("show");
  }
  if (category === "commercial") {
    document.getElementById("commercial-sub").classList.add("show");
  }

  // Filter cards
  filterProjects(category);
}


// FILTER PROJECTS BY CATEGORY + KEYWORD
function filterProjects(category) {
  const keyword = document.getElementById("projectSearch").value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {

    // Check matches by category
    const matchesCategory =
      category === 'all' ||
      card.classList.contains(category);

    // Check keyword match
    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();
    const matchesKeyword = title.includes(keyword) || desc.includes(keyword);

    // Display logic
    card.style.display = (matchesCategory && matchesKeyword) ? 'block' : 'none';
  });
}


// SEARCH FIELD (keeps active category)
function searchProjects() {
  const activeButton = document.querySelector('.filters button.active');

  const activeCategory = activeButton
    ? activeButton.getAttribute('onclick').match(/'(.+?)'/)[1]
    : "all"; // default behavior

  filterProjects(activeCategory);
}
/* ---------------- VIEW COUNTER ---------------- */

// Increase count ONLY from property page
function hitTour(tourKey){
  fetch(`https://api.countapi.xyz/hit/formaspace/${tourKey}`, {
    keepalive: true
  });
}

// Get existing views for cards
function getViews(tourKey, elementId){
  fetch(`https://countapi.xyz/get/formaspace/${tourKey}`)
    .then(res => res.json())
    .then(data => {
      if(data && data.value !== undefined){
        const el = document.getElementById(elementId);
        if(el) el.innerText = data.value;
      }
    });
}


// Load existing counts
getViews("houseboat-canberra", "views-houseboat");
getViews("hotel-duke", "views-hotelduke");

