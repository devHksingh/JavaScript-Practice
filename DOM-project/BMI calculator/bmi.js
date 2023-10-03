const form = document.querySelector('form');
// THIS usecase will give us EMPTY value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); //to hold form from submitting

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.textContent = 'Please give a valid height ';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.textContent = 'Please give vaild weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi <= 18.6) {
      const msg = 'Under Weight';
      results.innerHTML = `<span>${msg} : ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      const msg = 'Under Weight';
      results.innerHTML = `<span>${msg} : ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Overweight : ${bmi} </span>`;
    }
  }
});
