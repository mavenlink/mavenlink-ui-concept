import React from "react"
import Prism from "prismjs"
import "prismjs/components/prism-javascript.js"

const styles = {
  container: {
    marginTop: 40
  },
  example: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    marginTop: 20
  },
  code: {
    whiteSpace: "pre"
  }
}

class Section extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  componentDidUpdate() {
    Prism.highlightAll()
  }
  render() {
    let example = this.props.component.example
    example = example.replace(/ /g, "\u00a0").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    return (
      <li style={styles.container} id={this.props.component.module.default.name}>
        <h2 className="section-description">{this.props.component.description}</h2>
        <span className="section-path">{this.props.component.path}</span>
        <div style={styles.example} className="section-example">
          <code style={styles.code} className="language-javascript">
            <div dangerouslySetInnerHTML={ {__html: example} } />
          </code>
        </div>
      </li>
    )
  }
}

export default Section
