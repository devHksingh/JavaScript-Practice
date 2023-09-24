function loginUserMessage(userName ="Sam"){
    if(!userName){
        return `Please enter the userName`
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("Thunder"))
console.log(loginUserMessage())
