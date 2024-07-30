import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const RULE = 'What is the result of the expression?';

const OPERATORS = ['+', '-', '*'];

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const createRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const operator = OPERATORS[getRandomNumber(0, 3)];

  const task = `${number1} ${operator} ${number2}`;

  const getAnswer = () => {
    switch (operator) {
      case '+': return add(number1, number2);

      case '-': return subtract(number1, number2);

      case '*': return multiply(number1, number2);

      default: return undefined;
    }
  };

  const answer = getAnswer();

  return [task, String(answer)];
};

const gameCalc = () => {
  playGame(RULE, createRound);
};

export default gameCalc;
