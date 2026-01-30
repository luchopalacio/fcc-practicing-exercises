# Exercise: Build a Bank Account Management Program

This exercise implements a simple BankAccount class in JavaScript to practice object-oriented programming and basic logic.
It focuses on working with classes, constructors, arrays of objects, and common array methods while handling deposits, withdrawals, and transaction history.

## Usage Example

``` js

const myAccount = new BankAccount();

console.log(myAccount.deposit(400))     //Successfully deposited $400. New balance: $400
console.log(myAccount.withdraw(60))     //Successfully withdrew $60. New balance: $340
console.log(myAccount.deposit(120))     //Successfully deposited $120. New balance: $460
console.log(myAccount.withdraw(200))    //Successfully withdrew $200. New balance: $260

console.log(myAccount.checkBalance())   //Current balance: $260

console.log(myAccount.listAllDeposits());   //Deposits: 400,120
console.log(myAccount.listAllWithdrawals());    //Withdrawals: 60,200

console.log(myAccount.deposit(0))   //Deposit amount must be greater than zero.
console.log(myAccount.withdraw(1000))   //Insufficient balance or invalid amount.