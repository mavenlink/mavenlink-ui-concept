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

  describe("the sidebar", () => {
    beforeEach(function () {
      this.sidebar = () => this.component.find("Sidebar")
    })

    it("has a list of names", function () {
      expect(this.sidebar().prop("names")).toEqual(["One", "Two"])
    })

    it("has an empty value", function () {
      expect(this.sidebar().prop("value")).toBe("")
    })

    describe("entering text", () => {
      beforeEach(function () {
        this.sidebar().simulate("change", {target: {value: "n"}})
      })

      it("filters the names", function () {
        expect(this.sidebar().prop("names")).toEqual(["One"])
      })

      it("sets the value", function () {
        expect(this.sidebar().prop("value")).toBe("n")
      })
    })
  })
})
