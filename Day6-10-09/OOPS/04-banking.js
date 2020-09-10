// Base Class
class Bank {
  constructor(_code, _address) {
    this.codes = _code;
    this.address = _address;
  }
  manages() {
    // code
  }
  maintains() {
    // code
  }
}

// Base Class
class ATM {
  constructor(_location, _managedby) {
    this.location = _location;
    this.managedby = _managedby;
  }
}

// Child Class
class Customer extends ATM {
  constructor(_name, _address, _dob, _cardNumber, _pin) {
    this.name = _name;
    this.address = _address;
    this.dob = _dob;
    this.cardNumber = _cardNumber;
    this.pin = _pin;
  }

  verifyPassword() {
    // code
  }
}

class ATMTransactions {
  constructor(_transactionId, _date, _type, _amount, _postBalance) {
    this.transactionId = _transactionId;
    this.date = _date;
    this.type = _type;
    this.amount = _amount;
    this.postBalance = _postBalance;
  }

  modifies() {
    // code
  }
}

// Base Class
class Account {
  constructor(_number, _balance) {
    this.number = _number;
    this.balance = _balance;
  }

  deposit() {
    // code
  }
  withDraw() {
    // code
  }
  createTransaction() {
    // code
  }
}

// Child Class
class currentAccount extends Account {
  constructor(_accountNo, _balance) {
    this.accountNo = _accountNo;
    this.balance = _balance;
  }
  withDraw() {
    // code
  }
}

// Child Class
class SavingAccount extends Account {
  constructor(_accountNo, _balance) {
    this.accountNo = _accountNo;
    this.balance = _balance;
  }
}
