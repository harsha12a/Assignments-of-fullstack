console.log('Program-1   ->Arithmetic operators')
let x=100;
let y=20
console.log('x =',x,'y =',y)
console.log('sum =',x+y) //output---> 120
console.log('diff =',y-x) //output---> -80
console.log('product =',x*y) //output---> 2000
console.log('quotient =',y/x) //output---> 0.2
console.log('remainder =',y%x) //output---> 20


console.log('\n\n\nProgram-2   ->Unary increment and decrement')
//unary increment and decrement operators
let a=10
console.log('the number is',a)
a++; //a=11 post-increment
console.log('after post-increment',a) //output---> 11
--a; //a=10 pre-decrement
console.log('after pre-decrement',a) //output---> 10
console.log('during pre-increment',++a); //output---> 11 //pre-increment
console.log('during post-decrement',a--); //output---> 11 //psot-decrement



console.log('\n\n\nProgram-3   ->Comparision operators')
let b=20,c=20
console.log('b is',b,'c is',c)
if(b>c) console.log('b is big')
else if(c>b) console.log('c is big')
else if(c==b) console.log('b is equal to c')



console.log('\n\n\nProgram-4   ->Diff between == and ===')
let d=20,e='20'
console.log('d is',d,'e is',e)
if(d===e) console.log('d is same as e') //will be printed when d and e are same datatyped and same valued
else if(d==e) console.log('d is e but different data type') //will be printed when d and e are same valued even they are not of same data type
