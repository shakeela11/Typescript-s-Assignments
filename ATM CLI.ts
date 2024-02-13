import inquirer from "inquirer";

interface ansType{
    userID: string,
    UserPin: number,
    transactionType: string,
    Amount: number,
}
const answer: ansType = await inquirer.prompt([
    {
        type : 'input',
        name: 'userID',
        message : "kindly enter your ID = "
    },
    {
        type: 'number',
        name: 'UserPin',
        message: 'Enter your pin code = '
    },
    {
        type: 'list',
        name: 'accountType',
        choices: ['current', 'saving', 'new'],
        message: 'Select your account type = '
    },
    {
        type: 'list',
        name: 'transactionType',
        choices: ['withdraw', 'Fast cash'],
        message: 'Select your transaction type = ',
        when(answer) {
            return answer.accountType
        }
    },
    {
        type: 'list',
        name: 'Amount',
        choices: [1000, 2000, 10000, 20000],
        message: 'Select your amount',
        when(answer) {
            return answer.transactionType === 'Fast cash'
        }
    },
    {
        type: 'number',
        name: 'Amount',
        message: 'Enter your withdraw amount',
        when(answer) {
            return answer.transactionType === 'withdraw'
        }
    },
])
if (answer.userID && answer.UserPin) {
    // let having the random balance in the user account
    let balance = Math.floor(Math.random() * 10000000);
    console.log('Your total balance was = ',balance);
    const enteredAmount = answer.Amount
    if (enteredAmount <= balance) {
        balance = balance - enteredAmount;
    } else {
        console.log('insufficient balance');
    }
    console.log('And Your remaining balance is = ',balance);
} 
