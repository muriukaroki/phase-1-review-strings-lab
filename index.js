// Write your code in this file!
const currentUser = "Jimmy Mutuku";

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toLocaleUpperCase();

const shortGreeting  = `Welcome, ${currentUser.slice(0, 1)}!`;

console.log(shortGreeting);