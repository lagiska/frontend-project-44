#!/usr/bin/env node
import playGame from "../src/index.js";
import readlineSync from "readline-sync";
import getRandomNumber from "../src/getRandomNumber.js";


const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const task = getRandomNumber();
let correctAnswer;
if (task % 2 === 0) {
  correctAnswer = "yes";
} else {
  correctAnswer = "no";
}

const gameEven = () => {
  playGame(rule, correctAnswer, task)
};

export default gameEven;
