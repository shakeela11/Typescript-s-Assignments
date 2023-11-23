//Assignment for this week is:
 //1- Calculate your age based on the current year and your birth year.
 var currentYear = 2023;
 var birthYear = 2000;
 var age = currentYear - birthYear;
 console.log("age is:" + age);

 //2- Write a program that calculates the area of a rectangle using length and width variables.
 var length:number= 10;
 var width:number= 15;
 var areaOfRectangle = length*width;
 console.log("this is the area of a rentangle: " + areaOfRectangle);

  //3- Write a program that calculates the area of a circle.
  //A=πr² πr=3.14 
  var r:number=5;
  var π:number=3.14;
  var A = π*(r**2);
  //  3.14*25=78.5
console.log("this is the area of a circle: " +A);

//4- Write a program that calculates the area of the cube.
//A=6a^2
var a:number= 4;
var A= 6*(a**2);
// 6*16=96
console.log("area of the cube: " +A);

 //5- Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
 //i- fahrenheit to celsius= (°F − 32) × 5/9 
 var f:number= 20;
 var fahrenheitToCelsius= (f - 32)*5/9;
 //(20-32)*5/9
//-12*0.55=-6.66°C
console.log("temperature in celsius: " +fahrenheitToCelsius);
// ii- Celsius to Fahrenheit °F = °C×(9/5)+32
var c:number=6.66;
var celsiusToFahrenheit= c*(9/5)+32;
//6.66*1.8+32
//11.988+32=43.988
console.log("teperature in fahrenheit: " +celsiusToFahrenheit);

//6- Convert a given number of seconds into minutes and seconds using variables.
var givenSeconds:number=200;
// Calculate minutes and remaining seconds =3min 20sec
var minutes:number=Math.floor (givenSeconds/60);
var seconds: number = givenSeconds % 60;
   //Math.floor is used to round down to the nearest integer)
   // and then use the modulus operator % to get the remaining seconds.
console.log(`${givenSeconds} seconds is equal to ${minutes} minutes and ${seconds} seconds.`);

 //7- Write a program that calculates the percentage.
 //formula=(value/total value)×100%
 var num:number=30;
 var totalNumber:number= 75;
 var calculatePercentage=("calculate percentage: " + (num/totalNumber)*10);
 //(30/75)*100
 //0.4*100=40
console.log(calculatePercentage);
 //8- Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
 var totalDays:number=365;
 var weeks:number= Math.floor(totalDays/7);
 var days:number= totalDays % 7;
 console.log("${totalDays} days is equal to ${weeks} weeks and ${days} days.");
 /*
//Increment and Decrement Operator:
 //- Q1:
 let a:number= 2;
 let b = ++a * 2; 
 //3*2=6
 b =6
 
 //- Q2
 let x = 5;
 let y = x-- + 2;
 //5+2=7
  y =7
 
  //- Q3 
 let x = 3;
 let y = ++x + x++ + ++x;
 //  ++x=4 , x++=4 but afterwards it becomes 5, ++x= 6
 // 4+4+6= 14
  y =14
 
  //- Q4 
  let m = 2;
 let n = ++m * m++ * --m;
 //++m=3 , m++3 afterwards becomes4, --m==3
 //3*3*3=27
  n=27 
 
 // - Q5
  let a = 3;
 let b = 5;
 let result = ++a + b-- - a++ + --b;
 // ++a= 4 , b--=5 afterward becomes 4 , a++=4 , --b=3
 //4+5-4+3
 //9-4+3
 //12-4= 8
  result=8
 
 //- Q6
 let m = 2;
 let n = 4;
 let p = m++ + ++n - --m + n--;
 //m++=2 afterward becomes 3, ++n=5 , --m=2 , n--=5 after becomes4
 //2+5-2+5
 //12-2= 10
 m=2 , n=4 , p=10
 
 
 // - Q7
  let a = 5; // ++a=6
 let b = 3;  // b--= 3 after becomes 2
 let c = 2;
 let d = 7;  // --d=6
 let result = ++a * (b-- + c) / --d;
 //6*(3+2)/6
 // 6*5/6
 //6*0.833=5
 a=6, b=2, c=2, d=6 ,result=58
 
  //- Q8
 let m = 2;
 let n = 3;
 let o = 4;
 let result = m++ * (--n + m) / (o-- - n);
 
 // m++= 2 after becomes3 , --n=2 , o--=4 after becomes 3
 //2*(2+3)/(4-2)
 //2*5/2
 //2*2.5=5
  m,3 o=3, n=2, result=5;*/