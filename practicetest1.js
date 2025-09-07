//Create a const object called "product" to store information shown in the picture

const product = 
{
    name: "BallPen",
    rating: 4,
    offer:5,
    price:270
};
console.log(product);
console.log(typeof product);

//Create a const object called "profile" to store information in the picture

const profile= 
{
  names : "Shraddha Khapara",
  isfollow: true,
  posts : 195,
  followers : 569,
  following : 4,
  bio: "Apna College|Ex-Microsoft,DRDO To educate some is thehighest privilege",
};
console.log(profile);
console.log(typeof profile);
console.log(typeof profile["names"]); //to findout typeof values from object profile