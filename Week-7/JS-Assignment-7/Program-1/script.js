let str='aaaabbababababbbbabababaaaa'
let count_a=0,count_b=0
for(let i in str){
    if(str[i]=='a') count_a++;
    else count_b++;
}
console.log('In string',str);
console.log('Count of a is',count_a,'\nCount of b is',count_b);