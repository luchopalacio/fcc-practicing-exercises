class BankAccount {
  constructor(){
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount){
    if(amount > 0){
     this.transactions.push( {type: "deposit", amount: amount} );
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return `Deposit amount must be greater than zero.`;
  }

  withdraw(amount){
    if(amount > 0 && amount <= this.balance){
      this.transactions.push( {type: "withdraw", amount: amount} );
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    return "Insufficient balance or invalid amount.";
  }

  checkBalance(){
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let message = "Deposits: ";
    let first = true;

    this.transactions.forEach(transaction => {
      if (transaction.type === "deposit") {
        if (!first) {
          message += ",";
        }
        message += transaction.amount;
        first = false;
      }
    });

    return message;
  }

  listAllWithdrawals() {
    let message = "Withdrawals: ";
    let first = true;

    this.transactions.forEach(transaction => {
      if (transaction.type === "withdraw") {
        if (!first) {
          message += ",";
        }
        message += transaction.amount;
        first = false;
      }
    });

    return message;
  }

}

const myAccount = new BankAccount();

