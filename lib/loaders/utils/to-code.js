module.exports = function toCode(values) {
  if (Array.isArray(values)) {
    return `[${values.map(value => toCode(value)).join(",")}]`
  }
  if (typeof values === "object") {
    return `{${Object.keys(values).map(key => `"${key}": ${toCode(values[key])}`).join(",")}}`
  }
  if (typeof values === "string" && !/require(.+)/.test(values)) {
    return `"${values}"`
  }
  return `${values}`
}
