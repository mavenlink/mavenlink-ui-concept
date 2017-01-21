const fs = require("fs")
const glob = require("glob")
const path = require("path")

module.exports = function () {
  const callback = this.async()
  const resource = this.request.split("!").pop()
  const directory = path.dirname(resource)

  glob(`${directory}/**/*.jsx`, (err, files) => {
    if (err) {
      return callback(err)
    }

    const docs = files.reduce((acc, file) => {
      const contents = fs.readFileSync(file, {encoding: "utf8"})
      return acc
    }, [])

    return callback(null, `module.exports = ${JSON.stringify(docs)}`)
  })
}
