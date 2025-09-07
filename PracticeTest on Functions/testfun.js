//Create a function using the “function” keyword 
// that takes a String as an argument & 
// returns the number of vowels in the String(example String “Hello”)

function countVowels(str)
{
    let count = 0;
    for(let char of str)
    {
       if( char === "a" || 
           char === "e" ||  
           char === "i" || 
           char === "o" || 
           char === "u")
        {
           count++;
        }   
    }
     return count;  //at console window call like this countVowels("ApanaCollege");
}

//Create an arrow function to perform the same above task.
const arrowCountVow = (str)=>
{
let count = 0;
    for(let char of str)
    {
       if( char === "a" || 
           char === "e" ||  
           char === "i" || 
           char === "o" || 
           char === "u")
        {
           count++;
        }   
    }
     return count;  
} //at console call like this arrowCountVow("Pooja");