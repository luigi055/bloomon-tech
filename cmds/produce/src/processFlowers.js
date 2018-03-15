const { composeFlowerWithSize } = require("./splitFormat");

function removeUsedFlowers(flowers, size, ruleFlowersNeeded) {
  ruleFlowersNeeded.forEach(flower => {
    const letter = composeFlowerWithSize(flower, size);
    // use filter to clean the array since it split some undesired values
    const quantity = flower.split(/([0-9]+)/).filter(value => {
      return value >= 0;
    })[1];

    for (let i = 0; i < quantity; i++) {
      if (flowers.indexOf(letter) >= 0) {
        flowers.splice(flowers.indexOf(letter), 1);
      }
    }
  });
}

// detect the sum of the flowers that the bouquet needs
function sumOfFlowers(flowerWithQuantity) {
  return flowerWithQuantity
    .map(flower => {
      return parseInt(
        flower.split(/([0-9]+)/).filter(value => {
          return value >= 0;
        })[1]
      );
    })
    .reduce((prev, current) => {
      return prev + current;
    });
}

function removeExtraUsedFlowers(
  flowers,
  size,
  ruleFlowersNeeded,
  ruleTotalFlowers
) {
  const flowersLeft = ruleTotalFlowers - sumOfFlowers(ruleFlowersNeeded);
  const randomFlowerIndex = Math.floor(Math.random() * flowers.length);
  for (let i = 0; i < flowersLeft; i++) {
    flowers.splice(flowers.indexOf(randomFlowerIndex), 1);
  }
}

module.exports = {
  removeUsedFlowers,
  sumOfFlowers,
  removeExtraUsedFlowers
};
