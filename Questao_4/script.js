var form = document.querySelector('#forms');
var inputNumber = document.querySelector('#number');


form.addEventListener('submit', (event) => {
  const number = inputNumber.value;
    Sacar(number)
  event.preventDefault();
});


function Sacar(results) {
  var cont = 0;

  var totalUm = 0;
  var totalCinco = 0;
  var totalDez = 0;
  var totalCinquenta = 0;


  while (cont < results) { //se for menor continue
    if (results >= 1 && results < 6) {
      /*retona do nota 1*/

      totalUm += 1;
      cont += 1;
 
    }
    if (results >= 5 && results < 10) {
      /*retona do nota 5*/
      totalCinco += 1;
      cont += 5;
      
    }
    if (results >= 10 && results < 50) {
      /* retona do nota 10 */
      totalDez += 1;
      cont += 10;
      

    }
    if (results >= 50) {
      /*retona do nota 100*/
      totalCinquenta += 1;
      cont += 50;
      

    }

  }
  showScreenResults(totalUm, totalCinco, totalDez,totalCinquenta)

}


function showScreenResults(results1, results5, results10, results50) {

  if (results1 > 0) {
    var element = document.querySelector('#results1');
    element.innerHTML = results1;
  }
  if (results5 > 0) {
    var element = document.querySelector('#results5');
    element.innerHTML = results5;
  }
  if (results10 > 0) {
    var element = document.querySelector('#results10');
    element.innerHTML = results10;
  }
  if (results50 > 0) {
    var element = document.querySelector('#results50');
    element.innerHTML = results50;
  }

}

