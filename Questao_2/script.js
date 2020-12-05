var form = document.querySelector('#forms');
var inputdate = document.querySelector('#date')



form.addEventListener('submit', (event) => {
  const date = inputdate.value;
  separator(date)
  event.preventDefault();
});

function separator(date) {
  var dateToSplit = [];
  dateToSplit = date.split("-");
  var day = dateToSplit[2];
  var month = dateToSplit[1];
  var year = dateToSplit[0];

  isdate(day, month, year)
}

function isdate(day, month, year) {
  var strDate = ''
  if (month == '01') {
    strDate = day + ' de janeiro de ' + year
    showScreenResults(strDate)
  }
  else if (month == '02') {
    strDate = day + ' de Fevereiro de ' + year
    showScreenResults(strDate)
  } else if (month == '03') {
    strDate = day + ' de Março  de ' + year
    showScreenResults(strDate)
  } else if (month == '04') {
    strDate = day + ' de Abril de ' + year
    showScreenResults(strDate)
  } else if (month == '05') {
    strDate = day + ' de Maio de ' + year
    showScreenResults(strDate)
  } else if (month == '06') {
    strDate = day + ' de Junho de ' + year
    showScreenResults(strDate)
  } else if (month == '07') {
    strDate = day + ' de julho de ' + year
    showScreenResults(strDate)
  } else if (month == '08') {
    strDate = day + ' de Agosto de ' + year
    showScreenResults(strDate)
  } else if (month == '09') {
    strDate = day + ' de Setembro de ' + year
    showScreenResults(strDate)
  } else if (month == '11') {
    strDate = day + ' de  Outobro de ' + year
    showScreenResults(strDate)
  } else if (month == '10') {
    strDate = day + ' de Novembro de ' + year
    showScreenResults(strDate)
  } else if (month == '12') {
    strDate = day + ' de Dezembro de ' + year
    showScreenResults(strDate)
  }

}
function showScreenResults(results) {
  var element = document.querySelector('#results');
  element.innerHTML = results;
}

