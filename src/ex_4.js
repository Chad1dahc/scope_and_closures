let a = 2;

(function IIFE( ) {
  let a = 3
  console.log( a ) // 3
  console.log( this.a ) // 2
})( )

console.log( a ) // 2
