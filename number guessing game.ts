#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";




async function playMore() {


    let secretNum = Math.floor(Math.random() * 101)

    async function playGame() {
        let usersInput = await inquirer.prompt({
            name: "userInput",
            type: "number",
            message: chalk.redBright.italic("Enter your number between 1 - 100 =>")
        });

        let userInput = usersInput.userInput


        if (userInput === secretNum) {
            console.log(chalk.inverse("Congratulations!!! You have guess the right number."));
            return true
        }
        else if (isNaN(userInput) || userInput < 1 || userInput > 100) {
            console.log(chalk.yellowBright("Invalid input! Please enter a number between 1 and 100."));
        }
        else {
            if (userInput > secretNum) {
                console.log(chalk.blueBright.bold("Your number is greater than the number you are guessing"));
            } else if (userInput < secretNum) {
                console.log(chalk.greenBright.bold("Your number is smaller than the number you are guessing"));
            }
            return false
        };
    };

    let isGuessed: any = false
    let attempts = 0
    console.log(chalk.inverse.bold(Number Guessing Game !!!!!!!));
    console.log();
    console.log();

    console.log(chalk.yellowBright(`             #####`));
    console.log(chalk.yellowBright(`           ##     ##`));
    console.log(chalk.yellowBright(`                ###`));
    console.log(chalk.yellowBright(`              ##`));
    console.log(chalk.yellowBright(`              ##`));
    console.log(chalk.yellowBright(`              ##`));
    console.log(chalk.yellowBright(`               `));
    console.log(chalk.yellowBright(`              ## `));

    console.log();
    console.log();
    console.log();


    while (!isGuessed) {
        attempts++
        isGuessed = await playGame()
    }
    console.log(chalk.yellowBright.bold(You have attempted ${attempts} times to guess the right number...));

    console.log();
    console.log();

    console.log(chalk.redBright(`        ###     ###     ###  ######  ###    ###`));
    console.log(chalk.magentaBright(`      ### ### ### ###    ####    ###    ###`));
    console.log(chalk.greenBright(`          ###     ###      ######  ###### ######   `));
    console.log()
    console.log(chalk.cyanBright(`     ######        #####     ####    ##  #######`));
    console.log(chalk.yellowBright(`   ###   ##    ###   ###   ## ##   ##  ###`));
    console.log(chalk.blueBright(`     ###    ##  ##       ##  ##  ##  ##  #####`));
    console.log(chalk.grey(`           ###   ##    ###   ###   ##   ## ##  ###`));
    console.log(chalk.greenBright(`    ######        #####     ##    ####  #######`));

    console.log();
    console.log();
    console.log();


} playMore()