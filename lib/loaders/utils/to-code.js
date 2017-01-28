/* eslint-disable no-use-before-define */

function toCodeArray(array) {
  return `[${array.map(item => toCode(item)).join(",")}]`
}

function toCodeObject(object) {
  return `{${Object.keys(object).map(key => `"${key}": ${toCode(object[key])}`).join(",")}}`
}

function toCode(values) {
  if (Array.isArray(values)) {
    return toCodeArray(values)
  }
  if (typeof values === "object") {
    return toCodeObject(values)
  }
  if (typeof values === "string" && !/require(.+)/.test(values)) {
    return `"${values}"`
  }
  return `${values}`
}

module.exports = toCode
