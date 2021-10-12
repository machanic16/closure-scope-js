const fruits = () => {
  if (true) {
    var fruits1 = "apple";
    //let fruits2 = "banana";
    const fruits3 = "kiwi";
  }
  console.log(fruits1);
  //console.log(fruits2);
  console.log(fruits3);
};

fruits();

var x = 1;
{
  var x = 2;
  console.log(x + " in the block");
}
console.log(x + " Outside of the block");

// Is better only use 'let'
const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000);
  }
};

anotherFunction();

// Really big difference using 'var' instead of 'let'
const anotherFunction = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 3000);
  }
};

anotherFunction();
