import React from "React"
import Section from "./section"

class Sections extends React.Component {
  render() {
    return (
      <ul>
        {this.props.docs.map((component, i) =>
          <Section className="section" component={component} key={i.toString()} />
        )}
      </ul>
    )
  }
}

export default Sections