const {
  getTotalFlowers,
  getBoquetDesign,
  getBoquetSize,
  splitFlowersRule
} = require("./src/splitFormat");

const { enoughFlowers } = require("./src/compareStock");
const { removeUsedFlowers } = require("./src/processFlowers");

function addStreamStructure(data) {
  const values = data.split("\n");
  const rules = values.filter(rule => rule.length > 2);

  const flowers = values.filter(flower => flower.length === 2);

  console.log(
    `flowers length should be 999 ${flowers.length}`,
    `rules should be 6 ${rules.length}`
  );
  console.log(flowers.length);
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

    // Compare with available flowers in stock
    const passedSpec = enoughFlowers(
      flowerWithQuantity,
      buquetDesignSize,
      flowers
    );

    // remove used flowers -----------------------
    removeUsedFlowers(flowers, buquetDesignSize, flowerWithQuantity);
    // remove used flowers -----------------------

    return passedSpec;
  });

  return completedRules;
}

module.exports = addStreamStructure;
