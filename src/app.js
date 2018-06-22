const ONE_DAY = 24*60*60*1000; // hours*minutes*seconds*milliseconds

let currentDate = new Date();
let electionDay = new Date('2018-11-06T12:00:00')
let diffDays = Math.round(Math.abs((currentDate.getTime() - electionDay.getTime())/(ONE_DAY)));

document.getElementById('days').innerHTML = `${diffDays} days to go!`;