
let mainMenu=document.querySelectorAll("#mainMenu");
let darkMode=document.querySelector(".moon i");
let screenOverlay=document.querySelector(".screen-overlay");
/*
mainMenu.forEach(button => {
    button.addEventListener("click", ()=> {
        document.body.classList.toggle("hidden-sidebar")})
;})
*/
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("sidebarHidden") === "true") {
        document.body.classList.add("hidden-sidebar");
    } else {
        document.body.classList.remove("hidden-sidebar");
    }
});

mainMenu.forEach(button => {
    button.addEventListener("click", () => {
        const isHidden = document.body.classList.toggle("hidden-sidebar");

        localStorage.setItem("sidebarHidden", isHidden);
    });
});

screenOverlay.addEventListener('click', () => {
    document.body.classList.add("hidden-sidebar");
    localStorage.setItem("sidebarHidden", "true");
});
/*
screenOverlay.addEventListener('click',()=> {
document.body.classList.toggle("hidden-sidebar");
});
*/

if(localStorage.getItem("darkMode")==="enable")
{
    document.body.classList.toggle("dark-mode");
    darkMode.classList.replace("bx-moon","bx-sun")
}else{
    darkMode.classList.replace("bx-sun","bx-moon")
}

darkMode.addEventListener("click",()=>{
let isDark= document.body.classList.toggle("dark-mode");
if(isDark)
{
    localStorage.setItem("darkMode","enable")
}else{
    localStorage.setItem("darkMode","disenable")
}
darkMode.classList.toggle("bx-sun",isDark);
darkMode.classList.toggle("bx-moon",!isDark);
})

if (window.innerWidth >= 768) {
    document.body.classList.remove("hidden-sidebar");
}









