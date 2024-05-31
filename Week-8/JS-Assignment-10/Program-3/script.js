let add=document.querySelector('.add')
let sub=document.querySelector('.sub')
let mul=document.querySelector('.mul')
let div=document.querySelector('.div')
let res=document.querySelector('.res')
let da1=document.querySelector('#da1')
let da2=document.querySelector('#da2')

add.addEventListener('click',function(event){
    event.preventDefault()
    res.textContent='The sum is '+(Number(da1.value)+Number(da2.value))
    res.style.textAlign="center"
})
sub.addEventListener('click',function(event){
    event.preventDefault()
    res.textContent='The difference is '+(Number(da1.value)-Number(da2.value))
    res.style.textAlign="center"
})
mul.addEventListener('click',function(event){
    event.preventDefault()
    res.textContent='The product is '+(Number(da1.value)*Number(da2.value))
    res.style.textAlign="center"
})
div.addEventListener('click',function(event){
    event.preventDefault()
    res.textContent='The quotient is '+(Number(da1.value)/Number(da2.value))
    res.style.textAlign="center"
})