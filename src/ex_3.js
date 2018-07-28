function foo() {
  function bar(a) {
    let i = 3 // changing the `i` in the enclosing scope's for-loop
    console.log( a + i )
  }
  let test = true
  if (test) {
    for (let i=0; i<10; i++) {
      bar( i * 2 ) // oops, infinite loop ahead!
    }
  }
}

foo()
