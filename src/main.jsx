import React from "React"

class Main extends React.Component {
  render() {
    return (
      <div className="styleguide-main">
        <div className="category base"></div>
        <div className="category components">
        <ul>
          {this.props.docs.map((component, i) =>
            <li className="section" key={i}>
              <h2 className="section-description">{component.description}</h2>
              <span className="section-path">{component.path}</span>
            </li>
          )}
        </ul>
        </div>
        <div className="category modules"></div>
        <div className="category idioms"></div>
      </div>
    )
  }
}

Main.propTypes = {
  docs: React.PropTypes.array.isRequired
}

export default Main
