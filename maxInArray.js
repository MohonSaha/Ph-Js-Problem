
// Problem: Take an array as input and return the largest Number. 


function maxInArray(numbers){
    let largest = numbers[0];
    for(number in numbers){
        const element = numbers[number];
        if(element > largest){
            largest = element;
        }

    }
    return largest;
}

const heights = [10, 20, 30, 40, 90, 120, 340, 980];
const result = maxInArray(heights);
console.log(result);


// Problem: Input an array and find the lowest number.
// We can solve this problem by the same rule we have done above.



