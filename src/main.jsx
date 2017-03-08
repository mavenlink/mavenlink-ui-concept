import React from "React"
import Category from "./category"
import Sections from "./sections"

class Main extends React.Component {
  render() {
    return (
      <div className="styleguide-main">
        <Category className="category base"></Category>
        <Category className="category components">
          <Sections className="sections" docs={this.props.docs}/>
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
