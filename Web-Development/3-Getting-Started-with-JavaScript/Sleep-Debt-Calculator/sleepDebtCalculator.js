const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

const getIdealSleepHours = () => 8 * 7;

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const IdealSleepHours = getIdealSleepHours();
    const difference = Math.abs(actualSleepHours - IdealSleepHours);
    if (actualSleepHours === IdealSleepHours) {
        console.log('Impressive! You got a perfect amount of sleep.')
    } else if (actualSleepHours > IdealSleepHours) {
        console.log('You got more sleep than needed: ' + difference + ' extra hours.')
    } else if (actualSleepHours < IdealSleepHours) {
        console.log('You should get some rest. You have a debt of ' + difference + ' hours.')
    }
};

calculateSleepDebt()