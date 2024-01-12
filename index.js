const prompt = require('prompt-sync')({ sigint: true }); 
let temp = [];
let temp2 = 0;


function shift() {
  let date = prompt("Enter date (format 25 Feb 2024): ");
  let numberShifts = Number(prompt("How many times did you clock in/out that day? "));
  for (let i = 0; i < numberShifts; i++) {
    let clockIn = new Date(date + " " + prompt(`Clockin number ${i + 1} | Enter the date and time you clocked in: `));
    let clockOut = new Date(date + " " + prompt(`Clockout number ${i + 1} | Enter the date and time you clocked out: `));
    //let diff = Date.parse(parseInt(clockOut)) - Date.parse(parseInt(clockIn));
    
    let diff = clockOut.getTime() - clockIn.getTime()
    console.log("clockIn: ", clockIn, "clockOut: ", clockOut);
    console.log(diff);
    temp2 += diff;
    // temp.push(diff);
    console.log(temp2);
  }
    let Days = Math.floor(temp2/ (1000 * 60 * 60 * 24));
    let hours = Math.floor(temp2 / (60 * 60 * 1000) % 24);
    let min = Math.floor((temp2 / 1000 / 60) % 60);
    let sec = Math.floor((temp2 / 1000) % 60);
    console.log(`On ${date}, you have worked a total of ${hours} hours and ${min} minutes`);
}

shift();
