// Problem: Revverse a sentence word by word (Approch-1)

// function reverseWord(str){
//     const words = str.split(" ");
//     const reverse = words.reverse();
//     const joinArray = reverse.join(" ");
//     return joinArray;
// }

// const myString = "Mohon Saha Is A Programmer";
// const result = reverseWord(myString);
// console.log(result);


// Problem: Revverse a sentence word by word (Approch-2)

function reverseWord(str){
    let reverse = "";
    const words = str.split(" ");
    for (let i = words.length -1; i>=0; i--){
        const word = words[i];
        reverse = reverse + " " + word;
    }
    return reverse;
}

const myString = "Mohon Saha Is A Programmer";
const result = reverseWord(myString);
console.log(result);