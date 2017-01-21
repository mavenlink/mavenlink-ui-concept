import React from "react"
import { shallow } from "enzyme"
import SvgIcon from "./svg-icon"

describe("molecules <SvgIcon />", () => {
  beforeEach(function () {
    this.component = shallow(
      <SvgIcon height={100} width={200} viewBox="0 0 100 100" title="Foobar">
        <circle cx="100" cy="100" r="100" />
      </SvgIcon>
    )
  })

  it("is an <svg>", function () {
    expect(this.component.is("svg")).toBe(true)
  })

  it("has the correct height", function () {
    expect(this.component.find("svg").prop("height")).toEqual(100)
  })

  it("has the correct width", function () {
    expect(this.component.find("svg").prop("width")).toEqual(200)
  })

  it("has the correct viewBox", function () {
    expect(this.component.find("svg").prop("viewBox")).toEqual("0 0 100 100")
  })

  it("has the provided title", function () {
    expect(this.component.contains(<title>Foobar</title>)).toEqual(true)
  })

  it("has the provided children", function () {
    expect(this.component.contains(<circle cx="100" cy="100" r="100" />)).toEqual(true)
  })
})
