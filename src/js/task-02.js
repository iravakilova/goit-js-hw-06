const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector("#ingredients");
const ingredient = ingredients
  .map(ingredient => {
  const item = document.createElement('li');
    item.textContent = ingredient; 
    item.classList.add('item');
    return item;
})
ulIngredients.append(...ingredient);