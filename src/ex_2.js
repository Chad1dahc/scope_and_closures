let j
function foo() {
  function bar(a) {
    j = 3 // changing the `i` in the enclosing scope's for-loop
    console.log( a + j )
  }

  for (let i=0; i<10; i++) {
    bar( i * 2 ) // oops, infinite loop ahead!
  }
}

foo()
