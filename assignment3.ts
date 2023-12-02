//Assignment for this week is:

//1- Write a program that calculates the percentage. 
 //formula=(value/total value)×100%
 var givenNum:number=30;
 var totalNumber:number= 75;
 var calculatePercentage=("percentage of the given number is: " + (givenNum/totalNumber)*100);
 //(30/75)*100
 //0.4*100=40
console.log(calculatePercentage);
 
 /*2- Write a program that calculates the discount for a product based on its price.
  If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.*/
 var productPrice:number=80;
 //var productPrice:number=150;
 var discountRate:number;
 if (productPrice <= 100) {
    var discountRate = 5; // 5% discount
    var discount = discountRate/100*productPrice;
    var disountedPrice=productPrice- discount;
    console.log("the disount on",productPrice,"$ is",discount,"so the sales price is",disountedPrice);
} 
else{
var discountRate2= 10 //10% discount
var discount2=discountRate2/100*productPrice;
var disountedPrice2= productPrice-discount2;
console.log("the disount on",productPrice,"$ is",discount2,"so the sales price is",disountedPrice2);
}

/* 3- Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child."
 If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."*/
var userAge: number= 30;
//var userAge: number= 7;
//var userAge: number= 15;
if(userAge>=0 && userAge<=12){
    console.log("child");
}
else if(userAge>=13 && userAge<=19){
    console.log("teenager");
}
else{
    console.log("adult");
}

/* 4- Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes
 and so on according to the weather.*/
 // part-1 ---> for temperature
var outsideTemperature:number=12;
if(outsideTemperature<=0){
    console.log("today the temperature is extremely cold,so wear heavy warm winter clothes")
}
else if(outsideTemperature >= 0 && outsideTemperature< 15){
console.log("It's cold. Wear some warm layers.")
}
else if(outsideTemperature >= 16 && outsideTemperature< 25){
    console.log("It's cool. A sweater should be enough.")
    }
    else{
        console.log("It's warm. Wear light clothes.")
    }
    // part-2 ---> for weather
    var weather:string="cloudy";
    if (weather === "rainy") {
        console.log("It's rainy. Don't forget your umbrella!");
    }
    else if(weather==="cloudy"){
        console.log("It's cloudy. Grab a light jacket and consider to take an umbrella.");
    }
    else{
        console.log("It's sunny. Wear sunglasses, a hat, and use sunscreen.");
    }
  /* 5- Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show
   output accordingly.*/
var givenNumber: number= 20;
//% is used to check if the given number is divisible by 3 and/or 5.
if(givenNumber % 3 === 0 && givenNumber % 5 === 0){
console.log("the givenNumber is divisible by both 3 and 5.")
}
else if(givenNumber % 3 === 0){
    console.log("the givenNumber only is divisible by 3.");
}
else if(givenNumber % 5 === 0){
    console.log("the givenNumber only is divisible by 5.");
}
else{
    console.log("the givenNumber is not divisible by both 3 and 5.")
}
 // 6- Write a program that checks if the given year is leap year or not.
 var givenYear:number=2015;
 /* % 4 === 0: Checks if the given year is divisible by 4.
 % 100 !== 0: Checks if the given year is not divisible by 100.
 % 400 === 0: Checks if the given year is divisible by 400
 If any of these conditions are true, it will print that the given year is a leap year
 */
 if((givenYear %4 ===0 && givenYear %100 !==100) || givenYear % 400===0){
console.log("the given year is a leap year.")
 }
 else{
    console.log("the given year is not a leap year.")
 }
 /* 7- Develop a program that determines the day of the week. Ask the user for a number (1-7) and 
 use nested if statements to print the corresponding day's name.*/
 //var givenDay:number= 9;
 var givenDay:number =4;
 if (givenDay >= 1 && givenDay <= 7) {
     if (givenDay === 1) {
         console.log("today is Monday.");
     }
      else if (givenDay === 2) {
        console.log("today is tuesday.");    
    }
    else if (givenDay ===3) {
        console.log("today is wednesday.");    
    }
    else if (givenDay === 4) {
        console.log("today is thursday.");    
    }
    else if (givenDay === 5) {
        console.log("today is friday.");    
    }
    else if (givenDay === 6) {
        console.log("today is saturday.");    
    }
    else {
        console.log("today is sunday.");    
    }
        
        }
 else {
     console.log("givenDay is not a valid number. Please enter a number between 1 and 7.");
   }
 /* 8- Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax. 
if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
Where the tax amount will be calculated by the amount of bill.*/
var units:number= 155;
if(units<=100){
console.log("tax is not applicable as units are less than 100.")
}
else if(units>100 && units<=200){
    var tax:number=10;
    var appliedTax= tax/100*units;
    var taxAmount= appliedTax+units;
    console.log(`the tax on ${units} units is 10 percent, so the taxamount is ${taxAmount}`);
    }
    else if(units>200 && units<=300){
        var tax:number=15;
        var appliedTax= tax/100*units;
        var taxAmount= appliedTax+units;
        console.log(`the tax on ${units} units is 15 percent, so the taxamount is ${taxAmount}`);
        }
        else if(units>300 && units<=500){
            var tax:number=20;
            var appliedTax= tax/100*units;
            var taxAmount= appliedTax+units;
            console.log(`the tax on ${units} units is 20 percent, so the taxamount is ${taxAmount}`);
            }
            else{
                var tax:number=25;
                var appliedTax= tax/100*units;
                var taxAmount= appliedTax+units;
                console.log(`the tax on ${units} units is 25 percent, so the taxamount is ${taxAmount}`);
                }
    
 /* 9- Write a program that tells if the student is pass or fail based on the attendance greater than 75%, 
 practical marks should greater than 50% and theory marks should be greater than 45%  for passing in a semester.*/
var attendance:number= 80;
var practicalMarks:number= 70;
var theoryMarks:number=55 ;
// for passing a semester
var attendanceForPassing:number=75;
var practicalMarksForPassing:number= 50;
var theoryMarksForPassing:number= 45;
if(attendance>=attendanceForPassing && practicalMarks>=practicalMarksForPassing && theoryMarks>=theoryMarksForPassing){
console.log("congratulation! you have passed this semester")
}
else{
    console.log("sorry! you have failed the semester. kindly review you evaluations.")
}
 /*
 10- Write a ts program that evaluates the grades of the students:
  * 80% or greater, grade A
  * 70% or greater, grade B
  * 60% or greater, grade C
  * 50% or greater, grade D
  * Less than 50% , grade F.*/
var studentPercentage:number= 66;
if(studentPercentage>=80){
console.log("Grade A");
}
else if(studentPercentage>=70 && studentPercentage<80){
    console.log("Grade B");
    }
    else if(studentPercentage>=60 && studentPercentage<70){
        console.log("Grade C");
        }
        else if(studentPercentage>=50 && studentPercentage<60){
            console.log("Grade D");
            }
            else{
                console.log("Grade F");
                }