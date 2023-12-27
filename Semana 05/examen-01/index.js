const $navbar = document.querySelector('#navbar')
const $menu = document.querySelector('#menuHamburguer')
const $links = document.querySelectorAll('#link')
const $body = document.querySelector('body')
const $btnDark = document.querySelector('#btn-dark') 
const $btnDarkm = document.querySelector('#btn-darkm') 
const $btnToPEN = document.querySelector('#btn-toPEN')
const $btnToUSA = document.querySelector('#btn-toUSA')
const $btnToPENm = document.querySelector('#btn-toPENm')
const $btnToUSAm = document.querySelector('#btn-toUSAm')


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

$btnDarkm.addEventListener('click', () => {
  $body.classList.toggle('dark')
})

if ($btnToPEN || $btnToPENm) {
    $btnToPEN.addEventListener('click', () => {
        location.href = "../index.html"
    })
    $btnToPENm.addEventListener('click', () => {
        location.href = "../index.html"
    })   
}

$btnToUSA.addEventListener('click', () => {
    location.href = "en/index.html"
})

$btnToUSAm.addEventListener('click', () => {
    location.href = "en/index.html"
})
