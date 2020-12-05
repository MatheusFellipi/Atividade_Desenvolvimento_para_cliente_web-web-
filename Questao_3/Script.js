var form = document.querySelector('#forms');

var inputName = document.querySelector('#name');
var inputWeight = document.querySelector('#weight');
var inputHeight = document.querySelector('#height');


form.addEventListener('submit', (event) => {
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const name = inputName.value;

  const results = weight / (height * height);

  imcClassification(results, name)

  event.preventDefault();
});

function imcClassification(results, name) {
  
  if (results <= 18.5) {
    imc = 'voce esta abaixo do peso'
    showScreenResults(results, name, imc)
  } else if (results >= 18.6 && results <= 24.9) {
    imc = 'voce esta peso ideal,parabens!!'
    showScreenResults(results, name, imc)
  } else if (results >= 25.0 && results <= 29.9) {
    imc = 'voce esta levamente acima do peso'
    showScreenResults(results, name, imc)
  }else if (results >= 30.0 && results <= 34.9) {
    imc = 'voce esta obesidade grau 1'
    showScreenResults(results, name, imc)
  }else if (results >= 35,0 && results <= 39.9) {
    imc = 'voce esta obesidade grau 2(severa)'
    showScreenResults(results, name, imc)
  }else if(results >= 40){
    imc = 'voce esta obesidade grau 3(morbida)'
    showScreenResults(results, name, imc)
  }else{
    imc='entre com o peso e altura'
    showScreenResults(results, name, imc)
  }
}



function showScreenResults(results, name, imc) {
  var element = document.querySelector('#results');
  element.innerHTML = results;
  var element = document.querySelector('#user');
  element.innerHTML = name;
  var element = document.querySelector('#imc');
  element.innerHTML = imc;
}

