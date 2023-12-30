/*Assignment for the week is:
 1- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method
  to insert the value at the specified index in the array. Return the modified array.*/
var insertValueAtIndex = (array: number[], index: number, value: number) => {
    // Use splice to insert the value at the specified index
    array.splice(index, 0, value);
    // Return the modified array
    return array;
}
let newArray = [1, 2, 3, 4, 5];
let modifiedArray = insertValueAtIndex(newArray, 2, 50);
console.log("Modified Array:", modifiedArray);
//////////////////////////////
/*2- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update 
quantities using the splice method. Print the cart's contents after each operation*/
/*var shoppingCartArray:string[]=[];
var addItemInShoppingCart=(item:any, quantity:number)=>{
let addItem={item, quantity};
shoppingCartArray.push(addItem);
console.log(`added ${quantity} ${item}(s) to the cart.`)
}*/
var buyItems: string[] = ["eggs", "meat", "snacks", "chocolates", "detergents", "cream", "yogurt"]
function shoppingcart(index: number, delete1: number, add: string) {
    buyItems.splice(index, delete1, add)
    console.log(buyItems)
    return;
}
shoppingcart(2, 0, "noodles")
//3- Write a program that uses a while loop to print the first 25 integers.
let aNumber: number = 1;
while (aNumber <= 25) {
    console.log(aNumber);
    aNumber++;
}
/////////////////////
//4- Write a program that uses a while loop to print the first 10 even numbers.
let number1: number = 1;
while (number1 <= 10) {
    let evenNum = number1 * 2;
    number1++;
    console.log(evenNum);
}
//////////////////////
/*5- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the 
factorial of that number.*/
function factorial(num2: number) {
    if (num2 > 0) {
        var result = num2
        var multiplier = num2 - 1; // 5-1=4
        while (multiplier > 0) {
            result *= multiplier;
            multiplier--
        }
        console.log(result)
        return
    }
    console.log("invalid input data")
}
factorial(4);
/*explanation
--first of all we Initialize result with the given number
--Initialize multiplier with one less than the given number
-- Use a while loop to calculate the factorial
--Multiply the current result by the multiplier
-- Decrease the multiplier for the next iteration
*/
/*function factorial(num0:number){
    if(num0>0){
        var result=num0
    var multiplier=num0-1; // 5-1=4
    while(multiplier>0){
         result*=multiplier;
        multiplier--
    }
console.log(result)
return
}
console.log("invalid input data")
}
factorial(-4);
*/
/////////////////
/*6- Write a program having an array of numbers if the number is negative it should remove the negative number from the 
array.*/
let array2: number[] = [1, 20, 23, 30, 4, 5, 98, -3, -4, -6];
let removeNegativeNumbers = (takeArray: number[]): number[] => {
    let nonNegativeNumbers: number[] = [];
    for (let i = 0; i < takeArray.length; i++) {
        if (takeArray[i] >= 0) {
            nonNegativeNumbers.push(takeArray[i]);
        }
    }
    return nonNegativeNumbers;
}
let filteredNumbers: number[] = removeNegativeNumbers(array2);
console.log("Original Array:", array2);
console.log("Array after removing negative numbers:", filteredNumbers);
//////////////////
/*7- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of 
all the numbers in the array.*/
var calculateSum = (arrayOfNumbers: number[]) => {
    var sumNumber = 0;
    var sum = 0;
    while (sumNumber < arrayOfNumbers.length) {
        sum = sum + arrayOfNumbers[sumNumber];
        sumNumber++
    }
    return sum;
}
console.log(calculateSum([1, 2, 4, 5, 7, 8]));
////////////////////
/*8- Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to 
Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop 
to perform the conversion for each temperature.*/
var tempInCelsius:number[]=[30,35,40,45,50]
var tempInFahrenhiet:number[]=[];
var indexx=0;
while(indexx<tempInCelsius.length){
  tempInFahrenhiet[indexx]=tempInCelsius[indexx]*9/5+32;
  indexx++
}
console.log(tempInFahrenhiet)

//9- Write a program to remove all the odd numbers from an array.
let array3: number[] = [1, 2, 3, 4, 5, 6];
let removeOddNumbers = (takeArray: number[]): number[] => {
    let OddNumbers: number[] = [];
    for (let i = 0; i < takeArray.length; i++) {
        if (takeArray[i] % 2 === 0) {
            OddNumbers.push(takeArray[i]);
        }
    }
    return OddNumbers;
}
let filtered_Numbers: number[] = removeOddNumbers(array3);
console.log("Original Array:", array3);
console.log("Array after removing Odd numbers:", filtered_Numbers);