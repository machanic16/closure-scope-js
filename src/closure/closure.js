// MoneyBox without Closure structure
const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// Money with Closure structure

const moneyBox = (owner) => {
  var saveCoins = 0;
  var owner = owner;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`${owner} MoneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox("Joel");

myMoneyBox(4);

myMoneyBox(6);

myMoneyBox(10);

let karlaMoneyBox = moneyBox("Karla");

karlaMoneyBox(5);
karlaMoneyBox(5);
myMoneyBox(-2);

function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log("example increment", c1, c2, c3);

function createAccount(name, socialSecurity) {
  let balance = 0;
  let owner = name;
  let social = socialSecurity;
  return {
    showBalance: () => {
      return balance;
    },
    deposit: (amount) => {
      balance += amount;
      console.log(`$${amount} was succesfully deposited to ${owner} account`);
      console.log(`${owner}'s balance is $${balance}`);
    },
    withdraw: (amount) => {
      balance -= amount;
      console.log(`$${amount} was succesfully withdraw from ${owner} account`);
      console.log(`${owner}'s balance is $${balance}`);
    },
  };
}

let account1 = createAccount("Joel");
let account2 = createAccount("Karla");
