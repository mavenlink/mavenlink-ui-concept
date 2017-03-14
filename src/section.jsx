import React from "react"

class Section extends React.Component {
  render() {
    return (
      <li>
        <h2 className="section-description">{this.props.component.description}</h2>
        <span className="section-path">{this.props.component.path}</span>
      </li>
    )
  }
}

export default Section
