let data1=require('./first.js')
let data2=require('./second.js')

let {arr,sum}=data1

console.log('\nThe arr in the first module',arr,'\n');

console.log('The sum of two numbers in the first module',sum(34,45),'\n');

console.log('The object in the second module',data2)