//Q1. Get user to input a number using prompt(“Enter a number:”).
// Check if the number is a multiple of 5 or not.

let user_num = prompt("Enter a number :");
console.log(user_num);
if(user_num % 5 == 0)
{
    console.log(user_num,"is a multiple of 5");
}
else
{
    console.log(user_num, "is Not a multiple of 5");
}
    
//Q2 Write a code which gives grades to students according to their scores.
//90-100 , A
//70-89,B
//60-69,C
//50-59,D
//0-49,F

let user_score = prompt("Enter a  Student Score :");
console.log(user_score);

if(user_score >=90 && user_score<=100)
{
    console.log(user_score, "Grade A");
}
else if(user_score >=70 && user_score<=89)
{
    console.log(user_score, "Grade B");
}
else if(user_score >=60 && user_score<=69)
{
    console.log(user_score, "Grade C");
}
else if(user_score >=50 && user_score<=59)
{
    console.log(user_score, "Grade D");
}
else //if(user_score >=0 && user_score<=49)
{
    console.log(user_score, "Grade F");
}