// Write your code here:
const greetAliens = (array) => {
    for (let alien of array) {
        console.log(`Oh powerful ${alien}, we humans offer our unconditional surrender!`)
    }
};

// When you're ready to test your code,run:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender!