// Singleton object
const user = new Object()
// const user ={} it is non Singleton object

console.log(user)

user.id="464842"
user.name="sammy"
user.isLoggedIn = false


// console.log(user)

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userName:{
            firstName:"sea",
            lastName:"hawk"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userName['firstName'])

// combine two Object

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}

// method 1
// const obj3 = Object.assign({},obj1,obj2)

//method 2

const obj3 = {...obj1,...obj2}

console.log(obj3)


// database

const userData =[
    {
        id:1,
        email:"hawk@ABC.com"
    },
    {
        id:2,
        email:"hawk@ABC.com"
    },
    {
        id:3,
        email:"hawk@ABC.com"
    },
    {
        id:4,
        email:"hawk@ABC.com"
    },
    {
        id:5,
        email:"hawk@ABC.com"
    }
]

console.log(userData[0].id)


// keys

console.log(Object.keys(user));
console.log(Object.values(user));

// entries => [[key1,value1],[key2,value2],...]

console.log(Object.entries(user));

//check whether object have property/value

console.log(user.hasOwnProperty('isLoggedIn'))