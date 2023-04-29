const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const profileBuilder = function() {
  let answers = [];
const name = rl.question("What's your name?", (answer) => {
  rl.close();
  answers.push(answer);
 
})
return answers;
}



console.log(profileBuilder());



// questions:            [, "What is something you enjoy doing?", 
//                        "What do you like to listen to while doing that?",
//                        "What is your favorite meal (eg: dinner, breakfast)?", "What's your favourite thing to eat for that meal?", "Which sport is your absolute favourite?","What is your superpower?"],

// answerKeys:             ["name", "activity", "listen", "meal", "food", "sport", "superpower"],

// answers:                {},

// profileB:               function(){
//                           for (let i = 0; i < this.answerKeys.length; i++) {
//                           let aKey = this.answerKeys[i];

//                           let qAnswer = rl.question(this.questions[i], (answer) => {
//                           this.answers[aKey] = answer;
//                           console.log(this.answers);
//   });






// const profileFacts = {};

// rl.question("What's your name?", (answer) => {
//   profileFacts.name = answer;
//   rl.close();
//   // console.log(profileFacts);
// });

// rl.question("What is something you enjoy doing?", (answer) => {
//   profileFacts.activity = answer;
//   rl.close();
//   console.log(profileFacts);
// });



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

