import React from "react"
import ComponentDocs from "./component-docs"
import examples from "!!./loaders/examples!../lib" // eslint-disable-line
import documentation from "!!./loaders/documentation!../lib" // eslint-disable-line

export default function App() {
  return (
    <div>
      <ComponentDocs docs={documentation} examples={examples} />
    </div>
  )
}
