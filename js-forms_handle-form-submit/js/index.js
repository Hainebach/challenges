console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const userData = Object.fromEntries(formData);

  console.log(userData);
  form.reset();
});
