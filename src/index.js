import readlineSync from "readline-sync";

export const playGame = (rule, taskAndAnswer) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);

  console.log(rule);
  let correctAnswersCount = 0;
  const roundsCount = 3;
  while (correctAnswersCount < roundsCount) {
    
  }
};
