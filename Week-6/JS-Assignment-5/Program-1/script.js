class employee{
    constructor(name,age,sal){
        this.name=name
        this.age=age
        this.sal=sal
    }
}

function getSal(a){
    return a+5000
}
Object.setPrototypeOf(employee.prototype,{getSal})

let emp1=new employee('ravi',25,8000)
let emp2=new employee('seenu',21,10000)
let emp3=new employee('raju',20,15000)
let emp4=new employee('ramesh',30,80000)
let emp5=new employee('somu',28,60000)

console.log('salaries of employees before changing\n\n\n')
let emp=[emp1,emp2,emp3,emp4,emp5]

for(let i of emp) 
    console.log(i)

for(let i of emp) 
    i.sal=employee.prototype.getSal(i.sal)

console.log('\n\n\nsalaries of employees after changing\n\n\n')

for(let i of emp) 
    console.log(i)