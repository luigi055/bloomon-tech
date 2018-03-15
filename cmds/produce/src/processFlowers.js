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

module.exports = {
  removeUsedFlowers
};
