const grid = document.getElementById("btn-grid");
const list = document.getElementById("btn-list");


if (grid && list) {
    grid.addEventListener("click", () => {
        document.getElementById("cards").classList.remove("list");
        document.getElementById("cards").classList.add("grid");
    })


    list.addEventListener("click", () => {
        document.getElementById("cards").classList.remove("grid");
        document.getElementById("cards").classList.add("list");
    })
}

// timestamp
if (document.getElementById("timestamp")) {
    document.getElementById("timestamp").value = new Date().toISOString();
}
