import readlineSync from 'readline-sync';

export const greetUser = () => {
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askName}!`);
};
