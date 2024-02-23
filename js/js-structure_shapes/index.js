console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/circle.js";
import { Pentagon } from "./components/Pentagon/pentagon.js";

const root = document.getElementById("root");

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});

const circle = Circle();
const pentagon = Pentagon();

root.append(circle, square, pentagon);
