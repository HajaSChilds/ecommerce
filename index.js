function roll(min, max, floatFlag) {
  let r = Math.random() * (max - min) + min;
  return floatFlag ? r : Math.floor(r);
}

//console.log(roll(1,5));

//let userNames = ['James', 'Jane', 'Ryan', 'Rebecca']

//let age = [24, 36, 12, 64]

//let height = ["5.1m", "6m", "5.5m"]

//let user = {
  //  name: userNames[roll(0, userNames.length)],
  //  age: roll(12,65),
  //  height: roll(5.1,6.1, 1).toFixed(1)
 //}

//console.log(user);

let possibleProducts = ["apple", "grapes", "watermelon", "orange", "peach", "lemon", "banana", "pineapple", "mango", "cherry", "green apple", "strawberry", "kiwi", "tomato", "coconut", "avocado", "eggplant", "potato", "carrots", "corn", "chili", "cucumber", "lettuce", "broccoli"]

let products = [...Array(5)].map((_, i) => {
    return {
        index: i,
        title: possibleProducts[roll(0, possibleProducts.length)],
        price: roll(1,10, 1).toFixed(2),
        count: roll(1,6)
    }
});

console.log(products);

let productsElement = document.getElementById("Products")

let cartHtml = ''
products.forEach(function(product) {
    cartHtml += `<div class="product">
        <div>${product.title}</div>
        <div>$${product.price}</div>
        <div>${product.count}</div>
        </div>`

})

productsElement.innerHTML = cartHtml

let cartTotal = products.reduce(function(accumulator, product) {
  console.log(accumulator, product)
  return accumulator + parseFloat(product.price) * product.count},0).toFixed(2);

let productsTotal = document.getElementById("Total")
productsTotal.innerHTML = `<b>Total: ${cartTotal}</b>`


let taxRate = (roll(5,9,1).toFixed(1)); 

let plusTax = document.getElementById("Tax");
plusTax.innerHTML = `<b>Tax Rate: ${taxRate.toString()}%</b>`


function taxed(value, cartTotal) {
  console.log((taxRate/100) * value);
 return (taxRate/100) * value + parseFloat(value); 
}

let taxedTotal = taxed(cartTotal).toFixed(2);

let totalCost = document.getElementById("Cost");
totalCost.innerHTML = `<b>Final Cost: ${taxedTotal}</b>`;




