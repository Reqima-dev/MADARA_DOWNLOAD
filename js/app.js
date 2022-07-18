const menu = document.querySelector('#openMenuAside')
const sidebarMenu = document.querySelector('.container-menu')
const sidebarLogo = document.querySelector('.container-logo')
const menuSidebar = document.querySelector ('.sidebar')
const menuclose = document.querySelector('#menu-complet')
const logo_header = document.querySelector('.logo-hedaer')

menu.addEventListener('click', () => {
  sidebarMenu.style.display = 'block';
  sidebarMenu.style.left = '0'
  menu.style.display = 'none'
  logo_header.style.display = 'none'
  menuclose.style.display = 'block'
})



const closeNav = () => {
    sidebarMenu.style.display = 'none'
    logo_header.style.display = 'block'
    menu.style.display = 'block'
    menuclose.style.display = 'none'
}
menuclose.addEventListener('click', closeNav)




// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },

  // RESPONSIVE BREAKPOINTS

  breakpoints: {
      // when windows width is > = 600px

      600: {
          slidesPerView: 2,
      },
      // when windows width is > = 1024px

      1024: {
          slidesPerView: 3,
      }

  }
});