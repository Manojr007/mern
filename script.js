var cart = [];

function findAmount() {

  let qty = parseInt(document.getElementById("qty").value);

  let price = parseInt(document.getElementById("price").value);

  let amount = qty * price;

  doceInt(document.getElementById("price").value);

  let amount = parseInt(document.getElementById("amount").value);

  let product = {name:name,qty:qty, price:price,amount:amount};

  cart.push(product);

  // clear boxes

  document.getElementById("name").value = ""

  document.getElementById("qty").value = ""

  document.getElementById("price").value = ""

  document.getElementById("amount").value = ""ument.getElementById("amount").value = amount;

}

function addItem() {

  let name = document.getElementById("name").value;

  let qty = parseInt(document.getElementById("qty").value);

  let price = pars