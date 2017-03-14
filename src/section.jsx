import React from "react"
import Prism from "prismjs"
import "prismjs/components/prism-javascript.js"

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
      <li>
        <h2 className="section-description">{this.props.component.description}</h2>
        <span className="section-path">{this.props.component.path}</span>
        <div className="section-example">
          <code style={{whiteSpace: "pre"}} className="language-javascript">
            <div dangerouslySetInnerHTML={ {__html: example} } />
          </code>
        </div>
      </li>
    )
  }
}

export default Section
