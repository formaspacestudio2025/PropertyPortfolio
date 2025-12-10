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

// Show main filter + control subfilters
function showMainFilter(category, btn) {

  // Remove active from all main buttons
  document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Hide subfilter sections
  document.getElementById("residential-sub").style.display = "none";
  document.getElementById("commercial-sub").style.display = "none";

  // Show correct subfilter group
  if (category === "residential") {
    document.getElementById("residential-sub").style.display = "flex";
  }
  if (category === "commercial") {
    document.getElementById("commercial-sub").style.display = "flex";
  }

  // Apply the filter
  filterProjects(category);
}


// Apply category filter to cards
function filterProjects(category) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {

    // Show all cards
    if (category === 'all') {
      card.style.display = "block";
      return;
    }

    // Show only matching category
    if (card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
