const ulCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategories.length}`);
for (const item of ulCategories) {
    const categoryTitle = document.querySelector("h2");
    console.log(`Category: ${categoryTitle.textContent}`);
    const categoryList = item.querySelectorAll("li");
    console.log(`Elements: ${categoryList.length}`);
};

