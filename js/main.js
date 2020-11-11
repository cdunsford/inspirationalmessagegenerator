

let yesNoResponse = 'no';
let userName = '';

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Hi, I have an inspirational message for you. Are you ready? ", function(readyResponse) {
    rl.question("What is your name? ", function(uName) {
        yesNoResponse = readyResponse;
        userName = uName;

        if(yesNoResponse.toLowerCase() === 'yes') {
            console.log(`${userName} chose YES: ${yesNoResponse}`);
        }
        else {
            console.log(`${userName} chose NO: ${yesNoResponse}`);
        }
        
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});