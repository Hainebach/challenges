console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize2, pizzaSize1);
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize2 = pizzaInput2.value;
  let pizzaSize1 = pizzaInput1.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * Math.pow(diameter1 / 2, 2);
  const area2 = Math.PI * Math.pow(diameter2 / 2, 2);
  output.textContent = Math.round(((area2 - area1) / area1) * 100);
  // return ((area2 - area1) / area1) * 100;
}

// output.textContent = Math.round(calculatePizzaGain());

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  const result = (newSize / 24) * 100;
  pizzaElement.style.width = result + "px";
}

// Task 3
// define the function updateOutputColor here
