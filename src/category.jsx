import React from "react"

class Category extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export default Category
