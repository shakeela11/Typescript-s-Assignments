// 1-Write a program that calculates the percentage. 
const calculate_Percentage = (givenNumber: number, totalNumber: number): number => {
  var Percentage = ((givenNumber / totalNumber) * 100);
  return Percentage;
}
console.log(calculate_Percentage(30, 75));
/*
 2- Write a program that calculates the discount for a product based on its price. If the price is above $100, 
 apply a 10% discount; otherwise, apply a 5% discount.*/
//var productPrice:number=80;
//var productPrice:number=150;
//var discountRate:number;
const discountOnProducts = (productPrice: number): number => {
  if (productPrice <= 100) {
    var discountRate = 5; // 5% discount
    var discount = discountRate / 100 * productPrice;
    var disountedPrice = productPrice - discount;
    console.log("the disount on", productPrice, "$ is", discount, "so the sales price is", disountedPrice);
    return disountedPrice;
  }
  else {
    var discountRate2 = 10 //10% discount
    var discount2 = discountRate2 / 100 * productPrice;
    var disountedPrice2 = productPrice - discount2;
    console.log("the disount on", productPrice, "$ is", discount2, "so the sales price is", disountedPrice2);
    return disountedPrice2;
  }
  //return discountOnProducts;
}
console.log(discountOnProducts(150));
/*

3- Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." 
If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."*/
var user_Age = (age: number): string => {
  if (age >= 0 && age <= 12) {
    return "child";

  }
  else if (age >= 13 && age <= 19) {
    return "teenager";
  }
  else {
    return "adult";
  }
}
console.log("userAge is: " + user_Age(15));
/* 4- Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and
 so on according to the weather.*/
// part-1 ---> for temperature

var outside_Temperature = (temperature: number): string => {
  if (temperature <= 0) {
    return "today the temperature is extremely cold,so wear heavy warm winter clothes";
  }
  else if (temperature >= 0 && temperature < 15) {
    return "It's cold. Wear some warm layers.";
  }
  else if (temperature >= 16 && temperature < 25) {
    return "It's cool. A sweater should be enough.";
  }
  else {
    return "It's warm. Wear light clothes.";
  }
}
console.log(outside_Temperature(12));
// part-2 ---> for weather
var weatherCast = (weather: string): string => {
  if (weather === "rainy") {
    return "It's rainy. Don't forget your umbrella!";
  }
  else if (weather === "cloudy") {
    return "It's cloudy. Grab a light jacket and consider to take an umbrella.";
  }
  else {
    return "It's sunny. Wear sunglasses, a hat, and use sunscreen.";
  }
}
console.log(weatherCast("cloudy"));

/*5- Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show
 output accordingly.*/
var givennumber = (number: number): string => {
  ;
  //% is used to check if the given number is divisible by 3 and/or 5.
  if (number % 3 === 0 && number % 5 === 0) {
    return "the givennumber is divisible by both 3 and 5.";
  }
  else if (number % 3 === 0) {
    return "the givennumber only is divisible by 3.";
  }
  else if (number % 5 === 0) {
    return "the givennumber only is divisible by 5.";
  }
  else {
    return "the givennumber is not divisible by both 3 and 5.";
  }
}
console.log(givennumber(20));
// 6- Write a program that checks if the given year is leap year or not.
var givenyear = (year: number): string => {
  if ((year % 4 === 0 && year % 100 !== 100) || year % 400 === 0) {
    return "the given year is a leap year.";
  }
  else {
    return "the given year is not a leap year.";
  }
}
console.log(givenyear(2015));
/* 7- Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if 
statements to print the corresponding day's name.*/
var givenday = (day: number): string => {
  if (day >= 1 && day <= 7) {
    if (day === 1) {
      return "today is Monday.";
    }
    else if (day === 2) {
      return "today is tuesday.";
    }
    else if (day === 3) {
      return "today is wednesday.";
    }
    else if (day === 4) {
      return "today is thursday.";
    }
    else if (day === 5) {
      return "today is friday.";
    }
    else if (day === 6) {
      return "today is saturday.";
    }
    else {
      return "today is sunday.";
    }

  }
  else {
    return "givenDay is not a valid number. Please enter a number between 1 and 7.";
  }
}
console.log(givenday(4));
/*8- Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax 
if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount 
will be calculated by the amount of bill.*/
var givenunits = (units: number) => {
  if (units <= 100) {
    return "tax is not applicable as units are less than 100.";
  }
  else if (units > 100 && units <= 200) {
    var tax: number = 10;
    var appliedTax = tax / 100 * units;
    var taxAmount = appliedTax + units;
    return `the tax on ${units} units is 10 percent, so the taxamount is ${taxAmount}`;
  }
  else if (units > 200 && units <= 300) {
    var tax: number = 15;
    var appliedTax = tax / 100 * units;
    var taxAmount = appliedTax + units;
    return `the tax on ${units} units is 15 percent, so the taxamount is ${taxAmount}`;
  }
  else if (units > 300 && units <= 500) {
    var tax: number = 20;
    var appliedTax = tax / 100 * units;
    var taxAmount = appliedTax + units;
    return `the tax on ${units} units is 20 percent, so the taxamount is ${taxAmount}`;
  }
  else {
    var tax: number = 25;
    var appliedTax = tax / 100 * units;
    var taxAmount = appliedTax + units;
    return `the tax on ${units} units is 25 percent, so the taxamount is ${taxAmount}`;
  }
}
console.log(givenunits(200));
/*9- Write a program that tells if the student is pass or fail based on the attendance greater than 75%, practical 
marks should greater than 50% and theory marks should be greater than 45%  for passing in a semester.*/
var studentStatus = (attendance: number, practicalMarks: number, theoryMarks: number, attendanceForPassing: number,
  practicalMarksForPassing: number, theoryMarksForPassing: number): string => {
  if (attendance >= attendanceForPassing && practicalMarks >= practicalMarksForPassing && theoryMarks >= theoryMarksForPassing) {
    return "congratulation! you have passed this semester";
  }
  else {
    return "sorry! you have failed the semester. kindly review you evaluations.";
  }
}
console.log(studentStatus(80, 70, 55, 75, 50, 45));
/*
- Write a ts program that evaluates the grades of the students:
 * 80% or greater, grade A
 * 70% or greater, grade B
 * 60% or greater, grade C
 * 50% or greater, grade D
 * Less than 50% , grade F.*/
var studentGrade = (studentPercentage: number): string => {
  if (studentPercentage >= 80) {
    return "Grade A";
  }
  else if (studentPercentage >= 70 && studentPercentage < 80) {
    return "Grade B";
  }
  else if (studentPercentage >= 60 && studentPercentage < 70) {
    return "Grade C";
  }
  else if (studentPercentage >= 50 && studentPercentage < 60) {
    return "Grade D";
  }
  else {
    return "Grade F";
  }
}
console.log(studentGrade(65));

//assignment3
/* 1-Develop a program that determines the day of the week. From number 1 to 6 for 1 to 5 it should print day name 
Monday to Friday respectively and for 6 it should print weekend. Do it using switch statement.*/
var weekdays = (dayOfTheWeek: number): string => {
  switch (dayOfTheWeek) {
    case 1: {
      return "today is monday.";
      break;
    }
    case 2: {
      return "today is tuesday.";
      break;
    }
    case 3: {
      return "today is wednesday.";
      break;
    }
    case 4: {
      return "today is thursday.";
      break;
    }
    case 5: {
      return "today is friday.";
      break;
    }
    case 6: {
      return "it's weekend.";
      break;
    }
    default: {
      return "invalid number. please enter the valid number."
      break;
    }
  }
}
console.log(weekdays(5));
/*2- Try making ATM Machine matches pin and account number it it matches then user can withdraw amount. And if he or she hasn't sufficient 
balance show them a message .Show message for wrong account number and wrong pin separately.*/
//var correctaccountNumber: string = "123let456";
//var correctPin: string = "abcd";
//var currentBalance: number = 5000;
//var inputAccountNumber: string = "123let456";
//var inputPin: string = "abcd";
//var withdrawAmount: number = 2000;
var atmProcess = (correctaccountNumber: string, correctPin: string, currentBalance: number, inputAccountNumber: string,
  inputPin: string, withdrawAmount: number): string => {
  if (correctaccountNumber === inputAccountNumber && correctPin === inputPin) {
    if (currentBalance > withdrawAmount) {
      return `withdrawal is successful! your current balance is: ${currentBalance - withdrawAmount}`;
    }
    else {
      return `your account balance is insufficient.`;
    }
  }
  else {
    return "invalid acount number or pin.";
  }
}
console.log(atmProcess("123let456", "abcd", 1000, "123let456", "abcd", 2000));
/*3- Write a ts program that prints message like "Good Morning" etc depending on time use hours only for now. Do it with both if else if abd
 switch statement.*/
//with if else statements
//var dayTime: number = 20;
var getGreetings = (dayTime: number): string => {
  if (dayTime >= 5 && dayTime < 11) {
    return "good morning! have a nice day!";
  }
  else if (dayTime >= 11 && dayTime < 14) {
    return "good noon!";
  }
  else if (dayTime >= 14 && dayTime < 16) {
    return "good afternoon!";
  }
  else if (dayTime >= 16 && dayTime < 18) {
    return "good evening!";
  }
  else {
    return "good night!";
  }
}
console.log(getGreetings(20));
//with switch statement
var get_Greetings = (day_Time: number): string => {
  switch (true) {
    case day_Time >= 5 && day_Time < 11: {
      return "good morning! have a nice day!";
      break;
    }
    case day_Time >= 11 && day_Time < 14: {
      return "good noon!";
      break;
    }
    case day_Time >= 14 && day_Time < 16: {
      return "good afternoon!";
      break;
    }
    case day_Time >= 16 && day_Time < 18: {
      return "good evening!";
      break;
    }
    default: {
      return "good night!";
      break;
    }
  }
}
console.log(get_Greetings(20));
/* 4- Write a program that prints the name of study for a person for instance   middle , matric etc from playgroup to PhD on basis of 
class number. Do it with both if else if and switch statement.*/
//with if-else statement
var eudcationLevel = (classNumber: number): string => {
  if (classNumber >= 1 && classNumber <= 5) {
    return `education level is ` + "playgroup to primary";
  }
  else if (classNumber >= 6 && classNumber <= 8) {
    return `education level is ` + "middle";
  }
  else if (classNumber === 9 || classNumber === 10) {
    return `education level is ` + "matric";
  }
  else if (classNumber === 11 || classNumber === 12) {
    return `education level is ` + "intermediate";
  }
  else if (classNumber === 13 || classNumber === 14) {
    return `education level is ` + "undergraduates";
  }
  else if (classNumber === 15 || classNumber === 16) {
    return `education level is ` + "masters";
  }
  else if (classNumber === 17 || classNumber === 18) {
    return `education level is ` + "phd";
  }
  else {
    return "number is invalid.";
  }
}
console.log(eudcationLevel(10));
//with switch statement
var eudcation_Level = (class_Number: number): string => {
  switch (true) {
    case class_Number >= 1 && class_Number <= 5: {
      return "education level is " + "playgroup to primary";
      break;
    }
    case class_Number >= 6 && class_Number <= 8: {
      return "education level is " + "middle";
      break;
    }
    case class_Number === 9 || class_Number === 10: {
      return "education level is " + "matric";
      break;
    }
    case class_Number === 11 || class_Number === 12: {
      return "education level is " + "intermediate";
      break;
    }
    case class_Number === 13 || class_Number === 14: {
      return "education level is " + "undergraduate";
      break;
    }
    case class_Number === 15 || class_Number === 16: {
      return "education level is " + "master";
      break;
    }
    case class_Number === 17 || class_Number === 18: {
      return "education level is " + "phd";
      break;
    }
    default: {
      return "number is invalid.";
    }
  }
}
console.log(eudcation_Level(15));
// 5- Write a TS program that check ms wheather if the number is positive, zero or negative.
var findNumber = (given_Number: number): string => {
  if (given_Number === 0) {
    return "The number is zero.";
  } else if (given_Number > 0) {
    return "The number is positive.";
  } else {
    return "The number is negative.";
  }
}
console.log(findNumber(-69));
/* 6- Take 5 different numbers and check which on is greatest and then check which one is smallest use separate conditionals
for both scenarios.*/
//var num1: number = 10;
//var num2: number = 50;
//var num3: number = 25;
//var num4: number = 5;
//var num5: number = 9;
//the greatest number
var findNum=(num1:number, num2:number, num3:number, num4:number, num5:number)=>{
if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
    return "the greatest number is " + num1;
}
else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
    return "the greatest number is " + num2;
}
else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
    return "the greatest number is " + num3;
}
else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
    return "the greatest number is " + num4;
}
else {
    return "the greatest number is " + num5;
}
}
console.log(findNum(10,50,25,5,9));
//the smallest number
var find_Num=(num1:number, num2:number, num3:number, num4:number, num5:number)=>{
if (num1 <= num2 && num1 <= num3 && num1 <= num4 && num1 <= num5) {
    return "the smallest number is " + num1;
}
else if (num2 <= num1 && num2 <= num3 && num2 <= num4 && num2 <= num5) {
   return "the smallest number is " + num2;
}
else if (num3 <= num1 && num3 <= num2 && num3 <= num4 && num3 <= num5) {
    return "the smallest number is " + num3;
}
else if (num4 <= num1 && num4 <= num2 && num4 <= num3 && num4 <= num5) {
    return "the smallest number is " + num4;
}
else {
    return "the smallest number is" + num5;
}
}
console.log(find_Num(10,50,25,5,9));