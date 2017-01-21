import React from "react"

export default function ComponentDocs({docs}) {
  return (
    <ul>
      {docs.map(doc => <li key={doc.path}>{doc.info.description}</li>)}
    </ul>
  )
}

ComponentDocs.propTypes = {
  docs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}
