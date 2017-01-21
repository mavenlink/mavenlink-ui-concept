import React from 'react'
import { shallow } from 'enzyme'
import ComponentDocs from './component-docs'

describe('<ComponentDocs />', () => {
  const docs = {
    'foo/bar/first.jsx': [{ description: 'First!' }],
    'foo/bar/second.jsx': [{ description: 'Second!' }]
  }

  beforeEach(function () {
    this.component = shallow(<ComponentDocs docs={docs} />)
  })

  it('is a list of descriptions', function () {
    expect(this.component.equals(
      <ul>
        <li>First!</li>
        <li>Second!</li>
      </ul>
    )).toBe(true)
  })
})
