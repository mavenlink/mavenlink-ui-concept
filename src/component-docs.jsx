import React, {Component} from "react"
import Sidebar from "./sidebar"
import Main from "./main"

const styles = {
  container: {
    display: "flex"
  }
}

export default class ComponentDocs extends Component {
  constructor(props) {
    super(props)

    const d = Array.from(props.docs)
    const docsMerged = []
    d.forEach((value, index) => {
      const obj = value
      obj.example = props.examples[index]
      docsMerged.push(obj)
    })

    this.state = {
      docs: docsMerged,
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      docs: this.props.docs.filter((item) => {
        const pattern = new RegExp(event.target.value, "i")
        return pattern.test(item.module.default.name)
      })
    })
  }

  render() {
    return (
      <div style={styles.container}>
        <Sidebar
          names={this.state.docs.map(doc => doc.module.default.name)}
          onChange={this.handleChange}
          value={this.state.value}
        />
        <Main docs={this.state.docs} />
      </div>
    )
  }
}

ComponentDocs.propTypes = {
  docs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  examples: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
}
