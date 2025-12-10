/* ---------------- MENU ---------------- */
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("open");
}

function toggleDropdown() {
  document.getElementById("portfolioMenu").classList.toggle("open");
}

/* Close menu after clicking any link */
document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("sideMenu").classList.remove("open");
  });
});


/* ---------------- FILTER SYSTEM ---------------- */

// Show main filter + subfilters
function showMainFilter(category, btn) {
  document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Hide both subfilters
  document.getElementById("residential-sub").style.display = "none";
  document.getElementById("commercial-sub").style.display = "none";

  if (category === "residential") {
    document.getElementById("residential-sub").style.display = "flex";
  } 
  if (category === "commercial") {
    document.getElementById("commercial-sub").style.display = "flex";
  }

  filterProjects(category);
}

// Apply filters
function filterProjects(category) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = "block";
      return;
    }

    if (card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
