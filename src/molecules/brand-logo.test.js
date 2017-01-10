import BrandLogo from "./brand-logo"
import React from "react"
import {shallow} from "enzyme"

describe("molecules <BrandLogo />", function () {
  beforeEach(function () {
    this.component = shallow(<BrandLogo />)
  })

  it("has an M", function () {
    expect(this.component.text()).toEqual("M")
  })
})
