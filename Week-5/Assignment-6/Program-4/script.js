//Program-4
console.log('Program-4 ---> Prime or not')
let pr=29
flag=0
console.log('number =',pr)
for(let i=2;i<pr;i++){
    if(pr%i==0) flag=1
}
if(!flag) console.log(pr,'is prime')
else console.log(pr,'is not prime')