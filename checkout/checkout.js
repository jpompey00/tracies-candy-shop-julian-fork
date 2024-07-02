"use strict";

//address autofill


/*
What do I want
    Way to login
    Authentiation
        Membership Page?
            Doable.
    item database script


    Page needs to get info from the products page, and have it be redirected on the press of a checkout button
    the cart needs to be saved to the local.storage.

    checkout confirmed message that returns you to the home page.
*/

const cartOutput = document.getElementById("cartOutput");

const subtotalTextBox = document.getElementById("subtotalTextBox");
const shippingTextBox = document.getElementById("shippingTextBox");
const totalTextBox = document.getElementById("totalTextBox");
let subtotal = 0;
window.onload = () => {
    loadCheckout(TEST_CART)
}




function loadCheckout(cart){
    for(let item of cart){
        cartOutput.appendChild(createTableEntry(item));
        subtotal += item.price;
    }
    loadTotals();
}

function loadTotals(){
    subtotalTextBox.innerHTML = subtotal;
    shippingTextBox.innerHTML = 1.00;
    totalTextBox.innerHTML = subtotal + shippingTextBox.innerHTML;
}


function createTableEntry(data) {
    // Create table row element
    const tr = document.createElement('tr');

    // Create table data cells
    const tdImage = document.createElement('td');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');

    // Create paragraph elements
    const pImage = document.createElement('p');
    const pName = document.createElement('p');
    const pPrice = document.createElement('p');

    // Add content to paragraphs
    pImage.textContent = 'Image here';
    pName.textContent = data.name;
    pPrice.textContent = data.price;

    // Append paragraphs to their respective cells
    tdImage.appendChild(pImage);
    tdName.appendChild(pName);
    tdPrice.appendChild(pPrice);

    // Append cells to the table row
    tr.appendChild(tdImage);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);

    return tr;
}