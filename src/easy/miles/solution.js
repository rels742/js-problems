function convertKmToMiles(num) {
  let answer = num * 0.62137;
  return Math.round(answer);
}

console.log(convertKmToMiles(50));
console.log(convertKmToMiles(4.2));

// function convertMilesToKm(num) {
//   let answer = num * 1.6;
//   Math.round(answer);
//   return Math.round(answer);
// }

// console.log(convertMilesToKm(1));
// console.log(convertMilesToKm(5.8));
