const circleRadius = 5;

let circleArea = Math.PI * Math.pow(circleRadius, 2);

// console.log(circleArea);

let circumference = 2 * Math.PI * circleRadius;

// console.log(circumference);

console.log("For a circle with a radius of " + circleRadius + " units:");
console.log(
  "The area is approximately " + circleArea.toFixed(2) + " square units."
);
console.log(
  "The circumference is approximately " + circumference.toFixed(2) + " units."
);
