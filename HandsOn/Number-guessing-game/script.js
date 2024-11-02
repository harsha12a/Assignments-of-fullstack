var original=Math.floor(Math.random()*101)
var nums=3
var inp=document.getElementById("inp")
var op=document.getElementById("op")
var res=document.getElementById("reset")
res.onclick=function(){
    original=Math.floor(Math.random()*101)
    nums=3
    op.textContent=""
}
document.getElementById("sub").onclick=function(){
    var num=inp.value
    console.log(original)
    if(nums>0){
        if(num==original){
            op.textContent="You guessed correct.The number is "+original+" .Wait..."
            setTimeout(function(){
                op.textContent="Resetting game"
                setTimeout(function(){
                    res.onclick()
                },1000)
            },2000)
        }
        else if(num>original){
            op.textContent="Too high.Remaining chances "+(nums-1)
        }
        else if(num<original){
            op.textContent="Too low.Remaining chances "+(nums-1)
        }
        nums--;
    }
    else{
        op.textContent="Out of chances"
    }
}
