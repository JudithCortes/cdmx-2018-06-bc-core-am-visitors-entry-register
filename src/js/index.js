//Agregando configuracion de firebase en js actual
window.registerVisits.firebase();

//Cerrar sesión
btnLogout.addEventListener('click', e => {
  window.registerVisits.signOut();
});

//nuevo comentario
const regitroVisitante = document.getElementById("seccionRegistrados");
//boton publicar
const btnEjecuta = document.getElementsByTagName("btnEjecuta")[0];
//seccion donde se van acumulando los comentarios
const seccionRegistrados = document.getElementById("seccionRegistrados");
//crear nuevo comentario
const createNewRegister = (comentString) => {
//crear nuevo elemento
const listRegister = document.createElement("div");
  let label = document.createElement("label");
  //crea
  r boton para eliminar comentario
  let deleteButton = document.createElement("Delete");
  //declarar que el boton editar tenga la leyenda "Delete"
  deleteButton.innerText = "Delete";
  //establecer que tendra  class="delete"
  deleteButton.className = "delete";
  //agregar al elemento div, el texto ingresado en la textarea
  label.innerText = registerString;
 //se agrega a cada nuevo elemento div (nuevo comentario,boton de editar, y eliminar)
  listRegister.appendChild(label);
  listRegister.appendChild(deleteButton);
  //esta funcion retorna todos los comentarios hechos en el muro
  return listRegister;
}
//funcion agregar nuevo comentario
let mostrar = function() {
  //se crea un nuevo div con cada comentario ingresado en myTextarea
  let listRegister = createNewRegister(registroVisitante.value);
  //agregar el div al muro
  seccionRegistrados.appendChild(listRegister);
// se adjunta evento a elemento listcoments
guardarCambios(listRegister);
  .value = "";

firebase.database().ref("chat").push ({
   nombre: nombre,
   seccionRegistrados: seccionRegistrados,
   motivo: motivo
});


}

firebase.database().ref("chat")
.on ("value", function(snapshot){

snapshot.forEach(function(e){




});
});
//Editar comentario
let editarComentario = function() {
  //se añade el elemento de la lista de taresas a taresa completadas
  let listComents = this.parentNode;
  let editInput = listComents.querySelector("input[type=text]");
  let label = listComents.querySelector("label");
  let containsClass = listComents.classList.contains("editMode");
  let editButton = listComents.getElementsByTagName("button")[0];
  //si la clase del padre es .editMode
  if (containsClass) {
    // Cambiar de .editMode
    // el texto de la etiqueta se convierte en el valor de la entrada
    label.innerText = editInput.value;
    editButton.innerText = "Edit";
    //else
  } else {
    // Cambiar a .editMode
    // el valor de entrada se convierte en el texto de la etiqueta
    editInput.value = label.innerText;
    editButton.innerText = "save";
  }

// Alternar .editMode en el padre
  listComents.classList.toggle("editMode");
}
//Eliminar un comentario
let eliminaComentario = function() {
  let listComents = this.parentNode;
  let ul = listComents.parentNode;
  //eliminar el elemento del div padre
  ul.removeChild(listComents);
}

let guardarCambios = function(e) {

  let editButton = e.querySelector("button.edit");
  let deleteButton = e.querySelector("button.delete");
  //save editarComentario to edit button
  editButton.onclick = editarComentario;
  //save eliminaComentario to delete button
  deleteButton.onclick = eliminaComentario;
  //save checkBoxEventHandler to checkbox
  //checkBox.onchange = checkboxEventHandler;
}
buttonPublicar.addEventListener("click", publicar);