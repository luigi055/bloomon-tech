const {
  getTotalFlowers,
  getBoquetDesign,
  getBoquetSize,
  splitFlowersRule,
  splitFlowersCenterRule
} = require("./src/splitFormat");

const { enoughFlowers } = require("./src/compareStock");
const {
  removeUsedFlowers,
  removeExtraUsedFlowers,
  sumOfFlowers
} = require("./src/processFlowers");

function addStreamStructure(data) {
  const values = data.split("\n");
  const rules = values.filter(rule => rule.length > 2);

  const flowers = values.filter(flower => flower.length === 2);

  console.log(
    `flowers in storage ${flowers.length}`,
    `rules to process ${rules.length}`
  );
  // Compare if Buquet Design has the required amount of flowers
  const completedRules = rules.filter(rule => {
    // Detect the total amount of flowers
    const totalFlowers = getTotalFlowers(rule);
    // Detect buquet design uppercase letter with Size (L = Large and S = Small)
    const buquetDesign = getBoquetDesign(rule);

    // Detect the Buquet design design. two choices (L = Large and S = Small)
    const buquetDesignSize = getBoquetSize(rule);

    // Detect the flowers with its quantities <Array>
    const flowerWithQuantity = splitFlowersRule(rule);

    // if the sum of the flowers is higher than the total of flowers
    // Specified in the rule the format is invalid
    if (!(sumOfFlowers(flowerWithQuantity) - totalFlowers <= 0)) {
      console.log(
        `The format of ${rule} is incorrect. The sum of the flowers must be lower than the total`
      );
      return false;
    }

    // Compare with available flowers in stock
    const passedSpec = enoughFlowers(
      flowerWithQuantity,
      buquetDesignSize,
      flowers
    );

    // remove used flowers -----------------------
    removeUsedFlowers(flowers, buquetDesignSize, flowerWithQuantity);
    // remove used flowers -----------------------

    // ---------------------------------
    // Add and remove needed flowers if the sum of flowers is different
    // To the total of flowers in the rule
    removeExtraUsedFlowers(
      flowers,
      buquetDesignSize,
      flowerWithQuantity,
      totalFlowers
    );
    // ---------------------------------

    return passedSpec;
  });

  console.log(completedRules);
  console.log(
    `available flowers in storage ${flowers.length}`,
    `processed rules ${completedRules.length}`
  );
  return;
}

module.exports = addStreamStructure;
