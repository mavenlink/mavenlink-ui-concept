import React from 'react'
import { shallow } from 'enzyme'
import App from './app'

describe('<App />', () => {
  beforeEach(function () {
    this.component = shallow(<App />)
  })

  it('is just a <BrandLogo />', function () {
    expect(this.component.is('BrandLogo')).toBe(true)
  })
})
