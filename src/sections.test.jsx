import React from "React"
import {shallow} from "enzyme"
import Sections from "./sections"

describe("<Sections />", () => {
  beforeEach(function () {
    const docs = [{
      description: "this is a logo",
      path: "/path/to/brand-logo.jsx",
      props: {
        title: {
          required: true,
          description: "the title"
        },
        height: {
          required: true,
          description: "the height"
        }
      }
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
      expect(this.component.find('.section .section-description').length).toEqual(2)
    })

    it("renders component section descriptions", function () {
      expect(this.component.find('.section .section-description').length).toEqual(2)
    })
  })
})
