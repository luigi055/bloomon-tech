const chai = require("chai");
const designSpecRule = require("./seed");

expect = chai.expect;

describe("Split design spec rule", () => {
  const rule = designSpecRule.split("\n");
  const designSpec = rule.filter(rule => rule.length > 2);
  const flowers = rule.filter(flower => flower.length === 2);
  it("should split the seed data into Design rules and Flowers", () => {
    expect(designSpec)
      .to.be.an("array")
      .that.have.lengthOf(6);
    expect(flowers)
      .to.be.an("array")
      .that.has.lengthOf(999);
  });
});
