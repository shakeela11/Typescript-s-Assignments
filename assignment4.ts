/* Assignment of this week:
1- Develop a program that determines the days of the week. From number 1 to 6 for 1to 5 it should print day name 
Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.*/
var dayOfTheWeek: number = 9;
//difference between switch and if else statement: we can use both to solve this problem because 
//both of them are almost similar, the minor differnece is that in switch case we don't need to check condition, it 
//will be checked automatically but in if-else we nee to do this.
switch (dayOfTheWeek) {
    case 1: {
        console.log("today is monday.")
        break;
    }
    case 2: {
        console.log("today is tuesday.")
        break;
    }
    case 3: {
        console.log("today is wednesday.")
        break;
    }
    case 4: {
        console.log("today is thursday.")
        break;
    }
    case 5: {
        console.log("today is friday.")
        break;
    }
    case 6: {
        console.log("it's weekend.")
        break;
    }
    default: {
        console.log("invalid number. please enter the valid number.")
        break;
    }
}

/*
 2- Try making ATM Machine matches pin and account number if it matches then user can withdraw amount. And if he or she 
 hasn't sufficient balance show them a message .Show message for wrong account number and wrong pin separately.*/
var correctaccountNumber: string = "123let456";
var correctPin: string = "abcd";
var currentBalance: number = 5000;
var inputAccountNumber: string = "123let456";
var inputPin: string = "abcd";
var withdrawAmount: number = 2000;
if (correctaccountNumber === inputAccountNumber && correctPin === inputPin) {
    if (currentBalance > withdrawAmount) {
        console.log(`withdrawal is successful! your current balance is: ${currentBalance - withdrawAmount}`)
    }
    else {
        console.log(`your account balance is insufficient.`)
    }
}
else {
    console.log("invalid acount number or pin.")
}
/*
3- Write a ts program that prints message like "Good Morning" etc depending on time use hours only for now. Do it with 
both if else if and switch statement.*/
//with if-else statement
var dayTime: number = 20;
//var dayTime: number = new Date().getHours();
//new Date().getHours() is used to get the current hour of the day
if (dayTime >= 5 && dayTime < 11) {
    console.log("good morning! have a nice day!")
}
else if (dayTime >= 11 && dayTime < 14) {
    console.log("good noon!")
}
else if (dayTime >= 14 && dayTime < 16) {
    console.log("good afternoon!")
}
else if (dayTime >= 16 && dayTime < 18) {
    console.log("good evening!")
}
else {
    console.log("good night!")
}
//with switch statement
//var dayTime:number= new Date(). getHours();
var dayTime: number = 20;
switch (true) {
    case dayTime >= 5 && dayTime < 11: {
        console.log("good morning! have a nice day!");
        break;
    }
    case dayTime >= 11 && dayTime < 14: {
        console.log("good noon!");
        break;
    }
    case dayTime >= 14 && dayTime < 16: {
        console.log("good afternoon!");
        break;
    }
    case dayTime >= 16 && dayTime < 18: {
        console.log("good evening!");
        break;
    }
    default: {
        console.log("good night!");
        break;
    }
}
/*
4- Write a program that prints the name of study for a person for instance   middle , matric etc from playgroup 
to PhD on basis of class number. Do it with both if else if and switch statement .*/
//with if-else statement
var classNumber: number = 10;
if (classNumber >= 1 && classNumber <= 5) {
    console.log("education level is ", "playgroup to primary");
}
else if (classNumber >= 6 && classNumber <= 8) {
    console.log("education level is ", "middle");
}
else if (classNumber === 9 || classNumber === 10) {
    console.log("education level is ", "matric");
}
else if (classNumber === 11 || classNumber === 12) {
    console.log("education level is ", "intermediate");
}
else if (classNumber === 13 || classNumber === 14) {
    console.log("education level is ", "undergraduates");
}
else if (classNumber === 15 || classNumber === 16) {
    console.log("education level is ", "masters");
}
else if (classNumber === 17 || classNumber === 18) {
    console.log("education level is ", "phd");
}
else {
    console.log("number is invalid.")
}
//with switch statement
var classNumber: number = 10;
switch (true) {
    case classNumber >= 1 && classNumber <= 5: {
        console.log("education level is ", "playgroup to primary");
        break;
    }
    case classNumber >= 6 && classNumber <= 8: {
        console.log("education level is ", "middle");
        break;
    }
    case classNumber === 9 || classNumber === 10: {
        console.log("education level is ", "matric");
        break;
    }
    case classNumber === 11 || classNumber === 12: {
        console.log("education level is ", "intermediate");
        break;
    }
    case classNumber === 13 || classNumber === 14: {
        console.log("education level is ", "undergraduate");
        break;
    }
    case classNumber === 15 || classNumber === 16: {
        console.log("education level is ", "master");
        break;
    }
    case classNumber === 17 || classNumber === 18: {
        console.log("education level is ", "phd");
        break;
    }
    default: {
        console.log("number is invalid.")
    }
}

//5- Write a TS program that check ms wheather if the number is positive, zero or negative.
var given_Number: number = -10;
if (given_Number === 0) {
    console.log("The number is zero.");
} else if (given_Number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}
/*6- Take 5 different numbers and check which one is greatest and then check which one is smallest use separate 
conditionals  for both scenarios.*/
//we can do this by using two different ways
//method 1:
var num1: number = 10;
var num2: number = 50;
var num3: number = 25;
var num4: number = 5;
var num5: number = 9;
//the greatest number
if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
    console.log("the greatest number is " + num1);
}
else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
    console.log("the greatest number is " + num2);
}
else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
    console.log("the greatest number is " + num3);
}
else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
    console.log("the greatest number is " + num4);
}
else {
    console.log("the greatest number is " + num5);
}
//the smallest number
if (num1 <= num2 && num1 <= num3 && num1 <= num4 && num1 <= num5) {
    console.log("the smallest number is " + num1);
}
else if (num2 <= num1 && num2 <= num3 && num2 <= num4 && num2 <= num5) {
    console.log("the smallest number is " + num2);
}
else if (num3 <= num1 && num3 <= num2 && num3 <= num4 && num3 <= num5) {
    console.log("the smallest number is " + num3);
}
else if (num4 <= num1 && num4 <= num2 && num4 <= num3 && num4 <= num5) {
    console.log("the smallest number is " + num4);
}
else {
    console.log("the smallest number is" + num5);
}
//method 2:
//the greatest number
var greatestNumber: number = Math.max(num1, num2, num3, num4, num5);
console.log("The greatest number is: " + greatestNumber);

// the smallest number
var smallestNumber: number = Math.min(num1, num2, num3, num4, num5);
console.log("The smallest number is: " + smallestNumber);



