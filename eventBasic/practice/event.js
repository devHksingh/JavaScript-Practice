const ul = document.querySelector('#images')
const box = document.querySelector('#box')
const xCoordinate = document.querySelector('#x-coordinate')
const yCoordinate = document.querySelector('#y-coordinate')
const coordinate = document.querySelector('#coordinates')
const trackBox = document.querySelector('#trackBox')
const liMouseEvent = document.querySelector('#maouse-event')

const divBox= document.querySelector('#div-box')

ul.addEventListener('click',function(e){
    console.log(`clicked inside ul`);
},false)

document.querySelector('#owl').addEventListener('click',function(e){
    console.log(`owl clicked!`);
    e.stopPropagation()
},false)

/*
Task1 : Mouse over this box to display the horizontal and vertical coordinates of the mouse pointer

*/

box.addEventListener('mouseover',function(e){
    
    xCoordinate.textContent=`Inside li tag X coordinates: ${e.clientX}`
    yCoordinate.textContent=`${e.clientY}`

    
    

},false)




trackBox.addEventListener('mousemove',function(e){
    console.log("mouseenter");
    console.log(e.clientX);
    console.log(e.clientY);
    xCoordinate.textContent=`Inside div tag X coordinates: ${e.clientX}`
    yCoordinate.textContent=`${e.clientY}`;
    

},false)


/*
Task2 : div container having orange background when click inside any where in a blue circle shown up at that particular coordinate 

*/

divBox.addEventListener('click',function(e){
    console.log(e.clientX,e.clientY);

    const x = e.clientX- divBox.getBoundingClientRect().left;
    const y = e.clientY-  divBox.getBoundingClientRect().top;


    const circle = document.createElement('div')
    circle.className="circle"
    circle.style.left=x+'px'
    circle.style.top=y+'px'

    divBox.appendChild(circle)

    setTimeout(function(){
            circle.remove()
    },1000)

    
},false)


/*
event.clientX: event.clientX is a property that gives us the horizontal (X) coordinate of the mouse pointer when the click event happened.
 It's relative to the entire viewport or browser window. Imagine it as the X-coordinate of the mouse cursor on your computer screen.

divBox.getBoundingClientRect().left: This part of the code retrieves the position of the left edge of the divBox element relative to the viewport.
 getBoundingClientRect() returns an object with properties like left, top, right, and bottom that describe the position and
  dimensions of the element within the viewport.

So, when we subtract divBox.getBoundingClientRect().left from event.clientX, we are essentially performing the following:

We start with the X-coordinate of the mouse click event (event.clientX) relative to the entire viewport.
We subtract the X-coordinate of the divBox's left edge (divBox.getBoundingClientRect().left) relative to the viewport.
The result (x) is the X-coordinate of the mouse click event relative to the divBox.
This calculation allows us to position the blue circle precisely at the point where the mouse was clicked inside the divBox, 
rather than using the absolute X-coordinate of the entire viewport. It's a common technique for handling events within a specific element's context.

*/ 


// Task3 : hide <li> element using Event: target property
/*
The read-only target property of the Event interface is a reference to
the object onto which the event was dispatched. It is different from 
Event.currentTarget when the event handler is called during the bubbling or capturing phase of the event.
*/

ul.addEventListener('click',function(event){
    // event.target.
    // console.log(ul)
    console.log(event.target.tagName);
    if (event.target.tagName === "IMG"){
        console.log(event.target);
        event.target.style.visibility="hidden";
        
        (event.target.parentNode).remove();
    }else if(event.target.tagName ==='A'){
        event.preventDefault()
        console.log('google link clicked!');
        (event.target.parentNode).remove();
    }

},false)


