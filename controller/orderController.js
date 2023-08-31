document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const queueButton = document.getElementById("queueButton");
    const backToIndexButton = document.getElementById("backToIndex");

    const cocktailModel = window.cocktailModel;

    menu.innerHTML = "<h2>Choose Your Cocktail:</h2>";
    const cocktails = cocktailModel.getAllCocktails(); // Use the getAllCocktails function
    cocktails.forEach(cocktail => {
        const cocktailItem = document.createElement("div");
        cocktailItem.className = "cocktail-item";
        cocktailItem.innerHTML = `
            <h3>${cocktail.name}</h3>
            <p><strong>Price:</strong> ${cocktail.price}</p>
            <p>${cocktail.description}</p>
            <button class="order-button">Order</button>
        `;
        menu.appendChild(cocktailItem);
    });

    queueButton.addEventListener("click", function () {
        window.location.href = "queue.html";
    });

    backToIndexButton.addEventListener("click", function () {
        window.location.href = "../view/index.html";
    });

    // Adds event listener to order buttons.
    menu.addEventListener("click", function (event) {
        if (event.target.classList.contains("order-button")) {
            const cocktailName = event.target.parentElement.querySelector("h3").textContent;
            const selectedCocktail = cocktails.find(cocktail => cocktail.name === cocktailName);
            if (selectedCocktail) {
                saveOrder(selectedCocktail.name);
                console.log(`Ordered: ${selectedCocktail.name}`);
            }
        }
    });
});

function saveOrder(cocktail) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(cocktail);
    localStorage.setItem("orders", JSON.stringify(orders));
}