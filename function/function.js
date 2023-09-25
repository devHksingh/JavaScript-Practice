function loginUserMessage(userName ="Sam"){
    if(!userName){
        return `Please enter the userName`
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("Thunder"))
console.log(loginUserMessage())

// rest operator

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(400,200,600))

function newCart(val1,val2,...num1){
    return num1
}

console.log(newCart(800,222,426,8200,20022,46200,840))

const user= {
    name:"Sam",
    price:999
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user)

const myNewArray =[200,400,800,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,222,600,888]));