const menu = document.querySelector('#openMenuAside')
const sidebarMenu = document.querySelector('.container-menu')
const sidebarLogo = document.querySelector('.container-logo')
const menuSidebar = document.querySelector('.sidebar')
const menuclose = document.querySelector('#menu-complet')
const logo_header = document.querySelector('.logo-hedaer')

menu.addEventListener('click', () => {
  sidebarMenu.style.display = 'block'
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
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
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
    },
  },
})


var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {

    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        player.playVideo();
    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
    });
    var stopButton = document.getElementById("stop-button");
    stopButton.addEventListener("click", function() {
        player.stopVideo();
    });

}






function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const iframe = document.querySelector('iframe');
  trailer.classList.toggle('active')
  iframe.currentTime = 0;
  iframe.pause();
}
