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

  it("lists the names", function () {
    expect(this.component.equals(
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
    )).toBe(true)
  })
})
