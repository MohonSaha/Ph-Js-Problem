// Problem: Reverse The String

// Write a function solution that takes a string parameter and returns the word in reverse order. In this task, you are given an input string and the task is to reverse the input string.

// For Example, 
// Input: str = "GeeksforGeeks"
// Output: "skeeGrofskeeG"
// Input: str = "Hello"
// Output: "olleH"
 

 function reverseMaker(wrod) {
    return wrod.split("").reverse().join("");  
  };

  const result = reverseMaker("Mohon")
  console.log(result);