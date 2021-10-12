const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(++count);
  };
  return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

console.log("End of the first counter ");

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();
