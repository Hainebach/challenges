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

// For a circle with a radius of 5 units:

// - The area is approximately 78.54 square units.
// - The circumference is approximately 31.42 units.
