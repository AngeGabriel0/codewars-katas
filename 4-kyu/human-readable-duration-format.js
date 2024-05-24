/**
 * Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
 */

function formatDuration(seconds) {
    if (seconds === 0) return "now";
    let time = {
        year: 365 * 24 * 60 * 60,
        day: 24 * 60 * 60,
        hour: 60 * 60,
        minute: 60,
        second: 1,
    };
    let result = [];
    for (let key in time) {
        if (seconds >= time[key]) {
            let value = Math.floor(seconds / time[key]);
            result.push(`${value} ${key}${value > 1 ? "s" : ""}`);
            seconds = seconds % time[key];
        }
    }
    return result.length > 1
        ? result.slice(0, -1).join(", ") + " and " + result.slice(-1)
        : result[0];
}

console.log(formatDuration(1)); // 1 second
console.log(formatDuration(62)); // 1 minute and 2 seconds
