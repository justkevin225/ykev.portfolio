const randomInt = (a: number, b: number) => {
  return Math.random() * (b - a + 1) + a;
};

export default randomInt;
