async function fun(){
    let obj=fetch('https://jsonplaceholder.typicode.com/todos')
    let res=await obj
    let data=await res.json()
    console.log(data)
    console.table(data)
}
fun()