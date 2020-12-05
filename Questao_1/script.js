var form = document.querySelector('#forms');
var inputNumber = document.querySelector('#number')



form.addEventListener('submit', (event) => {
  const number = inputNumber.value;
  if(number > 0)
    fatorial(number);
    else 
      showScreenResults("entre com o numero maior que 0");

  event.preventDefault();
});

function fatorial(number) {
  let results = 1;

  for (let i = 1; i <= number; i++) {
    results *= i;
  }
  console.log(number);

  showScreenResults(results);
}


function showScreenResults(results) {
  var element = document.querySelector('#results');
  element.innerHTML = " O fatorial e " + results;
}

