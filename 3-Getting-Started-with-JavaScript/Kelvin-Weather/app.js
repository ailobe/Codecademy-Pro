// The forecast today is 293 Kelvin.
// The value saved to kelvin will stay constant.
const kelvin = 293;

// Convert Kelvin to Celsius by subtracting 273 from the kelvin variable.
const celsius = kelvin - 273;

// Calculate Fahrenheit using this equation: Fahrenheit = Celsius * (9/5) + 32.
let farenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit temperature. 
fareinheit = Math.floor(farenheit);

// Log the temperature in fahrenheit to the console.
console.log(`The temperature is ${fareinheit} degrees Fahrenheit.`);