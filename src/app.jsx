import React from "react"
import ComponentDocs from "./component-docs"
import documentation from "!!./loaders/documentation!../src" // eslint-disable-line

export default function App() {
  return (
    <div>
      <ComponentDocs docs={documentation} />
    </div>
  )
}