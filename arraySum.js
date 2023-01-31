// Problem: Find the average

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. 

// Input:
// The input parameter will be an array of integers, where each integer represents the mark of a subject given above.

// Output:
// Print the result in 2 decimal places. If you get a fraction rounded up to 2 decimal places. The output must have to be in number format.

// Hints: First check if your output is in number format or string format by  typeof  operator

function average (arrOfMarks){
    let sum = 0;
    for(let i = 0; i< arrOfMarks.length; i++){
        const arrayNumber = arrOfMarks[i];
        // console.log(arrayNumber);
        sum += arrayNumber;
    }
    const avg = sum / arrOfMarks.length;
    const avgNumber = parseFloat(avg.toFixed(2));
    return avgNumber;
   }

const numbers = [75.25, 65, 80, 35.45, 99.50];
const result = average(numbers);
console.log(result);