import React from "react"
import {shallow} from "enzyme"
import ComponentDocs from "./component-docs"

describe("<ComponentDocs />", () => {
  const docs = [
    {
      path: "foo/bar/first.jsx",
      description: "First!",
      module: {default: {name: "One"}}
    }, {
      path: "foo/bar/second.jsx",
      description: "Second!",
      module: {default: {name: "Two"}}
    }
  ]

  beforeEach(function () {
    this.component = shallow(<ComponentDocs docs={docs} />)
  })

  it("has an input", function () {
    expect(this.component.find("input").length).toBe(1)
  })

  it("lists the names", function () {
    expect(this.component.contains(
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
    )).toBe(true)
  })

  describe("entering text into the input", () => {
    beforeEach(function () {
      this.component.find("input").simulate("change", {target: {value: "n"}})
    })

    it("filters the list", function () {
      expect(this.component.contains(
        <ul>
          <li>One</li>
        </ul>
      )).toBe(true)
    })
  })
})
