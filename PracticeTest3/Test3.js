//Q1 Print all \numbers from 0 to 100
for(let i=0;i<=100;i++)
{
    console.log("i =",i);
}

//Q2 Print all the even numbers from 0 to 100
for(let num=0;num<=100;num++)
{
    if(num%2===0)
    {
        console.log(num,"is even number");
    }
}

//Q3 Create a game where you start withany random game number.Ask the 
//user to keep guessing the game number until the user enters correct value.

let gameNum=25;
let userNum = prompt("Guess the game Number");
while(userNum  != gameNum)
{
   userNum=prompt("You entered the wrong the number, Guess again");
}
 console.log(userNum,"You entered the right number");

 //Output while loopwill run untill user is nott entering correct value


