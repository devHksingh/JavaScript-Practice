var c=400
if (true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
console.log(c)

function one(){
    const userName = "Sam"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website)

    two()
    // console.log(website)
}

one()

if (true) {
    const userName = "Rock"
    if (true) {
        const website = "Yahoo"
        console.log(`${userName} ${website}`);
    }

}

console.log(addone(5))

function addone(num){
    return num += 1
}


//Expression
const addTwo = function(num){
    return num += 2
}

console.log(addTwo(2));