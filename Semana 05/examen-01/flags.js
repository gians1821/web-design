const flagsData = [
    [
        {
            'nombre': 'Perú',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/200px-Flag_of_Peru.svg.png'
        },
        {
            'nombre': 'Argentina',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/200px-Flag_of_Argentina.svg.png'
        },
        {
            'nombre': 'Chile',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/200px-Flag_of_Chile.svg.png'
        },
        {
            'nombre': 'Trinidad y Tobago',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/200px-Flag_of_Trinidad_and_Tobago.svg.png'
        }
    ],
    [
        {
            'nombre': 'México',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/200px-Flag_of_Mexico.svg.png'
        },
        {
            'nombre': 'Ecuador',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/200px-Flag_of_Ecuador.svg.png'
        },
        {
            'nombre': 'Venezuela',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/200px-Flag_of_Venezuela.svg.png'
        },
        {
            'nombre': 'Jamaica',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/200px-Flag_of_Jamaica.svg.png'
        }
    ],
    [
        {
            'nombre': 'Estados Unidos',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/200px-Flag_of_the_United_States.svg.png'
        },
        {
            'nombre': 'Uruguay',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/200px-Flag_of_Uruguay.svg.png'
        },
        {
            'nombre': 'Panamá',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/200px-Flag_of_Panama.svg.png'
        },
        {
            'nombre': 'Bolivia',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/200px-Flag_of_Bolivia.svg.png'
        }
    ],
    [
        {
            'nombre': 'Brasil',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/200px-Flag_of_Brazil.svg.png'
        },
        {
            'nombre': 'Colombia',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png'
        },
        {
            'nombre': 'Paraguay',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/250px-Flag_of_Paraguay.svg.png'
        },
        {
            'nombre': 'Costa Rica',
            'flag-img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/200px-Flag_of_Costa_Rica.svg.png'
        }
    ]
]

const $grupoA = document.querySelector('#grupo-a')
const $grupoB = document.querySelector('#grupo-b')
const $grupoC = document.querySelector('#grupo-c')
const $grupoD = document.querySelector('#grupo-d')

const grupos = [$grupoA, $grupoB, $grupoC, $grupoD]

for (let i = 0; i < 4; i++) { // 4 GRUPOS
    for (let j = 0; j < 4; j++) { // 4 EQUIPOS
        const img = grupos[i].querySelector(`article:nth-child(${j+1})`).querySelector('div').querySelector('picture').querySelector('img')
        const name = grupos[i].querySelector(`article:nth-child(${j+1})`).querySelector('div').querySelector('h3')

        img.setAttribute('src', flagsData[i][j]['flag-img'])
        name.innerText = flagsData[i][j]['nombre'].toUpperCase()
    }
}