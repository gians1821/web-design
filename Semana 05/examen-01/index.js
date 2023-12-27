const $navbar = document.querySelector('#navbar')
const $menu = document.querySelector('#menuHamburguer')
const $links = document.querySelectorAll('#link')
const $body = document.querySelector('body')
const $btnDark = document.querySelector('#btn-dark') 

$menu.addEventListener('click', () => {
    $navbar.classList.toggle('left-0')
})

$links.forEach((link) => {
    link.addEventListener('click', () => {
        $navbar.classList.toggle('left-0')
    })
})

$btnDark.addEventListener('click', () => {
  $body.classList.toggle('dark')
})

