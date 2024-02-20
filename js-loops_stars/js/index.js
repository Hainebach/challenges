console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", "assets/star-empty.svg");
    starContainer.appendChild(img);
    console.log(img);
  }

  //--^-- your code here --^--
}

renderStars();
