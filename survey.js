const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askMe = q => new Promise(resolve =>
  rl.question(q, response => resolve(response))
);

const profileGen = async () => {
  const name = await askMe("What's your handle? ");
  const activity = await askMe("What is something you enjoy doing? ");
  const listen = await askMe("What do you like listening to? ");
  const meal = await askMe("What is your favorite meal? ");
  const food = await askMe("What's your favourite thing to eat for that meal? ");
  const sport = await askMe("What's your favorite sport? ");
  const superpower = await askMe("What is your superpower? ");

  console.log(`\nI'm ${name}! I love ${activity} while listening to ${listen}.`)
  console.log(`I really enjoy eating ${food} for ${meal} while watching ${sport}.`)
  console.log(`My SUPERPOWER?! If you really need to know, it's: ${superpower}. Don't tell anyone.`)

  rl.close()
}

profileGen();
