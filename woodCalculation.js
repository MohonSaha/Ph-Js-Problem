/*
Fixed: Per item wood requrement
1. Chair: 3ft
2. Table: 10ft
3. bed: 50ft

Variable: Quantity
*/


function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    const total = chairWood + tableWood + bedWood;
    return total;

}


const result = woodCalculation(2, 2, 5);
console.log(result);