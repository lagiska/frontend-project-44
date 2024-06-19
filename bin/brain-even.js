import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const greetUser = () => {
  const askName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${askName}!`);
  return askName;
};
greetUser();

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(task);
const getRandomNumber = Math.floor(Math.random() * 100);
const isNumberEven = getRandomNumber % 2 === 0;
const getAnswer = readlineSync.question("Your answer: ");

const taskAndAnswer = () => {
  console.log("Question: ", getRandomNumber);
  if (
    (isNumberEven === 0 && getAnswer !== "yes" || isNumberEven !== 0 && getAnswer === "no")
  ) {
    console.log(
      `'${getAnswer}' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${askName}`
    );
  }
  for (let i = 0; i < 3; i++) {
    console.log("Question: ", getRandomNumber);
    if (isNumberEven === 0 && getAnswer === "yes" || isNumberEven !== 0 && getAnswer === "no") {
      console.log("Correct!");
    }
    console.log(`Congratulations, ${askName}!`);
  }
};

taskAndAnswer();
