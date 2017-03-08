import React from "React"

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

class Sections extends React.Component {
  render() {
    return (
      <ul>
        {this.props.docs.map((component, i) =>
          <Section className="section" component={component} uniqueKey={i} key={i.toString()} />
        )}
      </ul>
    )
  }
}

export default Sections
