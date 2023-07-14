function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationTitle = document.forms["register"]["title"].value;
  let validationDirector = document.forms["register"]["director"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;
  let validationActor = document.forms["register"]["actor"].value;
  let validationNota = document.forms["register"]["nota"].value;

  if (validationCod == "") {
    alert("o codigo deve ser preenchido");
    return false;
  }
  if (validationTitle == "") {
         alert("o Titulo deve ser preenchido");
         return false;
  }
  if (validationDirector == "") {
         alert("o Nome Diretor deve ser preenchido");
        return false;
  }
  if (validationDate == "") {
         alert("A data deve ser preenchido");
         return false;
  }
  if (validationRadio == "") {
         alert("O Genero deve ser preenchido");
         return false;
  }
  if (validationActor == "") {
         alert("O nome Ator deve ser preenchido");
         return false;
  }
    if (validationNota == "") {
         alert("a NotaIMDB deve ser preenchido");
            return false;
    }
alert(A validação ocorreu de forma correta);
  }
  function insert(){
    let cod = document.forms["register"]["cod"].value;
    let title = document.forms["register"]["title"].value;
    let director = document.forms["register"]["director"].value;
    let date = document.forms["register"]["date"].value;
    let radio = document.forms["register"]["radio"].value;
    let actor = document.forms["register"]["actor"].value;
    let nota = document.forms["register"]["nota"].value;

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML =`
    <th scope="row">${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${Date}</td>
    <td>${radio}</td>
    <td>${actor}</td>
    <td>${nota}</td>
    `;
  }

