const openPopup= document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

openPopup.addEventListener("click", () => {
    overlay.classList.add('active');
    popup.classList.add('active');
});

closePopup.addEventListener("click", () => {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

overlay.addEventListener("click", () => {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});