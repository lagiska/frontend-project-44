const getRandomNumber = (minNum = 1, maxNum = 100) => [Math.ceil(Math.random() * maxNum) + minNum];

export default getRandomNumber;
