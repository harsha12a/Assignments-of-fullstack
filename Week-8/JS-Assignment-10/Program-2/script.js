let inp=document.querySelector('#inp')
let btn=document.querySelector('button')

btn.addEventListener('click',function(event){
    event.preventDefault()
    document.querySelector('.main').innerHTML=''
    let val=inp.value
    for(let i=1;i<=val;i++){
        if(val%i==0){
            let h1=document.createElement('h1')
            document.querySelector('.main').appendChild(h1)
            h1.textContent=i+' is a factor of '+val
            h1.style.textAlign='center'
        }
    }
})