const fs = require("fs")
const glob = require("glob")
const path = require("path")
const reactDocs = require("react-docgen")

function toCode(values) {
  if (Array.isArray(values)) {
    return `[${values.map(value => toCode(value)).join(",")}]`
  }
  if (typeof values === "object") {
    return `{${Object.keys(values).map(key => `"${key}": ${toCode(values[key])}`).join(",")}}`
  }
  if (typeof values === "string") {
    return `"${values}"`
  }
  return `${values}`
}

module.exports = function () {
  const callback = this.async()
  const resource = this.request.split("!").pop()
  const directory = path.dirname(resource)

  glob(`${directory}/**/*[^.test].jsx`, (err, files) => {
    if (err) {
      return callback(err)
    }

    const docs = files.reduce((acc, file) => {
      const contents = fs.readFileSync(file, {encoding: "utf8"})
      const componentInfo = reactDocs.parse(contents)
      componentInfo.path = file
      acc.push(componentInfo)
      return acc
    }, [])

    return callback(null, `module.exports = ${toCode(docs)}`)
  })
}
