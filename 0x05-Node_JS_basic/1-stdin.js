process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input from stdin
process.stdin.on('data', (data) => {
  const name = data.toString().trim();  // Capture user input and remove extra spaces
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit();  // Exit the process after user input is displayed
});

// Listen for the exit event to display the final message
process.on('exit', () => {
  console.log('This important software is now closing');
});
