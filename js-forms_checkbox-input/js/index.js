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
  const formData = new FormData(evt.target);
  const userData = Object.fromEntries(formData);
  Boolean checked = 

  // hideSuccess();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
