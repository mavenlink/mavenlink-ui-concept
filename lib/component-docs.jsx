import React from 'react'

export default function ComponentDocs({ docs }) {
  return (
    <ul>
      {Object.keys(docs).map((path) => {
        const doc = docs[path][0]
        return <li key={path}>{doc.description}</li>
      })}
    </ul>
  )
}

ComponentDocs.propTypes = {
  docs: React.PropTypes.objectOf(React.PropTypes.array).isRequired
}
