// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
// P: object recipe, and object available ingredients, each cotaining an ingredient property and a int value representing the available amount of said ingredient
// R: an int representing how many cakes you can make with given ingredients according to the recipe obj param.
// E: cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); Returns 2
//    cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});  Returns 0
// P: compare both objects to see if they both contain the same keys. if they do divide recipe ing by available ing. return floored result of amount of cakes able to bake.

const cakes = (recipe, availableIng) => {
  // 1. check if both objs have the same keys.
  for (const key of Object.keys(recipe)) {
    if (!Object.keys(availableIng).includes(key)) {
      return 0;
    }
  }
  // 2. divide recipe ing by avail. ing.
  let result = 0;
  for (const ing in recipe) {
    const amount = Math.floor(availableIng[ing] / recipe[ing]);
    if (amount <= 0) {
      return 0;
    } else if (result > amount || !result) {
      result = amount;
    }
  }
  return result;
};
