//#region Fomrs
let form = document.querySelector('#forms');
let inputName = document.querySelector('#name');
let inputNota = document.querySelector('#nota');
//#endregion
//#region H3
let titleNotaH5 = document.querySelector('.porNota')
let titleNomeH5 = document.querySelector('.porNome')
//#region  Divs
let alunosAprovadosDiv = document.querySelector('.alunosAprovados');
let maiorNotaDiv = document.querySelector('.maiorNota');
let listaDeAlunoNotasDiv = document.querySelector('.listaDeAlunoNotas')
let listaDeAlunoNomesDiv = document.querySelector('.listaDeAlunoNomes')
//#endregion

//#region buttoes
let melhorNotasBtn = document.querySelector('.melhorNotas');
let mostraAlunosBtn = document.querySelector('.mostraAlunos');
let ordernaNotasBtn = document.querySelector('.ordernaNotas');
let ordernaNomesBtn = document.querySelector('.ordernaNomes');
//#endregion

let arrayAluno = [{nome: "Ana", nota: "5"},{nome: "Marcel", nota: "7"},{nome: "Jose", nota: "4"},{nome: "Barbara", nota: "5"}];


form.addEventListener('submit', hadleSubmit);
mostraAlunosBtn.addEventListener('click', hadleMostrarAlunosAprovados);
melhorNotasBtn.addEventListener('click', hadleMostrarMaiorNota);  
ordernaNotasBtn.addEventListener('click',hadleSortNota);
ordernaNomesBtn.addEventListener('click',hadleSortNome)


function hadleSubmit(event) {
  let alunos = {};
  let name = inputName.value;
  let nota = inputNota.value;
  alunos = {
    "nome": name,
    "nota": nota
  }
  arrayAluno.push(alunos);
  event.preventDefault();
}
function hadleSortNome(event) {
  arrayAluno.sort(sortNomes('nome'));
  console.log(arrayAluno);
  titleNomeH5.innerHTML = 'Alunos por nomes'

  for (let i = 0; i < arrayAluno.length; i++) {
    const element = arrayAluno[i];
    let newDiv = document.createElement('div')
    let conteudo = document.createTextNode(` Nome: ${element.nome}: Nota: ${element.nota}`)
    newDiv.appendChild(conteudo)
    listaDeAlunoNomesDiv.appendChild(newDiv)
    console.log(element);


  }
  event.preventDefault();
}
function hadleSortNota(event) {
  

  arrayAluno.sort(sortNotas("nota"));
  console.log(arrayAluno);
  titleNotaH5.innerHTML = 'Alunos por Notas'

  for (let i = 0; i < arrayAluno.length; i++) {
    const element = arrayAluno[i];
    let newDiv = document.createElement('div')
    let conteudo = document.createTextNode(` Nome: ${element.nome}: Nota: ${element.nota}`)
    newDiv.appendChild(conteudo)
    listaDeAlunoNotasDiv.appendChild(newDiv)
    console.log(element);
    
  }
  event.preventDefault();
}


function hadleMostrarMaiorNota(event) {
  arrayAluno.sort(sortNotas('nota'));
  let melhorNota = arrayAluno[0];
  maiorNotaDiv.innerHTML = ` Nome: ${melhorNota.nome}: Nota: ${melhorNota.nota}`;
  event.preventDefault();

}



function hadleMostrarAlunosAprovados(event) {

  for (let i = 0; i < arrayAluno.length; i++) {
    const element = arrayAluno[i];
    if (element.nota >= 6) {
      const alunosAprovadosArray = arrayAluno[i];

      let newDivCardAluno = document.createElement('div');
      let conteudoNovo = document.createTextNode(` Nome: ${alunosAprovadosArray.nome}: Nota: ${alunosAprovadosArray.nota}`);
      newDivCardAluno.appendChild(conteudoNovo)
      alunosAprovadosDiv.appendChild(newDivCardAluno)
    }
  }
  event.preventDefault();
}

function sortNotas(array) {
  return function(a, b) {
      if (a[array] < b[array]) {

          return 1;
      } else if (a[array] > b[array]) {
          return -1;
      }
      return 0;
  }
}
function sortNomes(array) {
  return function(a, b) {
      if (a[array] > b[array]) {

          return 1;
      } else if (a[array] < b[array]) {
          return -1;
      }
      return 0;
  }
}
