var a = "Hello";

function hello() {
  let b = "Hello World";
  const c = "Hello World!";

  if (true) {
    let d = "Hello World!!";
    debugger;
  }
}

hello();

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

const helloWorld = () => {
  globalVar = "I'm global";
};
helloWorld();
console.log(globalVar);
