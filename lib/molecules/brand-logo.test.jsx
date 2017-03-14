import React from "react"
import {shallow} from "enzyme"
import BrandLogo from "./brand-logo"

describe("molecules <BrandLogo />", () => {
  beforeEach(function () {
    //Styleguide start
    const defaultProps = {
      size: 400
    }
    this.component = shallow(<BrandLogo {...Object.assign({}, defaultProps, {})} />)
    //Styleguide end
  })

  it("is an <SvgIcon />", function () {
    expect(this.component.is("SvgIcon")).toBe(true)
  })

  it("has the correct height", function () {
    expect(this.component.find("SvgIcon").prop("height")).toEqual(400)
  })

  it("has the correct width", function () {
    expect(this.component.find("SvgIcon").prop("width")).toEqual(400)
  })
})
