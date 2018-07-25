// This is a simple file to show accessing global shit but like in node

const setVariable = (name, value) => {
  global[name] = value
}

const getVariable = (name) => {
  return global[name]
}

module.exports = {
  setVariable,
  getVariable,
}
