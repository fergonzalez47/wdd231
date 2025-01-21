const grid = document.getElementById("btn-grid");
const list = document.getElementById("btn-list");


grid.addEventListener("click", () => {
    document.getElementById("cards").classList.remove("list");
    document.getElementById("cards").classList.add("grid");
})


list.addEventListener("click", () => {
    document.getElementById("cards").classList.remove("grid");
    document.getElementById("cards").classList.add("list");
})