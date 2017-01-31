import React, {Component} from "react"

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
        <input placeholder="Filter by name" value={this.state.value} onChange={this.handleChange} />
        <ul>
          {this.state.docs.map(doc => <li key={doc.path}>{doc.module.default.name}</li>)}
        </ul>
      </div>
    )
  }
}

ComponentDocs.propTypes = {
  docs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}
