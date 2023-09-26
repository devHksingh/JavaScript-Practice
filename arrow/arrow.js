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