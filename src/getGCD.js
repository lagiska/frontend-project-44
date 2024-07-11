const getGCD = (num1, num2) => {
  const minNum = num1 > num2 ? num2 : num1;
  let gcd = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

export default getGCD;