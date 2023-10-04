const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  // clock.innerText = date.toLocaleString()
  clock.innerText = date.toLocaleTimeString();
}, 1000);
