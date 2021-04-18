//Team Stats
//We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.
//Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

/* Team Object */
const team = {
  _players: [],
  _games: [],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer: (firstName, lastName, age) => {
    //create a player object, and add them to the team‘s players array.
    return team._players.push({
      firstname: firstName,
      lastname: lastName,
      Age: age
    });
  },
  addGame: (opponentName, teamPoints, opponentPoints) => {
    return team._games.push({
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    });
  }
}

// addGame that:

// takes in an opponent’s name,
// your team’s points,
// the opponent’s points,
// creates a game object,
// adds the game object to your team‘s games array.

// 9.
// Invoke your addGame method on three games and print the team‘s updated games array.

//test data
const player1 = {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
}

const player2 = {
  firstName: 'Steph',
  lastName: 'Curry',
  age: 28
}

const player3 = {
  firstName: 'Lisa',
  lastName: 'Leslie',
  age: 44
}

const player4 = {
  firstName: 'Bugs',
  lastName: 'Bunny',
  age: 76
}

const games = {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}

const games2 = {
  opponent: 'Canucks',
  teamPoints: 10,
  opponentPoints: 2
}

const games3 = {
  opponent: 'Oylers',
  teamPoints: 9,
  opponentPoints: 7
}

const games4 = {
  opponent: 'Maple Leafs',
  teamPoints: 4,
  opponentPoints: 7
}

team._players.push(player1, player2, player3, player4);
console.log(team._players);

team._games.push(games, games2, games3, games4);
console.log(team.games);