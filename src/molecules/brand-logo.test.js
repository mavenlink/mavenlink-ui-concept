import React from "react"
import {shallow} from "enzyme"
import BrandLogo from "./brand-logo"

describe("molecules <BrandLogo />", () => {
  beforeEach(function () {
    this.component = shallow(<BrandLogo height={400} width={500} />)
  })

  it("is an <svg>", function () {
    expect(this.component.is("svg")).toBe(true)
  })

  it("has the correct height", function () {
    expect(this.component.find("svg").prop("height")).toEqual(400)
  })

  it("has the correct width", function () {
    expect(this.component.find("svg").prop("width")).toEqual(500)
  })
})
