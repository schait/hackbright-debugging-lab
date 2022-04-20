"use strict";

const addButtons = document.querySelectorAll(".add-to-order");
const cartTotalDiv = document.querySelector("#cart-total");

let cart = {};
let orderTotal = 0;
for (const button of addButtons) {
    button.addEventListener('click', () => {
      const item = button.id;
      fetch(`/update-cart.json`)
        .then(response => response.json())
        .then(result => {
            cart = result.cart;
            orderTotal = result.total;
        })
      displayCart(cart);
      cartTotalDiv.innerHTML = `${orderTotal.toFixed(2)}`;
    })
}

function displayCart(cart) {
    let tableContents = "";
    for (const item in cart) {
      tableContents += `<tr><td>${item}</td><td>${cart[item]}</td></tr>`;
    }
    document.querySelector("#cart-items").innerHTML = tableContents;
}