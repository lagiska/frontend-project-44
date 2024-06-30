import readlineSync from "readline-sync";

const playGame = (rule, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);
  let correctAnswersCount = 0;
  const roundsCount = 3;
  while (correctAnswersCount < roundsCount) {
    //const question
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${getAnswer}' is wrong answer ;(. Correct answer was "${correctAnswer}".`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
