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