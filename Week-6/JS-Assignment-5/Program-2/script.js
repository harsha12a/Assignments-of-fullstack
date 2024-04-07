class product{
    constructor(brand,price,model){
        this.brand=brand;
        this.price=price;
        this.model=model
    }
}

let getDiscountPrice=function(a){
    let res=a*this.price/100
    return this.price-a
}
Object.setPrototypeOf(product.prototype,{getDiscountPrice})

let p1=new product('samsung',10000,'m21')
let p2=new product('vivo',20000,'v21')
let p3=new product('iqoo',22000,'---')
let p4=new product('realme',25000,'---')
let p5=new product('iphone',65000,'gen10')

let p=[p1,p2,p3,p4,p5]
console.log('\n\nactual prices\n\n')

for(let i of p){
    console.log(i.brand,'-',i.price,'(',i.model,')')
}

p1.price=p1.getDiscountPrice(25)
p2.price=p2.getDiscountPrice(10)
p3.price=p3.getDiscountPrice(20)
p4.price=p4.getDiscountPrice(30)
p5.price=p5.getDiscountPrice(15)

console.log('\n\nafter discount\n\n')
for(let i of p){
    console.log(i.brand,'-',i.price,'(',i.model,')')
}
