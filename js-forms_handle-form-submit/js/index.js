console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  const userData = Object.fromEntries(formData);
  const badnessSum =
    parseInt(evt.target.badness.value) + parseInt(evt.target.age.value);

  console.log(userData);
  console.log("badness sum:", badnessSum);

  form.reset();
});
