const getRandomNumber = (minNumber = 1, maxNumber = 100) => { return [Math.ceil(Math.random() * maxNumber) + minNumber] };

export default getRandomNumber;
