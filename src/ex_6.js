let foo = true
const something = (inputVariable) => {
  return inputVariable
}
if (foo) {
  let bar = foo * 2
  bar = something( bar )
  console.log( bar )
}
