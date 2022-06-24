function arrayOfMuliples(multiple, length) {
  let arr = [];
  let startingNum = 1;

  for (let i = startingNum; i <= length; i++) {
    arr.push(multiple * startingNum);
    startingNum++;
  }
  return arr;
}

console.log(arrayOfMuliples(2, 12));
console.log(arrayOfMuliples(8, 32));
