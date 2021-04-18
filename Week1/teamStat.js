//Team Stats
//We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.
//Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

/* Team Object */
const team = {
  _players: [],
  _games: [],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer = (firstName, lastName, age) => {
    //create a player object, and add them to the team‘s players array.
    return team._players.push({
      firstname: firstName,
      lastname: lastName,
      Age: age
    });
  }
}

const players = {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 11
}

const games = {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
}

//test
//Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.