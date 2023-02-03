

function totalCost(products){
    let sum = 0;
    for(const product in products){
        const singleProduct = products[product];
        sum += singleProduct.price;
    }
    return sum;
}




const shopingCart = [
    {name: "samsung", camera: 12, storage:'32gb', price: 360000, color: "black"},
    {name: "oppo", camera: 12, storage:'32gb', price: 18000, color: "black"},
    {name: "nokia", camera: 12, storage:'32gb', price: 10000, color: "black"},
    {name: "iphone", camera: 12, storage:'32gb', price: 96000, color: "black"}
];

const result = totalCost(shopingCart);
console.log(result);