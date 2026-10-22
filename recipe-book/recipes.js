"use strict";
let recipe1 = {
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
let recipe2 = {
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
function summarize(recipe) {
    let ingredients = "";
    recipe.ingredients.forEach((element) => {
        ingredients += `${element.name} - ${element.amountGrams} gr; `;
    });
    return `Name: ${recipe.name}. Servings: ${recipe.servings}. Ingredients: ${ingredients}`;
}
console.log(summarize(recipe1));
console.log();
console.log(summarize(recipe2));
