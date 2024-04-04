//Program-6
console.log('Program-6 ---> Sum of digtis of a number')
let dig=1234
let dup=dig
let sum=0
console.log('number =',dig)
while(dup>0){
    let n=dup%10
    sum+=n
    dup=parseInt(dup/10)
}
console.log('sum of digits of',dig,'is',sum)