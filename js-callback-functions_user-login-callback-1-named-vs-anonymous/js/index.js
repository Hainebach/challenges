console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

function showWelcomeMessage() {
  const welcomeMessage = "Welcome! You are logged in now.";
  console.log(welcomeMessage);
  return welcomeMessage;
}

showWelcomeMessage("hello");
// Call handleUserLogin below!

handleUserLogin(() => {
  const welcomeMessage = "Welcome You are now logged in too";
  console.log(welcomeMessage);
  return welcomeMessage;
});
