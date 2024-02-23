console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/circle.js";
import { Pentagon } from "./components/Pentagon/pentagon.js";
import { Square } from "./components/Square/square.js";

const root = document.getElementById("root");

const circle = Circle();
const pentagon = Pentagon();
const square = Square();

root.append(circle, square, pentagon);
