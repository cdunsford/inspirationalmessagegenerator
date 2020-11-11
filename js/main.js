//const _ = require('./_.js');

const messages = require('./messages.js');





let yesNoResponse = 'no';
let userName = '';

const readline = require("readline");
const megs = require('./messages');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Hi, I have an inspirational message for you. Are you ready? ", function(readyResponse) {
    if(readyResponse.toLowerCase() != 'yes') {
        rl.close(); 
        return;
    }

    rl.question("What is your name? ", function(uName) {
        yesNoResponse = readyResponse;
        userName = uName;

        if(yesNoResponse.toLowerCase() === 'yes') {
            console.log(`${userName} chose YES: ${yesNoResponse}`);

            //Let's generate random message
            console.log(`Hi ${userName}. ${messages.generateRandomMessage()}`);
        }
        else {
            console.log(`Oh no ${userName}, maybe next time!`);
        }
        
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});