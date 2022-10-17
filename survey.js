const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const profileBuilder = {

questions:              ["What's your name?", "What is something you enjoy doing?", "What do you like to listen to while doing that?", "What is your favorite meal (eg: dinner, breakfast?", "What's your favourite thing to eat for that meal?", "Which sport is your absolute favourite?","What is your superpower?"],

answers:                {},

profileB:                function(){

  
}





}

const profileFacts = {};

rl.question("What's your name?", (answer) => {
  profileFacts.name = answer;
  rl.close();
  // console.log(profileFacts);
});

rl.question("What is something you enjoy doing?", (answer) => {
  profileFacts.activity = answer;
  rl.close();
  console.log(profileFacts);
});



// });rl.question('Are transformers what people really prize when they talk about tube sound?', (answer) => {
//   console.log(`Interesting: ${answer}`);
  
//   rl.close();
// });rl.question('Are transformers what people really prize when they talk about tube sound?', (answer) => {
//   console.log(`Interesting: ${answer}`);
  
//   rl.close();
// });rl.question('Are transformers what people really prize when they talk about tube sound?', (answer) => {
//   console.log(`Interesting: ${answer}`);
  
//   rl.close();
// });rl.question('Are transformers what people really prize when they talk about tube sound?', (answer) => {
//   console.log(`Interesting: ${answer}`);
  
//   rl.close();
// });

console.log(profileFacts);