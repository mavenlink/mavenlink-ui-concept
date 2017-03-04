import React from "react"
import {shallow} from "enzyme"
import Sidebar from "./sidebar"

describe("<Sidebar />", () => {
  beforeEach(function () {
    this.changeSpy = jest.fn()
    this.component = shallow(
      <Sidebar
        names={["first", "second", "third"]}
        onChange={this.changeSpy}
        value="foobar"
      />
    )
  })

  it("renders correctly", function () {
    expect(this.component.matchesElement(
      <div>
        <input value="foobar" />
        <ul>
          <li>first</li>
          <li>second</li>
          <li>third</li>
        </ul>
      </div>
    )).toBe(true)
  })

  describe("entering text into the input", () => {
    beforeEach(function () {
      this.component.find("input").simulate("change")
    })

    it("executes the change handler", function () {
      expect(this.changeSpy.mock.calls.length).toBe(1)
    })
  })
})
