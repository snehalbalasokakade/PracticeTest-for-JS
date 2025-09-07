// Q1 prompt the user to enter their full name.Generate a username for them based on the input.Start username with @,followed by their full name and ending with the full length.
// Eg: user name=”snehalkakade”, username should be “@snehalkakade13” 

let str = prompt("Enter Your FullName");
console.log(str);

let str2="@" + str + str.length;
console.log(str2);
