const targetNumber = 283572;
const endTime = new Date('2025-03-19T12:00:00Z'); // GMT 12:00 19 March 2025
const interval = 6573; 
const currentTime = new Date();
const remainingTime = Math.max(0, endTime - currentTime);
const remainingIncrements = Math.ceil(remainingTime / interval);

let count = targetNumber - remainingIncrements; // Start the count
const increment = 1; // Number incremented every 2 seconds
const counterElement = document.getElementById('counter');
counterElement.textContent = count;

const timer = setInterval(() => {
  if (count >= targetNumber) {
    clearInterval(timer); // Stop when reaching the target number
  } else {
    count += increment;
    counterElement.textContent = count;
    counterElement.classList.add('updating');
    setTimeout(() => counterElement.classList.remove('updating'), 200);
  }
}, interval);
