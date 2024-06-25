const minNumber = 1;
const maxNumber = 100;
const getRandomNumber = (minRandom = minNumber, maxRandom = maxNumber) => {
  Math.ceil(Math.random() * maxRandom) + minRandom;
};

export default getRandomNumber;
