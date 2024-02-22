console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(name) {
  const welcomeMessage = "welcome! " + name;
  console.log(welcomeMessage);
  return welcomeMessage;
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((name) => {
  const welcomeMessage = "welcome! " + name;
  console.log(welcomeMessage);
  return welcomeMessage;
});
