
const bodyEl = document.querySelector('body')


const mainDiv = document.createElement('div')
mainDiv.classList.add("card")
bodyEl.appendChild(mainDiv)
// console.log(mainDiv);

const pEl = document.createElement('p')
pEl.innerHTML = "Lorem "
pEl.classList.add("border")
mainDiv.appendChild(pEl)





const requestUrl = "https://api.github.com/users/hiteshchoudhary"
    const xhr = new XMLHttpRequest();
    let userName 
    let bio
    let blogId
    let userPic
    let githubId

    xhr.open('GET',requestUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState)
        if (xhr.readyState === 4) {
            console.log(this.responseText)
            let data = this.response
            console.log(typeof data);
            data = JSON.parse(this.responseText)
            console.log(data.followers);
            userName = data.name
            bio = data.bio
            blogId = data.blogId
            userPic = data.avatar_url
            githubId = data.html_url

            

        }
    }
    xhr.send()
