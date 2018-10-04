const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');
const door3 = document.getElementById('door3');
const startButton = document.getElementById('start');
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
let openDoor1;
let openDoor2;
let openDoor3;
let numClosedDoors = 3;
let currentlyPlaying = true;

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
};

const randomChoreGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    switch (choreDoor) {
        case 0:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 1:
            openDoor2 = botDoorPath;
            openDoor1 = spaceDoorPath;
            openDoor3 = beachDoorPath;
            break;
        case 2:
            openDoor3 = botDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor1 = beachDoorPath;
            break;
    }

};


door1.onclick = () => {
    if (currentlyPlaying && !isClicked(door1)) {
        door1.src = openDoor1;
        playDoor(door1);
    }
};

door2.onclick = () => {
    if (currentlyPlaying && !isClicked(door2)) {
        door2.src = openDoor2;
        playDoor(door2);
    }
};

door3.onclick = () => {
    if (currentlyPlaying && !isClicked(door3)) {
        door3.src = openDoor3;
        playDoor(door3);
    }
};

startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
}

const startRound = () => {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreGenerator();
}

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You Win! Play again?';
        currentlyPlaying = false
    } else {
        startButton.innerHTML = 'Game Over! Play again?';
        currentlyPlaying = false
    }
};

startRound();