const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const askMe = q => new Promise (resolve =>
  rl.question(q, response => resolve(response))
  );

const profileGen = async () => {
  const name = await askMe ("What's your handle? ");
  const activity = await askMe ("What is something you enjoy doing? ");
  const listen = await askMe ("What do you like listening to? ");
  const meal = await askMe ("What is your favorite meal? ");
  const food = await askMe ("What's your favourite thing to eat for that meal? ");
  const sport = await askMe ("What's your favorite sport? ");
  const superpower = await askMe ("What is your superpower?");
  console.log(`\nI'm ${name}! I love ${activity} while listening to ${listen}.`)
  console.log(`I really enjoy eating ${food} for ${meal} while watching ${sport}.`)
  console.log(`My SUPERPOWER?! If you really need to know, it's: ${superpower}. Don't tell anyone.`)
  rl.close()
}

profileGen();


// rl.question("What's your handle?"), (name => {
//   rl.question("What is something you enjoy doing?"), (activity => {
//     rl.question("What do you like listening to?"), (listen => {
//       rl.question("What is your favorite meal (eg: dinner, breakfast)?"), (meal => {
//         rl.question("What's your favourite thing to eat for that meal?"), (food => {
//           rl.question("Which sport is your absolute favourite?"), (sport => {
//             rl.question("What is your superpower?"), (superpower => {
//               console.log(`\nI'm ${name}! I love ${activity} while listening to ${listen}.`)
//               console.log(`I really enjoy eating ${food} for ${meal} while watching ${sport}.`)
//               console.log(`My SUPERPOWER?! If you really need to know, it's: ${superpower}. Don't tell anyone.`)
//               rl.close()
//             });
//           });
//         });
//       });
//     });
//   });
// });






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

