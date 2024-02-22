console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

function welcomeMessage(name, role) {
  const welcomeUser = `Welcome ${name}! You are logged in now as ${role}.`;
  console.log(welcomeUser);
}

// welcomeMessage("bob", "sponge");

handleUserLogin(welcomeMessage);

handleUserLogin((name, role) => {
  const welcomeUser = `Welcome ${name}! You are logged in now as ${role}.`;
  console.log(welcomeUser);
});
