try {
// Writing numbers of products
let trProducts = document.getElementById("checkout-products-table-body").getElementsByTagName("tr");

for (let i = 0; i < trProducts.length; i++) {
    trProducts[i].firstElementChild.innerText = i + 1;
}

// Calculating total price of single product
let checkout_product_price = document.getElementsByClassName("checkout_product_price");
let checkout_product_quantity = document.getElementsByClassName("checkout_product_quantity");
let checkout_product_total_price = document.getElementsByClassName("checkout_product_total_price");

for (let i = 0; i < checkout_product_total_price.length; i++) {
    checkout_product_total_price[i].innerText = checkout_product_price[i].innerText * checkout_product_quantity[i].innerText;
}

//Calculating sub total
let subTotal = 0;

for (let i = 0; i < checkout_product_total_price.length; i++) {
    subTotal += Number(checkout_product_total_price[i].innerText);
}

document.getElementById("checkout_sub_total").innerText = subTotal;

} catch {
    document.getElementById("checkout_sub_total").innerText = `0.00`;
}

let trPrice = document.getElementById("checkout-price-table-body").getElementsByTagName("tr");
let total = 0;

for (let i = 0; i < trPrice.length; i++) {
    total += Number(trPrice[i].lastElementChild.firstElementChild.innerText);
}

document.getElementById("checkout_total").innerText = total;