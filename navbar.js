/*navbar section*/
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
         navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
         navToggle.setAttribute("aria-expanded", false);
    }
})
