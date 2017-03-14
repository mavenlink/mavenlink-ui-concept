import React from "react"

class Section extends React.Component {
  render() {
    const example = this.props.component.example
    return (
      <li>
        <h2 className="section-description">{this.props.component.description}</h2>
        <span className="section-path">{this.props.component.path}</span>
        <div className="section-example">
          {example.split("\n").map((item, key) => <div key={key}>{item}</div>)}
        </div>
      </li>
    )
  }
}

export default Section
