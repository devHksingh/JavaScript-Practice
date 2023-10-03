// console.log('ju')
const buttonEl = document.querySelectorAll('.button');
const bodyEl = document.querySelector('body');
// console.log(buttonEl)
// console.log(bodyEl)

buttonEl.forEach((button) => {
  // console.log(button)
  // let backgroundColor = button.innerText
  // console.log(backgroundColor)
  // button.addEventListener('click',(event)=>{
  //   // bodyEl.style.backgroundColor=`${backgroundColor}`
  //   console.log(event)
  //   console.log(event.target)
  // })
  console.log(button.id);
  button.addEventListener('click', function (e) {
    console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // bodyEl.style.backgroundColor=`${e.target.id}`
    const color = e.target.id;
    switch (color) {
      case 'grey':
        bodyEl.style.backgroundColor = `${color}`;
        break;
      case 'white':
        bodyEl.style.backgroundColor = `${color}`;
        break;
      case 'blue':
        bodyEl.style.backgroundColor = `${color}`;
        break;
      case 'yellow':
        bodyEl.style.backgroundColor = `${color}`;
        break;
    }
  });
});
