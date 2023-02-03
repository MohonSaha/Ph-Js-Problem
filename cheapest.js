

function cheapestPhone(phones){
 let cheapest = phones[0];
 for(let i = 0; i<phones.length; i++){
    const phone = phones[i];
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
 }
 return cheapest;
}


const phones = [
    {name: "samsung", camera: 12, storage:'32gb', price: 36000, color: "black"},
    {name: "oppo", camera: 12, storage:'32gb', price: 18000, color: "black"},
    {name: "nokia", camera: 12, storage:'32gb', price: 10000, color: "black"},
    {name: "iphone", camera: 12, storage:'32gb', price: 96000, color: "black"}
];

const result = cheapestPhone(phones);
console.log(result);

