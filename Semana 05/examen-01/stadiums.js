const stadiumsData = [
    {
        'nombre': 'Allegiant Stadium',
        'location': 'Las Vegas, Nevada',
        'img': 'https://nohuddle.com.ar/portada/1935'
    },
    {
        'nombre': 'Exploria Stadium',
        'location': 'Orlando, Florida',
        'img': 'https://assets-global.website-files.com/63fe14b8219d227c822a93c7/63fe14b8219d2273b52a9701_Orlando_Soccer_8556.JPG'
    },
    {
        'nombre': "Levi's Stadium",
        'location': 'Santa Clara, California',
        'img': 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/01/31/16436601966181.jpg'
    },
    {
        'nombre': "Children's Mercy Park",
        'location': 'Kansas City, Kansas',
        'img': 'https://populous.com/wp-content/uploads/2018/01/sportingKC_Aerial.jpg'
    },
    {
        'nombre': 'NRG Stadium',
        'location': 'Houston, Texas',
        'img': 'https://www.aramark.com/content/dam/aramark/en/about/newsroom/news-articles/2023/november-2023/302087527_10166445114435391_1683448567294807585_n.jpg'
    },
    {
        'nombre': 'SoFi Stadium',
        'location': 'Inglewood, California',
        'img': 'https://www.sightlinecommercial.com/assets/images/NoCrop_2560x2560/8e4525549c904040baf574dec57b60dd.jpg'
    }
]

$stadium1 = document.querySelector('#stadium-1')
$stadium2 = document.querySelector('#stadium-2')
$stadium3 = document.querySelector('#stadium-3')
$stadium4 = document.querySelector('#stadium-4')
$stadium5 = document.querySelector('#stadium-5')
$stadium6 = document.querySelector('#stadium-6')

const stadiums = [$stadium1, $stadium2, $stadium3, $stadium4, $stadium5, $stadium6]

for (let i = 0; i < stadiumsData.length; i++) {
    const img = stadiums[i].querySelector('picture').querySelector('img')
    const name = stadiums[i].querySelector('p').querySelector('span:nth-child(1)')
    const location = stadiums[i].querySelector('p').querySelector('span:nth-child(2)')
        
    img.setAttribute('src', stadiumsData[i]['img'])
    name.innerText = stadiumsData[i]['nombre']
    location.innerText = stadiumsData[i]['location']
}
