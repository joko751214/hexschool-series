var a = 1;
var b = {
  a: a*100
};

function test() {
  console.log('1a:', a);
  console.log('1b:', b.a);
  var a = 7;
  console.log('2a:', a);
  a++;
  var a;
  inner(b, b.a);
  console.log('4a:', a);
  function inner(innerB, innerB_A) {
    console.log('3a:', a);
    a = 30;
    innerB_A = 300;
    innerB.a = innerB_A;
    console.log('2b:', b.a);
    innerB_A = 400;
  }
  
}

test();
console.log('5a:', a);
a = 70;
console.log('6a:', a);
console.log('3b:', b.a);

