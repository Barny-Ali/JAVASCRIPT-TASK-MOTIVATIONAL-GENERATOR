function generateMessage() {
    // Define arrays containing parts of the message
    // Define arrays containing parts of the message
const subjects = [
    "This moment",
    "The universe",
    "Your efforts",
    "Your future",
    "Today"
];

const actions = [
    "teaches us to embrace",
    "reminds us to cherish",
    "guides us toward",
    "invites us to appreciate",
    "encourages us to find"
];

const outcomes = [
    "the beauty of life",
    "the strength within",
    "new opportunities ahead",
    "joy in every step",
    "growth in every experience"
];


    
    // Function to get a random element from an array
    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    // Generate a random message
    const subject = getRandomElement(subjects);
    const action = getRandomElement(actions);
    const outcome = getRandomElement(outcomes);
    
    // Create the message
    const message = `${subject} ${action} ${outcome}.`;

    // Display the message on the HTML page
    document.getElementById("message").textContent = message;

    // Output the message to the console (optional)
    console.log(message);
}

// Optionally, you could call generateMessage() to display a message when the page loads
// window.onload = generateMessage;
