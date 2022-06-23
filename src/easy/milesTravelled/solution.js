function milesTravelled(speed, timeMin) {
  let timeInHours = timeMin / 60;
  let distance = speed * timeInHours;
  return Math.round(distance);
}

console.log(milesTravelled(5, 120));
console.log(milesTravelled(20, 60));
console.log(milesTravelled(70, 240));
