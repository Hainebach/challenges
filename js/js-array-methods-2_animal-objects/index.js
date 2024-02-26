console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterG = animals.find((animal) =>
  animal.name.startsWith("g")
);
console.log(
  "first animal starts with G: ",
  firstAnimalStartingWithLetterG.name
);

const indexOfAnimalWithNameLongerFive = animals.findIndex(
  (a) => a.name.length > 5
);
console.log(
  "index of the first animal with a name longer than 5 letters: ",
  indexOfAnimalWithNameLongerFive
);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy (and the tests work).

const animalsSortedAlphabetically = animals.sort((a, b) => a.length - b.length);
console.log("animals sorted alphabetically: ", animalsSortedAlphabetically);

const animalsSortedByWeightStartingWithLowest = animals.sort(
  (a, b) => a.weight - b.weight
);
console.log(
  "animals sorted by weigth: ",
  animalsSortedByWeightStartingWithLowest
);
const animalsSortedByWeightReversed =
  animalsSortedByWeightStartingWithLowest.reverse();
console.log(
  "animal sorted by weight heavy to light: ",
  animalsSortedByWeightStartingWithLowest
);

const animalWithWeightMoreThanFivehundredExists = animals.some(
  (a) => a.weight > 500
);
console.log(
  "does an animal heavier than 500 exist? ",
  animalWithWeightMoreThanFivehundredExists
);

// Hint: Filter for Europe first, then check every animal for its weight.
const allAnimalsInEuropeWeighLessThanOnehundred = animals.filter(
  (a) => a.continents.includes("Europe") && a.weight < 100
);

console.log(
  "animals in Europe that weigh less than 100: ",
  allAnimalsInEuropeWeighLessThanOnehundred
);

// Hint: filter + map + reduce
const weightOfAllAnimalsInAfrica = animals
  .filter((a) => a.continents.includes("Africa"))
  .map((a) => a.weight)
  .reduce((a, b) => a + b, 0);

console.log(
  "total weight of all animals in Africa: ",
  weightOfAllAnimalsInAfrica
);

// Hint: As above, but divided by the number of animals in Africa.
const averageWeightOfAllAnimalsInAfrica =
  weightOfAllAnimalsInAfrica /
  animals.filter((a) => a.continents.includes("Africa")).length;

console.log(
  "the average weight of all animals in africa: ",
  averageWeightOfAllAnimalsInAfrica
);

export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};
