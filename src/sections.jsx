import React from "react"
import Section from "./section"

class Sections extends React.Component {
  render() {
    return (
      <ul>
        {this.props.docs.map((component, i) =>
          <Section className="section" component={component} key={i.toString()}>
          </Section>
        )}
      </ul>
    )
  }
}

export default Sections
