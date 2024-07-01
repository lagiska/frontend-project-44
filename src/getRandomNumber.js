const getRandomNumber = (minNumber = 1, maxNumber = 100) => [Math.ceil(Math.random() * maxNumber) + minNumber];

export default getRandomNumber;
