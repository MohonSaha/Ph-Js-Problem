


const products = [
    {id: 1, name: "xioumi s2 phone", price: 22000},
    {id: 2, name: "xioumi pro book", price: 122000},
    {id: 3, name: "walton x phone", price: 19000},
    {id: 4, name: "apple macbook", price: 212000},
    {id: 5, name: "iPhone", price: 92000},
    {id: 6, name: "Oppo A2 Phone", price: 32000},
];

function matchedProduct(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProduct(products, "Phone");
console.log(result);