let sendRegister = document.getElementById('sendRegister');
//console.log("agregado");
firebase.initializeApp({
  apiKey: 'AIzaSyCrpoz-Y3Cg_dpMHqOFqthXgohhNqbC6PM',
  authDomain: 'register-visits.firebaseapp.com',
  projectId: 'register-visits'
});

/// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
//guardar datos
sendRegister.addEventListener('click', e => {
  //crear variable para cada elemento
  //crear variables para cada elemento
  //let motivo= document.getElementById("motivo").value;
  let foto = document.getElementById('fotoVisitante').value;
  let nombre = document.getElementById('nombreVisitante').value;
  let procedencia = document.getElementById('procedenciaVisitante').value;
  let persona = document.getElementById('selectorPersona').value;
  //agregar documentos

  //agregar documento y id
  db.collection('registros')
    .add({
      // coment: motivo,
      picture: foto,
      nombre: nombre,
      origin: procedencia,
      person: persona
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);

      //document.getElementById("motivo").value = " ";
      document.getElementById('fotoVisitante').value = ' ';
      document.getElementById('nombreVisitante').value = ' ';
      document.getElementById('procedenciaVisitante').value = ' ';
      document.getElementById('selectorPersona').value = ' ';
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
});

//crear variable de tabla
let seccionRegistros = document.getElementById('seccionRegistros');
//leer documentos
db.collection('registros').onSnapshot(querySnapshot => {
  //limpiar la tabla
  seccionRegistros.innerHTML = ' ';
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data().coment}`);
    seccionRegistros.innerHTML += `
                           <div>
                           <h6 class="picture">${doc.data().picture}</h6>
                           <h6 class="nombre">${doc.data().nombre}</h6>
                           <h6 class="procedencia">${doc.data().origin}</h6>
                           <h6 class="persona">${doc.data().person}</h6>
                           <button type="button" class="btn btn-outline-dark" onclick = "eliminar('${
                             doc.id
                           }')">Eliminar Registro</button>
                            </div>`;
  });
});
//borrar datos
function eliminar(id) {
  db.collection('registros')
    .doc(id)
    .delete()
    .then(function() {
      console.log('Document successfully deleted!');
    })
    .catch(function(error) {
      console.error('Error removing document: ', error);
    });
}

sendRegister.addEventListener('click', e => {
  location.href = '../views/camera.html';
});
