const hamburger = document.querySelector(".ri-bar-chart-horizontal-fill");
const menu = document.querySelector(".menu-link")


hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
})

window.onscroll =() => {
    menu.classList.remove("menu-active"); 
}

const btnFilter = document.querySelectorAll(".product-catalog .product-menu li");
const imgFilter = document.querySelectorAll(".product-list img");

btnFilter.forEach((data) => {
    data.onclick = () => {
        btnFilter.forEach((data) => {
            data.className = "";
        });

        data.className = "active"

        // Filter Image
        const btnCategory = data.textContent;
        imgFilter.forEach((img) => {
            img.style.display = "none";
            if (img.getAttribute("data-filter") == btnCategory.toLowerCase() || btnCategory == "All Services") {
                img.style.display = "block";
            }
        })
    }
})