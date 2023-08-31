document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const queueButton = document.getElementById("queueButton");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedCocktail = document.getElementById("cocktailSelect").value;
        if (selectedCocktail) {
            saveOrder(selectedCocktail);

            console.log(`Ordered: ${selectedCocktail}`);
        }

    });

    queueButton.addEventListener("click", function () {
        window.location.href = "../view/queue.html";
    });
});



function saveOrder(cocktail) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(cocktail);
    localStorage.setItem("orders", JSON.stringify(orders));
}

