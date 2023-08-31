document.addEventListener("DOMContentLoaded", function () {
    const ordersDisplay = document.getElementById("ordersDisplay");
    displayOrders(ordersDisplay);
});

function displayOrders(element) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        element.innerHTML = "No orders yet.";
    } else {
        element.innerHTML = "<h2>Current Order Queue:</h2>";
        orders.forEach(order => {
            const orderItem = document.createElement("div");
            orderItem.textContent = order;
            element.appendChild(orderItem);
        });
    }
}