const student={
    objtname:'student',
    roll:100,
    name:'ravi',
    id:'12a',
    cgpa:8.98
}

const employee={
    objname:'employee',
    empid:101,
    name:'somu',
    sal:12000,
    position:'manager'
}

const bus={
    objname:'bus',
    wheels:4,
    color:'yellow',
    company:'ashok leyland',
    milage:'60km/l'
}

const mobile={
    objname:'mobile',
    pintype:'c pin',
    company:'samsung',
    cost:8999.99,
    color:'black'
}

let a=[student,employee,bus,mobile]
for(let i of a)
    console.log(i)