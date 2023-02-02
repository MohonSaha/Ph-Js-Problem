// Problem: Create a febonacci serese by js 

const febo =[0, 1];
for(let i =2; i <= 15; i++){
    febo[i] = febo[i-1] + febo[i-2];
    // console.log(febo);
}
console.log(febo);