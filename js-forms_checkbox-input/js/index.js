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
  success.setAttribute("hidden", "");
}

hideSuccess();
hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const userData = Object.fromEntries(formData);
  //write a boolean that checks if box is checked or not
  const checkedBox = tosCheckbox.checked;

  if (checkedBox) {
    hideTosError();
    alert("form submitted");
    showSuccess();
  } else {
    showTosError();
    alert("form was not submitted");
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
