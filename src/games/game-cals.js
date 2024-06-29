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

let userName = askName;
const rule = "What is the result of the expression?";
const operands = ["+", "-", "*"];