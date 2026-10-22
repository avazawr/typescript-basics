type Ingredient = {
  name: string;
  amountGrams: number;
};

type Recipe = {
  name: string;
  servings: number;
  vegetarian: boolean;
  ingredients: Ingredient[];
};

let recipe1: Recipe = {
  name: "name 1",
  servings: 2,
  vegetarian: false,
  ingredients: [
    {
      name: "Fleisch",
      amountGrams: 100,
    },
    {
      name: "Mehl",
      amountGrams: 500,
    },
  ],
};

let recipe2: Recipe = {
  name: "name 2",
  servings: 2,
  vegetarian: true,
  ingredients: [
    {
      name: "Kohl",
      amountGrams: 200,
    },
    {
      name: "Karroten",
      amountGrams: 100,
    },
    {
      name: "Ol",
      amountGrams: 50,
    },
  ],
};

function summarize(recipe: Recipe): string {
  let ingredients: string = "";
  recipe.ingredients.forEach((element) => {
    ingredients += `${element.name} - ${element.amountGrams} gr; `;
  });

  return `Name: ${recipe.name}. Servings: ${recipe.servings}. Ingredients: ${ingredients}`;
}

console.log(summarize(recipe1));
console.log();
console.log(summarize(recipe2));
