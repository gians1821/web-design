const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        document.getElementById("btn").innerHTML = "Light Mode";
        return;
    }
    document.getElementById("btn").innerHTML = "Dark Mode";
}

const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        document.getElementById("btn").innerHTML = "Dark Mode";
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    document.getElementById("btn").innerHTML = "Light Mode";    
}

function actuar(){
    themeSwitch();
}

themeCheck();
