import React from 'react'
import { shallow } from 'enzyme'
import ComponentDocs from './component-docs'

describe('<ComponentDocs />', () => {
  const docs = [
    {
      path: 'foo/bar/first.jsx',
      info: { description: 'First!' }
    }, {
      path: 'foo/bar/second.jsx',
      info: { description: 'Second!' }
    }
  ]

  beforeEach(function () {
    this.component = shallow(<ComponentDocs docs={docs} />)
  })

  it('lists the descriptions', function () {
    expect(this.component.equals(
      <ul>
        <li>First!</li>
        <li>Second!</li>
      </ul>
    )).toBe(true)
  })
})
