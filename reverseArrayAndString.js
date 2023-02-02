// Problem: Reverse a string 

// function reverseMaker(wrod) {
//     return wrod.split("").reverse().join("");  
//   };

//   const result = reverseMaker("Mohon")
//   console.log(result);


// Problem: Reverse a string 

function reverseString(words){
    let reverse = "";
    for(let i = words.length -1; i>=0; i--){
        const word = words[i];
        reverse += word;
    }
    return reverse;
}

const text = "Mohon Saha";
const result = reverseString(text);
console.log(result);