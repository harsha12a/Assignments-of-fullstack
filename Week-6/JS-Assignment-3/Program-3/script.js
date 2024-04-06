let arr=[11,23,54,9,27,87]
console.log('The array is:',arr)
let res=arr.filter((a)=>{
    let flg=1
    for(let i=2;i<a;i++){
        if(a%i==0) flg=0
    }
    if(flg==1) return a
})
console.log('The prime numbers are:',res)