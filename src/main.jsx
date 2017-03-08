import React from "React"
import Category from "./category"

class Main extends React.Component {
  render() {
    return (
      <div className="styleguide-main">
        <Category className="category base"></Category>
        <Category className="category components">
          <ul>
            {this.props.docs.map((component, i) =>
              <li className="section" key={i}>
                <h2 className="section-description">{component.description}</h2>
                <span className="section-path">{component.path}</span>
              </li>
            )}
          </ul>
        </Category>
        <Category className="category modules"></Category>
        <Category className="category idioms"></Category>
      </div>
    )
  }
}

Main.propTypes = {
  docs: React.PropTypes.array.isRequired
}

export default Main
