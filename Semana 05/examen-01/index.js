const $navbar = document.querySelector('#navbar')
const $menu = document.querySelector('#menuHamburguer')
const $links = document.querySelectorAll('#link')

$menu.addEventListener('click', () => {
    $navbar.classList.toggle('left-0')
})

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});

$links.forEach((link) => {
    link.addEventListener('click', () => {
        $navbar.classList.toggle('left-0')
    })
})

