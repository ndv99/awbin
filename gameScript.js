const butt = document.querySelectorAll(".optionBtn");
const pic = document.getElementById("alban");



butt.forEach(element => { //Sends button text to play round as player input.
    element.addEventListener("click", () => {
        element.classList.add("clicker");
    });
});

butt.forEach(element => { //When done animating, remove the css border.
    element.addEventListener("transitionend", () => {
        element.classList.remove("clicker");
    });
});

butt.forEach(element => { //Sends button text to play round as player input.
    element.addEventListener("click", () => {
        if (element.textContent === "shake") {
            pic.classList.remove("rotate");
            pic.classList.add("shaker");
        }
        else if (element.textContent === "rotate"){
            pic.classList.remove("shaker");

            pic.classList.add("rotate");
        }
        else if (element.textContent === "flip") {
            pic.classList.remove("shaker");
            pic.classList.remove("rotate");
            pic.classList.add("flip");
        }
        element.classList.add("clicker");
    });
});
