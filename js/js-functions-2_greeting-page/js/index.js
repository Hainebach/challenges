console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');
const currentDate = new Date().getHours();
const currentDay = new Date().getDay();

function getGreeting(x) {
  if (x >= 6 && x <= 12) {
    return "Good Morning";
  } else if (x >= 13 && x <= 18) {
    return "Good Afternoon";
  } else if (x >= 19 && x <= 22) {
    return "Good Evening";
  }
  return "Good Night";
}

function getDayColor(x) {
  if (x === 1) {
    return "darkgray";
  } else if (x >= 2 && x <= 5) {
    return "lightblue";
  }
  return "hotpink";
}

display.textContent = getGreeting(currentDate);
document.body.style.backgroundColor = getDayColor(currentDay);
