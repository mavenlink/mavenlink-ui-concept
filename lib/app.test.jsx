import React from "react"
import { shallow } from "enzyme"
import App from "./app"

describe("<App />", () => {
  beforeEach(function () {
    this.component = shallow(<App />)
  })

  it("has a <BrandLogo />", function () {
    expect(this.component.find("BrandLogo").length).toBe(1)
  })

  it("has a <ComponentDocs />", function () {
    expect(this.component.find("ComponentDocs").length).toBe(1)
  })
})
