import React from "React"

class Sections extends React.Component {
  render() {
    return (
      <ul>
        {this.props.docs.map((component, i) =>
          <li className="section" key={i}>
            <h2 className="section-description">{component.description}</h2>
            <span className="section-path">{component.path}</span>
          </li>
        )}
      </ul>
    )
  }
}

export default Sections
