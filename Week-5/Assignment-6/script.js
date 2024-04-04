//Assignment-6.1
//Program-1
console.log('Program-1 ---> Largest of 2 numbers')
let x=3,y=6
console.log('x =',x,'\ny =',y)
if(x>y) console.log('x is big')
else console.log('y is big')


//Program-2
console.log('\n\n\nProgram-2 ---> Largest of 3 numbers')
let a=2,b=6,c=4
console.log('a =',a,'\nb =',b,'\nc =',c)
if(a>b&&a>c) console.log('a is big')
else if(b>c&&b>a) console.log('b is big')
else if(c>a&&c>b) console.log('c is big')


//Program-3
console.log('\n\n\nProgram-3 ---> Factors of a number')
let target=120
console.log('number =',target)
for(let i=1;i<=target;i++){
    if(target%i==0) console.log(i)
}


//Program-4
console.log('\n\n\nProgram-4 ---> Prime or not')
let pr=29
flag=0
console.log('number =',pr)
for(let i=2;i<pr;i++){
    if(pr%i==0) flag=1
}
if(!flag) console.log(pr,'is prime')
else console.log(pr,'is not prime')


//Program-5
console.log('\n\n\nProgram-5 ---> Even factors of a number')
let num=180
console.log('number =',num)
for(let i=1;i<=num;i++){
    if(num%i==0&&i%2==0) console.log(i)
}

//Program-6
console.log('\n\n\nProgram-6 ---> Sum of digtis of a number')
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