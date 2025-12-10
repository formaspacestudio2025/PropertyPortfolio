/* ---------------- MENU ---------------- */
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
}

function toggleDropdown() {
  document.getElementById("portfolioMenu").classList.toggle("open");
}

// Auto-close menu when clicking a link
document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("sideMenu").classList.remove("open");
  });
});


/* ---------------- FILTER SYSTEM ---------------- */

// Show top-level filter and subcategories
function showMainFilter(category, btn) {

  // Activate correct button
  document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Hide all subfilters by default
  document.getElementById("residential-sub").style.display = "none";
  document.getElementById("commercial-sub").style.display = "none";

  // Show correct group
  if (category === "residential") {
    document.getElementById("residential-sub").style.display = "flex";
  }
  if (category === "commercial") {
    document.getElementById("commercial-sub").style.display = "flex";
  }

  filterProjects(category);
}


// Main card filter function
function filterProjects(category) {
  const keyword = document.getElementById("projectSearch").value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const matchesCategory = (category === 'all' || card.classList.contains(category));

    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();
    const matchesKeyword = title.includes(keyword) || desc.includes(keyword);

    card.style.display = (matchesCategory && matchesKeyword) ? 'block' : 'none';
  });
}


// Keyword search works with active category
function searchProjects() {
  const keyword = document.getElementById("projectSearch").value.toLowerCase();

  const activeButton = document.querySelector('.filters button.active');
  const activeCategory = activeButton
      ? activeButton.getAttribute('onclick').match(/'(.+?)'/)[1]
      : "all";

  filterProjects(activeCategory);
}
