let count_words=function(str){
    let arr=str.split(' ')
    return arr.length
}
let str='how are you all'
console.log('The sentence is "',str,'"\nThe no of words is',count_words(str));