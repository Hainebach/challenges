console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

function showWelcomeMessage(userName, userRole) {
  const welcomeMessage = `Welcome ${userName}! You are logged in now as ${userRole}.`;
  console.log(welcomeMessage);
  return welcomeMessage;
}

// showWelcomeMessage("bob", "sponge");

function showErrorMessage(errorMessage) {
  errorMessage = `Login error: ${errorMessage}`;
  console.log(errorMessage);
  return errorMessage;
}

// showErrorMessage("crap");

handleUserLogin(showWelcomeMessage, showErrorMessage, "John Doe");
