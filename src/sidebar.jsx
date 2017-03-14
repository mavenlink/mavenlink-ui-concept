import React from "react"
import BrandLogo from "../lib/molecules/brand-logo"

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    padding: 20
  },
  svg: {
    alignSelf: "center",
    marginBottom: 20
  },
  input: {
    height: 20,
    padding: 5
  },
  li: {
    marginTop: 10,
    fontSize: 18
  }
}

export default function Sidebar({names, onChange, value}) {
  return (
    <div style={styles.container}>
      <div className="svg-wrapper" style={styles.svg}>
        <BrandLogo size={80} />
      </div>
      <input style={styles.input} placeholder="Filter by name" value={value} onChange={onChange} />
      <ul>
        {names.map(name => <li style={styles.li} key={name}>{name}</li>)}
      </ul>
    </div>
  )
}

Sidebar.propTypes = {
  names: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired
}
