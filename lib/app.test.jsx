import React from "react"
import {shallow} from "enzyme"
import App from "./app"

describe("<App />", () => {
  beforeEach(function () {
    this.component = shallow(<App />)
  })

  it("has a <ComponentDocs />", function () {
    expect(this.component.find("ComponentDocs").length).toBe(1)
  })
})
