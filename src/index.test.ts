import { hammingDistance } from ".";
import "mocha";
import { expect } from "chai";

describe("hammingDistance", () => {
  it("should support buffers", () => {
    const distance = hammingDistance(Buffer.from("0000", "hex"), Buffer.from("000F", "hex"))
    expect(distance).to.equal(4)
  })

  it("should support hex strings", () => {
    const distance = hammingDistance("0000", "000F")
    expect(distance).to.equal(4)
  })

  it("should support mixed-case hex strings", () => {
    const distance = hammingDistance("abcd", "ABCD")
    expect(distance).to.equal(0)
  })
})