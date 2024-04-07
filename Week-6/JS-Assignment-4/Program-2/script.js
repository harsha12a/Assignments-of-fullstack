const stu={
    roll:100,
    name:'ravi',
    marks:[67,76,87,98,92],
    address:{
        street:'2nd lane',
        city:'vijayawada',
        state:'andhra'
    },
    average:function(arr){
        let sum=0
        for(let i of arr) sum+=i
        return sum/arr.length
    }
}

let res=stu.average(stu.marks)
console.log('average of',stu,'marks is',res)