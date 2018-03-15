const chai = require("chai");
const { enoughFlowers } = require("./../../../cmds/produce/src/compareStock");
const {
  getBoquetSize,
  splitFlowersRule
} = require("./../../../cmds/produce/src/splitFormat");
const designSpecRule = require("./../seed");
expect = chai.expect;

describe("check if there are enough flowers in stock", () => {
  const storage = designSpecRule.split("\n");
  const flowers = storage.filter(flower => flower.length === 2);

  it("should have enough flowers in stock for the rule", () => {
    const rule = "AL10a15b5c30";
    const buquetDesignSize = getBoquetSize(rule);
    const flowerWithQuantity = splitFlowersRule(rule);
    expect(enoughFlowers(flowerWithQuantity, buquetDesignSize, flowers)).to.be
      .true;
  });
  it("should not have enough flowers in stock for the rule", () => {
    const rule = "AL10a1500b5c30";
    const buquetDesignSize = getBoquetSize(rule);
    const flowerWithQuantity = splitFlowersRule(rule);
    expect(enoughFlowers(flowerWithQuantity, buquetDesignSize, flowers)).to.be
      .false;
  });
});
