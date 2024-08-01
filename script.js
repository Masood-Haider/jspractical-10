// Switch Statment
// Write a JavaScript program that uses a switch statement to print the day of the week based on a given number (1-7).
// let x=1;
// switch (x) {
//     case 1:
//         console.log("monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;  
//     case 4:
//         console.log("thursday")
//         break;  
//     case 5:
//         console.log("friday")
//         break; 
//     case 6:
//         console.log("saturday")
//         break;
//     case 7:
//         console.log("sunday")
//         break;    

//     default:
//         console.log("incorrect day number")
//         break;
// }


// Write a JavaScript program that uses a switch statement to print the name of a month based on a given number (1-12).
// let x=3;
// switch (x) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("february")
//         break;
//     case 3:
//         console.log("march")
//         break;  
//     case 4:
//         console.log("april")
//         break;  
//     case 5:
//         console.log("may")
//         break; 
//     case 6:
//         console.log("june")
//         break;
//     case 7:
//         console.log("july")
//         break;    
//     case 8:
//         console.log("august")
//         break;       
//     case 9:
//         console.log("september")
//         break;   
//     case 10:
//         console.log("october")
//         break; 
//     case 11:
//         console.log("november")
//         break;           
//     case 11:
//         console.log("december")
//         break;   
        
//     default:
//         console.log("incorrect month number")
//         break;
// }


// Write a JavaScript program that uses a switch statement to determine the type of a vehicle based on a given string ("car", "truck", "motorcycle", etc.).
// let c="car";
// switch (c) {
//     case "car":
//         console.log("its a car");
//         break;
//     case "truck":
//         console.log("its a truck")
//         break;
//     case "motorcycle":
//         console.log("it a motorcycle")
//         break;


//     default:
//         break;
// }


// Write a JavaScript program that uses a switch statement to calculate the cost of shipping based on the weight of a package (0-10 pounds, 11-20 pounds, etc.).
// let x=25;
// switch (true) {
//     case x<=10 && x>0:
//         console.log("price = 50$")
//         break;
//     case x<=20 && x>10:
//         console.log("price = 100$")
//         break;
//     case x<=30 && x>20:
//         console.log("price = 200$")
//         break;


//     default:
//         console.log("cant ship this much weight");
//         break;
// }


// Write a JavaScript program that uses a switch statement to determine the grade of a student based on their score (A: 90-100, B: 80-89, C: 70-79, etc.).
// let x=99;
// switch (true) {
//     case x<=100 && x>90:
//         console.log("grade A")
//         break;

//     case x<=90 && x>80:
//         console.log("grade B")
//         break;
    
//     case x<=80 && x>70:
//         console.log("grade C")
//         break;

//     case x<=70 && x>=60:
//         console.log("grade D barely passed");
//         break;

//     default:
//         console.log("sorry you did make it")
//         break;
// }


// While Loop


// Write a JavaScript program that uses a while loop to print the first 10 numbers in the Fibonacci sequence.

// let prev = 0, next = 1, temp;
// const n = 10; 
// let i = 2;

// while ( i < n ) {
//   temp = next;
//   next = prev + next;
//   prev = temp;
//   console.log(next);
//   i++
// }

// Write a JavaScript program that uses a while loop to play a guessing game, where the user has to guess a randomly generated number between 1 and 100.
// let y=Math.ceil(Math.random()*100);
// let x=+prompt("enter the guessed number");

// while(y!=x){
//     x=+prompt("enter another number previous was incorrect ");
// }
// alert("you guessed right its was "+x);


// Write a JavaScript program that uses a while loop to reverse a given string.
// let x="string";
// let y="";
// let z=x.length-1;
// while(z>=0){
//     y=y+x[z];
//     z--;
// }
// console.log(y);

// Write a JavaScript program that uses a while loop to find all prime numbers between 1 and 100.
// let x=2;
// let y=[];
// while(x<=100){
//     if (x%2!=0 && x%3!=0 ){
//         let g=true
//         let u=3;
//         while(u<Math.sqrt(x)){
//             if(x%u==0){
//                  g=false
//             }
                                                //ni ho rha class mai kara dein
//             u++;
//         }
//         if (g=true)
//             console.log(x);
//     }
       
    

//     x++;
// }


// Write a JavaScript program that uses a while loop to calculate the power of a given number (e.g., 2^3 = 8).
// let x=4;
// let y=2;
// while(y>1){
//     x=x*x;
//     y--;
// }
// console.log(x)


// Write a JavaScript program that uses a while loop to check if a given string is a palindrome (reads the same backward and forward).
// let x="sts";
// let y="";
// let z=x.length-1;
// while(z>=0){
//     y=y+x[z];
//     z--;
// }
// if (x==y){
//     console.log("string is palindrome" +x)
// }
// else{
//     console.log("string is not a palindrome" )
// }


// DO While Loop
// Write a JavaScript program that uses a do-while loop to print the numbers from 1 to 10.
// let x=1;
// do{
//     console.log(x);
//     x++;
// }
// while(x<=10);

// Write a JavaScript program that uses a do-while loop to calculate the sum of numbers from 1 to 10.
// let x=1;
// let y=0;
// do{
//     y=y+x;
//     x++;
// }
// while(x<=10);
// console.log(y)


// Write a JavaScript program that uses a do-while loop to play a guessing game, where the user has to guess a randomly generated number between 1 and 100.
// let y=Math.ceil(Math.random()*100);
// let x=+prompt("enter the guessed number");
//    if (y==x){
//     console.log("entered correctly")
//    }
//    else{
//         do {
//          x=+prompt("enter another number previous was incorrect ");
//          }
//         while(y!=x)
//     alert("you guessed right its was "+x);}


// Write a JavaScript program that uses a do-while loop to calculate the factorial of a given number.
// let  x=4
// let y=1;
// let s=1;
// do{
//     s=s*y;
//     y++
// }
// while(y<=x)
//     console.log(s);


// Write a JavaScript program that uses a do-while loop to print the multiplication table for a given number (e.g., 5).
// let x=5;
// i=1;
// do{
//     y=x*i;
//     console.log(y);
//     i++;
// }
// while(i<=10)