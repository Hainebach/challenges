console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const body = document.querySelector('[data-js="body"]');

const newPostSection = document.createElement("section");
newPostSection.classList.add("post");
body.appendChild(newPostSection);

const newPost = document.createElement("p");
newPost.textContent =
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. ";
newPost.classList.add("post__content");
newPostSection.appendChild(newPost);

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
newPostSection.appendChild(newFooter);

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.textContent = "@username";
newFooter.appendChild(newSpan);

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";
newFooter.appendChild(newButton);

newButton.addEventListener("click", handleLikeButtonClick);
