function toggleMenu(){
  document.getElementById("sideMenu").classList.toggle("open");
}

function toggleDropdown(){
  document.getElementById("portfolioMenu").classList.toggle("open");
}

/* Close after click */
document.querySelectorAll('.side-menu a').forEach(link=>{
  link.addEventListener('click',()=>{
    document.getElementById("sideMenu").classList.remove("open");
  });
});


