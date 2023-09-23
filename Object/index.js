//singleton

// {Object.create }=> singleton

// object literals


// Symbols
const mySym =Symbol("Keys1")
// To use symbols in object use [] in key
const JsUser ={
    name:"Hawk",
    "full name":"Sea Hawk",
    age:24,
    location: "nyc",
    email:"acb@klm",
    isLoggedIn:false,
    lastLoginDays:['Mon,Tue'],
    [mySym]:"mykey1"

}

console.log(JsUser.email)
console.log(JsUser["full name"])
console.log(JsUser['email'])
console.log(typeof(JsUser[mySym]))
console.log(JsUser[mySym])

// append value

JsUser.email="Hawk@ABC.com"
console.log(JsUser['email'])

// To freeze object

// Object.freeze(JsUser)

JsUser.name="Thunder"
console.log(JsUser['name'])  // Hawk not Thunder bcz of object freeze
console.log(JsUser)  

// function use in object

JsUser.greeting = function(){
    console.log(`hi ${this.name}`)
}
console.log(JsUser)
console.log(JsUser['greeting'])
console.log(JsUser.greeting())
