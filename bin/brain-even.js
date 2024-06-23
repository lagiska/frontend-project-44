#!/usr/bin/env node
import readlineSync from "readline-sync";

let askName;
console.log("Welcome to the Brain Games!");
const greetUser = () => {
  askName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${askName}!`);
  return askName;
};
greetUser();

let userName = askName;
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const roundsPlayed = 3;
let correctAnswersCount = 0;

const taskAndAnswer = () => {
  while (correctAnswersCount < roundsPlayed) {
    const getRandomNumber = Math.ceil(Math.random() * 100);
    let correctAnswer;
    if (getRandomNumber % 2 === 0) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }
    console.log("Question: " + getRandomNumber);
    const getAnswer = readlineSync.question("Your answer: ");
    if (getAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(`"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

taskAndAnswer();
