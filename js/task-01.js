const liEls = document.querySelectorAll(".item");
console.log(`Number of categories: ${liEls.length}`);

liEls.forEach((element) => {
  const titleOfcategory = element.firstElementChild.textContent;
  const elsOfcategory = element.lastElementChild.children;
  console.log(`Category: ${titleOfcategory}`);
  console.log(`Elements: ${elsOfcategory.length}`);
});