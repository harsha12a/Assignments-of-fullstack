let grtGoodMarks=true;

let obj=new Promise((full,rej)=>{
    setTimeout(() => {
        if(grtGoodMarks===true) full("Got good marks in sem")
        else rej("Passed in the sem")
    }, 5000);
})
obj.then((err)=>console.log(err)).catch((err)=>console.log(err))