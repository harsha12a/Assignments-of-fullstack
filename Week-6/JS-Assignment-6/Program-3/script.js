let arr= [
    {
        name:"ravi",
        marks :{
            maths: 89,
            physics : 70,
            chemistry :88
        }
    },
    {
        name:"bhanu",
        marks :{
            maths: 98,
            physics : 50,
            chemistry :68
        }
    },
    {
        name:"kiran",
        marks :{
            maths: 50,
            physics : 82,
            chemistry :94
        }
    },
]

let res=arr.reduce((acc,ele)=>{
    if(acc.marks.chemistry>ele.marks.chemistry) return acc
    else return ele
})

let res1=arr.reduce((acc,ele)=>{
    if(acc.marks.maths>ele.marks.maths) return acc
    else return ele
})

let res2=arr.reduce((acc,ele)=>{
    if(acc.marks.physics>ele.marks.physics) return acc
    else return ele
})

console.log(res1.name,'scored highest in maths')
console.log(res2.name,'scored highest in physics')
console.log(res.name,'scored highest in chemistry')