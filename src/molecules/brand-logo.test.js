import React from "react"
import {shallow} from "enzyme"
import BrandLogo from "./brand-logo"

describe("<BrandLogo />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<BrandLogo />)
  })

  it("has an M", () => {
    expect(component.text()).toEqual("M")
  })
})
