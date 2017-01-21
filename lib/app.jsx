import React from 'react'
import ComponentDocs from './component-docs'
import { BrandLogo } from '../src'
import documentation from './loaders/jsdoc!../src' // eslint-disable-line

export default function App() {
  return (
    <div>
      <BrandLogo size={200} />
      <ComponentDocs docs={documentation} />
    </div>
  )
}
