const toggleMenu = () => {
    document.querySelector("#menu").classList.toggle('right-0')
    document.querySelector("#menu").classList.toggle('-right-full')
}

const toggleDark = () => {
    document.querySelector("html").classList.toggle('dark')
}

const toPEN = () => {
    location.href = "../index.html"
}

const toUSA = () => {
    location.href = "en/index.html"
}
