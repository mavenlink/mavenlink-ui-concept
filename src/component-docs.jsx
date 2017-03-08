import React, {Component} from "react"
import Sidebar from "./sidebar"
import Main from "./main"

export default class ComponentDocs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      docs: Array.from(props.docs),
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
      <div>
        <Sidebar
          names={this.state.docs.map(doc => doc.module.default.name)}
          onChange={this.handleChange}
          value={this.state.value}
        />
        <Main docs={this.state.docs}/>
      </div>
    )
  }
}

ComponentDocs.propTypes = {
  docs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}
