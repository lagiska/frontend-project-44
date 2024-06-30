#!/usr/bin/env node
import readlineSync from "readline-sync";
import getRandomNumber from "../src/getRandomNumber.js";

let askName;
console.log("Welcome to the Brain Games!");
const greetUser = () => {
  askName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${askName}!`);
  return askName;
};
greetUser();

let userName = askName;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(rule);

const roundsPlayed = 3;
let correctAnswersCount = 0;

const taskAndAnswer = () => {
  while (correctAnswersCount < roundsPlayed) {
    const question = getRandomNumber();
    let correctAnswer;
    if (randomNumber % 2 === 0) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }
    console.log("Question: " + question);
    const getAnswer = readlineSync.question("Your answer: ");
    if (getAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(
        `"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

taskAndAnswer();
