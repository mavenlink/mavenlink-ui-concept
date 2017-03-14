import React from "react"
import Category from "./category"
import Sections from "./sections"

const styles = {
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#001c33",
    margin: 0,
    color: "#e3e6e8",
    fontFamily: "helvetica",
    height: 80,
    lineHeight: "80px",
    padding: "0 20px"
  },
  body: {
    marginTop: 80
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="main" style={styles.container}>
        <header style={styles.header}>
          <h1>Mavenlink UI</h1>
        </header>
        <section style={styles.body}>
          <Category className="category base"></Category>
          <Category className="category components">
            <Sections className="sections" docs={this.props.docs} examples={this.props.examples} />
          </Category>
          <Category className="category modules"></Category>
          <Category className="category idioms"></Category>
        </section>
      </div>
    )
  }
}

Main.propTypes = {
  docs: React.PropTypes.array.isRequired
}

export default Main
