// Edit and remove elements in DOM

function addLanguage(lang){
    const liEl = document.createElement('li')
    liEl.innerHTML= `${lang}`
    // const addLang = document.createTextNode(`${lang}`)
    document.querySelector('.language').appendChild(liEl)
}

// in this approch we do not traverse whole tree to append li element
function addOptiLanguage(language){
    const liEl = document.createElement('li')
    liEl.appendChild(document.createTextNode(language))
    document.querySelector('.language').appendChild(liEl)
}





addLanguage('python')
addLanguage('java')

addOptiLanguage('Rust')


// Edit value

const secondLang = document.querySelector('li:nth-child(2)');
// secondLang.innerHTML="Mojo"
const newLiEl = document.createElement('li')
newLiEl.textContent = "Mojo"
secondLang.replaceWith(newLiEl)