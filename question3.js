function changePossibilities(amount, denominations) {

  // indices are the amount - values are the possibilities
  const possibilitiesArr = new Array(amount + 1).fill(0);
  possibilitiesArr[0] = 1;

  denominations.forEach(coin => {
    for (let currentAmount = coin; currentAmount <= amount; currentAmount++) {
      const remainder = currentAmount - coin;
      possibilitiesArr[currentAmount] += possibilitiesArr[remainder];
    }
  });

  return possibilitiesArr[amount];
}
