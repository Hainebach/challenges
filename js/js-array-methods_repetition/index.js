const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

const onlyTitles = recipes.map((element) => {
  return element.title;
}); // ['Crepes', ...]
// console.log(onlyTitles);

const titlesWithDuration = recipes.map((element) => {
  return `${element.title} (${element.duration})`;
}); // ['Crepes (60min)', ...]
// console.log(titlesWithDuration);

const timePerServing = recipes.map((element) => {
  return element.duration / element.servings;
}); // [20, 10, 432, 12]
// console.log(timePerServing);

// EXTRA:

const allTitlesInOneString = onlyTitles.join(", ");
// console.log(allTitlesInOneString);
/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter((element) => {
  return element.duration <= 60;
});

// console.log("less than 60 min: ", recipesThatOnlyTake60minutesOrLess);

const allRecipesWithMoreThan2Servings = recipes.filter((element) => {
  return element.servings > 2;
});
// console.log(allRecipesWithMoreThan2Servings);

const allRecipesWithTitlesLongerThan12Characters = recipes.filter(
  (element) => element.title.length > 12
);
console.log("long title recipes: ", allRecipesWithTitlesLongerThan12Characters);

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
