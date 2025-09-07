//Q1. For a given array with marks of students -.
// [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
console.log(marks);

let sum = 0;
for(let val of marks)
    {
    sum = sum + val;
   }
let avg = sum/marks.length;
 console.log("average marks of the entire class is", avg);

 //Q2 For a given array with pricesof5items-> [250, 645, 300, 900, 50].
 //All items have an offer of 10% OFF on them.Change the array to store final price after applying offer.

let price= [250, 645, 300, 900, 50];
for(let i =0; i<price.length; i++)
{
   let offer =price[i]/10;
   price[i]= price[i]-offer;
}
  console.log("final price after applying offer", price);

//Q3.Create an array to store campanies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
// a.	Remove the first company from the array
// b.	Remove Uber and add ola in its place
// c.	Add amazon at the end

let campany = ["Bloomberg","Microsoft", "Uber", "Google", "IBM", "Netflix"];
// a.	Remove the first company from the array
let upCampany= campany.shift(0);
console.log(campany); // output of a is ['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']

// b.	Remove Uber and add ola in its place
//updated array is ['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'] after a 

let nvalue = campany.splice(1,1,"ola");
console.log(campany);

//c.	Add amazon at the end
//updated array after b ['Microsoft', 'ola', 'Google', 'IBM', 'Netflix']
let latest_array = campany.push("amazon");
console.log(campany);
//op  ['Microsoft', 'ola', 'Google', 'IBM', 'Netflix', 'amazon']