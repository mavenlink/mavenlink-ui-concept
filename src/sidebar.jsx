import React from "react"

export default function Sidebar({names, onChange, value}) {
  return (
    <div>
      <input placeholder="Filter by name" value={value} onChange={onChange} />
      <ul>
        {names.map(name => <li key={name}>{name}</li>)}
      </ul>
    </div>
  )
}

Sidebar.propTypes = {
  names: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired
}
