// let userName 
// let bio
// let userPic
// let blogId
// let githubId
let apiResponse

// let userData ={
//     userName:"",
//     bio:"",
//     userPic:"",
//     blogId:"",
//     githubId:"",
    
// }
// console.log(JSON.stringify(userData))
// console.log((Object.values(userData)) )

// let test= Object.values(userData).forEach((value)=>{
//     console.log(value ==="")
//     if (value ==="") {
//         return false
//     }
// })
// console.log(test)
const userData = new Map()
console.log(userData.size);
// const requestUrl = "https://api.github.com/users/hiteshchoudhary"
//     const xhr = new XMLHttpRequest();
//     let userName 
//     let bio
//     let blogId
//     let userPic
//     let githubId

// xhr.open('GET',requestUrl)
// xhr.onreadystatechange = function(){
//         console.log(xhr.readyState)
//         if (xhr.readyState === 4) {
//             console.log(this.responseText)
//             let data = this.response
//             console.log(typeof data);
//             data = JSON.parse(this.responseText)
//             console.log(data.followers);
//             userName = data.name
//             bio = data.bio
//             blogId = data.blogId
//             userPic = data.avatar_url
//             console.log(typeof userPic);
//             githubId = data.html_url

            

//         }
// }
// xhr.send()


    const requestUrl = "https://api.github.com/users/hiteshchoudhary"
    const xhr = new XMLHttpRequest();
    // let userName 
    // let bio
    // let blogId
    // let userPic
    // let githubId

    xhr.open('GET',requestUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState)
        if (xhr.readyState === 4) {
            // console.log(this.responseText)
            let data = this.response
            console.log(typeof data);
            data = JSON.parse(this.responseText)
            console.log(data.followers);
            // iname = data.name
            userData.set("userName",data.name)
            // bio = data.bio
            userData.set("bio",data.bio)
            // blogId = data.blogId
            userData.set("blogId",data.blog)
            // userPic = data.avatar_url
            userData.set("userPic",data.avatar_url)
            // console.log(typeof userPic);
            githubId = data.html_url
            userData.set("githubId",data.html_url)
            displayUserData();
            

        }
        
    }
    xhr.send()

setTimeout(()=>{
    console.log("waiting");
    console.log(userData)
    console.log(userData.size)
    
},1000)




// if (!userPic) {
//     apiResponse= setInterval(apiCall(),1000)
//    console.log('hi');
//    clearInterval(apiResponse)
// }else{
//     const bodyEl = document.querySelector('body')
//     const mainDiv = document.createElement('div')
//     mainDiv.classList.add("card")
//     bodyEl.appendChild(mainDiv)
//     // console.log(mainDiv);

//     const imgDiv = document.createElement('div')

//     imgDiv.classList.add("img-container")
//     mainDiv.appendChild(imgDiv)

//     const displayImg = document.createElement('img')
//     displayImg.src = userPic
//     imgDiv.classList.add('border')
//     imgDiv.appendChild(displayImg)

// }

function displayUserData() {
    if (userData.size === 5) {
        // setTimeout(displayUserData,1)
        // console.log('hi');
        console.log('test');
        const bodyEl = document.querySelector('body')
        const mainDiv = document.createElement('div')
        mainDiv.classList.add("card")
        bodyEl.appendChild(mainDiv)
        // console.log(mainDiv);

        const imgDiv = document.createElement('div')

        imgDiv.classList.add("img-container")
        mainDiv.appendChild(imgDiv)
            // user Image
        const displayImg = document.createElement('img')
        displayImg.src = userData.get("userPic")
        // imgDiv.classList.add('border')
        displayImg.classList.add('userImg')
        imgDiv.appendChild(displayImg)
        // user detail

        const userDetailDiv = document.createElement('div')
        userDetailDiv.classList.add("user-detail")
        mainDiv.appendChild(userDetailDiv)

        //user name

        const userNameEl = document.createElement('h1')
        userNameEl.classList.add("user-name")
        userNameEl.textContent = userData.get("userName")
        userDetailDiv.appendChild(userNameEl)




    } else if(!userPic) {
        setTimeout(displayUserData,1000)
        console.log('hi');
    }
}








