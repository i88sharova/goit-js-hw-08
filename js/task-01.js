const liEls = document.querySelectorAll(".item");
console.log(`Number of categories: ${liEls.length}`);

liEls.forEach((element) => {
  const titleOfcategory = element.querySelector("h2").textContent;
  const elsOfcategory = element.querySelector("ul").children;
  console.log(`Category: ${titleOfcategory}`);
  console.log(`Elements: ${elsOfcategory.length}`);
});