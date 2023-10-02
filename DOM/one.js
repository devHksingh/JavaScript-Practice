const parentEl = document.querySelector('.parent')
// console.log(parentEl);
// const dayEl = document.querySelectorAll('.day')
// console.log(dayEl);
// console.log(parentEl.children);
// console.log(parentEl.childElementCount);
// console.log(parentEl.children[1]);
// console.log(parentEl.children[1].innerHTML);

for (let i = 0; i < parentEl.children.length; i++) {
    //  console.log(parentEl.children[i].innerHTML);
     if (i%2 ===0) {
        // parentEl.children[i].style.backgroundColor ="orange";
        // parentEl.children[i].style.color ="white";
        // parentEl.children[i].style.padding ="1rem";

     }

    
}


// console.log(parentEl.firstElementChild);
// console.log(parentEl.lastElementChild);

// child to parent

const dayOne = document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log(parentEl.childNodes);
