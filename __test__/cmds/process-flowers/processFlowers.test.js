const chai = require("chai");
const {
  removeUsedFlowers,
  sumOfFlowers,
  removeExtraUsedFlowers
} = require("./../../../cmds/produce/src/processFlowers");
const {
  getBoquetSize,
  splitFlowersRule,
  getTotalFlowers,
  splitFlowersCenterRule
} = require("./../../../cmds/produce/src/splitFormat");
const designSpecRule = require("./../seed");

expect = chai.expect;

describe("Process flowers storage", () => {
  it("should remove 30 used flowers (without counting the total quantity of flowers) from storage", () => {
    const rule = "AL10a15b5c30";
    const buquetDesignSize = getBoquetSize(rule);
    const flowerWithQuantity = splitFlowersRule(rule);
    const storage = designSpecRule.split("\n");
    const flowers = storage.filter(flower => flower.length === 2);

    removeUsedFlowers(flowers, buquetDesignSize, flowerWithQuantity);
    expect(flowers).to.have.lengthOf(969);
  });

  it("should remove 20 used flowers rules (without counting the total quantity of flowers) from storage", () => {
    const rule = "AL10a5b5c30";
    const buquetDesignSize = getBoquetSize(rule);
    const flowerWithQuantity = splitFlowersRule(rule);
    const storage = designSpecRule.split("\n");
    const flowers = storage.filter(flower => flower.length === 2);

    removeUsedFlowers(flowers, buquetDesignSize, flowerWithQuantity);
    expect(flowers).to.have.lengthOf(979);
  });

  it("sumOfFlower should sum all the flowers in a rule", () => {
    const rule = "AL10a10b5c30";
    const flowerWithQuantity = splitFlowersRule(rule);

    expect(sumOfFlowers(flowerWithQuantity)).to.be.equal(25);
  });

  it("removeExtraUsedFlowers should remove the sum of the rule needed flowers and the rule total flowers", () => {
    const rule = "AL10a5b5c30";
    const storage = designSpecRule.split("\n");
    const flowers = storage.filter(flower => flower.length === 2);
    const buquetDesignSize = getBoquetSize(rule);
    const flowerWithQuantity = splitFlowersRule(rule);
    const totalFlowers = getTotalFlowers(rule);

    removeExtraUsedFlowers(
      flowers,
      buquetDesignSize,
      flowerWithQuantity,
      totalFlowers
    );
    // in this case should remove 10 flowers (20 rule flowers - 30 total flowers)
    expect(flowers).to.have.lengthOf(989);
  });

  it("removeUsedFlowers and removeExtraUsedFlowers should remove first the rule flowers and then the rest of the flowers (which result of rule flowers substract total flowers)", () => {
    const rule = "AL10a5b5c30";
    const storage = designSpecRule.split("\n");
    const flowers = storage.filter(flower => flower.length === 2);
    const buquetDesignSize = getBoquetSize(rule);
    const flowerWithQuantity = splitFlowersRule(rule);
    const totalFlowers = getTotalFlowers(rule);

    // it first should remove 20 flowers
    removeUsedFlowers(flowers, buquetDesignSize, flowerWithQuantity);

    // the here 10 flowers
    removeExtraUsedFlowers(
      flowers,
      buquetDesignSize,
      flowerWithQuantity,
      totalFlowers
    );
    expect(flowers).to.have.lengthOf(969);
  });

  it("sumOfFlower - total flowers comparing", () => {
    const rule = "AL15a1000b5c3000";
    const flowerWithQuantity = splitFlowersCenterRule(rule);
    expect(3000 - sumOfFlowers(flowerWithQuantity)).to.be.equal(3000 - 1020);
  });
});
