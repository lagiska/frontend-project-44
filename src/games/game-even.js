#!/usr/bin/env node
import playGame from "../src/index.js";
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

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const question = 
