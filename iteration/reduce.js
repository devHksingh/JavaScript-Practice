//reduce JS

const myNums =[1,2,3]

// const myTotal = myNums.reduce(function(acc,curValue){
//     console.log(`acc : ${acc} , currentValue: ${curValue}`);
//     return acc + curValue
// },0)

const myTotal = myNums.reduce((acc,currentValue)=>(acc+currentValue),0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Shoe",
        price:20
    },
    {
        itemName : "pant",
        price:20
    },
    {
        itemName : "shrit",
        price:20
    }
]

// const CartTotal = shoppingCart.filter((item)=> (item.price >=1))
// const cart = shoppingCart.filter((i)=>i.itemName==='shrit')

const CartTotal = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
                  
                  
                  
// .reduce((acc,currentValue)=>(acc+currentValue),0)
console.log(CartTotal);