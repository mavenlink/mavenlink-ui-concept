import React from "react"
import {shallow} from "enzyme"
import BrandLogo from "./brand-logo"

describe("molecules <BrandLogo />", function () {
  beforeEach(function () {
    this.component = shallow(<BrandLogo />)
  })

  it("has an M", function () {
    expect(this.component.text()).toEqual("M")
  })
})
