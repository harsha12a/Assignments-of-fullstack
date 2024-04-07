const product={
    num:4321,
    name:'desktop',
    model:'win 11',
    price:'70000',
    discount:function(dis){
        let res=this.price*dis/100;
        return this.price-res
    }
}

let res=product.discount(15)
console.log('the final price of',product,'after 10% discount is',res)