// How to create a new element in DOM

const divEl = document.createElement('div')

console.log(divEl)

// add className
divEl.className="main"
//add id
divEl.id= Math.round(Math.random()*10+1)
// set attribute
divEl.setAttribute("title","test")
// adding style
divEl.style.padding="8rem"
divEl.style.backgroundColor="orange"
divEl.style.height="100%"
divEl.style.width="100%"
// divEl.innerText="HELLO WORLD"
const addText = document.createTextNode("Hello world!")

divEl.appendChild(addText)


// attach to page

document.body.appendChild(divEl)
