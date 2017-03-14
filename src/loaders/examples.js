const fs = require("fs")
const glob = require("glob")
const path = require("path")
const reactDocs = require("react-docgen")
const {toCode} = require("./utils")

// Essentially, this wraps 3-step process of:
// 1. grab all the contents between styleguide delimiters
// 2. trim outer newlines
// 3. convert to a react friendly render
function parseExamples(str) {
  let contents = grabStyleguideChunk(str)
  contents = trimNewlines(contents)
  contents = convertToRender(contents)
  return contents
}

function grabStyleguideChunk(str) {
  const regex = /styleguide.start([^]*)\/\/styleguide.end/i
  const match = str.match(regex)

  if (match) {
    return match[1]
  } else {
    console.error("Issue: Check spec has proper formatting I.e shallow|mount calls and styleguide start/end tags")
    return null
  }
}

function trimNewlines(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

function convertToRender(str) {
  const enzymeRegex = /([^]*)(^.*(shallow|mount).*$)([^]*)/m
  let match = enzymeRegex.exec(str)

  if (match) {
    //before and after the line match
    const before = match[1]
    const after = match[4]
    after.replace(/\/\/$/, '')

    // matches actual line like this.component = shallow(...
    const line = match[2]

    // shallow( or mount( becomes return(
    let swapped = line.replace(/(shallow|mount)/, "return") 

    // strip out `this.component =` if it's used like this.component = shallow(...
    swapped = swapped.replace(/this.component.*=/, "")

    //We need to wrap our return with react render call
    const renderStart = "render() {\n"
    const renderEnd = "\n}"

    return JSON.stringify(`${before}\n${renderStart}\n${swapped}\n${after}\n${renderEnd}`)
  } else {
    console.error("Issue: Check spec has proper formatting I.e shallow|mount calls and styleguide start/end tags")
    return null
  }
}

module.exports = function () {
  const callback = this.async()
  const resource = this.request.split("!").pop()
  const directory = path.dirname(resource)

  glob(`${directory}/**/*.test.jsx`, (err, files) => {
    if (err) {
      return callback(err)
    }

    const docs = files.map((file) => {
      const raw = fs.readFileSync(file, {encoding: "utf8"})
      return parseExamples(raw)
    })

    return callback(null, `module.exports = ${JSON.stringify(docs)}`)
  })
}
