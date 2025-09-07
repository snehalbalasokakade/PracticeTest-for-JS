//Q2.Create 3 divs with common class name – “box”.
// Access them & add unique text to each of them.

let divs = document.querySelectorAll(".box");


divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 2";
divs[2].innerText="new unique value 3";

console.dir(divs);