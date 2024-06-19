import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "accountType",
            message: "select your account type",
            type: "list",
            choices: [
                "Current Account",
                "Saving Account"
            ],
        },
        {
            name: "operation",
            message: "please select your option",
            type: "list",
            choices: ["Withdraw",
                "Fast Cash",
                "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "select the amount which you withdrawal",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`You have sucsessfully withdrawl ${fast.fastcash} /nYour remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
    else {
        console.log("incorrect pin number");
    }
}
;
