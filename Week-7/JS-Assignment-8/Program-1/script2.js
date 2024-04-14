import { employees } from "./script1.js";
let res1=employees.filter((a)=>(a.address.city==='hyderabad')).map((a)=>(a.name))
console.log('The people living in "hyderabad" are ',res1);



let res2=employees.filter((a)=>(a.age>=40&&a.age<=50)).map(a=>a.name)
console.log('The people within age 40 to 50 are ',res2);



let res3=employees.filter((a)=>(a.address.city!='hyderabad')).map(a=>a.name)
console.log('The people not from hyderabad are ',res3);



let res4=employees.filter((a)=>a.skills.includes('reactjs')).map(a=>a.name)
console.log('The people with reactjs as skill are ',res4);