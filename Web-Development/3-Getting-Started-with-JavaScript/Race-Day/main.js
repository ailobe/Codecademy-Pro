// Runners receive a number below 1000 except early adults.
let raceNumber = Math.floor(Math.random() * 1000);

// Random early registration
const isEarly = Math.random();

// Random age between 10 and 80 
let runnerAge = Math.floor(Math.random() * 70) + 10;

// Early adults receive a race number at or above 1000.
if (runnerAge === 18 && isEarly) {
    raceNumber += 1000;
}

// Early adults run at 9:30 am.
if ((runnerAge >= 18) && isEarly) {
    console.log(`Early registered adults run at 9:30 am. Your race number is ${raceNumber}.`);
    //Late adults run at 11:00 am.
} else if ((runnerAge >= 18) && !(isEarly)) {
    console.log(`Late registered adults run at 11:00 am. Your race number is ${raceNumber}.`);
    // Youth registrants run at 12:30 pm (regardless of registration).
} else if (runnerAge < 18) {
    console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`);
}