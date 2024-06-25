const minNumber = 1;
const maxNumber = 100;
const getRandomNumber = (minRandom = minNumber, maxRandom = maxNumber) => {
  let randomNum = Math.ceil(Math.random() * maxRandom) + minRandom;
  return randomNum;
};

export default getRandomNumber;
