// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}

