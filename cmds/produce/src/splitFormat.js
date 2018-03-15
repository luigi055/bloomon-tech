// get the last 2 numbers of the rule that represents the total quantity of flowers. input - <string> / output <string>
function getTotalFlowers(rule) {
  return parseInt(rule.substring(rule.length - 2, rule.length));
}

// Detect the first 2 numbers of the rule that represents the buquet design
function getBoquetDesign(rule) {
  return rule.substring(0, 2);
}

// Detect the Buquet design design. two choices (L = Large and S = Small)
function getBoquetSize(rule) {
  return rule.substring(1, 2);
}

// Detect the flowers with its quantities. return an <Array>
function splitFlowersRule(rule) {
  return rule
    .substring(2, rule.length - 2)
    .split(/(\d+\w)/)
    .filter(spec => spec.length > 0);
}

function splitFlowersCenterRule(rule) {
  const flowersRule = rule
    .substring(2, rule.length - 2)
    .split(/(\d+\w)/)
    .filter(spec => spec.length > 0);

  flowersRule.pop();
  return flowersRule;
}

function composeFlowerWithSize(flowerWithQuantity, size) {
  return flowerWithQuantity.substring(flowerWithQuantity.length - 1) + size;
}

module.exports = {
  getTotalFlowers,
  getBoquetDesign,
  getBoquetSize,
  splitFlowersRule,
  composeFlowerWithSize,
  splitFlowersCenterRule
};
