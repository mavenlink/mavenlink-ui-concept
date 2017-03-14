import React from "react"
import {shallow} from "enzyme"
import Main from "./main"

describe("<Main />", () => {
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
      <Main docs={docs}/>
    )
  })

  describe("basic rendering", () => {
    it("renders styleguide main wrapper", function () {
      expect(this.component.find('.main').length).toEqual(1)
    })

    it("renders main with base", function () {
      expect(this.component.find('.base').length).toEqual(1)
    })

    it("renders main with components", function () {
      expect(this.component.find('.components').length).toEqual(1)
    })

    it("renders main with modules", function () {
      expect(this.component.find('.modules').length).toEqual(1)
    })

    it("renders main with idioms", function () {
      expect(this.component.find('.idioms').length).toEqual(1)
    })
  })
})
