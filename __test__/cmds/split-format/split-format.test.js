const chai = require("chai");
const {
  getBoquetDesign,
  getBoquetSize,
  getTotalFlowers,
  splitFlowersRule,
  composeFlowerWithSize,
  splitFlowersCenterRule
} = require("./../../../cmds/produce/src/splitFormat");

expect = chai.expect;

describe("Split Design rule in 3 parts", () => {
  const rule = "AL10a15b5c30";

  it("getBouquetDesign should get the first 2 letters of the rule that contain the type of bouquet and the design size", () => {
    expect(getBoquetDesign(rule)).to.be.equal("AL");
  });

  it("getBouquetSize should get the uppercase letter of the size (L or S)", () => {
    expect(getBoquetSize(rule)).to.be.equal("L");
  });

  it("getTotalFlowers should get the last 2 digits of the rule that represents the total quantity of flowers", () => {
    expect(getTotalFlowers(rule))
      .to.be.a("number")
      .that.is.equal(30);
  });

  it("splitFlowersRule should split the central part of the rule and produce an array of flowers with its quantity", () => {
    expect(splitFlowersRule(rule))
      .to.be.an("array")
      .that.has.lengthOf(3);
  });
  it("composeFlowerWithSize should join a flower specie (a-z) with bouquet size (L or S)", () => {
    expect(composeFlowerWithSize("d", "S"))
      .to.be.a("string")
      .that.is.equal("dS");
  });
});
