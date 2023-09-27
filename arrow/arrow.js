const user = {
    userName:"Sam",
    price: 999,

    welcomeMessage : function(){

        // console.log(`${this.userName} welcome to website`);
        console.log('inner',this);
    }
}

// user.welcomeMessage()
// console.log(this);
// browser -> window object , node -> empty object

// function fun(){
//     console.log(this);
// }
// fun()

const fun = () =>{
    console.log(this);
}
fun()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo = (num1,num2)=> num1+num2
const addTwo = (num1,num2)=> (num1+num2)
const objReturn = ()=> ({userName:"Jai"})

console.log(addTwo(4,4));
console.log(objReturn());
console.log(objReturn().userName);

// Immediately Invoked Function Expressions IIFE
// we use IIFE to directly invoke function and remove issue from global variable
// (function defination)(function execution call)

// Named IIFE
(function test(){
    console.log('DB connected')
})();

// unnamed IIFE
((name)=>{
    console.log(`db connected by arrow func ${name}`);
})('Sam');

// we need add semicoln  ';' at end of IIFE func to terminate the function
