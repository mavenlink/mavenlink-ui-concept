const fs = require("fs")
const glob = require("glob")
const path = require("path")
const reactDocs = require("react-docgen")
const {toCode} = require("./utils")

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
      componentInfo.module = `require('${file}')`
      acc.push(componentInfo)
      return acc
    }, [])

    return callback(null, `module.exports = ${toCode(docs)}`)
  })
}
