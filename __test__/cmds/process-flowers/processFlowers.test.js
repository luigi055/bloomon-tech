const chai = require("chai");
const {
  removeUsedFlowers
} = require("./../../../cmds/produce/src/processFlowers");
const {
  getBoquetSize,
  splitFlowersRule
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
});
