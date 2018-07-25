let localGlobal = 5
function lexscope() {
  function consolelog() {
    localGlobal = 6
    return localGlobal
  }
  return consolelog()
}
lexscope()
