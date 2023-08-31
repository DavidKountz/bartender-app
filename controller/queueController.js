document.addEventListener("DOMContentLoaded", function () {
    const ordersDisplay = document.getElementById("ordersDisplay");
    const backToIndexButton = document.getElementById("backToIndex");

    displayOrders(ordersDisplay);

    backToIndexButton.addEventListener("click", function () {
        window.location.href = "../view/index.html"; // Navigate back to the index page
    });
});

function displayOrders(element) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        element.innerHTML = "No orders yet.";
    } else {
        element.innerHTML = "<h2>Order Queue:</h2>";
        orders.forEach((order, index) => {
            const orderItem = document.createElement("div");
            orderItem.textContent = order;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                deleteOrder(index);
                displayOrders(element);
            });

            orderItem.appendChild(deleteButton);
            element.appendChild(orderItem);
        });
    }
}

function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    if (index >= 0 && index < orders.length) {
        orders.splice(index, 1);
        localStorage.setItem("orders", JSON.stringify(orders));
    }
}