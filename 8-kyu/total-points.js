/**
 * Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
 */

function points(games) {
    return games.reduce((acc, game) => { 
        const [x, y] = game.split(':').map(Number);
        return acc + (x > y ? 3 : x === y ? 1 : 0);
    }, 0);
}