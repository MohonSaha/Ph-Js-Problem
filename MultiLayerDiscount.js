// 1. if ticket number is less than 100, per ticket price 100
// 2. if ticket number is more than 100 but less than 200. Frist 100 ticket will be 100 tk and rest of the ticket will be 90 tk performance. 
// 3. if you purchase more than 200 tickets:
/*
1. 100 ----------> 100th
2. 101-200 ---------> 90tk
3. rest ----------> 70tk
*/


function ticketPrice(tickets){
    if(tickets < 100){
        const total = tickets * 100;
        console.log(total);
    }
    if(tickets > 100 && tickets < 200){
        const fristTotal = 100 * 100;
        const secondTotal = (tickets - 100) * 90;
        console.log( fristTotal + secondTotal);
    }
    if(tickets > 200){
        const fristTotal = 100 * 100;
        const secondTotal = 100 * 90;
        const thirdTotal = (tickets - 200) * 70;
        console.log( fristTotal + secondTotal + thirdTotal);
    }
}
