const categoriesQuantity = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesQuantity.length}`);

categoriesQuantity.forEach((category) => {
   const categoryTitle = category.querySelector("h2").textContent;
   const elementsQuantity = category.querySelectorAll("li");
   console.log(`
Category: ${categoryTitle}
Elements: ${elementsQuantity.length}`);
});