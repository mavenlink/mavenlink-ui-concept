import React from "react"
import {shallow} from "enzyme"
import Sections from "./sections"

describe("<Sections />", () => {
  beforeEach(function () {
    const docs = [{
      description: "this is a logo",
      path: "/path/to/icon.jsx"
    },{
      description: "this is an icon",
      path: "/path/to/icon.jsx"
    }]
    this.component = shallow(
      <Sections  className="sections" docs={docs}/>
    )
  })

  describe("components section", () => {
    it("renders component sections", function () {
      expect(this.component.find('.section').length).toEqual(2)
    })
  })
})
