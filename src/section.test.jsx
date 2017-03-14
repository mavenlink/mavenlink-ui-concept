import React from "react"
import {shallow} from "enzyme"
import Section from "./section"

describe("<Section />", () => {
  beforeEach(function () {
    const comp = {
      description: "my logo",
      path: "/path/to/brand-logo.jsx"
    }
    this.component = shallow(
      <Section className="abc" component={comp} key={"abcxyz"} />
    )
  })

  describe("section", () => {
    it("renders component with className", function () {
      expect(this.component.find('li').length).toEqual(1)
    })

    it("renders component section descriptions", function () {
      const el = this.component.find('.section-description')
      expect(el.length).toEqual(1)
    })

    it("renders component section paths", function () {
      const el = this.component.find('.section-path')
      expect(el.length).toEqual(1)
    })
  })
})
