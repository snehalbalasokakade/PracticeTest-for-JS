 //Q1. We are given array of marks of students.Filter out of the marks
 //  of students that scored 90 +.[87,93,64,99,86]

 let arr = [87,93,64,99,86];

 let output = arr.filter((val,indx,arr) =>
 {
    return val>90;
 });
 console.log(output);//op 93,99

 //Q2 Take a number n as input from user.Create an array ofnumbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.

let n = prompt("enter a number: ");

let arrr =[];
for(let i=1; i<=n; i++)
   {
         arrr[i - 1] = i;
   }
   console.log(arrr);

   //Use the reduce method to calculate sum of all numbers in the array.
   let sum = arrr.reduce((res, curr)=>
   {
        return res + curr;
   });

   console.log("sum of all the numbers in the array is",sum);
   //Use the reduce method to calculate product of all numbers in the array.
   let prod = arrr.reduce((prev,currr) =>
{
   return prev*currr;
});
console.log("product of all the numbers in the array is",prod);
