const promiseOne = new Promise((resolve,reject)=>{
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(()=>{
        console.log(`promise`);
        resolve()
    },1000)
    
})

promiseOne.then(()=>{
    console.log(`promise complete`);
})

// direct
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`aysnc task2`);
        resolve()
    }, 1000);
}).then(()=>{
    console.log(`task 2 complete`);
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = {userName:"abs",emailId:"abs.com"}
        resolve(data)
    }, 1000);
})
promiseThree.then((userData)=>{
    console.log(userData);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {

        const networkError =false
        if (!networkError) {
            const data = {userName:"AGC",emailId:"abs.com"}
            resolve(data)
        }else{
            reject(`Error : network problem`)
        }
    }, 1000);
})

promiseFour.then((data)=>{
    console.log(data);
    return data.userName
}).then((name)=>{
    console.log(name);
}).catch((err)=>{
    console.log(err);
})
.finally(()=>{console.log(`promise either resolve or rejected`);})

// aysnc await

const promiseFive =  new Promise((resolve, reject) => {
    setTimeout(() => {

        const networkError =false
        if (!networkError) {
            const data = {userName:"JavaScript",emailId:"js.com"}
            resolve(data)
        }else{
            reject(`Error : network problem`)
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response.userName)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//aysnc await fetch()

// async function githubUser(){
//     try {
//     const requestUrl = "https://api.github.com/users/hiteshchoudhary"
//     const response = await fetch(requestUrl)
//     // console.log(response);
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// githubUser()

//  using ftech()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    const data = response.json()
    // console.log(data.name);
    return   data
})
.then((userName)=>{
    console.log(userName.name);
})
.catch((error)=>{console.log(error);})

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))