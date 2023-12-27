const $navbar = document.querySelector('#navbar')
const $menu = document.querySelector('#menuHamburguer')
const $links = document.querySelectorAll('#link')
const $body = document.querySelector('body')
const $btnDark = document.querySelector('#btn-dark') 
const $btnToPEN = document.querySelector('#btn-toPEN')
const $btnToUSA = document.querySelector('#btn-toUSA')

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

if ($btnToPEN) {
    $btnToPEN.addEventListener('click', () => {
        location.href = "../index.html"
    })   
}

$btnToUSA.addEventListener('click', () => {
    location.href = "en/index.html"
})
