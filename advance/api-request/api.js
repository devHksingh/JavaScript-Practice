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
            console.log(this.responseText)
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
            
            userData.set("githubId",data.html_url)
            userData.set("twitter_username",data.twitter_username)

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
    if (userData.size === 6) {
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

        const userBio = document.createElement('blockquote')
        userBio.classList.add("user-bio")
        userBio.textContent= userData.get("bio")
        userDetailDiv.appendChild(userBio)
        
        const socialLink = document.createElement('div')
        socialLink.classList.add('social-link')
        userDetailDiv.appendChild(socialLink)

        // button
        //youtube
        const yotubeBtn = document.createElement("button")
        yotubeBtn.classList.add("btn")
        yotubeBtn.innerHTML = `<a href =${userData.get("blogId")}>
        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGwtb3BhY2l0eT0iMC43NDExOCIgZmlsbD0iI2RhMGUwZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjEyLDUuMTIpIj48cGF0aCBkPSJNNDQuODk4NDQsMTQuNWMtMC4zOTg0NCwtMi4xOTkyMiAtMi4yOTY4NywtMy44MDA3OCAtNC41LC00LjMwMDc4Yy0zLjI5Njg3LC0wLjY5OTIyIC05LjM5ODQ0LC0xLjE5OTIyIC0xNiwtMS4xOTkyMmMtNi41OTc2NiwwIC0xMi43OTY4NywwLjUgLTE2LjA5NzY2LDEuMTk5MjJjLTIuMTk5MjIsMC41IC00LjEwMTU2LDIgLTQuNSw0LjMwMDc4Yy0wLjQwMjM0LDIuNSAtMC44MDA3OCw2IC0wLjgwMDc4LDEwLjVjMCw0LjUgMC4zOTg0NCw4IDAuODk4NDQsMTAuNWMwLjQwMjM0LDIuMTk5MjIgMi4zMDA3OCwzLjgwMDc4IDQuNSw0LjMwMDc4YzMuNSwwLjY5OTIyIDkuNSwxLjE5OTIyIDE2LjEwMTU2LDEuMTk5MjJjNi42MDE1NiwwIDEyLjYwMTU2LC0wLjUgMTYuMTAxNTYsLTEuMTk5MjJjMi4xOTkyMiwtMC41IDQuMDk3NjYsLTIgNC41LC00LjMwMDc4YzAuMzk4NDQsLTIuNSAwLjg5ODQ0LC02LjEwMTU2IDEsLTEwLjVjLTAuMjAzMTIsLTQuNSAtMC43MDMxMiwtOCAtMS4yMDMxMiwtMTAuNXpNMTksMzJ2LTE0bDEyLjE5OTIyLDd6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>
        </a>`
        console.log(userData.get("blogId"));
        socialLink.appendChild(yotubeBtn)

        //github
        const githubBtn = document.createElement('a')
        githubBtn.href=`${userData.get("githubId")}`
        githubBtn.classList.add("btn")
        githubBtn.innerHTML = ` <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGwtb3BhY2l0eT0iMC42NTA5OCIgZmlsbD0iI2RhMGUwZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSgzLjU1NTU2LDMuNTU1NTYpIj48cGF0aCBkPSJNMzYsMTJjMTMuMjU1LDAgMjQsMTAuNzQ1IDI0LDI0YzAsMTAuNjU2IC02Ljk0OCwxOS42ODUgLTE2LjU1OSwyMi44MThjMC4wMDMsLTAuMDA5IDAuMDA3LC0wLjAyMiAwLjAwNywtMC4wMjJjMCwwIC0xLjYyLC0wLjc1OSAtMS41ODYsLTIuMTE0YzAuMDM4LC0xLjQ5MSAwLC00Ljk3MSAwLC02LjI0OGMwLC0yLjE5MyAtMS4zODgsLTMuNzQ3IC0xLjM4OCwtMy43NDdjMCwwIDEwLjg4NCwwLjEyMiAxMC44ODQsLTExLjQ5MWMwLC00LjQ4MSAtMi4zNDIsLTYuODEyIC0yLjM0MiwtNi44MTJjMCwwIDEuMjMsLTQuNzg0IC0wLjQyNiwtNi44MTJjLTEuODU2LC0wLjIgLTUuMTgsMS43NzQgLTYuNiwyLjY5N2MwLDAgLTIuMjUsLTAuOTIyIC01Ljk5MSwtMC45MjJjLTMuNzQyLDAgLTUuOTkxLDAuOTIyIC01Ljk5MSwwLjkyMmMtMS40MTksLTAuOTIyIC00Ljc0NCwtMi44OTcgLTYuNiwtMi42OTdjLTEuNjU2LDIuMDI5IC0wLjQyNiw2LjgxMiAtMC40MjYsNi44MTJjMCwwIC0yLjM0MiwyLjMzMiAtMi4zNDIsNi44MTJjMCwxMS42MTMgMTAuODg0LDExLjQ5MSAxMC44ODQsMTEuNDkxYzAsMCAtMS4wOTcsMS4yMzkgLTEuMzM2LDMuMDYxYy0wLjc2LDAuMjU4IC0xLjg3NywwLjU3NiAtMi43OCwwLjU3NmMtMi4zNjIsMCAtNC4xNTksLTIuMjk2IC00LjgxNywtMy4zNThjLTAuNjQ5LC0xLjA0OCAtMS45OCwtMS45MjcgLTMuMjIxLC0xLjkyN2MtMC44MTcsMCAtMS4yMTYsMC40MDkgLTEuMjE2LDAuODc2YzAsMC40NjcgMS4xNDYsMC43OTMgMS45MDIsMS42NTljMS41OTQsMS44MjYgMS41NjUsNS45MzMgNy4yNDUsNS45MzNjMC42MTcsMCAxLjg3NiwtMC4xNTIgMi44MjMsLTAuMjc5Yy0wLjAwNiwxLjI5MyAtMC4wMDcsMi42NTcgMC4wMTMsMy40NTRjMC4wMzQsMS4zNTUgLTEuNTg2LDIuMTE0IC0xLjU4NiwyLjExNGMwLDAgMC4wMDQsMC4wMTMgMC4wMDcsMC4wMjJjLTkuNjEsLTMuMTMzIC0xNi41NTgsLTEyLjE2MiAtMTYuNTU4LC0yMi44MThjMCwtMTMuMjU1IDEwLjc0NSwtMjQgMjQsLTI0eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="/>`
        socialLink.appendChild(githubBtn)

        // "twitter_username": "hiteshdotcom",
        //https://twitter.com/hiteshdotcom
        const twitterBtn = document.createElement('a')
        twitterBtn.href = `https://twitter.com/${userData.get("twitter_username")}`
        twitterBtn.innerHTML= `<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGwtb3BhY2l0eT0iMC42NTA5OCIgZmlsbD0iI2RhMGUwZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg1LjEyLDUuMTIpIj48cGF0aCBkPSJNMTEsNGMtMy44NjYsMCAtNywzLjEzNCAtNyw3djI4YzAsMy44NjYgMy4xMzQsNyA3LDdoMjhjMy44NjYsMCA3LC0zLjEzNCA3LC03di0yOGMwLC0zLjg2NiAtMy4xMzQsLTcgLTcsLTd6TTEzLjA4NTk0LDEzaDcuOTM3NWw1LjYzNjcyLDguMDA5NzdsNi44Mzk4NCwtOC4wMDk3N2gyLjVsLTguMjEwOTQsOS42MTMyOGwxMC4xMjUsMTQuMzg2NzJoLTcuOTM1NTVsLTYuNTQxMDIsLTkuMjkyOTdsLTcuOTM3NSw5LjI5Mjk3aC0yLjVsOS4zMDg1OSwtMTAuODk2NDh6TTE2LjkxNDA2LDE1bDE0LjEwNzQyLDIwaDMuMDY0NDVsLTE0LjEwNzQyLC0yMHoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="/>`
        socialLink.appendChild(twitterBtn)


    } else if(userData.size<6) {
        setTimeout(displayUserData,1000)
        console.log('hi');
    }
}








