const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector("#ingredients");
const item = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");
console.log(item);
ulIngredients.innerHTML = item;

  const newIngredient = document.createElement("li");
  newIngredient.textContent = "Інгредієнт";
  newIngredient.classList.add("item");
ulIngredients.appendChild(newIngredient);
  