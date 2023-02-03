
function totalCost(products){
    let sum = 0;
    for(product in products){
        const singleProduct = products[product];
        const singleCost = singleProduct.quantity * singleProduct.price; 
        sum += singleCost;
    }
    return sum;
}

const shopingCart = [
    {name: "samsung", price: 360000, color: "black", quantity: 1},
    {name: "oppo", price: 18000, color: "black", quantity: 2},
    {name: "nokia", price: 10000, color: "black", quantity: 3},
    {name: "iphone", price: 96000, color: "black", quantity: 4}
];

const result = totalCost(shopingCart);
console.log(result);