const ulCategories = document.querySelector('#categories');

const liItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItem.length}`);

[...ulCategories.children].forEach((item) => {
    const categoryTitle = item.querySelector('h2');
    console.log(`Category: ${categoryTitle.textContent}`);
    const categoryList = item.querySelectorAll('li');
    console.log(`Elements: ${categoryList.length}`);
});