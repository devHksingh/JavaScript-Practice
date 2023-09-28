// compresion operator

// <,>,<=,>=,==,!=,===,!==

const balance = 1000;
if (balance>500) console.log('test') //Implicit scope

if (balance < 500) {
    console.log("Less than 500");
}else if(balance > 750){
    console.log("Greater than 750");
}
// switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 6;
switch (month) {
    case 1:
        console.log('Jan');
        break;
    case 2:
        console.log('Feb');
        break;
    case 3:
        console.log('Mar');
        break;
    case 4:
        console.log('April');
        break;

    default:
        console.log('Default case');
        break;
}

// truthy value
// true,"0",'false'," ">space,[],{},function()
// false value
// false,0,-0,BigInt 0n, "",null,undefine ,NaN


const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log('Empty object');
}

// Nullish Coalescing Operator(??): null undefine

let val1;
val1 = 5??10

console.log(val1)

val1 = null ?? 10
console.log(val1)

val1 =undefined??15
console.log(val1)

val1 = null ?? 10?? 20
console.log(val1)

// Terniary Operator

// condition ? true : false

const price =100
price >= 80 ? console.log('MORE THEN 80'):console.log('Less than 80');;