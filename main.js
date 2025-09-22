const topBtn = document.getElementById("topBtn");

window.addEventListener('scroll', () => {
    if(window.scrollY > 400) {
        topBtn.classList.add("show");
    }else{
        topBtn.classList.remove("show");
    }
});