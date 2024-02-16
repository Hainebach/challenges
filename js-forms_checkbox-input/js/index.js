console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

function hideSuccess() {
  success.removeAttribute("hidden", "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formData = new FormData(eventt.target);
  const userData = Object.fromEntries(formData);
  //write a bolean tht checks if box is checked or not
  Boolean checked = event.target.tos.value
  if(checked) {
    console.log(showSuccess(event));
  }

  // hideSuccess();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
