const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pedro',
            lastName: 'Rajoy',
            age: 12
        },
        {
            firstName: 'Mariano',
            lastName: 'Iglesias',
            age: 13
        },
    ],
    _games: [
        {
            opponent: 'PP',
            teamPoints: 78,
            opponentPoints: 36
        },
        {
            opponent: 'PSOE',
            teamPoints: 78,
            opponentPoints: 36
        },
        {
            opponent: 'PODEMOS',
            teamPoints: 78,
            opponentPoints: 36
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age,
        };
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints
        };
        this._games.push(team);
    },
};

// Invoke your addGame method on three games and print the team's updated games array.
team.addGame("Titans", 100, 98);
team.addGame("Broncos", 89, 78);
team.addGame("Whales", 77, 69);

console.log(team.games);